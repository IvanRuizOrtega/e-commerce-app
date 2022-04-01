<?php


namespace Src\Resource\Traits\Response;


use Illuminate\Http\Response;

trait ApiResponse
{

    /**
     * @param $data
     * @param int $code
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function successResponse($data, int $code = Response::HTTP_OK)
    {
        return response($data, $code)->header('Content-Type', 'application/json');
    }

    /**
     * @param $message
     * @param $code
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function errorMessage($message, $code)
    {
        return response(['errors' => $message], $code)->header('Content-Type', 'application/json');
    }
}
