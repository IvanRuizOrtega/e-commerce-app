<?php


namespace App\Http\Requests\Admin\Product;


use Illuminate\Foundation\Http\FormRequest;

final class UpdateProductRequest extends FormRequest
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
