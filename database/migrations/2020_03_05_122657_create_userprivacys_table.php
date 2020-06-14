<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserprivacysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userprivacys', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->integer('see_my_profiles')->default('3');
            $table->unsignedInteger('see_my_threads')->default(3);
            $table->unsignedInteger('see_my_favorites')->default(3);
            $table->unsignedInteger('see_my_friends')->default(3);

            $table->unsignedInteger('send_me_message')->default(2);

            $table->boolean('thread_create_share_facebook')->default(0);
            $table->boolean('thread_create_share_twitter')->default(0);

            $table->boolean('anyone_share_my_thread_facebook')->default(1);
            $table->boolean('anyone_share_my_thread_twitter')->default(1);
            
            $table->integer('restricted_13')->default(0);
            $table->integer('restricted_18')->default(0);
            
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
        Schema::dropIfExists('userprivacys');
    }
}
