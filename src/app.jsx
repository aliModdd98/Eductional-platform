import "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import LandingPage from "./components/Home/LandingPage";
import NavigateTo from "./router/Navigate";
import { Provider } from "react-redux";
// import Loader from './components/Loader/Loader';
import store from "./store/index";

function App() {
  // const { isLoading, teachers, courses, students } = useDataFetching();
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NavigateTo />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
