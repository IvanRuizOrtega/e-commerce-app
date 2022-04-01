<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

final class UserSeeder extends Seeder
{
    private $model;

    /**
     * UserSeeder constructor.
     * @param \App\Models\User $model
     */
    public function __construct(\App\Models\User $model)
    {
        $this->model = $model;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->model->factory()
            ->count(2)
            ->create();
    }
}
