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

}
