<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\AuthorResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticlesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => (string)$this->id,
            'title' => ucwords($this->title),
            'body' => $this->body,
            'author' => new AuthorResource($this->author),
            'created_at' => $this->created_at->format('d-m-Y'),
            'updated_at' => $this->updated_at->format('d-m-Y'),
        ];
    }
}
