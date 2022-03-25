import _ from "lodash"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "./components";
import qs from "query-string";

const exVacList = ["Moderna", "Pfizer", "AstraZeneca", "Sinopharm", "Sinovac"];

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
  const [activeHeader, setActiveHeader] = useState<number>(0);
  const [commentList, setCommentList] = useState<string>("");

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

  const getTweetsData = async (limit?: number, hashtag?: string) => {
    try {
      const query = qs.stringify(
        { limit: limit, hashtag: hashtag },
        {
          skipNull: true,
        }
      );
      const res = await axios.get(`http://127.0.0.1:5000/tweets?${query}`);
      console.log(`http://127.0.0.1:5000/tweets?${query}`)
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    let response = await getData(inputWord);
    setResult(response);
  };

  const handleInput = (e: any) => {
    setInputWord(e.target.value);
  };

  const handleSelected = (e: any, index?: number) => {
    if (index) {
      setActiveHeader(index);
    }
    return e.target.innerText;
  };

  const fetchAllTweetsData = async () => {
    let response = await getTweetsData();
  };

  const fetchSpecificTag = async (limit?:number, hashtag?:string) => {
    let response = await getTweetsData(limit && limit, hashtag && hashtag);
    console.log(response)
  };

  useEffect(() => {
    fetchAllTweetsData()
    fetchSpecificTag(0,"Moderna")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <input onChange={(e) => handleInput(e)} />
        <button type="button" onClick={() => fetchData()}>
          Submit
        </button>
        <div>{result?.inputword}</div>
        <div>{result?.result}</div>
        <div>{result?.sentiment.negative}</div>
        <div>{result?.sentiment.neutral}</div>
        <div>{result?.sentiment.positive}</div>
        <Table
          header={exVacList}
          activeHeader={activeHeader}
          onClick={(e, index) => handleSelected(e, index)}
        />
      </div>
    </>
  );
}

export default App;
