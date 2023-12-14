import { useEffect } from "react";
import Modal from "./components/Modal";
import Landing from "./pages/Landing/Landing";
import { useStore } from "./store";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Politics from "./pages/Politics";
import Legal from "./pages/Legal";
import Cookies from "./pages/Cookies";

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
  }
])
import { I18nextProvider } from 'react-i18next';
import i18n from './language/i18n';
import Toast from "./components/Toast";
import { ToastContainer } from "react-toastify";

function App() {
  const { modal, setModal, toast } = useStore()

  useEffect(() => {
    const cookies = document.cookie.split(';')
    
    const hasCookies = cookies.some((cookie) => cookie.split('=')[0].trim() === 'areAccepted')

    if (hasCookies) return
    setModal({ state: true, type: 'cookie' })
  }, [document.cookie])


  return (
    <div className="relative">
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
        {
          modal.state && <Modal />
        }
        <Toast />
      </I18nextProvider>
      
    </div>
  );
}

export default App;
