<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CreateThreadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rule = request()->hasFile('image_path') ? 'image|max:2048' : '';
        return [
            'title' => 'required|spamfree',
            'body' => 'required|spamfree',
            'channel_id' => 'required|exists:channels,id',
             //'g-recaptcha-response' => ['required', $recaptcha],
            'image_path'    => $rule,
            // 'age_restriction'  => 'numeric', Rule::in([0, 13, 18]),
        ];
    }


    public function messages()
    {
        return [
            'g-recaptcha-response.required' =>  'Please solve the captcha',
            'image_path.max' => 'Thread image may not be greater than 2048 kilobytes',
        ];
    }
}
