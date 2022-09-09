<?php

namespace App\Http\Controllers;

//use Illuminate\Support\Facades\Request;
use App\Models\CustomerImage;
use App\Models\customerPayment;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\URL;
use Srmklive\PayPal\Services\ExpressCheckout;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

class PayPalController extends Controller
{

    public function cancel(Request $request)
    {
        $customer_payment= customerPayment::where('id',$request->id)->delete();
        if( $customer_payment)
        {
            return response()->json(['success'=>true,'id'=>$request->id,'payment_status'=>'payment canceled']);
        }else
        {
            return response()->json(['success'=>false,'id'=>$request->id,'payment_status'=>'please check Error in paymnent cancel module']);

        }
    }

    public function success(Request $request)
    {
        $customer_payment= customerPayment::where('id',$request->id)->first();
        $customer_payment->payment_status= 1;
        $customer_payment->save();
        if( $customer_payment)
        {
         return redirect()->route('success');
        }else
        {
            return response()->json(['success'=>false,'id'=>$request->id]);

        }
    }

}
