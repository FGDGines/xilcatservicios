interface AuthProvider {
    isAuthenticated: boolean;
    username: null | string;
    signin(username: string): Promise<void>;
    signout(): Promise<void>;
  }
  

export const useAuthProvider= (): AuthProvider  => {
    let isAuthenticated = false;
    let username = null;

    const signin = async (username: string) => {
        isAuthenticated = true;
        username = username;
        await new Promise((r) => setTimeout(r, 500)); // fake delay
    }
    const signout = async () => {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
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