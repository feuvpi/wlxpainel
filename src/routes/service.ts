import { fail, redirect } from '@sveltejs/kit'
import jwt, { type JwtPayload } from 'jsonwebtoken';

// Define an interface representing the structure of your JWT payload
interface AuthToken extends JwtPayload {
  authedUser: {
    login: string;
    token: string;
  };
}

// export async function GET(event) {
//     const cookie = event.request.headers.get("cookie") || ""
//     const response = await fetch('http://api/protected', {credentials:'include', headers: {cookie}})


export const getCooperativas = async (cookie: string) => {
  
    const decodedToken = jwt.verify(cookie, import.meta.env.VITE_SECRET_INGREDIENT) as AuthToken;
    
    const token = decodedToken.token;

    const api_url = import.meta.env.VITE_API_BASE_URL
    console.log(api_url)
    const response = await fetch(`${api_url}/Cooperativa`, {
      method: 'GET', // or any other method
      headers: { token },
      credentials: 'include', // Include cookies in the request
    });

    // console.log(await response.text())
    const resp = await response.text();
    return { resp };

    // if (response.headers.get('content-type')?.includes('application/json')) {
    //     const json = await response.json();
    //     return { response, json };
    // } else {
    //     return { response };
    // }
};