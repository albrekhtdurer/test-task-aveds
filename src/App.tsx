import { Header } from "./components/header/header";
import { Main } from "./pages/main";
import styles from "./App.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Contacts } from "./pages/contacts";
import { Form } from "./components/form/form";
import { Modal } from "./components/modal/modal";

function App() {
  const location = useLocation();
  const state = location.state as { background?: Location };
  const navigate = useNavigate();
  const onModalClose = () => navigate(-1);

  return (
    <>
      <Header></Header>
      <div className={styles.content}>
      <Routes location={state?.background || location}>
            <Route path='/' element={<Main />} />
            <Route path='/contacts' element={<Contacts />} />
      </Routes>
      {state?.background && (
            <Routes>
              <Route
                path='/login'
                element={<Modal title='Авторизация' onClose={onModalClose}><Form></Form></Modal>}
              />
            </Routes>
      )}
      </div>
    </>
  );
}

export default App;
