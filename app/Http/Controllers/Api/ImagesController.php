<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CustomerImage;
use App\Models\Image;
use App\Models\Introduction;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;

class ImagesController extends Controller
{
   public function images(Request $request)
   {
       $images = Image::all();
       return response()->json(['success'=>true,'images'=>$images]);
   }
   public function uploadImage(Request $request)
    {
        $customer_image = new CustomerImage();
        if ($request->hasFile('upload_image')) {
            $file = $request->file('upload_image');
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
            $url = route('image', ['a' => $customer_image->image, 'w' => $customer_image->image_width, 'h' => $customer_image->image_height]);
            return response()->json(['success'=>true,'url'=>$url]);
        }

        /*$file = $request->file('image');
        $width = getimagesize($file)[0]; // getting the image width
        $height = getimagesize($file)[1];
        $filename= date('YmdHi').$file->getClientOriginalName();
       $file->move(public_path('public/customerImages'),$filename);
       return response()->json(['success'=>true,'image'=>'public/customerImages'.'/'.$filename],200);

        */


    }

}
