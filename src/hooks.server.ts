  // @ts-nocheck
  import { redirect } from "@sveltejs/kit";
  import { VerifyToken } from "$lib/utils/token"


  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // -- define the routes of we want to be possible to access without auth
  const unprotectedRoutes = [
    '/login',
  ];

  // -- verify if requested path is public
  function isPathAllowed(path: string) {
      return unprotectedRoutes.some(allowedPath =>
        path === allowedPath || path.startsWith(allowedPath + '/')
      );
    }

    export const handle = async ({event, resolve}) => {
      
      const sessionToken = event.cookies.get('authToken')

      if(isPathAllowed(event.url.pathname)) {
        if(sessionToken && VerifyToken(sessionToken)){
          throw redirect(302, '/acesso/dashboard')
        } else {
          const response = await resolve(event)
          return response
        }
      }

      if(!isPathAllowed(event.url.pathname)){

        if(!sessionToken) throw redirect(303, '/login')

        const decoded = VerifyToken(sessionToken);
  
        if((!decoded.authedUser || !decoded.token) && !isPathAllowed(event.url.pathname)){
          throw redirect(303, '/login')
        }
      }

      // event.locals =

      const response = await resolve(event)
      return response
    }