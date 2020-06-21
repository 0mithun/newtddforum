<?php

namespace App\Http\Controllers;

use DB;
use App\Tags;
use App\User;
use App\Thread;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\DocBlock\Tag;

class BatchToolController extends Controller
{
    protected $findKeyword = 'xxx';
    protected $replaceKeyword = 'yyy';

    /**
     * Delete thread by field
     */
    public function deleteThread(Request $request){
        
        

        if($request->field == 'delete_thread_title'){
            $request->validate([
                'delete_thread_title' =>  'required'
            ],[
                'delete_thread_title.required'  => 'The title field is required.'
            ]);

            $thread = Thread::
                    where('title', 'LIKE', "%{$request->delete_thread_title}%")
                    ->delete()
                    ;

        }else if($request->field == 'delete_thread_body'){
            $request->validate([
                'delete_thread_body' =>  'required'
            ],[
                'delete_thread_body.required'  => 'The body field is required.'
            ]);
            
            $thread = Thread::
                    where('body', 'LIKE', "%{$request->delete_thread_body}%")
                    ->delete()
                    ;
            
        }else if($request->field == 'delete_thread_tag'){
            $request->validate([
                'delete_thread_tag' =>  'required'
            ],[
                'delete_thread_tag.required' => 'The tag field is required.'
            ]);

            $tag = Tags::where('name', strtolower($request->delete_thread_tag))->first();
            if($tag){
                $threads = $tag->threads;
                $threads->each(function($thread) use($tag){
                    $thread->tags()->detach($tag->id);
                    $thread->delete();
                });

            }else{
                session()->flash('errormessage','No tag found');
                return redirect()->route('admin.batchtools');
            }
        }
        
        session()->flash('successmessage','Thread delete Successfully');
        return redirect()->route('admin.batchtools');

    }

    /**
     * Set age 13+ by fields
     */
    
    public function setAgeThirteen(Request $request){

        if($request->field == 'title_13'){
            $request->validate([
                'title_13' =>  'required'
            ],[
                'title_13.required'  => 'The title field is required.'
            ]);
            $thread = Thread::
                    where('title', 'LIKE', "%{$request->title_13}%")
                    ->update(['age_restriction'=>13])
                    ;
        }else if($request->field == 'body_13'){
            $request->validate([
                'body_13' =>  'required'
            ],[
                'body_13.required'  => 'The body field is required.'
            ]);

            $thread = Thread::
                    where('body', 'LIKE', "%{$request->body_13}%")
                    ->update(['age_restriction'=>13])
                    ;
        }else if($request->field == 'tag_13'){
            $request->validate([
                'tag_13' =>  'required'
            ],[
                'tag_13.required' => 'The tag field is required.'
            ]);
            $tag = Tags::where('name', strtolower($request->tag_13))->first();
            if($tag){
                $tag->threads->each(function($thread){
                    $thread->age_restriction = 13;
                    $thread->update();
                });
            }else{
                session()->flash('errormessage','No tag found');
                return redirect()->route('admin.batchtools');
            }
        }
        
        session()->flash('successmessage','Set age 13 Successfully');
        return redirect()->route('admin.batchtools');
    }

    /**
     * Set Age 18+ by fields
     */

    public function setAgeEighteen(Request $request){
        if($request->field == 'title_18'){
            $request->validate([
                'title_18' =>  'required'
            ],[
                'title_18.reqired' => 'The title field is required.'
            ]);

            $thread = Thread::
                    where('title', 'LIKE', "%{$request->title_18}%")
                    ->update(['age_restriction'=>18])
                    ;
        }else if($request->field == 'body_18'){
            $request->validate([
                'body_18' =>  'required'
            ],[
                'body_18.reqired' => 'The body field is required.'
            ]);

            $thread = Thread::
                    where('body', 'LIKE', "%{$request->body_18}%")
                    ->update(['age_restriction'=>18])
                    ;
        }else if($request->field == 'tag_18'){
            $request->validate([
                'tag_18' =>  'required'
            ],[
                'tag_18.reqired' => 'The tag field is required.'
            ]);

            $tag = Tags::where('name', strtolower($request->tag_18))->first();
            if($tag){
                $tag->threads->each(function($thread){
                    $thread->age_restriction = 18;
                    $thread->update();
                });
            }else{
                session()->flash('errormessage','No tag found');
                return redirect()->route('admin.batchtools');
            }
        }

        session()->flash('successmessage','Set age 18 Successfully');
        return redirect()->route('admin.batchtools');
    }


    /**
     * Thread search & replace by fields
     */

    public function threadSearchReplace(Request $request){

        if($request->field == 'replace_body'){
            $request->validate([
                'replace_body_old' =>  'required',
                'replace_body_new' =>  'required'
            ],[
                'replace_body_old.reqired' => 'The old body field is required.',
                'replace_body_new.reqired' => 'The new body field is required.'
            ]);

            $threads = Thread::
                    where('body', 'LIKE', "%{$request->replace_body_old}%")
                    ->get()
                    ;
            
            $threads->map(function($thread) use($request){
                $pattern = "/{$request->replace_body_old}/i";
                $replacement = $request->replace_body_new;
                $newBody = preg_replace($pattern, $replacement, $thread->body);
                $thread->body = $newBody;
                $thread->save();
            });

            session()->flash('successmessage','Thread body replace Successfully');
            return redirect()->route('admin.batchtools');
            
        }else if($request->field == 'replace_title'){
            $request->validate([
                'replace_title_old' =>  'required',
                'replace_title_new' =>  'required',
            ],[
                'replace_title_old.reqired' => 'The old title field is required.',
                'replace_title_new.reqired' => 'The new title field is required.',
            ]);
            
            $threads = Thread::
                where('body', 'LIKE', "%{$request->replace_body_old}%")
                ->get()
                ;
            $threads->map(function($thread) use($request){
                $pattern = "/{$request->replace_title_old}/i";
                $replacement = $request->replace_title_new;
                $newTitle = preg_replace($pattern, $replacement, $thread->title);
                $thread->title = $newTitle;
                $thread->save();
            });

            session()->flash('successmessage','Thread title replace Successfully');
            return redirect()->route('admin.batchtools');            
        }
    }

    /**
     * Add tag by fields
     */
    public function addTag(Request $request){
        if($request->field == 'add_tag_body'){
            $request->validate([
                'add_tag_body' =>  'required',
                'add_tag_body_tag_name' =>  'required'
            ],[
                'add_tag_body.required' => 'The body field is required.',
                'add_tag_body_tag_name.required' => 'The tag name field is required.'
            ]);

            $threads = Thread::
                        where('body', 'LIKE', "%{$request->add_tag_body}%")
                        ->get()
                        ;
            
            $tag = Tags::where('name', strtolower($request->add_tag_body_tag_name))->first();            
            if(!$tag){
                $tag = Tags::create(['name' => strtolower($request->add_tag_body_tag_name)]);
            }          

            $threads->each(function($thread) use ($tag){
                $thread->tags()->syncWithoutDetaching([$tag->id]);
            });
        
            session()->flash('successmessage', "Tag {$request->add_tag_body_tag_name} add successfully");
            return redirect()->route('admin.batchtools');            
        }else if($request->field == 'add_tag_title'){
            $request->validate([
                'add_tag_title' =>  'required',
                'add_tag_title_tag_name' =>  'required'
            ],[
                'add_tag_title.required' => 'The title field is required.',
                'add_tag_title_tag_name.required' => 'The tag name field is required.'
            ]);           

            $threads = Thread::
                        where('title', 'LIKE', "%{$request->add_tag_title}%")
                        ->get()
                        ;

            $tag = Tags::where('name', strtolower($request->add_tag_title_tag_name))->first();            
            if(!$tag){
                $tag = Tags::create(['name' => strtolower($request->add_tag_title_tag_name)]);
            }

            $threads->each(function($thread) use ($tag){
                $thread->tags()->syncWithoutDetaching([$tag->id]);
            });
        
            session()->flash('successmessage', "Tag {$request->add_tag_title_tag_name} add successfully");
            return redirect()->route('admin.batchtools');
        }else if($request->field == 'add_tag_with_tag'){
            $request->validate([
                'add_tag_with_tag' =>  'required',
                'add_tag_with_tag_tag_name' =>  'required'
            ],[
                'add_tag_with_tag.required' => 'The old tag name field is required.',
                'add_tag_with_tag_tag_name.required' => 'The tag name field is required.'
            ]);

            $old_tag = Tags::where('name', strtolower($request->add_tag_with_tag))->first();
            if($old_tag){
                $new_tag = Tags::where('name', strtolower($request->add_tag_with_tag_tag_name))->first();                
                if(!$new_tag){
                    $new_tag = Tags::create(['name' => strtolower($request->add_tag_with_tag_tag_name)]);
                }
                $old_tag->threads->each(function($thread) use($new_tag){
                    $thread->tags()->syncWithoutDetaching([$new_tag->id]);
                });
            }else{
                session()->flash('errormessage','Old tag not found');
                return redirect()->route('admin.batchtools');
            }
            
            session()->flash('successmessage', "Tag {$request->add_tag_with_tag_tag_name} add successfully");
            return redirect()->route('admin.batchtools');
        }
    }

    /**
     * Rename tag by value
     */
    public function renameTag(Request $request){
        $request->validate([
            'old_tag_name' =>  'required',
            'new_tag_name' =>  'required'
        ]);

        $tag = Tags::where('name', strtolower($request->old_tag_name))->first();
        if($tag){
            $tag->update(['name' => strtolower($request->new_tag_name)]);
            session()->flash('successmessage',"Rename tag {$request->old_tag_name} to {$request->new_tag_name} Successfully");
            return redirect()->route('admin.batchtools');
        }else{
            session()->flash('errormessage','Old tag not found');
            return redirect()->route('admin.batchtools');
        }
    }

    /**
     * Delete tag by value
     */

    public function deleteTag(Request $request){
        $request->validate([
            'delete_tag_name' =>  'required',
        ],[
            'delete_tag_name.required'  =>  'The tag name field is required.'
        ]);

        $tag = Tags::where('name', strtolower($request->delete_tag_name))->first();
        if($tag){
            $threads = $tag->threads;
            $threads->each(function($thread) use($tag){
                $thread->tags()->detach($tag->id);
            });
            $tag->delete();
        }else{
            session()->flash('errormessage','Tag not found');
            return redirect()->route('admin.batchtools');
        }

        session()->flash('successmessage',"Delete tag {$request->delete_tag_name} Successfully");
        return redirect()->route('admin.batchtools');
    }


    /**
     * Thread add emoji by fields  with admin user
     */
    public function addEmoji(Request $request){
        $request->validate([
            'add_emoji_tag_name' =>  'required',
            'emoji_name' =>  'required',
        ],[
            'add_emoji_tag_name.required'    =>  'The tag name field is required.',
            'emoji_name.required'    =>  'The emoji field is required.'
        ]);
        
        
        $tag = Tags::where('name', strtolower($request->add_emoji_tag_name))->first();
        if($tag){
            $type = $request->emoji_name;
            $userId = 1; //Admin user id = 1
            $tag->threads->each(function($thread) use($userId,$type){
                if($this->isVote($thread->id, $userId)){
                    $this->removeVote($thread->id, $userId);                
                }
                $thread->emojis()->attach($type,['user_id'=> $userId]);

            });
        }else{
            session()->flash('errormessage','Tag not found');
            return redirect()->route('admin.batchtools');
        }


        session()->flash('successmessage','Emoji add Successfully');
        return redirect()->route('admin.batchtools');
    }


    /**
     * Thread set famous by fields
     */
    public function setFamaus(Request $request){

        if($request->field == 'set_famous_body'){
            $request->validate([
                'set_famous_body' =>  'required',
                'set_famous_body_category' =>  'required'
            ],[
                'set_famous_body.required' => 'The body field is required.',
                'set_famous_body_category.required' => 'The famous field is required.'
            ]);            

            $threads = Thread::
                    where('body', 'LIKE', "%{$request->set_famous_body}%")
                    ->get()
                    ;
            $this->saveFamous($threads, $request->set_famous_body_category); 
        }else if ($request->field == 'set_famous_title'){
            $request->validate([
                'set_famous_title' =>  'required',
                'set_famous_title_category' =>  'required'
            ],[
                'set_famous_title.required' => 'The title field is required.',
                'set_famous_title_category.required' => 'The famous field is required.'
            ]);            

            $threads = Thread::
                    where('body', 'LIKE', "%{$request->set_famous_title}%")
                    ->get()
                    ;
            $this->saveFamous($threads, $request->set_famous_title_category);
        }else if ($request->field == 'set_famous_tag'){
            $request->validate([
                'set_famous_tag' =>  'required',
                'set_famous_tag_category' =>  'required'
            ],[
                'set_famous_tag.required' => 'The tag field is required.',
                'set_famous_tag_category.required' => 'The famous field is required.'
            ]);            

            $tag = Tags::where('name', strtolower($request->set_famous_tag))->first();
            if($tag){
                $threads = $tag->threads;
                $this->saveFamous($threads, $request->set_famous_tag_category);
            }else{
                session()->flash('errormessage','Tag not found');
                return redirect()->route('admin.batchtools');
            }
        }
        session()->flash('successmessage','Thread famous Successfully');
        return redirect()->route('admin.batchtools');
    }

    /**
     * Thread replace source field
     */
    public function replaceSource(Request $request){
        $request->validate([
            'old_source' =>  'required',
            'new_source' =>  'required'
        ]);

        $threads = Thread::
                where('source', 'LIKE', "%{$request->old_source}%")
                ->get()
                ;

        $threads->map(function($thread) use($request){
            $pattern = "/{$request->old_source}/i";
            $replacement = $request->new_source;
            $newSource = preg_replace($pattern, $replacement, $thread->source);
            $thread->source = $newSource;
            $thread->save();
        });

        session()->flash('successmessage','Thread source replace Successfully');
        return redirect()->route('admin.batchtools');
    }


    /**
     * Thread assign to another user where username & field
     */
    public function assignUser(Request $request){

        if($request->field == 'assign_user_body'){
            $request->validate([
                'assign_user_body' =>  'required',
                'assign_user_body_username' =>  'required'
            ],[
                'assign_user_body.required' => 'The body field is required.',
                'assign_user_body_username.required' => 'The username field is required.'
            ]);            

            $threads = Thread::
                    where('body', 'LIKE', "%{$request->assign_user_body}%")
                    ->get()
                    ;
            $this->assignTouUser($threads, $request->assign_user_body_username);
            session()->flash('successmessage', "Assign user to {$request->assign_user_body_username} successfully");
            return redirect()->route('admin.batchtools');
            
        }else if ($request->field == 'assign_user_title'){
            $request->validate([
                'assign_user_title' =>  'required',
                'assign_user_title_username' =>  'required'
            ],[
                'assign_user_title.required' => 'The title field is required.',
                'assign_user_title_username.required' => 'The username field is required.'
            ]);            

            $threads = Thread::
                    where('body', 'LIKE', "%{$request->assign_user_title}%")
                    ->get()
                    ;
            $this->assignTouUser($threads, $request->assign_user_title_username);
            session()->flash('successmessage', "Assign user to {$request->assign_user_title_username} successfully");
            return redirect()->route('admin.batchtools');
        }else if ($request->field == 'assign_user_tag'){
            $request->validate([
                'assign_user_tag' =>  'required',
                'assign_user_tag_username' =>  'required'
            ],[
                'assign_user_tag.required' => 'The tag is required.',
                'assign_user_tag_username.required' => 'The username field is required.'
            ]);            

            $tag = Tags::where('name', strtolower($request->assign_user_tag))->first();
            if($tag){
                $threads = $tag->threads;
                $this->assignTouUser($threads, $request->assign_user_tag_username);
                session()->flash('successmessage', "Assign user to {$request->assign_user_tag_username} successfully");
                return redirect()->route('admin.batchtools');
            }else{
                session()->flash('errormessage','Tag not found');
                return redirect()->route('admin.batchtools');
            }
        }        
    }

    /**
     * Check is thread voted
     */
    private function isVote($thread, $user){
        $count = DB::table('thread_emoji')
                    ->where('thread_id', $thread)
                    ->where('user_id', $user)
                    ->first();         
        return $count;
    }

    /**
     * Remove thread vote
     */

    private function removeVote($thread, $user){
        DB::table('thread_emoji')
        ->where('thread_id', $thread)
        ->where('user_id', $user)
        ->delete(); 
    }

    /**
     * Set Famous Categoy to thread
     */
    public function saveFamous($threads, $famous){
        $threads->map(function($thread) use($famous){
            if($thread->category !=null){
                 $categories = explode('|', $thread->category);
                 \array_push($categories, $famous);
                 $categories = \array_unique($categories);
                 $categories = implode('|', $categories);
                 $thread->category = $categories;
            }else{
                 $thread->category = $famous;
            }

            $thread->save();
         });
    }

    /**
     * Thread assign to another user by username
     */
    public function assignTouUser($threads, $username){
        $user = User::where('username', strtolower($username))->first();

        if($user){
            $threads->map(function($thread) use($user){
                $thread->user_id = $user->id;
                $thread->save();
            });
        }else{
            session()->flash('errormessage','User not found');
            return redirect()->route('admin.batchtools');
        }
    }
}
