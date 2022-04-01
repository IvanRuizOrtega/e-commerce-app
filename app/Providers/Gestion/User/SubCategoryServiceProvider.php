<?php


namespace App\Providers\Gestion\User;


use Illuminate\Support\ServiceProvider;
use Src\Resource\Gestion\User\Category\Application\{GetSubCategoryCase};
use Src\Resource\Gestion\User\Category\Domain\Contracts\{iSubCategoryRepositoryContract};
use Src\Resource\Gestion\User\Category\Infrastructure\Repositories\Eloquent\{GetSubCategoryRepository};

final class SubCategoryServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(iSubCategoryRepositoryContract::class,
            GetSubCategoryRepository::class,
            GetSubCategoryCase::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
