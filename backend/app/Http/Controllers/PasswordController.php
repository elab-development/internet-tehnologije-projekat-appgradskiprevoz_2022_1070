<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class PasswordController extends Controller
{
    public function sendLink(Request $request)
    {
        $request->validate([
            'email'=>'required|email|exists:users'
        ]);

        $status=Password::sendResetLink($request->only('email'));

        if($status===Password::RESET_LINK_SENT){
            return response()->json(['Password reset link was sent successfully.'],200);
        }else{
            return response()->json(['Password reset link was not sent, please enter the correct email address.'],400);
        }
    }


    public function reset(Request $request)
    {
        $request->validate([
            'email'=>'required|email',
            'password'=>'required|min:5',
            'token'=>'required'
        ]);

        $status=Password::reset(
            $request->only('email','password','token'),
            function (User $user,string $password){
                $user->forceFill([
                    'password'=>Hash::make($password)
                ])->save();
            }
        );


        if($status===Password::PASSWORD_RESET){
            return response()->json(['Password reset was successful.'],200);
        }else{
            return response()->json(['Password reset was unsuccessful.'],400);
        }   
    }


}
