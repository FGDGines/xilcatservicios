import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { useAuthProvider } from "../../hooks/useAuthProvider";

export default function ProtectedLoader({ request }: LoaderFunctionArgs) {
    const { isAuthenticated } = useAuthProvider()
    // If the user is not logged in and tries to access any url in "/intranet", we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!isAuthenticated) {
    //   let params = new URLSearchParams();
    //   params.set("from", new URL(request.url).pathname);
      return redirect("/intranet/login");
    }
    return null;
  }