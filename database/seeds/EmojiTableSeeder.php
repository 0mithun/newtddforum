<?php

use Illuminate\Database\Seeder;

class EmojiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $emojis = [
            'like',
            'love',
            'haha',
            'wow',
            'sad',
            'angry',
        ];

        foreach ($emojis as $emoji){
            factory(App\Emoji::class)->create([
                'name'  =>  $emoji
            ]);
        }
    }
}
