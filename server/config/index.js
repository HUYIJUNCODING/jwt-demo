
export const connectUrl = 'mongodb://localhost:27017/jwtdemo' 
export const port = process.env.PORT || 3000
export const baseApi = 'api';
export const secret = 'jwt_secret';
export const unless_path = [/\/api\/register/, /\/api\/login/]