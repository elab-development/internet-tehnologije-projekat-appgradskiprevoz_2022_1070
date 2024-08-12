<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

  //  public static $wrap='tickets';  ovde ne radi posto se vraca niz 

    public function toArray($request)
    {
        return [
            'Line: '=>$this->line_number,
            'Price: '=>$this->price,
            'Purchased: '=>$this->date_of_purchase,
            'Valid until: '=>$this->expiration_date
        ];
    }
}
