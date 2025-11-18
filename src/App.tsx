import { Header } from "./components/header/header";
import { Main } from "./pages/main";
import styles from "./App.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Contacts } from "./pages/contacts";
import { Form } from "./components/form/form";
import { Modal } from "./components/modal/modal";
import { User } from "./pages/user";
import { checkAuthorization } from "./utils/utils";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./components/protectedRoute/protectedRoute";

type User = {
  name: string;
  login: string;
};

function App() {
  const location = useLocation();
  const state = location.state as { background?: Location };
  const navigate = useNavigate();
  const onModalClose = () => navigate(-1);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const result = checkAuthorization();
    if (result) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUserData(result);
    }
  }, []);
  
  const isAuthorized = Boolean(userData?.name && userData.login);

  return (
    <>
      <Header></Header>
      <div className={styles.content}>
        <Routes location={state?.background || location}>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/user" element={<User name={userData?.name || ''} />}/>
        </Routes>
        {state?.background && (
          <Routes>
            <Route element={<ProtectedRoute isAuthorized={isAuthorized}/>}>
            <Route
              path="/login"
              element={
                <Modal title="Авторизация" onClose={onModalClose}>
                  <Form></Form>
                </Modal>
              }
            />
            </Route>
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
