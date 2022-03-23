<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

//    https://laravel.com/docs/9.x/eloquent#local-scopes
//    use scopes to make life easier
//    public function scopeActive()
//    {
//        return $this->where('id' , 500);
//    }
}