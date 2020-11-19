<?php

use Illuminate\Database\Seeder;

class ModelFactorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Admin::class)->create();
        $user = factory(App\User::class)->create([
            'name'           => 'Anecdotage Admins',
            'first_name'     => 'Anecdotage',
            'last_name'      => 'Admins',
            'email'          => 'kakooljay@gmail.com',
            'username'       => 'anecdotage',
            'lat' => 40.71,
            'lng' => -73.93,
            'city'           => 'New York',
            'country'        => 'USA',
            'password'       => bcrypt('secret'),
            'remember_token' => str_random(10),
            'confirmed'      => true,
        ]);


        // factory(App\User::class, 10)->create();

        $channels = [
            'Entertainment', 'Other', 'Architecture', 'Art', 'Books', 'Business', 'Celebrities', 'Death', 'Dumb', 'Education', 'Food', 'Funny', 'History', 'Insults', 'Life', 'Love', 'Mistakes', 'Money', 'Movies',
            'Music', 'Politics', 'Pranks', 'Religion', 'Science', 'Sex', 'Sports', 'Travel', 'Television', 'War',
        ];

        foreach ($channels as $channel) {
            factory(App\Channel::class)->create([
                'name' => $channel,
                'slug' => $channel,
            ]);
        }
        // //factory(App\Tags::class, 10)->create();


        // factory( App\Thread::class, 100 )->create();
        // factory( App\Reply::class, 1000 )->create();

        // $replies = App\Reply::all();
        // foreach ( $replies as $reply ) {
        //     factory( App\Reply::class, random_int( 5, 30 ) )->create( [
        //         'parent_id' => $reply->id,
        //     ] );
        // }

    }
}
