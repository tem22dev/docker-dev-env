<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

$products = collect([
    [
        'id' => 1,
        'image' => 'https://viettourist.com/resources/images/Blog-BienDao/my-khanh-3.jpg',
        'name' => 'Cam',
        'price' => '1000'
    ],
    [
        'id' => 2,
        'image' => 'https://saigonstartravel.com/wp-content/uploads/2021/01/du-lich-vuon-trai-cay-mien-tay-1.jpg',
        'name' => 'Mít',
        'price' => '2000'
    ],
    [
        'id' => 3,
        'image' => 'https://viettourist.com/resources/images/Blog-BienDao/mietvuon-4.jpg',
        'name' => 'Chôm chôm',
        'price' => '2500'
    ],
    [
        'id' => 4,
        'image' => 'https://s3-ap-northeast-1.amazonaws.com/nouhow-sanbox/staging-nosm/images/2023-11/x1MogwCTuSngo0D5zzZlUBD1zmlbCpOFufyqkX2H.jpeg',
        'name' => 'Dâu xanh',
        'price' => '3500'
    ]
]);

Route::get('products', function () use($products) {
    return response()->json([
        'data' => $products
    ], 200);
});
Route::get('product/{id}', function () use($products) {
    $product = $products->where('id', request()->id)->first();
    return response()->json([
        'data' => $product
    ], 200);
});