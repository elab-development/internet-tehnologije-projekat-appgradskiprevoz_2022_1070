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
            ['number' => '15', 'vehicle' => 'Bus', 'start_location' => 'Zeleni Venac', 'end_location' => 'Zemun/Novi Grad', 'duration' => '40 min', 'price' => '50 RSD','number_of_stops'=>'18'],
            ['number' => '17', 'vehicle' => 'Bus', 'start_location' => 'Konjarnik', 'end_location' => 'Zemun/Gornji Grad', 'duration' => '54 min', 'price' => '50 RSD','number_of_stops'=>'28'],
            ['number' => '26', 'vehicle' => 'Bus', 'start_location' => 'Dorćol/Dunavska', 'end_location' => 'Naselje Braće Jerković', 'duration' => '60 min', 'price' => '50 RSD','number_of_stops'=>'23'],
            ['number' => '31', 'vehicle' => 'Bus', 'start_location' => 'Studentski trg', 'end_location' => 'Konjarnik', 'duration' => '31 min', 'price' => '50 RSD','number_of_stops'=>'15'],
            ['number' => '33', 'vehicle' => 'Bus', 'start_location' => 'Pančevački most/Žel.St.', 'end_location' => 'Kumodraž', 'duration' => '51 min', 'price' => '50 RSD','number_of_stops'=>'29'],
            ['number' => '45', 'vehicle' => 'Bus', 'start_location' => 'Zemun/Novi Grad', 'end_location' => 'Novi Beograd/Blok 44', 'duration' => '39 min', 'price' => '50 RSD','number_of_stops'=>'34'],
            ['number' => '56', 'vehicle' => 'Bus', 'start_location' => 'Zeleni Venac', 'end_location' => 'Banovo brdo', 'duration' => '46 min', 'price' => '50 RSD','number_of_stops'=>'25'],
            ['number' => '65', 'vehicle' => 'Bus', 'start_location' => 'Zvezdara 2', 'end_location' => 'Novo Bežanijsko Groblje', 'duration' => '50 min', 'price' => '50 RSD','number_of_stops'=>'31'],
            ['number' => '73', 'vehicle' => 'Bus', 'start_location' => 'Novi Beograd/Blok 45', 'end_location' => 'Batajnica/Žel.St.', 'duration' => '60 min', 'price' => '50 RSD','number_of_stops'=>'43'],
            ['number' => '85', 'vehicle' => 'Bus', 'start_location' => 'Banovo brdo', 'end_location' => 'Borča 3', 'duration' => '71 min', 'price' => '50 RSD','number_of_stops'=>'38'],
            ['number' => '88', 'vehicle' => 'Bus', 'start_location' => 'Zemun/Kej Oslobodjenja', 'end_location' => 'Novi Železnik', 'duration' => '66 min', 'price' => '50 RSD','number_of_stops'=>'41'],
            ['number' => '95', 'vehicle' => 'Bus', 'start_location' => 'Novi Beograd/Blok 45', 'end_location' => 'Borča 3', 'duration' => '72 min', 'price' => '50 RSD','number_of_stops'=>'41'],
            ['number' => '401', 'vehicle' => 'Bus', 'start_location' => 'Slavija/Birčaninova', 'end_location' => 'Pinosava', 'duration' => '44 min', 'price' => '50 RSD','number_of_stops'=>'32'],
            ['number' => '706', 'vehicle' => 'Bus', 'start_location' => 'Batajnica', 'end_location' => 'Zeleni Venac', 'duration' => '48 min', 'price' => '50 RSD','number_of_stops'=>'25'],
            ['number' => '860', 'vehicle' => 'Bus', 'start_location' => 'Beograd', 'end_location' => 'Obrenovac', 'duration' => '73 min', 'price' => '100 RSD','number_of_stops'=>'20'],
            ['number' => '7', 'vehicle' => 'Tram', 'start_location' => 'Ustanička', 'end_location' => 'Novi Beograd/Blok 45', 'duration' => '41 min', 'price' => '50 RSD','number_of_stops'=>'32'],
            ['number' => '9', 'vehicle' => 'Tram', 'start_location' => 'Ustanička', 'end_location' => 'Novi Beograd/Blok 45', 'duration' => '40 min', 'price' => '50 RSD','number_of_stops'=>'23'],
            ['number' => '14', 'vehicle' => 'Tram', 'start_location' => 'Ustanička - Resavska', 'end_location' => 'Banjica', 'duration' => '37 min', 'price' => '50 RSD','number_of_stops'=>'27'],
            ['number' => '19', 'vehicle' => 'Trolleybus', 'start_location' => 'Trg Slavija', 'end_location' => 'Konjarnik', 'duration' => '33 min', 'price' => '50 RSD','number_of_stops'=>'12'],
            ['number' => '41', 'vehicle' => 'Trolleybus', 'start_location' => 'Studentski trg', 'end_location' => 'Banjica 2', 'duration' => '37 min', 'price' => '50 RSD','number_of_stops'=>'18'],
            ['number' => 'EKO2', 'vehicle' => 'Electric-bus', 'start_location' => 'Dorćol/SRC Milan Gale Muškatirović', 'end_location' => 'Beograd na vodi', 'duration' => '35 min', 'price' => '50 RSD','number_of_stops'=>'14'],
            ['number' => 'BGVOZ1', 'vehicle' => 'Train', 'start_location' => 'Batajnica', 'end_location' => 'Ovča', 'duration' => '45 min', 'price' => '50 RSD','number_of_stops'=>'15'],
       
        ];

        foreach ($lines as $line) {
            Line::updateOrCreate(['number' => $line['number']], $line);
        }
    }
}
