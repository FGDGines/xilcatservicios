import axios from "axios";
import { toast } from "react-toastify";

type TSignInProps = {
    username: string,
    password: string
}

interface AuthProvider {
    isAuthenticated: boolean;
    username: null | string;
    signin(data: TSignInProps): Promise<void>;
    signout(): Promise<void>;
  }
  

export const useAuthProvider= (): AuthProvider  => {
    let isAuthenticated = false;
    let username = null;

    const signin = async ({ username, password }: TSignInProps ) => {
        const res = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/login', { username, password })
        console.log('ressss', res)
        if (res.data.message) {
            toast.error(res.data.message)
            return;
        }
        if (res.data.token) {
            window.localStorage.setItem('auth_token', res.data.token)
        }
        isAuthenticated = true;
        username = username;
    }
    const signout = async () => {
        window.localStorage.removeItem('auth_token')
        isAuthenticated = false;
        username = "";
    }
    return {
        isAuthenticated,
        username,
        signin,
        signout
    } 
};