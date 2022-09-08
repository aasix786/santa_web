<?php

namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use App\Models\customerPayment;
use Illuminate\Http\Request;
use Srmklive\PayPal\Services\ExpressCheckout;
use Illuminate\Support\Facades\Redirect;

class PayPalController extends Controller
{
    public function payment(Request $request)
    {
        $data = [];
        $data['items']=
            [
                [
                    'name' => 'Christmas Celebration ',
                    'price' => 5,
                    'desc'  => 'Easy create custom picture with santa',
                    'qty' => 1
                ]
            ];
        $data['invoice_id'] = 1;
        $data['invoice_description'] = "Order #{$data['invoice_id']} Invoice";
        $data['return_url'] = route('payment.success');
        $data['cancel_url'] = route('payment.cancel');
        $data['total'] = 5;
        $provider = new ExpressCheckout;
        $response = $provider->setExpressCheckout($data);
        $response = $provider->setExpressCheckout($data,true);
        if($response)
        {
            $customer_payment = customerPayment::create([
                'customer_id'=>$request['customer_id'],
            'payment_status'=>1,
            ]);

            return response()->json(['success'=>true,'paypal_link'=>$response['paypal_link'],'customer_id'=>$request['customer_id']]);

        }
        // return redirect($response['paypal_link']);
    }
    public function cancel()

    {
        dd('Your payment is canceled. You can create cancel page here.');
    }

    public function success(Request $request)
    {

        $provider = new ExpressCheckout;
        $response = $provider->getExpressCheckoutDetails($request->token);
        if (in_array(strtoupper($response['ACK']), ['SUCCESS', 'SUCCESSWITHWARNING'])) {
            dd('Your payment was successfully. You can create success page here.');
        }
        dd('Something is wrong.');
    }

    public function paymentStatus(Request $request)

    {
       $customer_payment = customerPayment::where('customer_id',$request->customer_id)->where('payment_status',1)->first();
       if($customer_payment)
       {
           return response()->json(['success'=>true,'customer_id'=>$customer_payment->customer_id,'payment_status'=>true]);
       }
       else
       {
           return response()->json(['success'=>false,'customer_id'=>'this customer not found in our record','payment_status'=>false]);
       }
    }
public function payment1(Request $request)
{
    $customer_payment = customerPayment::create(
        ['customer_id'=>$request['customer_id'],
        'payment_status'=>0,
            ]);
    $id =$customer_payment->id;
    $paypal =$this->paypalPaymentCurl($id);
  $customer_payment->update([
        'paypal_key'=>$paypal->payKey,
         'payment_status'=>1,
    ]);
    if (@$paypal->error) return redirect()->back()->withErrors('some paypal error occured');
    if ($paypal->paymentExecStatus =='CREATED'){
        $payment = $this->paymentDetails($id, $paypal->payKey);
        return \redirect('https://www.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey='.$paypal->payKey);
    }
}


private function paypalPaymentCurl($id){
    $obj_rec = [
        'amount' =>5,
        'email' =>'sb-eiwgf2539879@personal.example.com'
    ];
    $obj_rec = (object)$obj_rec;
    $json  =[
        'actionType' =>'PAY',
        'currencyCode'=>'USD',
        'receiverList'=>[
            'receiver' =>[$obj_rec
            ]
        ],
        'returnUrl'=>'http://192.168.18.4:8080/payment/success/'.$id.'/',
        'cancelUrl'=>'http://192.168.18.4:8080/cancel/'.$id.'/',
        'requestEnvelope'=>[
            'errorLanguage'=>'en_US',
            'detailLevel'=>'ReturnAll'
        ]
    ];

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://svcs.sandbox.paypal.com/AdaptivePayments/Pay",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30000,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode($json),
        CURLOPT_HTTPHEADER => array(
            "accept: */*",
            "X-PAYPAL-SECURITY-USERID: sb-omcrk20543166_api1.business.example.com",
            "X-PAYPAL-SECURITY-PASSWORD: 6EA3QNTMJSVM345Z",
            "X-PAYPAL-SECURITY-SIGNATURE: AVxojh21GaEm-ayxn.nRWNuiTNRuAP5WmBqgmr6Bb0rjitno6ZEWpc86",
            "X-PAYPAL-REQUEST-DATA-FORMAT: JSON",
            "X-PAYPAL-RESPONSE-DATA-FORMAT: JSON",
            "X-PAYPAL-APPLICATION-ID: APP-80W284485P519543T",
            "Accept: application/json",
            "content-type: application/json",
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        return "cURL Error #:" . $err;
    } else {
        return json_decode($response);
    }

}
        public function paymentDetails($id, $key)
        {
          $customer_payment=customerPayment::where('id',$id)->where('paypal_key',$key)->where('payment_status',1)->first();
          if ($customer_payment)
          {
              return response()->json(['success'=>true]);
          }
          else

          {
              return response()->json(['success'=>false]);
          }
        }

}
