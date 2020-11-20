<?php

namespace App\Http\Controllers;

use App\Tags;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function update(Request $request, Tags $tag){
        $description = $request->description ." ".$request->license." ".$request->amazon;

        $tag->update(['description'=> $description]);

        if($request->hasFile('photo')){
            $tag_thumb = $tag->photo;
            if (file_exists($tag_thumb)) {
                unlink($tag_thumb);
            }

            $extension = $request->file('photo')->getClientOriginalExtension();
            $file_name = \md5(\uniqid().\now()) . "." . $extension;
            $file_path = $request->photo->storeAs('tags', $file_name);
            $tag->photo = 'uploads/' . $file_path;   


            $tag->save();
            return \response()->json(['message'=>'success'], 200);
        }

    }
}
