import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "App.css";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${searchInput}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="homepage">
        <h2>Search by Destination:</h2>
        <form onSubmit={handleSubmit}>
          <input value={searchInput} onChange={handleInputChange}></input>
          <input className="submit" type="submit"></input>
        </form>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
