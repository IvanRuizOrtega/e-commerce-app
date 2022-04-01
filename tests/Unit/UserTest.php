<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Tests\TestCase;


class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_a_user_morph_many_log_activities()
    {
        $model = new User;
        self::assertInstanceOf(Collection::class, $model->logActivities);
    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_a_user_morph_many_log_comments()
    {
        $model = new User;
        self::assertInstanceOf(Collection::class, $model->comments);
    }
}
