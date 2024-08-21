<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole=Role::create(['name'=>'admin']);
        $userRole=Role::create(['name'=>'user']);
        $moderatorRole=Role::create(['name'=>'moderator']);

        $deletePermission=Permission::create(['name'=>'delete_lines']);
        $updatePermission=Permission::create(['name'=>'update_lines']);
        $buyPermission=Permission::create(['name'=>'buy_ticket']);
        $showPermission=Permission::create(['name'=>'show_tickets']);
        $deleteUserPermission=Permission::create(['name'=>'delete_user']);
        $updateUserPermission=Permission::create(['name'=>'update_user']);
        $deleteTicketPermission=Permission::create(['name'=>'delete_ticket']);
        
        $adminRole->givePermissionTo($deletePermission,$updatePermission,$buyPermission,$showPermission);
        $userRole->givePermissionTo($buyPermission,$showPermission);
        $moderatorRole->givePermissionTo($deleteUserPermission,$updateUserPermission,$deleteTicketPermission);
        
    }
}
