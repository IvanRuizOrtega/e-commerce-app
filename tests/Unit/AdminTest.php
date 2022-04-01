<?php

namespace Tests\Unit;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Collection;
use Tests\TestCase;


class AdminTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_a_admin_morph_many_log_activities()
    {
        $model = new Admin;
        self::assertInstanceOf(Collection::class, $model->logActivities);
    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_a_admin_morph_many_log_comments()
    {
        $model = new Admin;
        self::assertInstanceOf(Collection::class, $model->comments);
    }
}
