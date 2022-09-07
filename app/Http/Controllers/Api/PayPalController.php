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

}
