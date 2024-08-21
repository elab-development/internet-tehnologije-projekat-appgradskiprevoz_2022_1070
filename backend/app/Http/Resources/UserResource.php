<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return[
            'Name: '=>$this->name,
            'Email: '=>$this->email,
            'Phone number: '=>$this->phone_number,
            'Address: '=>$this->address,
            'Tickets: '=> $this->tickets->isEmpty() ? 'none' : TicketResource::collection($this->tickets)
        ];
    }
}
