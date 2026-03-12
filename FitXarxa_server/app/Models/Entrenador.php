<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Entrenador extends Model
{
    protected $fillable = ['nom', 'cognoms', 'imatge'];

    public function sessios(): HasMany
    {
        return $this->hasMany(Sessio::class);
    }
}
