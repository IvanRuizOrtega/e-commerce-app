<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

final class AdminSeeder extends Seeder
{
    private $model;

    /**
     * AdminSeeder constructor.
     * @param \App\Models\Admin $model
     */
    public function __construct(\App\Models\Admin $model)
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
