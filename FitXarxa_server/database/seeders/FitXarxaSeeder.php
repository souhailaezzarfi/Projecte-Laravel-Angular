<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Entrenador;
use App\Models\Sessio;

class FitXarxaSeeder extends Seeder

{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Crear entrenador
        $entrenador = Entrenador::create([
            'nom'     => 'Laura',
            'cognoms' => 'García López',
            'imatge'  => null
        ]);

        // Crear 2 sessions asociadas al entrenador
        Sessio::create([
            'titol'         => 'Yoga Matinal',
            'dataP'         => '2025-03-15',
            'places'        => 10,
            'entrenador_id' => $entrenador->id
        ]);

        Sessio::create([
            'titol'         => 'Pilates Avançat',
            'dataP'         => '2025-03-16',
            'places'        => 8,
            'entrenador_id' => $entrenador->id
        ]);
    }
}
