import logo from './logo.svg';
import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";

function App() {
  return (
      <>
        <Header />
          <Home />
        <Footer />
      </>
  );
}

export default App;
