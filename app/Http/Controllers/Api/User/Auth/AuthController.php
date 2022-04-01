<?php


namespace App\Http\Controllers\Api\User\Auth;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Src\Resource\Traits\Response\ApiResponse;

final class AuthController extends Controller
{
    use ApiResponse;

    /**
     * AuthController constructor.
     */
    public function __construct()
    {
        $this->middleware(\Src\Resource\Constants\Constant::AUTH_USER)->except('login');
    }

    /**
     * @param Request $request
     * @return mixed
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        $resp = array(
            'access_token' => $user->createToken('appToken')->plainTextToken,
            'token_type' => 'Bearer',
        );
        return $this->successResponse($resp);
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function logout()
    {
        auth('user')->user()->currentAccessToken()->delete();
        return $this->successResponse('Logged out successfully');
    }
}
