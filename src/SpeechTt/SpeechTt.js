import "../App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";

const SpeechTt = () => {
  const navigate = useNavigate();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "id-IN" });
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="speechtt-container">
        <h2>Rubah Suara Menjadi Teks 😊</h2>
        <br />
        <p>
          Ini adalah sebuah website yang dapat merubah suara yang diucapkan
          menjadi kalimat berbentuk teks.
        </p>
        <div className="main-content">{transcript}</div>
        <div>
          <button onClick={startListening}>Mulai Mendengar</button>
          <button onClick={SpeechRecognition.stopListening}>
            Berhenti Mendengar
          </button>
          <button onClick={resetTranscript}>Hapus Teks</button>
          </div>
          <button onClick={() => navigate("/")}>Kembali</button>
          </div>
    </>
  );
};

export default SpeechTt;
