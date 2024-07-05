import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div>
          <h2>Rubah Suara Menjadi Teks 😊</h2>
        </div>
        <div className="main-page">
          <p>
            Ini adalah sebuah website yang dapat membantu para sahabat
            penyandang tunarungu dalam berkomunikasi
          </p>
        </div>
        <div className="btn-container">
          <button onClick={() => navigate("/SpeechTt")}>Dengarkan Suara</button>
          <button onClick={() => navigate("/TextTs")}>Ucapkan Suara</button>
        </div>
      </div>
    </>
  );
};

export default Home;
