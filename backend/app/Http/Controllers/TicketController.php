<?php

namespace App\Http\Controllers;

use App\Http\Resources\TicketDetailsResource;
use App\Http\Resources\TicketResource;
use App\Models\Line;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user=Auth::user();
        $tickets=$user->tickets;
        return response()->json(['tickets'=>TicketResource::collection($tickets)]);

       // return TicketResource::collection($tickets);
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
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $ticket=Ticket::find($id);

        if(!$ticket){
            return response()->json(['Ticket not found.'],404);
        }

        $ticket->delete();

        return response()->json(['Ticket deleted successfully'],200);
    }


    public function buy($number)
    {

        $line=Line::where('number',$number)->first();
        if(!$line){
            return response()->json('Line not found',404);
        }

        $user=Auth::user();     //trenutno ulogovani user

        $ticket=Ticket::create([
            'line_number'=>$line->number,
            'price'=>$line->price,
            'date_of_purchase'=>now(),
            'expiration_date'=>now()->addDays(1),
            'lines_id'=>$line->id,
            'user_id'=>$user->id


        ]);

        $ticket->save();

        return response()->json(['The ticket has been bought successfully']);    
    }



}
