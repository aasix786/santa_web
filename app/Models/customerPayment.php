<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customerPayment extends Model
{
    use HasFactory;

    protected $table ='customer_payments';
    protected $fillable=
        ['customer_id','payment_status','paypal_key'
        ];

}
