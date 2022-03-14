<?php

namespace Database\Factories\Admin;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id'=> rand(1,50),
            'gallery_id'=> rand(1,50),
            'title' => $this->faker->sentence,
            'body' => $this->faker->text,
            'posted_at' => $this->faker->dateTimeInInterval('-2 years' , '+5 days'),
            'image' => 'https://images.unsplash.com/photo-1577808426038-18219ad4f9c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80',
            'status' => $this->faker->boolean,
        ];
    }
}
