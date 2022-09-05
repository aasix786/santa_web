<?php

namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Srmklive\PayPal\Services\ExpressCheckout;
use Illuminate\Support\Facades\Redirect;

class PayPalController extends Controller
{
    public function payment()
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
        // return redirect($response['paypal_link']);
        return response()->json(['success'=>true,'paypal_link'=>$response['paypal_link']]);
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
}
