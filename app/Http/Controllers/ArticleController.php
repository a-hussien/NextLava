<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Http\Resources\ArticlesResource;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = ArticlesResource::collection(Article::latest()->get());

        return response()->json([
            'status' => 'Successful Request',
            'data' => $articles,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        $request->validated($request->safe()->all());

        try {

            $article = Article::create([
                'user_id' => auth()->user()->id,
                'title' => $request->title,
                'body' => $request->body,
            ]);

            return response()->json([
               'status' => 'Created Successfully',
                'data' => $article,
            ], 201);

        } catch (\Throwable $th) {
            throw $th;

           return response()->json([
                'status' => 'Failed Request',
                'error' => $th->getMessage(),
            ], 400);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return response()->json([
            'status' => 'Successful Request',
            'data' => new ArticlesResource($article),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        $validated = $request->validated($request->safe()->all());

        $article->update($validated);

        return response()->json([
           'status' => 'Updated Successfully',
            'data' => new ArticlesResource($article),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->noContent();
    }
}
