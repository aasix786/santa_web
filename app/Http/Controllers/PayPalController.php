<?php

namespace App\Http\Controllers;

//use Illuminate\Support\Facades\Request;
use App\Models\CustomerImage;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;
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
            $filepath = asset($customer_image->image);
          // echo "<script>window.open('".$filepath."', '_blank')</script>";
            return redirect()->route('download',['customer_image'=>$filepath]);

        }


        dd('ok');

    }
}
