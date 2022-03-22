import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  type sentiment = {
    negative: string;
    neutral: string;
    positive: string;
  };
  interface resultData {
    inputword: string;
    result: string;
    sentiment: sentiment;
  }

  const [result, setResult] = useState<resultData>();
  const [inputWord, setInputWord] = useState<string>("");

  const getData = async (inputWord: string) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/analysis?inputword=${inputWord}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async () => {
    let response = await getData(inputWord);
    setResult(response);
  };

  const handleInput = (e:any) => {
    setInputWord(e.target.value)
  }

  return (
    <>
      <div>
        <input onChange={(e) => handleInput(e)}/>
        <button type="button" onClick={() => fetchData()}>
          Submit
        </button>
        <div>{result?.inputword}</div>
        <div>{result?.result}</div>
        <div>{result?.sentiment.negative}</div>
        <div>{result?.sentiment.neutral}</div>
        <div>{result?.sentiment.positive}</div>
      </div>
    </>
  );
}

export default App;
