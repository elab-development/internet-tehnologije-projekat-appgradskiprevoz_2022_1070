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
            'password'=>Hash::make('admin'),
            'role'=>'admin'
        ]);

        $moderator=User::create([
            'name'=>'moderator',
            'email'=>'moderator@moderator',
            'password'=>Hash::make('moderator'),
            'role'=>'moderator'
        ]);

        $moderator->assignRole('moderator');

        $admin->assignRole('admin');

         User::factory(4)->create();


/*         User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]); */
    }
}
