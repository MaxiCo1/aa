import { AccessDeniedError } from "@/service/common/errors";
import authService from "@/service/auth/auth.service";
import LoginScheme from "@/schemes/login.scheme";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { username, password } = await LoginScheme.validate(
    await request.json()
  );

  try {
    const loginResponse = await authService.authenticate(username, password);

    (await cookies()).set("SocialSessionID", loginResponse.sessionId, {
      expires: loginResponse.expiresAt,
      httpOnly: true,
      secure: true,
      domain: "localhost",
      path: "/",
    });
    (await cookies()).set("SocialUsername", loginResponse.user.username, {
      expires: loginResponse.expiresAt,
      httpOnly: false,
      secure: true,
      domain: "localhost",
      path: "/",
    });

    return new Response(JSON.stringify(loginResponse.user), {
      status: 200,
    });
  } catch (e) {
    if (e instanceof AccessDeniedError) {
      return new Response(
        JSON.stringify({
          error: "Invalid credentials for user:" + username,
        }),
        {
          status: 403,
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: "Internal server error",
        }),
        {
          status: 500,
        }
      );
    }
  }
}
