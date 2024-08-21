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
        Schema::create('lines', function (Blueprint $table) {
            $table->id();
            $table->string('number')->unique();   //string zbog npr EKO2  i unique zato sto mi je bitno za kasnije (npr za kupovinu karte posto radi preko numbera)
            $table->string('vehicle')->nullable();
            $table->string('start_location');
            $table->string('end_location');
            $table->string('duration')->nullable();  //string zbog minuta
            $table->string('price')->nullable();   //string zbog rsd
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lines');
    }
};
