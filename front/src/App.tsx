import { useEffect } from "react";
import Modal from "./components/Modal";
import Landing from "./pages/Landing/Landing";
import { useAppStore } from "./store";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Politics from "./pages/Politics";
import Legal from "./pages/Legal";
import Cookies from "./pages/Cookies";
import { I18nextProvider } from 'react-i18next';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import i18n from './language/i18n';
import Toast from "./components/Toast";
import Blog from "./pages/Blog";
import Login from "./components/Intranet/Login";
import Layout from "./components/CMR/Layout";
import Main from "./components/Intranet/Main";
import Clients from "./components/Intranet/Clients";
import Client from "./components/Intranet/Client";
import Account from "./components/Intranet/Account";
import ProtectedLoader from './pages/Intranet/ProtectedLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/politics',
    element: <Politics />
  },
  {
    path: '/legal',
    element: <Legal />
  },
  {
    path: '/cookies',
    element: <Cookies />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/intranet',
    element:<>
      <Outlet />
    </> ,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'main',
        element: <Layout Component={Main} />,
        loader: ProtectedLoader
      },
      {
        path: 'clients',
        element: <Layout Component={Clients} />,
        loader: ProtectedLoader
      },
      {
        path: 'client/:id',
        element: <Layout Component={Client} />,
        loader: ProtectedLoader
      },
      {
        path: 'account/:id',
        element: <Layout Component={Account} />,
        loader: ProtectedLoader
      }
    ]
  }
])


const queryClient = new QueryClient()

function App() {
  const { modal, setModal } = useAppStore()

  useEffect(() => {
    const cookies = document.cookie.split(';')
    
    const hasCookies = cookies.some((cookie) => cookie.split('=')[0].trim() === 'areAccepted')

    if (hasCookies) return
    setModal({ type: 'cookie' })
  }, [document.cookie])


  return (
    <div className="relative">
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {
            modal.state && <Modal />
          }
          <Toast />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </I18nextProvider>
      
    </div>
  );
}

export default App;
