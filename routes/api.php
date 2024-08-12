<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LineController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;
use App\Http\Resources\TicketResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/lines',[LineController::class,'index']);

Route::get('/lines/{number}',[LineController::class,'show']);

Route::post('/register',[AuthController::class,'register']);

Route::post('/login',[AuthController::class,'login']);

Route::post('/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');

Route::middleware(['auth:sanctum', 'role:user'])->group(function (){
    Route::post('/lines/{number}/buy',[TicketController::class,'buy']);
});

Route::middleware(['auth:sanctum','role:user'])->group(function (){
    Route::resource('/mytickets', TicketController::class)->only(['index']);
});

Route::middleware(['auth:sanctum','role:admin'])->group(function (){
    Route::resource('/users', UserController::class)->only(['index']);
});
