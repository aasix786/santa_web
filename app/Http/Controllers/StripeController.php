<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Stripe;
use App\Models\CustomerImage;
class StripeController extends Controller
{
    public function payment(Request $request)
    {
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        $customer = Stripe\Customer::create(array(

            "address" => [

                "line1" => "Virani Chowk",

                "postal_code" => "360001",

                "city" => "Rajkot",

                "state" => "GJ",

                "country" => "IN",

            ],

            "email" => "demo@gmail.com",

            "name" => "S khan",

            "source" => $request->stripeToken

        ));

        $price = Payment::select('price')->first();

      $charges =  Stripe\Charge::create ([

            "amount" => 100 * $price->price,

            "currency" => "usd",

            "customer" => $customer->id,

            "description" => "santa images",

            "shipping" => [

                "name" => "Jenny Rosen",

                "address" => [

                    "line1" => "510 Townsend St",

                    "postal_code" => "98140",

                    "city" => "San Francisco",

                    "state" => "CA",

                    "country" => "US",

                ],

            ]

        ]);
      if($charges)
      {
          //$customer_image = CustomerImage::where('image', $request->image)->first();
          return redirect()->route('download', ['a' => $request->image
          ]);

      }
      else
      {

          echo 'some thing went wrong';
      }


    }
}
