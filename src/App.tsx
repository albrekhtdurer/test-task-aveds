import { Header } from "./components/header/header";
import { Main } from "./pages/main";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.content}>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
