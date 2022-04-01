<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

final class CategorySeeder extends Seeder
{
    private $model;

    /**
     * CategorySeeder constructor.
     * @param \App\Models\Category $model
     */
    public function __construct(\App\Models\Category $model)
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
        $category = $this->model->create([
            'name' => 'Ferretería',
        ]);

        $category->categories()->createMany([
            [ 'name' => 'Plomería'],
            [ 'name' => 'Albañilería'],
            [ 'name' => 'Carpintería']
        ]);
    }
}
