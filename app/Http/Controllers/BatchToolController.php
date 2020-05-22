<?php

namespace App\Http\Controllers;

use App\Tags;
use App\Thread;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\DocBlock\Tag;

class BatchToolController extends Controller
{
    protected $findKeyword = 'xxx';
    protected $replaceKeyword = 'yyy';

    public function deleteThread(Request $request){
        //delete thread: if thread (title or body) contains XXX, delete thread

        // return 'delete thread';
        $thread = Thread::
                    where('title', 'LIKE', "%{$this->findKeyword}%")
                    ->orWhere('body', 'LIKE', "%{$this->findKeyword}%")
                    ->delete()
                    ;
        session()->flash('successmessage','Delete Thread Successfully');
        return redirect()->route('admin.batchtools');
    }

    
    public function setAgeThirteen(Request $request){
        //set age 13: if thread (title, body, or tag) contains XXX, set age=13+

        $thread = Thread::
                    where('title', 'LIKE', "%{$this->findKeyword}%")
                    ->orWhere('body', 'LIKE', "%{$this->findKeyword}%")
                    ->update(['age_restriction'=>13])
                    ;
        
        session()->flash('successmessage','Set age 13 Successfully');
        return redirect()->route('admin.batchtools');
    }

    public function setAgeEighteen(Request $request){
        // set age 18: if thread (title, body, or tag) contains XXX, set age=18+
        $thread = Thread::
                    where('title', 'LIKE', "%{$this->findKeyword}%")
                    ->orWhere('body', 'LIKE', "%{$this->findKeyword}%")
                    ->update(['age_restriction'=>18])
                    ;
        
        session()->flash('successmessage','Set age 18 Successfully');

        return redirect()->route('admin.batchtools');
    }

    public function threadSearchReplace(Request $request){
        //  thread search & replace: every place where any thread (any title or body) contains XXX, replace with YYY

        $threads = Thread::
                    where('title', 'LIKE', "%{$this->findKeyword}%")
                    ->orWhere('body', 'LIKE', "%{$this->findKeyword}%")
                    ->get()
                    ;
        $threads->map(function($thread){
            $pattern = "/{$this->findKeyword}/i";
            $replacement = $this->replaceKeyword;
            $newTitle = preg_replace($pattern, $replacement, $thread->title);
            $newBody = preg_replace($pattern, $replacement, $thread->body);

            $thread->title = $newTitle;
            $thread->body = $newBody;
            $thread->save();
        });

        session()->flash('successmessage','Thread search & replace Successfully');
        return redirect()->route('admin.batchtools');

    }

    public function addTag(Request $request){
        // add tag: if thread (title, body, or tag) contains XXX, add tag YYY

        $threads = Thread::
                    where('title', 'LIKE', "%{$this->findKeyword}%")
                    ->orWhere('body', 'LIKE', "%{$this->findKeyword}%")
                    ->get()
                    ;
        $tag = Tags::where('name', strtolower($this->replaceKeyword))->first();

        if($tag){
            $tag->update(['name' => strtolower($this->replaceKeyword)]);
            $tag = $tag->fresh();

        }else {
            $tag = Tags::create(['name' => strtolower($this->replaceKeyword)]);
        }

        $threads->each(function($thread) use ($tag){
            $thread->tags()->syncWithoutDetaching([$tag->id]);
        });

    
        session()->flash('successmessage','Thread xxx add tag Successfully');
        return redirect()->route('admin.batchtools');

    }

    public function renameTag(Request $request){
        //  rename tag: rename tag XXX to YYY

        $tag = Tags::where('name', strtolower($this->findKeyword))->first();
        if($tag){
            $tag->update(['name' => strtolower($this->replaceKeyword)]);
        }

        session()->flash('successmessage','Rename tag XXX to YYY Successfully');
        return redirect()->route('admin.batchtools');
    }

    public function deleteTag(Request $request){
        //delete tag: delete tag XXX

        $tag = Tags::where('name', strtolower($this->findKeyword))->first();
        if($tag){
            $threads = $tag->threads;
            $threads->each(function($thread) use($tag){
                $thread->tags()->detach($tag->id);
            });
            $tag->delete();
        }

        session()->flash('successmessage','Delete tag XXX Successfully');
        return redirect()->route('admin.batchtools');
    }


}
