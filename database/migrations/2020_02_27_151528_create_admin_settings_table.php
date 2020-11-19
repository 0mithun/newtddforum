<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminSettingsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create( 'admins', function ( Blueprint $table ) {
            $table->increments( 'id' );
            $table->string( 'app_name' )->default( ' Anecdotage' );
            $table->string( 'app_title' )->nullable();
            $table->text( 'meta_description' )->nullable();

            $table->string( 'facebook_page_link' )->nullable();
            $table->string( 'instagram_page_link' )->nullable();
            $table->string( 'twitter_page_link' )->nullable();

            $table->text( 'faq' )->nullable();
            $table->text( 'tos' )->nullable();
            $table->text( 'privacypolicy' )->nullable();
            $table->text( 'mail_driver' )->nullable();
            $table->text( 'mail_host' )->nullable();
            $table->text( 'mail_port' )->nullable();
            $table->text( 'username' )->nullable();
            $table->text( 'password' )->nullable();
            $table->text( 'mail_encryption' )->nullable();
            $table->string( 'copyright' )->nullable();
            $table->string( 'timezone' )->default( 'America/New_York' );
            $table->timestamps();
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists( 'admins' );
    }
}
