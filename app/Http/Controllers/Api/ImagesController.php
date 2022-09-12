<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Introduction;
use Illuminate\Http\Request;

class ImagesController extends Controller
{
   public function images(Request $request)
   {
       $images = Image::all();
       return response()->json(['success'=>true,'images'=>$images]);
   }
   public function uploadImage(Request $request)
    {
        $file= $request->file('upload_image');
        $filename= date('YmdHi').$file->getClientOriginalName();
       $file->move(public_path('public/customerImages'),$filename);
       return response()->json(['success'=>true,'image'=>'public/customerImages'.'/'.$filename],200);


    }

}
