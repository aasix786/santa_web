<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Introduction;
use Illuminate\Http\Request;

class IntroductionController extends Controller
{
    public function introduction(Request $request)
    {
        $intro  = Introduction::select('description','custom_text')->first();
        return response()->json(['success'=>true,'description'=>$intro->description,'custom-text'=>$intro->custom_text],200) ;
    }
}
