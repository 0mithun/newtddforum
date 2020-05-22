<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameShowRestrictedColumnToUserprivacysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('userprivacys', function (Blueprint $table) {
            $table->renameColumn('show_restricted','restricted_13');
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
            $table->renameColumn('restricted_13','show_restricted');
        });
    }
}
