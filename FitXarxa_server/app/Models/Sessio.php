<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;



class Sessio extends Model
{

    protected $fillable = ['titol', 'dataP', 'places', 'entrenador_id'];


    public function entrenador(): BelongsTo
    {
        return $this->belongsTo(Entrenador::class);
    }

      public function centres(): BelongsToMany
    {
        return $this->belongsToMany(Centre::class);
    }
}
