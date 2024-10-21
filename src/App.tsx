import "./App.css";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./component/Header/Header";
import Filter from "./component/Filter/Filter";
import Aside from "./component/Aside/Aside";
import Tickets from "./component/Tickets/Tickets";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main className="main">
          <div className="aside">
            <Aside />
          </div>
          <div className="content">
            <Filter />
            <Tickets />
          </div>
        </main>
      </div>{" "}
    </Provider>
  );
}

export default App;
