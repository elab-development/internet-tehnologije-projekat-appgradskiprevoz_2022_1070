<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query=User::query();

        if($request->has('search') && !empty($request->input('search'))){
            $searchTerm=$request->input('search');
            $query->where('name', 'LIKE', "%{$searchTerm}%")->orWhere('email', 'LIKE', "%{$searchTerm}%");
        }


        if($request->has('sortBy') && $request->has('sortOrder')){
            $sortBy=$request->input('sortBy');
            $sortOrder=$request->input('sortOrder');
            $query->orderBy($sortBy, $sortOrder);
        }

        $users=$query->get();

        return response()->json(['users: '=>UserResource::collection($users)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'name'=>'required|string|min:2|max:50',
            'email'=>'required|email|unique:users',
            'password'=>'required|string|min:5',
            'role'=>'required|string|exists:roles,name',
            'phone_number'=>'nullable|string|min:7|max:12',
            'address'=>'nullable|string|max:150'
        ]);

        if($validator->fails()){
            return response()->json([$validator->errors()],422);
        }

        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'phone_number'=>$request->phone_number,
            'address'=>$request->address,
            'role'=>$request->role
        ]);

        $role=Role::where('name',$request->role)->first();

        if($role){
            $user->assignRole($role->name);
        }else{
            return response()->json(['This role does not exist'],404);
        }

        return response()->json(['User created successfully.' , $user],201);


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'name'=>'nullable|string|max:100',
            'email'=>'required|email|exists:users',     //pronalazi user-a na osnovu email-a
            'phone_number'=>'nullable|string|max:100',
            'address'=>'nullable|string|max:150',
            'new_email'=>'nullable|email|unique:users,email'        //ovde dodato ,email da bi bi gledao kolonu email a ne new_email
        ]);

        if($validator->fails()){
            return response()->json([$validator->errors()],422);
        }

        $user=User::where('email',$request->input('email'))->first();

        if(!$user){
            return response()->json(['This user does not exist in the database'],404);
        }

        $authUser=Auth::user();

        if($authUser->hasRole('moderator')){

            if($user->hasAnyRole(['admin','moderator'])){
                return response()->json(['This user cannot be updated.'], 403);
            }
        }elseif($authUser->hasRole('admin')){

            if($user->hasRole('admin')){
                return response()->json(['This user cannot be updated.'], 403);
            }
        }

        $user->update($request->only(['name','phone_number','address']));

        if($request->has('new_email')){
            $user->email=$request->input('new_email');
            $user->save();
        }

        return response()->json(['User updated successfully'],200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'email'=>'required|email|exists:users'      //ovde mogu umesto ovog dole da stavim if(!$user) pa response does not exist nesto tako
        ]);


        $user=User::where('email',$request->email)->first();

        $authUser=Auth::user();

        if($authUser->hasRole('moderator')){

            if($user->hasAnyRole(['admin','moderator'])){
                return response()->json(['This user cannot be deleted.'], 403);
            }
        }elseif($authUser->hasRole('admin')){

            if($user->hasRole('admin')){
                return response()->json(['This user cannot be deleted.'], 403);
            }
        }
    


        $user->delete();

        return response()->json(['User deleted successfully'],200);
    }
}
