import jwt, { type JwtPayload } from 'jsonwebtoken';


interface AuthToken extends JwtPayload {
    authedUser: {
      login: string;
      token: string;
    };
  }

export function VerifyToken(authToken: string){
      const decoded = jwt.verify(authToken, import.meta.env.VITE_SECRET_INGREDIENT) as AuthToken;

      if(decoded.authedUser && decoded.token) return decoded
      else return false
    }