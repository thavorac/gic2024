<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategories()
    {
        $categories = Category::all();
        return response()->json(['message'=> 'success', 'data'=> $categories]);
    }
    public function createCategory(Request $request)
    {
        $category = new Category();
        $category->name = $request->name;
        $category->save();
        return response()->json($category);
    }
}
