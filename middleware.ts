// middleware.js
import { NextRequest, NextResponse } from 'next/server';

// Define the paths that do not require authentication
const publicPaths = ['/', '/login', '/register'];

export function middleware(req: NextRequest, resp: NextResponse) {
    const { cookies, url } = req;
    const currentPath = req.nextUrl.pathname;
    const jwt = cookies.get('token'); // Assuming the cookie is named 'token'

    console.log(currentPath,"Current Path")
    if(jwt && currentPath==="/login" || currentPath==="/register" ){
        return NextResponse.redirect(new URL('/dashboard',req.url))
    }

    // If the user is trying to access a public path, allow it
    if (publicPaths.includes(new URL(url).pathname)) {
        return NextResponse.next();
    }

    // If JWT token is present, allow the user to access the protected route
    if (jwt) {
        return NextResponse.next();
    }

    // If not authenticated, redirect to login page
    return NextResponse.redirect(new URL('/login', req.url));
}




export const config = {
    matcher: ['/dashboard', '/login', '/protected-route-2'], // Add protected routes here '/:path*'
};



// function isValidToken(): boolean {
//     // Call your API to check if the token is valid
//     // This example assumes a synchronous check; you might need to adjust this
//     try {
//         const response = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/logout-user`,
//             { withCredentials: true }
//         );
//         response.then((e) => {
//             return e.status === 200;
//         })
//         response.catch((e) => {
//             return false
//         })
//         return false

//     } catch (error) {
//         return false
//     }
// }