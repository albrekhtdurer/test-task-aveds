import { Header } from "./components/header/header";
import { Main } from "./pages/main";
import styles from "./App.module.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Contacts } from "./pages/contacts";

function App() {
  const location = useLocation();
  const state = location.state as { background?: Location };
  return (
    <>
      <Header></Header>
      <div className={styles.content}>
      <Routes location={state?.background || location}>
            <Route path='/' element={<Main />} />
            <Route path='/contacts' element={<Contacts />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
