import { useState } from "react";
import "../App.css";
import { useSpeechSynthesis } from "react-speech-kit";
import { useNavigate } from "react-router-dom";

const TextTs = () => {

  const navigate = useNavigate();

  const { speak, voices } = useSpeechSynthesis();

  const [inputText, setInputText] = useState("");

  const [voiceIndex, setVoiceIndex] = useState(null);

  function handleSpeak() {
    console.log(voices[voiceIndex]);
    speak({ text: inputText, voice: voices[voiceIndex] });
  }

  return (
    <>
      <div className="ttspeech-container">
        <h2>Rubah Teks Menjadi Suara 😊</h2>
        <br />
        <p>Ini merupakah halaman untuk merubah teks menjadi suara.</p>
        <div className="main-content">
          <textarea
            className="input-text"
            rows={25}
            cols={100}
            placeholder="Masukkan Text Disini"
            onChange={(e) => setInputText(e.target.value)}
          />
          <select
            style={{ width: "100px" }}
            value={voiceIndex || ""}
            onChange={(e) => setVoiceIndex(e.target.value)}
          >
            <option value={""}>default</option>
            {voices.map((item, index) => (
              <option key={item.name} value={index}>
                {item.name}
              </option>
            ))}
          </select>
          <div>
          <button className="button" onClick={() => handleSpeak()}>
          Ucapkan Teks
          </button>
          
          <button className="button" onClick={() => navigate("/")}>Kembali </button>
          </div>
          </div>
        </div>
     
    </>
        );
};

export default TextTs;
