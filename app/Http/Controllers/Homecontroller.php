<?php

namespace App\Http\Controllers;

use App\Models\CustomerImage;
use App\Models\Introduction;
use App\Models\Watermark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
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
            $image_64 = $request->download_image; //your base64 encoded data
            $img = $request->download_image;
            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $data = base64_decode($img);

            $file = 'public/customerImages/' . uniqid() . '.png';
            $success = file_put_contents($file, $data);
            $customer_image->image = $file;
            $customer_image->image_width = $request->width;
            $customer_image->image_height = $request->height;
            $customer_image->save();
            return redirect()->route('paypal', ['a' => $customer_image->image, 'w' => $request->width, 'h' => $request->height]);
        }
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $width = getimagesize($file)[0]; // getting the image width
            $height = getimagesize($file)[1]; // getting the image height

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
            }

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
        return view('image-test', ['watermark' => $water_mark->watermark]);
    }

    public function download(Request $request)
    {
        $customer_image = CustomerImage::where('image', $request->a)->first();
        return view('download', ['custom_image' => $customer_image
        ]);

    }
}
