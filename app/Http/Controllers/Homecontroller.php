<?php

namespace App\Http\Controllers;

use App\Models\CustomerImage;
use App\Models\Introduction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Homecontroller extends Controller
{
    public function home()
    {
        $introduction = Introduction::select('description','custom_text')->first();

        return view('index',['introduction'=>$introduction
        ]);
    }
    public function storeImage(Request $request)
    {
        $customer_image = new CustomerImage();
        if($request->download_image)
        {
            $image_64 = $request->download_image; //your base64 encoded data
            $img = $request->download_image;
            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $data = base64_decode($img);
            $file =  'public/customerImages/' . uniqid() . '.png';
            $success = file_put_contents($file, $data);
            $customer_image->image = $file;
            $customer_image->save();
            return redirect()->route('paypal',['a'=>$customer_image->image]);
        }
        if($request->hasFile('image'))
        {
           $file= $request->file('image');
           $filename= date('YmdHi').$file->getClientOriginalName();
           $file->move(public_path('public/customerImages'),$filename);
            $customer_image->image = 'public/customerImages'.'/'.$filename;
            $customer_image->save();
            return redirect()->route('image',['a'=>$customer_image->image]);
        }

    }
    public function paypal()
    {
        $introduction = Introduction::select('custom_text')->first();
        return view('paypal',['custom_text'=>$introduction]);
    }
}
