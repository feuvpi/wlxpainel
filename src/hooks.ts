  // @ts-nocheck
  import { redirect } from "@sveltejs/kit";
  import jwt from 'jsonwebtoken'
  // import { getUserById } from './store/db'

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // -- define the routes of we want to be possible to access without auth
  const unprotectedRoutes = [
    '/login',
  ];

  const protectedRoutes = [
    '/acesso/dashboard'
  ];

  // -- verify if requested path is public
  function isPathAllowed(path: string) {
      return unprotectedRoutes.some(allowedPath =>
        path === allowedPath || path.startsWith(allowedPath + '/')
      );
    }

    function verifyToken(authToken: string){
      const decoded = jwt.verify(authToken, import.meta.env.VITE_SECRET_INGREDIENT);
      if(decoded.authedUser && decoded.token) return decoded
      else return false
    }

    export const handle = async ({event, resolve}) => {
      
      const sessionToken = event.cookies.get('authToken')

      if(isPathAllowed(event.url.pathname)) {
        if(sessionToken && verifyToken(sessionToken)){
          throw redirect(302, '/acesso/dashboard')
        } else {
          const response = await resolve(event)
          return response
        }
      }

      if(isPathAllowed)

      if(!sessionToken) throw redirect(303, '/login')

      const decoded = jwt.verify(sessionToken, import.meta.env.VITE_SECRET_INGREDIENT);

      if((!decoded.authedUser || !decoded.token) && !isPathAllowed(event.url.pathname)){
        throw redirect(303, '/login')
      }
      
      const response = await resolve(event)
      return response
    }