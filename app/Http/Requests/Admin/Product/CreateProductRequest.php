<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

final class CreateProductRequest extends FormRequest
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
        return [
            'name' => [
                'required',
                'min:3',
                'max:255',
                'string'
            ],
            'slug' => [
                'required',
                'min:3',
                'max:255',
                function($a, $v, $f) {
                    if (!empty(\App\Models\Product::firstWhere('slug', Str::slug($v)))) {
                        $f('The '.$a.' has already been taken');
                    }
                }
            ],
            'image' => [
                'required',
                'file',
                'max:512000',
                'mimetypes:image/jpeg'
            ],
            'description' => [
                'nullable',
                'min:2',
                'max:400'
            ],
            'price' => [
                'required',
                'between:5,8',
                'regex:/^\d{1,3}(?:\.\d\d\d)*(?:,\d{1,2})?$/'
            ],
            'category' => [
                'required',
                'exists:categories,id'
            ]
        ];
    }
}
