import { useEffect } from "react";
import Modal from "./components/Modal";
import Landing from "./pages/Landing/Landing";
import { useStore } from "./store";

function App() {
  const { modal, setModal } = useStore()

  useEffect(() => {
    const cookies = document.cookie.split(';')
    
    const hasCookies = cookies.some((cookie) => cookie.split('=')[0].trim() === 'areAccepted')

    if (hasCookies) return
    setModal({ state: true, type: 'cookie' })
  }, [document.cookie])


  return (
    <div className="relative">
      <Landing />
      {
        modal.state && <Modal />
      }
      
    </div>
  );
}

export default App;
