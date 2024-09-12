<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\LineController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;
use App\Http\Resources\TicketResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use function Pest\Laravel\put;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/lines',[LineController::class,'index']);

Route::get('/lines/{number}',[LineController::class,'show']);

Route::post('/register',[AuthController::class,'register']);

Route::post('/login',[AuthController::class,'login']);
/* Route::post('/login',[AuthController::class,'login'])->middleware('web'); */

Route::post('/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');

Route::middleware(['auth:sanctum', 'role:user'])->group(function (){
    Route::post('/lines/{number}/buy',[TicketController::class,'buy']);
    Route::resource('/mytickets', TicketController::class)->only(['index']);
});

Route::middleware(['auth:sanctum','role:admin'])->group(function (){
    Route::delete('/deleteline/{number}',[LineController::class,'destroy']);    
    Route::put('/updateline',[LineController::class,'update']);
    Route::post('/line/add',[LineController::class,'store']);
    Route::post('user/add',[UserController::class,'store']);
    
});

Route::middleware(['auth:sanctum','role:moderator|admin'])->group(function (){
    Route::delete('/deleteuser',[UserController::class,'destroy']);
    Route::delete('/deleteticket/{id}',[TicketController::class,'destroy']);
    Route::put('/updateuser',[UserController::class,'update']);
    Route::resource('/users', UserController::class)->only(['index']);
});

Route::post('forgotpassword',[PasswordController::class, 'sendLink']);
Route::post('resetpassword',[PasswordController::class, 'reset'])->name('password.reset');

