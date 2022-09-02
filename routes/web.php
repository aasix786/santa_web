<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Homecontroller;
use App\Http\Controllers\PayPalController;
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

        Route::get('/', function () {
            return view('index');
        });
        Route::get('/drag', function () {
            return view('drag');
        });
        Route::get('/effects', function () {
            return view('effects');
        });
        Route::get('/image', function () {
            return view('Image');
        })->name('image');
        Route::get('/paypal', [Homecontroller::class,'paypal'])->name('paypal');
        Route::get('/plugin', function () {
            return view('plugin');
        });
        Route::get('/resize', function () {
            return view('resize');
        });
        Route::get('/upload', function () {
            return view('Upload');
        })->name('upload-image');

        Route::get('/',[Homecontroller::class,'home']);
        Route::post('/store/image',[Homecontroller::class,'storeImage'])->name('store.image');
        Route::get('payment', [PayPalController::class,'payment'])->name('payment');
        Route::get('cancel', [PayPalController::class,'cancel'])->name('payment.cancel');
        Route::get('payment/success', [PayPalController::class,'success'])->name('payment.success');
