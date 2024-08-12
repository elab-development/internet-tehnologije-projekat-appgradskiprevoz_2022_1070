<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('line_number');
            $table->string('price');  //za sada string
            $table->timestamp('date_of_purchase');
            $table->timestamp('valid_until')->nullable();
            $table->foreignId('user_id')->nullable();   //nullable da mi ne baca error kada proveravam za karte, a pre nego sto sam uradio auth za usera
            $table->foreignId('lines_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
