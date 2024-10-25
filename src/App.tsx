import "./App.css";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./component/Header/Header";
import Filter from "./component/Filter/Filter";
import Aside from "./component/Aside/Aside";
import Tickets from "./component/Tickets/Tickets";
import { useEffect, useState } from "react";
import MobileAside from "./component/MobileAside/MobileAside";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 769);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main className="main">
          <div className="aside">{isMobile ? <MobileAside /> : <Aside />}</div>
          <div className="content">
            {isMobile ? "" : <Filter />}

            <Tickets />
          </div>
        </main>
      </div>{" "}
    </Provider>
  );
}

export default App;
