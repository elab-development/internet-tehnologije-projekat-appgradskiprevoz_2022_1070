<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(LineSeeder::class);
        $this->call(RolesSeeder::class);

        $admin=User::create([
            'name'=>'admin',
            'email'=>'admin@admin',
            'password'=>Hash::make('admin')
        ]);


        $admin->assignRole('admin');

         User::factory(4)->create();


/*         User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]); */
    }
}
