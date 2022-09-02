<?php

namespace App\Http\Controllers;

//use Illuminate\Support\Facades\Request;
use App\Models\CustomerImage;
use Illuminate\Support\Facades\Response;
use Srmklive\PayPal\Services\ExpressCheckout;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

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
        $data['return_url'] = route('payment.success',['a'=>$request->a]);
        $data['cancel_url'] = route('payment.cancel');
        $data['total'] = 5;
        $provider = new ExpressCheckout;
        $response = $provider->setExpressCheckout($data);
        $response = $provider->setExpressCheckout($data,true);
       // return redirect($response['paypal_link']);
        return Redirect::to($response['paypal_link']);
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
            $customer_image = CustomerImage::where('image',$request->a)->first();
            $filepath = base_path().'/public/'.($customer_image->image);
        $a=   Response::download($filepath);
         return response()->redirectTo('/');

           // return
        }
        dd('Something is wrong.');
    }
}
