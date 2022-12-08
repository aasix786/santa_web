<?php

namespace App\Http\Controllers;

use App\Models\CustomerImage;
use App\Models\Introduction;
use App\Models\Payment;
use App\Models\Watermark;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Jenssegers\Agent\Agent;

class Homecontroller extends Controller
{
    public function home()
    {
        $introduction = Introduction::select('description', 'custom_text')->first();

        return view('index', ['introduction' => $introduction
        ]);
    }

    public function storeImage(Request $request)
    {

        $customer_image = new CustomerImage();
        if ($request->download_image) {
            $fileName = uniqid() . '.png';
            $image_64 = $request->download_image; //your base64 encoded data
            $img = $request->download_image;
            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $data = base64_decode($img);

            $file = public_path('public/customerImages/') . $fileName;
            $success = file_put_contents($file, $data);
            $customer_image->image = 'public/customerImages/' . $fileName;
            $customer_image->image_width = $request->width;
            $customer_image->image_height = $request->height;
            $customer_image->save();
            $path = route('paypal', ['a' => $customer_image->image, 'w' => $request->width, 'h' => $request->height]);
            return response()->json(['path' => $path]);
            //return redirect()->route('paypal', ['a' => $customer_image->image, 'w' => $request->width, 'h' => $request->height]);
        }
        if ($request->hasFile('image')) {

            $file = $request->file('image');
            $width=$request['image_width'];
            $height=$request['image_height'];

            $customer_image->image_width = $width;
            $customer_image->image_height = $height;
           // $filename = date('YmdHi') . $file->getClientOriginalName();
            $filename = uniqid() . '.png';
            $file->move(public_path('public/customerImages'), $filename);
            $customer_image->image = 'public/customerImages' . '/' . $filename;
            $customer_image->save();
            return redirect()->route('image', ['a' => $customer_image->image, 'w' => $customer_image->image_width, 'h' => $customer_image->image_height]);
        }

    }

    public function paypal()
    {
        $url = request()->query("a");
        if($url){
            $price = Payment::query()->pluck('price')->first();
            $introduction = Introduction::select('custom_text')->first();
            $water_mark = Watermark::select('watermark')->first();
            return view('paypal', ['custom_text' => $introduction, 'watermark' => $water_mark->watermark,'price' => $price]);
        }else{
            return redirect()->back();
        }
     }

    public function image()
    {
        $url = request()->query("a");
        if($url){
            $water_mark = Watermark::select('watermark')->first();

            $santa_images = \App\Models\Image::all();

            $watermark = $water_mark->watermark;
            $images = $santa_images;

            return view('image-test', compact("watermark","images"));

        }else{
            return redirect()->back();
        }
       }

    public function download(Request $request)
    {
        $url = request()->query("a");
        if($url){
            $customer_image = CustomerImage::where('image', $request->a)->first();
            return view('download', ['custom_image' => $customer_image
            ]);
        }else{
            return redirect()->back();
        }
    }
}
