<?php

use Illuminate\Support\Facades\Route;

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
    return view('image');
});
Route::get('/paypal', function () {
    return view('paypal');
});
Route::get('/plugin', function () {
    return view('plugin');
});
Route::get('/resize', function () {
    return view('resize');
});
Route::get('/upload', function () {
    return view('upload');
});
