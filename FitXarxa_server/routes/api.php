<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApiController;



// --------------------Entrenadors----------------------------------
//Llistar entrenadors 
Route::get('/entrenadors', [ApiController::class, 'getEntrenadors']);
//Consultar un entenador concret
Route::get('/entrenador/{id}', [ApiController::class, 'getEntrenador']);
//Crear Entrenador
Route::post('/entrenador', [ApiController::class, 'createEntrenador']);
//Editar un Entrenador
Route::post('/entrenador/{id}', [ApiController::class, 'updateEntrenador']);
//Eliminar Entrenador
Route::delete('/entrenador/{id}', [ApiController::class, 'deleteEntrenador']);

Route::get('/entrenador/{id}/imatge', [ApiController::class, 'getEntrenadorImatge']);



// --------------------Sessios----------------------------------
//Llistar sessios
Route::get('/sessios', [ApiController::class, 'getSessios']);
//Consultar una sessió concreta
Route::get('/sessio/{id}', [ApiController::class, 'getSessio']);
//Crear Sessio
Route::post('/sessio', [ApiController::class, 'createSessio']);
//Editar un Sessio
Route::put('/sessio/{id}', [ApiController::class, 'updateSessio']);
//Eliminar Sessio
Route::delete('/sessio/{id}', [ApiController::class, 'deleteSessio']);



  //-----------------Centres-Sessios----------------------------------
  Route::post('/centre-sessio/add/{idCentre}/{idSessio}', [ApiController::class, 'addCentreSessio']);
  Route::delete('/centre-sessio/remove/{idCentre}/{idSessio}', [ApiController::class, 'removeCentreSessio']);
  Route::get('/centres/cerca-per-sessio/{idSessio}', [ApiController::class, 'cercaCentreSessio']);


// --------------------Centres----------------------------------

//Llistar Centres
Route::get('/centres', [ApiController::class, 'getCentres']);
//Consultar un centre concret
Route::get('/centre/{id}', [ApiController::class, 'getCentre']);
//Crear un Centre
Route::post('/centre', [ApiController::class, 'createCentre']);
//Editar un Centre
Route::put('/centre/{id}', [ApiController::class, 'updateCentre']);
//Eliminar un Centre
Route::delete('/centre/{id}', [ApiController::class, 'deleteCentre']);






