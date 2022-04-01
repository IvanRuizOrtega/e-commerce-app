<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('log_activities', function (Blueprint $table) {
            $table->uuid('id')->unique();
            $table->string('subject');
            $table->enum('action', [
                'create',
                'update',
                'destroy',
            ]);
            $table->uuid('product_id');
            $table->foreign('product_id')->references('id')
                ->on('products')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->uuidMorphs('model');
            $table->index(['action']);
            $table->primary(['id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('log_activities');
    }
}
