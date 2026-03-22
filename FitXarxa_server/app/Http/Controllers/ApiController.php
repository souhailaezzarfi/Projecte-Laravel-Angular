<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Sessio;
use App\Models\Entrenador;
use App\Models\Centre;


class ApiController extends Controller
{
    //-----------------Entrenadors----------------------------------
    function getEntrenadors()
    {
        $entrenadors = Entrenador::all();
        foreach ($entrenadors as $entrenador) {
            $entrenador->imatge = url(env('RUTA_IMATGES') . $entrenador->imatge);;
        }
        return response()->json($entrenadors);
    }


    function getEntrenador($id)
    {
        return Entrenador::find($id);
    }


    function createEntrenador(Request $request)
    {

        $entrenador = new Entrenador();

        $entrenador->nom = $request->nom;
        $entrenador->cognoms = $request->cognoms;

        if ($request->file('imatge')) {

            $file = $request->file('imatge');

            $idAleatori = uniqid();
            $extensio = $file->getClientOriginalExtension();

            $filename = Str::slug($request->nom . "_" . $request->cognoms) .
                "_" . $idAleatori . "." . $extensio;

            $file->move(public_path(env('RUTA_IMATGES')), $filename);

            $entrenador->imatge = $filename;
        }

        $entrenador->save();

        return response()->json($entrenador);
    }

    function deleteEntrenador($id)
    {
        $entrenador = Entrenador::find($id);
        $entrenador->delete();
        return $entrenador;
    }

    function updateEntrenador(Request $request, $id)
    {
        $entrenador = Entrenador::find($id);
        $entrenador->nom = $request->nom;
        $entrenador->cognoms = $request->cognoms;

        if ($request->file('imatge')) {
            // Borra imagen anterior
            if ($entrenador->imatge) {
                $rutaAnterior = public_path(env('RUTA_IMATGES') . $entrenador->imatge);
                if (file_exists($rutaAnterior)) {
                    unlink($rutaAnterior);
                }
            }

            $file = $request->file('imatge');
            $idAleatori = uniqid();
            $extensio = $file->getClientOriginalExtension();
            $filename = Str::slug($request->nom . "_" . $request->cognoms) .
                "_" . $idAleatori . "." . $extensio;
            $file->move(public_path(env('RUTA_IMATGES')), $filename);
            $entrenador->imatge = $filename;
        }

        $entrenador->save();
        return response()->json($entrenador);
    }

    public function getEntrenadorImatge($id)
    {
        $entrenador = Entrenador::findOrFail($id);

        $pathToFile = public_path(env('RUTA_IMATGES') . '/' . $entrenador->imatge);

        if (!file_exists($pathToFile)) {
            return response()->json(['error' => 'Imatge no trobada'], 404);
        }

        $mime = mime_content_type($pathToFile);
        return response()->file($pathToFile, ['Content-Type' => $mime]);
    }


    //-----------------Sessios----------------------------------
    function getSessios()
    {
        $sessios = Sessio::with('entrenador')->get();
        return response()->json($sessios);
    }

    function getSessio($id)
    {
        return Sessio::find($id);
    }

    function createSessio(Request $request)
    {
        return Sessio::create($request->all());
    }

    function deleteSessio($id)
    {
        $sessio = Sessio::find($id);
        $sessio->delete();
        return $sessio;
    }

    function updateSessio(Request $request, $id)
    {
        $sessio = Sessio::find($id);

        if (!$sessio) {
            return response()->json(['message' => 'Sessio no trobat'], 404);
        }

        $sessio->update($request->all());

        return $sessio;
    }

    //-----------------Centres-Sessios----------------------------------

    function addCentreSessio($idCentre, $idSessio)
    {
        $centre = Centre::find($idCentre);
        $centre->sessios()->attach($idSessio);

        return response()->json([
            'message' => 'success',
            'sessio_id' => $idSessio,
            'centre_id' => $idCentre
        ]);
    }

    function removeCentreSessio($idCentre, $idSessio)
    {
        $centre = Centre::find($idCentre);
        $centre->sessios()->detach($idSessio);

        return response()->json([
            'message' => 'success',
            'sessio_id' => $idSessio,
            'centre_id' => $idCentre
        ]);
    }

    function cercaCentreSessio($idSessio)
    {
        $sessio = Sessio::find($idSessio);
        $centres = $sessio->centres;

        return response()->json([
            'message' => 'success',
            'sessio_id' => $idSessio,
            'centres' => $centres
        ]);
    }

    //-----------------Centres----------------------------------

    function getCentres()
    {
        $centres = Centre::all();
        return response()->json($centres);
    }

    function getCentre($id)
    {
        return Centre::find($id);
    }

    function createCentre(Request $request)
    {
        return Centre::create($request->all());
    }

    function deleteCentre($id)
    {
        $centre = Centre::find($id);
        $centre->delete();
        return $centre;
    }

    function updateCentre(Request $request, $id)
    {
        $centre = Centre::find($id);
        $centre->update($request->all());
        return $centre;
    }
}
