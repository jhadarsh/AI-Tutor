import { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function TTSPlayer({ moduleName }) {
  const [data, setData] = useState(null);
  const [voicesList, setVoicesList] = useState([]);
  const { speak, speaking, cancel, voices, pause, resume } = useSpeechSynthesis();

  useEffect(() => {
    // Fetch available voices once
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      if (availableVoices.length) {
        setVoicesList(availableVoices);
      }
    };

    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  useEffect(() => {
    // Fetch Data.json and filter by module
    fetch("/Data.json")
      .then((res) => res.json())
      .then((json) => {
        const filtered = json.modules.find((item) => item.module === moduleName);
        setData(filtered);
      })
      .catch((err) => console.error("Failed to fetch Data.json", err));
  }, [moduleName]);

  const getFemaleVoice = () => {
    return voicesList.find((v) =>
      v.name.toLowerCase().includes("female")
    ) || voicesList[0];
  };

  const handlePlay = () => {
    if (!data) return;
    speak({ text: data.script, voice: getFemaleVoice(), rate: 1 });
  };

  const handlePause = () => {
    pause();
  };

  const handleResume = () => {
    resume();
  };

  const handleStop = () => {
    cancel();
  };

  return (
    <div className="p-4 border rounded shadow w-full max-w-md mx-auto">
      {data ? (
        <>
          <h2 className="text-xl font-bold mb-2">{data.module}</h2>
          <p className="mb-2">🕒 Duration: {data.time}</p>
        

          <div className="flex flex-wrap space-x-2 space-y-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handlePlay}
              disabled={speaking}
            >
              Play ▶️
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded"
              onClick={handlePause}
              disabled={!speaking}
            >
              Pause ⏸
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded"
              onClick={handleResume}
              disabled={!speechSynthesis.paused}
            >
              Resume ▶️
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded"
              onClick={handleStop}
            >
              Stop ⏹
            </button>
          </div>
        </>
      ) : (
        <p>Loading module details...</p>
      )}
    </div>
  );
}
