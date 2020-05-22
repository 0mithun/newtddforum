<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRestricted13ColumnToUserprivacysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('userprivacys', function (Blueprint $table) {
            $table->integer('restricted_18')->default(0)->after('anyone_share_my_thread_twitter');
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
            $table->dropColumn('restricted_18');
        });
    }
}
