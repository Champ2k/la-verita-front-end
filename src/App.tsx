import _ from "lodash";
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
  const [filterVaccine, setFilterVaccine] = useState<string>();
  const [commentList, setCommentList] = useState<string[]>();

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
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (inputText:string) => {
    const response = await getData(inputText);
    setResult(response);
  };

  const handleInput = (e: any) => {
    setInputWord(e.target.value);
  };

  const handleSelected = (e: any, index?: number) => {
    if (index) {
      setActiveHeader(index);
      setFilterVaccine(exVacList[index]);
    } else {
      setActiveHeader(0);
      setFilterVaccine(exVacList[0]);
    }
  };

  const handleSelectedComment = (text: string) => {
    setInputWord(text);
    fetchData(text);
  };

  const fetchSpecificTag = async (limit?: number, hashtag?: string) => {
    const response = await getTweetsData(limit && limit, hashtag && hashtag);
    const getComment = _.map(response.tweets, (item) => {
      return item.comment;
    });
    setCommentList(getComment);
    return response;
  };

  useEffect(() => {
    if (filterVaccine) {
      fetchSpecificTag(0, filterVaccine);
    } else {
      fetchSpecificTag(0, exVacList[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeHeader]);

  return (
    <>
      <div>
        <input onChange={(e) => handleInput(e)} />
        <button type="button" onClick={() => fetchData(inputWord)}>
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
          data={commentList}
          onClick={(e, index) => handleSelected(e, index)}
          onSelectText={(text) => handleSelectedComment(text)}
        />
      </div>
    </>
  );
}

export default App;
