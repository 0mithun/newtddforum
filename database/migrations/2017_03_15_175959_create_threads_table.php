<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->unsignedInteger('channel_id');
            $table->unsignedInteger('replies_count')->default(0);
            $table->unsignedInteger('like_count')->default(0);
            $table->unsignedInteger('dislike_count')->default(0);
            $table->unsignedInteger('favorite_count')->default(0);
            $table->unsignedInteger('visits')->default(0);
            $table->string('title');
            $table->text('body');
            $table->unsignedInteger('word_count');
            $table->text('summary')->nullable();
            $table->string('source')->nullable();
            $table->string('location')->nullable();
            $table->string('main_subject')->nullable();


            $table->string('image_path')->nullable();
            $table->boolean('image_pending')->default(0);
            $table->unsignedInteger('best_reply_id')->nullable();
            $table->boolean('locked')->default(false);

            $table->float('lat',10,6)->nullable();
            $table->float('lng',10,6)->nullable();

            $table->string('category')->nullable();//changed

            $table->integer('age_restriction')->default(0);

            // - wiki Info Page Url
            // - wiki Image Page Url (do we need to store this?)
            // - wiki Image Url (what you called "Image Link" in test.csv)
            // - amazon product URL
            // - amazon image URL
            // - description or caption
            // - image_saved (bool)
            $table->string('wiki_info_page_url')->nullable();
            $table->string('wiki_image_page_url')->nullable();
            $table->string('wiki_image_url')->nullable();
            $table->string('wiki_image_path')->nullable();
            $table->string('amazon_product_url')->nullable();
            $table->string('amazon_image_url')->nullable();
            $table->text('description')->nullable();
            $table->boolean('image_saved')->default(0);


            $table->timestamps();

            $table->foreign('best_reply_id')
                ->references('id')
                ->on('replies')
                ->onDelete('set null');
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
