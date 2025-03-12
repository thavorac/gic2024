<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/articles', [ArticleController::class, 'getArticles']);
Route::post('/articles', [ArticleController::class, 'createArticle']);
Route::patch('/articles/{id}', [ArticleController::class, 'updateArticle']);
Route::delete('/articles/{id}', [ArticleController::class, 'deleteArticle']);
