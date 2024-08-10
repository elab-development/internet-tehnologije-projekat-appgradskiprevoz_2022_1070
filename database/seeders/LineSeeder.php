<?php

namespace Database\Seeders;

use App\Models\Line;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $lines = [
            ['number' => '15', 'vehicle' => 'Autobus', 'start_location' => 'Zeleni Venac', 'end_location' => 'Zemun/Novi Grad', 'duration' => '40 min', 'price' => '50 RSD','number_of_stops'=>'18'],
            ['number' => '17', 'vehicle' => 'Autobus', 'start_location' => 'Konjarnik', 'end_location' => 'Zemun/Gornji Grad', 'duration' => '54 min', 'price' => '50 RSD','number_of_stops'=>'28'],
            ['number' => '26', 'vehicle' => 'Autobus', 'start_location' => 'Dorćol/Dunavska', 'end_location' => 'Naselje Braće Jerković', 'duration' => '60 min', 'price' => '50 RSD','number_of_stops'=>'23'],
            ['number' => '31', 'vehicle' => 'Autobus', 'start_location' => 'Studentski trg', 'end_location' => 'Konjarnik', 'duration' => '31 min', 'price' => '50 RSD','number_of_stops'=>'15'],
            ['number' => '33', 'vehicle' => 'Autobus', 'start_location' => 'Pančevački most/Žel.St.', 'end_location' => 'Kumodraž', 'duration' => '51 min', 'price' => '50 RSD','number_of_stops'=>'29'],
            ['number' => '45', 'vehicle' => 'Autobus', 'start_location' => 'Novi Beograd/Blok 44', 'end_location' => 'Zemun/Novi Grad', 'duration' => '39 min', 'price' => '50 RSD','number_of_stops'=>'34'],
            ['number' => '56', 'vehicle' => 'Autobus', 'start_location' => 'Zeleni Venac', 'end_location' => 'Banovo brdo', 'duration' => '46 min', 'price' => '50 RSD','number_of_stops'=>'25'],
            ['number' => '65', 'vehicle' => 'Autobus', 'start_location' => 'Zvezdara 2', 'end_location' => 'Novo Bežanijsko Groblje', 'duration' => '50 min', 'price' => '50 RSD','number_of_stops'=>'31'],
            ['number' => '73', 'vehicle' => 'Autobus', 'start_location' => 'Novi Beograd/Blok 45', 'end_location' => 'Batajnica/Žel.St.', 'duration' => '60 min', 'price' => '50 RSD','number_of_stops'=>'43'],
            ['number' => '85', 'vehicle' => 'Autobus', 'start_location' => 'Banovo brdo', 'end_location' => 'Borča 3', 'duration' => '71 min', 'price' => '50 RSD','number_of_stops'=>'38'],
            ['number' => '88', 'vehicle' => 'Autobus', 'start_location' => 'Zemun/Kej Oslobodjenja', 'end_location' => 'Novi Železnik', 'duration' => '66 min', 'price' => '50 RSD','number_of_stops'=>'41'],
            ['number' => '95', 'vehicle' => 'Autobus', 'start_location' => 'Novi Beograd/Blok 45', 'end_location' => 'Borča 3', 'duration' => '72 min', 'price' => '50 RSD','number_of_stops'=>'41'],
            ['number' => '401', 'vehicle' => 'Autobus', 'start_location' => 'Slavija/Birčaninova', 'end_location' => 'Pinosava', 'duration' => '44 min', 'price' => '50 RSD','number_of_stops'=>'32'],
            ['number' => '706', 'vehicle' => 'Autobus', 'start_location' => 'Zeleni Venac', 'end_location' => 'Batajnica', 'duration' => '48 min', 'price' => '50 RSD','number_of_stops'=>'25'],
            ['number' => '860', 'vehicle' => 'Autobus', 'start_location' => 'Beograd', 'end_location' => 'Obrenovac', 'duration' => '73 min', 'price' => '100 RSD','number_of_stops'=>'20'],
            ['number' => '7', 'vehicle' => 'Tramvaj', 'start_location' => 'Ustanička', 'end_location' => 'Novi Beograd/Blok 45', 'duration' => '41 min', 'price' => '50 RSD','number_of_stops'=>'32'],
            ['number' => '9L', 'vehicle' => 'Tramvaj', 'start_location' => 'Novi Beograd/Blok 45', 'end_location' => 'Trg Slavija/Nemanjina', 'duration' => '40 min', 'price' => '50 RSD','number_of_stops'=>'23'],
            ['number' => '14L', 'vehicle' => 'Tramvaj', 'start_location' => 'Ustanička - Resavska', 'end_location' => 'Trg Slavija - Ustanička', 'duration' => '37 min', 'price' => '50 RSD','number_of_stops'=>'27'],
            ['number' => '19', 'vehicle' => 'Trolejbus', 'start_location' => 'Trg Slavija', 'end_location' => 'Konjarnik', 'duration' => '33 min', 'price' => '50 RSD','number_of_stops'=>'12'],
            ['number' => '41', 'vehicle' => 'Trolejbus', 'start_location' => 'Studentski trg', 'end_location' => 'Banjica 2', 'duration' => '37 min', 'price' => '50 RSD','number_of_stops'=>'18'],
            ['number' => 'EKO2', 'vehicle' => 'Elektro-bus', 'start_location' => 'Dorćol/SRC Milan Gale Muškatirović', 'end_location' => 'Beograd na vodi', 'duration' => '35 min', 'price' => '50 RSD','number_of_stops'=>'14'],
            ['number' => 'BG VOZ 1', 'vehicle' => 'Voz', 'start_location' => 'Batajnica', 'end_location' => 'Ovča', 'duration' => '45 min', 'price' => '50 RSD','number_of_stops'=>'15'],
       
        ];

        foreach ($lines as $line) {
            Line::updateOrCreate(['number' => $line['number']], $line);
        }
    }
}
