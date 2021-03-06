<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFriendshipsTable extends Migration {
    public function up() {
        Schema::create( config( 'friendships.tables.fr_pivot' ), function ( Blueprint $table ) {
            $table->increments( 'id' );
            $table->morphs( 'sender' );
            $table->morphs( 'recipient' );
            $table->tinyInteger( 'status' )->default( 0 );
            $table->unsignedInteger( 'blocked_by' )->nullable();
            $table->timestamps();
        } );

    }

    public function down() {
        Schema::dropIfExists( config( 'friendships.tables.fr_pivot' ) );
    }

}