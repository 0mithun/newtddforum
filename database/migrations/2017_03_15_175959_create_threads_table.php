<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThreadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('threads', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug')->unique()->nullable();
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('channel_id')->nullable();
            $table->string('title', 255);
            $table->text('body');
            $table->text('summary')->nullable();
            $table->string('source')->nullable();
            $table->string('main_subject')->nullable();
            $table->string('image_path')->nullable();
            $table->string('image_path_pixel_color', 50)->nullable();

            $table->string('location')->nullable();
            $table->float('lat', 10, 6)->nullable();
            $table->float('lng', 10, 6)->nullable();

            $table->string('cno')->nullable();
            $table->integer('age_restriction')->default(0);
            $table->boolean('anonymous')->default(0);

            $table->string('wiki_info_page_url')->nullable();
            $table->string('wiki_image_description')->nullable();
            $table->string('wiki_image_page_url')->nullable();
            $table->string('wiki_image_url')->nullable();
            $table->string('wiki_image_path')->nullable();
            $table->string('wiki_image_path_pixel_color', 50)->nullable();


            $table->string('amazon_product_url')->nullable();
            $table->string('amazon_image_url')->nullable();
            $table->string('amazon_image_path')->nullable();
            $table->string('amazon_image_path_pixel_color', 50)->nullable();

            $table->text('description')->nullable();
            $table->boolean('image_saved')->default(0);

            $table->unsignedInteger('word_count');
            $table->unsignedInteger('replies_count')->default(0);
            $table->unsignedInteger('like_count')->default(0);
            $table->unsignedInteger('dislike_count')->default(0);
            $table->unsignedInteger('favorite_count')->default(0);
            $table->unsignedInteger('visits')->default(0);
            $table->double('average_rating')->default(0);
            $table->boolean('is_published')->default(1);

            //New Items
            $table->boolean('famous')->default(0);
            $table->text('slide_body')->nullable();
            $table->varchar('slide_image_pos')->nullable();
            $table->varchar('slide_color_bg')->nullable();
            $table->varchar('slide_color_0')->nullable();
            $table->varchar('slide_color_1')->nullable();
            $table->varchar('slide_color_2')->nullable();
            $table->varchar('photo_desc', 1000)->nullable();
            $table->boolean('error')->default(0);

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
        Schema::dropIfExists('threads');
    }
}
