import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";
import Banner from "./components/Banner";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data) that takes some time
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the operation is done
    }, 3000);
  }, []);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  return (
    <>
      {isLoading ? (
        <div className="sweet-loading absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <ClipLoader
            color={color}
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Header />
          <Slider />
          <Banner />
          <GenreMovieList />
        </>
      )}
    </>
  );
}

export default App;
