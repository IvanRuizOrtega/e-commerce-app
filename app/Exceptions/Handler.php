<?php

namespace App\Exceptions;

use ErrorException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Src\Resource\Traits\Response\ApiResponse;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    use ApiResponse;

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {

        $this->renderable(function (ValidationException $e) {
            $errors = $e->validator->errors()->getMessages();
            return $this->errorMessage($errors, Response::HTTP_UNPROCESSABLE_ENTITY);
        });

        $this->renderable(function (ModelNotFoundException $e) {
            return $this->errorMessage("Does not exist any instance given",
                Response::HTTP_NOT_FOUND);
        });

        $this->renderable(function (AuthorizationException $e) {
            return $this->errorMessage($e->getMessage(),
                Response::HTTP_FORBIDDEN);
        });

        $this->renderable(function (AuthenticationException $e) {
            return $this->errorMessage($e->getMessage(),
                Response::HTTP_UNAUTHORIZED);
        });

        $this->renderable(function (ErrorException $e) {
            return $this->errorMessage($e->getMessage(),
                Response::HTTP_UNAUTHORIZED);
        });

        $this->renderable(function (MethodNotAllowedHttpException $e) {
            return $this->errorMessage($e->getMessage(),
                Response::HTTP_UNAUTHORIZED);
        });

        $this->renderable(function (NotFoundHttpException $e) {
            return $this->errorMessage(Response::$statusTexts[$e->getStatusCode()],
                Response::HTTP_NOT_FOUND);
        });

        $this->renderable(function (AccessDeniedHttpException $e) {
            return $this->errorMessage(Response::$statusTexts[$e->getStatusCode()],
                Response::HTTP_FORBIDDEN);
        });

    }

}
