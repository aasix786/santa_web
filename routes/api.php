<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\IntroductionController;
use App\Http\Controllers\Api\ImagesController;
use App\Http\Controllers\api\PayPalController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('introduction',[IntroductionController::class,'introduction']);
Route::get('images',[ImagesController::class,'images']);
Route::post('payment', [PayPalController::class,'payment'])->name('payment');
Route::get('cancel', [PayPalController::class,'cancel'])->name('payment.cancel');
Route::get('payment/success/{id}', [PayPalController::class,'success'])->name('payment.success');
Route::get('customer/payments/status/',[PayPalController::class,'paymentStatus'])->name('paymentStatus');
