import { LoaderFunctionArgs, redirect } from "react-router-dom";

export default function ProtectedLoader({ }: LoaderFunctionArgs) {
    const token = window.localStorage.getItem('auth_token')
    // If the user is not logged in and tries to access any url in "/intranet", we redirect them to `/login` 
    if (token === undefined || token === null) return redirect("/intranet/login");
    return null;
  }