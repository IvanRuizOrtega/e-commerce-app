<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

final class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            AdminSeeder::class,
            UserSeeder::class,
            CategorySeeder::class
        ]);
    }
}
