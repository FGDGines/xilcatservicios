import Landing from "./pages/Landing/Landing";
import { I18nextProvider } from 'react-i18next';
import i18n from './language/i18n';

function App() {
  return <I18nextProvider i18n={i18n}>
    <Landing />
  </I18nextProvider>
}

export default App;
