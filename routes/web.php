<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Homecontroller;
use App\Http\Controllers\PayPalController;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\StripeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');

});
Route::get('test/paypal', function () {
    return view('test-paypal');
});
Route::get('/privacyPolicy', function () {
    return view('privacyPolicy');
});
Route::get('/termCondition', function () {
    return view('termCondition');
});
//Route::get('/', function () {
//    return view('index');
//});
Route::get('/drag', function () {
    return view('drag');
});
// Route::get('/download', function () {
//     return view('download');
// });

Route::get('/download', [Homecontroller::class, 'download'])->name('download');
Route::get('/effects', function () {
    return view('effects');
});
//
Route::get('image', [Homecontroller::class, 'image'])->name('image');
Route::get('/paypal', [Homecontroller::class, 'paypal'])->name('paypal');
Route::get('/plugin', function () {
    return view('plugin');
});
Route::get('/resize', function () {
    return view('resize');
});
Route::get('/upload', function () {
    return view('Upload');
})->name('upload-image');

Route::get('/', [Homecontroller::class, 'home'])->name('home');
Route::post('store-image/{width?}/{height?}', [Homecontroller::class, 'storeImage'])->name('store.image');
Route::get('payment', [PayPalController::class, 'payment'])->name('payment');
Route::get('cancel/{id}', [PayPalController::class, 'cancel'])->name('payment.cancel');
Route::get('payment/success/{id}', [PayPalController::class, 'success'])->name('payment.success');
Route::get('/success', function () {
    return view('success');
})->name('success');
Route::post('/stripe', [StripeController::class,'payment'])->name('stripe.post');
Route::get('/stripe/page',function (){
    return view('stripe');
});
