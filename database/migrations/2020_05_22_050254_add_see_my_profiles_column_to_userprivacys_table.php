<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSeeMyProfilesColumnToUserprivacysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('userprivacys', function (Blueprint $table) {
            $table->integer('see_my_profiles')->default('3')->after('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('userprivacys', function (Blueprint $table) {
            $table->dropColumn('see_my_profiles');
        });
    }
}
