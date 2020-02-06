<?php

namespace App\Http\Controllers\Api;

use App\Review;
use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function show($id)
    {
    	return new ReviewResource(Review::findOrFail($id));
    }
}
