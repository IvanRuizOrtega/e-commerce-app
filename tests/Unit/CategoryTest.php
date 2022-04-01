<?php

namespace Tests\Unit;


use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_a_category_has_many_categories()
    {
        $category = new Category;
        self::assertInstanceOf(Collection::class, $category->categories);
    }
}
