import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'

export const actions = {
    default: async({ request, cookies }) => {
        const data = await request.formData();
        const login = data.get('email')?.toString()?? ""
        const senha = data.get('password')?.toString()?? ""
        const api_url = import.meta.env.VITE_API_BASE_URL

        if (!login) {
			return fail(400, { login, missing: true });
		}
        
            const response = await fetch(`${api_url}/Authentication/login`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login: login, senha: senha })
            }
        ) 
        if(response.ok){ 
            const token = await response.text();
            cookies.set('token', token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24
            })
            const authToken = jwt.sign({ authedUser:login, token: token }, import.meta.env.VITE_SECRET_INGREDIENT,{expiresIn:'24h'});
            cookies.set('authToken', authToken, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24
            });
            throw redirect(302, '/acesso/dashboard');
        } else {
            return fail(422, { errors: await response.json() });
    }
}
}