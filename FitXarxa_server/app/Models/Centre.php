<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Centre extends Model
{
    //

    protected $fillable = ['nom', 'adresa'];


    public function sessios(): BelongsToMany
    {
        return $this->belongsToMany(Sessio::class);
    }
}
