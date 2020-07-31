<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
 */

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define( App\User::class, function ( Faker\Generator $faker ) {
    static $password;
    $first_name = $faker->word;
    $last_name = $faker->word;

    return [
        'name'           => $first_name . " " . $last_name,
        'first_name'     => $first_name,
        'last_name'      => $last_name,
        'email'          => $faker->unique()->safeEmail,
        'username'       => strtolower( $first_name . $last_name . uniqid() ),
        'lat'            => $faker->latitude( 19.5, 64.5 ),
        'lng'            => $faker->longitude( -161.75583, -68.01197 ),
        'password'       => $password ?: $password = bcrypt( 'secret' ),
        'remember_token' => str_random( 10 ),
        'confirmed'      => true,
    ];
} );

$factory->state( App\User::class, 'unconfirmed', function () {
    return [
        'confirmed' => false,
    ];
} );

$factory->state( App\User::class, 'administrator', function () {
    $first_name = 'john';
    $last_name = 'Doe';

    return [
        'name'       => $first_name . " " . $last_name,
        'first_name' => $first_name,
        'last_name'  => $last_name,
    ];
} );

$factory->define( App\Thread::class, function ( $faker ) {
    $title = $faker->sentence;
    $body = $faker->paragraph( 10 );
    $ages = [0, 13, 18];
    $cno = ['C', 'N', 'O'];

    return [
        'user_id'         => function () {
            return factory( 'App\User' )->create()->id;
        },
        'channel_id'      => function () {
            return random_int( 1, 29 );
        },
        'title'           => $title,

        'slug'            => str_slug( $title ),
        'body'            => $body,
        'word_count'      => str_word_count( $body ),

        'lat'             => $faker->latitude( 19.5, 64.5 ),
        'lng'             => $faker->longitude( -161.75583, -68.01197 ),
        'location'        => $faker->city . ", " . $faker->country,
        'age_restriction' => $ages[array_rand( $ages )],
        'cno'             => $cno[array_rand( $cno )],
        'visits'          => random_int( 10, 500 ),
        'replies_count'   => random_int( 10, 300 ),
        'like_count'      => random_int( 10, 200 ),
        'dislike_count'   => random_int( 10, 150 ),
        'favorite_count'  => random_int( 10, 200 ),
    ];
} );

$factory->define( App\Channel::class, function ( $faker ) {
    $name = $faker->word;

    return [
        'name' => $name,
        'slug' => $name,
    ];
} );

// $factory->define( App\Reply::class, function ( $faker ) {
//     return [
//         'thread_id' => function () {
//             return factory( 'App\Thread' )->create()->id;
//         },
//         'user_id'   => function () {
//             return factory( 'App\User' )->create()->id;
//         },
//         'body'      => $faker->paragraph,
//     ];
// } );

$factory->define( App\Reply::class, function ( $faker ) {
    $thread = App\Thread::inRandomOrder()->first();
    $user = App\User::inRandomOrder()->first();

    return [
        'thread_id' => $thread->id,
        'user_id'   => $user->id,
        'parent_id' => NULL,
        'body'      => $faker->paragraph,
    ];
} );

$factory->define( App\Admin::class, function ( $faker ) {
    return [
        'app_name'            => 'Anecdotage',
        'app_title'           => 'Anecdotage',
        'facebook_page_link'  => 'https://web.facebook.com/pages/Anecdotage/107661892584802',
        'instagram_page_link' => 'Anecdotage',
        'twitter_page_link'   => ' https://twitter.com/anecdotage_com/',
        'faq'                 => $faker->paragraph,
        'tos'                 => $faker->paragraph,
        'privacypolicy'       => $faker->paragraph,
        'mail_driver'         => 'smtp',
        'mail_host'           => 'smtp.mailtrap.io',
        'mail_port'           => '2525',
        'username'            => 'efbb6d7afb6d71',
        'password'            => '89ef77196e6267',
        'mail_encryption'     => 'tls',
        'copyright'           => 'Copyright &copy; anecdotage.com',
        'timezone'            => 'America/New_York',
    ];

} );

$factory->define( App\Emoji::class, function ( $faker ) {
    return [
        'name' => $faker->name,
    ];
} );