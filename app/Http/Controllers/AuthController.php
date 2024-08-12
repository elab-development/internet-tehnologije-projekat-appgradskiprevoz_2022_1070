<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    
    public function register(Request $request)
    {

        $validator=Validator::make($request->all(),[
            'name'=>'required|string|max:50',
            'email'=>'required|string|max:50|email|unique:users',
            'password'=>'required|string|min:5',
            'phone_number'=>'nullable|string|min:9|max:13',
            'address'=>'nullable|string|max:100'

        ]);

        if($validator->fails()){
            return response()->json([$validator->errors()]);
        }else{
            $user=User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
                'phone_number'=>$request->phone_number,
                'address'=>$request->address
            ]);
        }

        $token=$user->createToken('auth_token')->plainTextToken;


        return response()->json(['Account successfully created','access_token'=>$token]);

}

public function login(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'email'=>'required|email|exists:users',
            'password'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([$validator->errors()]);
        }

        $user=User::where('email',$request->email)->first();

   /*      if(!$user){  
            return response()->json(['Incorrect email']);       ovo ne treba posto gore validator izbaci error
        } */

        if(!Hash::check($request->password,$user->password)){
            return response()->json(['Incorrect password'],401);
        }

        if($user->tokens()->count()>0){                             //ako ima vise od 0 tokena, izbacuje ovu poruku (kad se izloguje brisu se svi pa zato)
            return response()->json(['Already logged in'],403);
        }
       
        $token=$user->createToken('auth_token')->plainTextToken;

        return response()->json(['Welcome ' . $user->name . '!', 'access_token'=>$token]);

    } 


    public function logout(Request $request)
    {

        auth()->user()->tokens()->delete();

        return response()->json(['Log out successful']);
        
    }


}

