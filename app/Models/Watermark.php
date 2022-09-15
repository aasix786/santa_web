<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Watermark extends Model
{
    use HasFactory;
    protected $table='watermarks';
    protected $fillable=
        [
            'watermark',
        ];
}