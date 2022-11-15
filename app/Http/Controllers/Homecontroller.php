<?php

namespace App\Http\Controllers;

use App\Models\CustomerImage;
use App\Models\Introduction;
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

            /*
                        $image = new Imagick();
                        $image->readImageBlob($request->download_image);*/
            /* $image->setImageFormat('png24');

             header('Content-type: image/png');
             ob_clean();
            // echo $image->getImageBlob();
             dd($image->getImageBlob());
             dd($request->download_image);*/
            $fileName = uniqid() . '.png';
            /* $abc=  Image::make($request->download_image)->resize(60,60)->save('public/customerImages/'.$fileName);
               dd($abc);
              Image::make();*/
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
         /*   $width = getimagesize($file)[0]; // getting the image width
            $height = getimagesize($file)[1]; // getting the image height
dd($width , $height);
            $agent = new Agent();
            $mobileResult = $agent->isMobile();
            if ($mobileResult) {

                if ($request->image_position == 'vertical') {
                    $customer_image->image_width = $height;
                    $customer_image->image_height = $width;

                } else {

                    $customer_image->image_width = $width;
                    $customer_image->image_height = $height;
                }

            } else {

                $customer_image->image_width = $width;
                $customer_image->image_height = $height;
            }*/
            $customer_image->image_width = $width;
            $customer_image->image_height = $height;
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('public/customerImages'), $filename);
            $customer_image->image = 'public/customerImages' . '/' . $filename;
            $customer_image->save();
            return redirect()->route('image', ['a' => $customer_image->image, 'w' => $customer_image->image_width, 'h' => $customer_image->image_height]);
        }

    }

    public function paypal()
    {
        $introduction = Introduction::select('custom_text')->first();
        $water_mark = Watermark::select('watermark')->first();
        return view('paypal', ['custom_text' => $introduction, 'watermark' => $water_mark->watermark]);
    }

    public function image()
    {
        $water_mark = Watermark::select('watermark')->first();

        $santa_images = \App\Models\Image::all();
        return view('image-test', ['watermark' => $water_mark->watermark,'images'=>$santa_images]);
    }

    public function download(Request $request)
    {
        $customer_image = CustomerImage::where('image', $request->a)->first();
        return view('download', ['custom_image' => $customer_image
        ]);

    }
}
