<?php

namespace App\Http\Controllers;

use App\Models\Line;
use Illuminate\Http\Request;

class LineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lines=Line::select('number','start_location','end_location')->get();
        return response()->json($lines);
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
        $request->validate([
            'number'=>'required|string',
            'vehicle'=>'nullable|string|max:20|min:3',
            'start_location'=>'required|string|max:100',
            'end_location'=>'required|string|max:100',
            'duration'=>'nullable|string|max:15',
            'number_of_stops'=>'nullable|integer',
            'price'=>'required|string|max:15'
        ]);

        if(Line::where('number',$request->number)->exists()){
            return response()->json(['This line already exists in the database.'],406);
        }

        $line=Line::create($request->all());

        return response()->json(['Line ' . $line->number . ' successfully added.'],201);

    }

    /**
     * Display the specified resource.
     */
    public function show($number)
    {
        $line=Line::where('number',$number)->first();
        if($line){
            return response()->json($line);
        }else{
            return response()->json('Line not found',404);
        }
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
        $request->validate([
            'number'=>'required|string',
            'vehicle'=>'nullable|string|min:3|max:20',
            'start_location'=>'nullable|string|max:100',
            'end_location'=>'nullable|string|max:100',
            'duration'=>'nullable|string|max:15',
            'number_of_stops'=>'nullable|integer',
            'price'=>'nullable|string|max:15'
        ]);

        $line=Line::where('number',$request->input('number'))->first();

        if(!$line){
            return response()->json(['This line does not exist in the database'],404);
        }

        $line->update($request->only(['vehicle','start_location','end_location','number_of_stops','duration','price']));

        return response()->json(['Line changed successfully.'],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($number)
    {

        $line=Line::where('number',$number)->first();

        if(!$line){
            return response()->json(['This line does not exist in the database'],404);
        }
        $line->delete();
        return response()->json(['Line deleted successfully.'],200);
    }
}
