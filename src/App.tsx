import _ from "lodash";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  PercentageBar,
  Loading,
  CountBox,
  VaccineData,
} from "./components";
import qs from "query-string";
// import Logo from "../public/Laverita_logo.png"

import {
  BodyContainer,
  Container,
  BackgroundContainer,
  InputContainer,
  Input,
  Button,
  ButtonContainer,
  Navbar,
  ImageContainer,
  LogoImage,
  Image,
} from "./App.style";

const exVacList = ["All", "Moderna", "Pfizer", "AstraZeneca", "Sinopharm", "Sinovac"];

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

  interface overallSentimentData {
    countNegative: number;
    countNeutral: number;
    countPositive: number;
    countTweet: number;
    hashtag: string;
  }

  const [loading, setLoading] = useState<boolean>(false);

  const [result, setResult] = useState<resultData>();
  const [inputWord, setInputWord] = useState<string>("");
  const [activeHeader, setActiveHeader] = useState<number>(0);
  const [filterVaccine, setFilterVaccine] = useState<string>();
  const [commentList, setCommentList] = useState<VaccineData[]>();
  const [overallSentiment, setOverallSentiment] =
    useState<overallSentimentData>();

  const getAnalysis = async (inputWord: string) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/analysis?inputword=${encodeURIComponent(inputWord)}`
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
  // getTweetsData()

  const getOverallSentiment = async (hashtag?: string) => {
    try {
      const query = qs.stringify({ hashtag: hashtag }, { skipNull: true });
      const res = await axios.get(
        `http://127.0.0.1:5000/getOverallSentiment?${query}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (inputText: string) => {
    const response = await getAnalysis(inputText);
    setResult(response);
  };

  const handleInput = (e: any) => {
    setInputWord(e.target.value);
  };

  const handleSelected = (e: any, index?: number) => {
    if (index) {
      setActiveHeader(index);
      setFilterVaccine(exVacList[index]);
      fetchOverallSentiment(exVacList[index])
    } else {
      setActiveHeader(0);
      setFilterVaccine("");
      fetchOverallSentiment("")
    }
  };

  const handleSelectedComment = (text: string) => {
    setInputWord(text);
    fetchData(text);
    setLoading(true);
  };

  const fetchSpecificTag = async (limit?: number, hashtag?: string) => {
    const response = await getTweetsData(limit && limit, hashtag && hashtag);
    const getComment = _.map(response.tweets, (item) => {
      return { comment: item.comment, sentiment: item.sentiment };
    });
    setCommentList(getComment);
    return getComment;
  };

  const fetchOverallSentiment = async (hashtag?: string) => {
    const response = await getOverallSentiment(hashtag && hashtag);
    const objJson = {
      "countNegative": response[0].countNegative,
      "countNeutral":response[0].countNeutral,
      "countPositive":response[0].countPositive,
      "countTweet":response[0].countTweet,
      "hashtag":response[0].hashtag,
    }
    setOverallSentiment(objJson);
  };

  const handleSortBySentiment = async (sentiment?: string, hashtag?: string) => {
    const response = await getTweetsData(0, hashtag && hashtag);
    const getSortedComment = _.filter(response.tweets, {
      sentiment: sentiment,
    });
    setCommentList(getSortedComment);
    return getSortedComment;
  };

  useEffect(() => {
    if (filterVaccine) {
      fetchSpecificTag(0, filterVaccine);
    } else {
      fetchSpecificTag(0, "");
      fetchOverallSentiment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeHeader]);

  useEffect(() => {
    if (result) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <BodyContainer>
      <div>
        <Navbar>
          {/* <ImageContainer>
            <LogoImage
              src="https://media.discordapp.net/attachments/783609265117069322/958600564634185729/Laverita_logo.png"
              alt="logo"
            />
          </ImageContainer> */}
          <div style={{ color: "#ffffff", margin: "auto 0", padding: "16px" }}>
            La Verita
          </div>
        </Navbar>
        <Container>
          <BackgroundContainer />
          <InputContainer>
            <Input onChange={(e) => handleInput(e)} value={inputWord} />
            <ButtonContainer>
              <Button
                type="button"
                onClick={() => {
                  fetchData(inputWord);
                  setLoading(true);
                }}
                disable={!Boolean(inputWord)}
              >
                Analyze
              </Button>
            </ButtonContainer>
          </InputContainer>
        </Container>
        <div
          style={{
            width: "80%",
            margin: "auto",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            <PercentageBar
              positive={{
                size: result?.sentiment.positive
                  ? parseFloat(result?.sentiment.positive)
                  : 0,
                color: "#4EB502",
              }}
              negative={{
                size: result?.sentiment.negative
                  ? parseFloat(result?.sentiment.negative)
                  : 0,
                color: "#F05827",
              }}
              neutral={{
                size: result?.sentiment.neutral
                  ? parseFloat(result?.sentiment.neutral)
                  : 0,
                color: "#FAB404",
              }}
            />
          )}
          {/* <div>{inputWord && inputWord}</div> */}
        </div>
        <div style={{margin: 'auto', marginBottom: "24px", width: 1100, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 16}}>
          {/* <Image src='/images/all_word_cloud.png' alt=""/> */}
          <Image src='/images/negative_cloud.png' alt=""/>
          <Image src='/images/neutral_cloud.png' alt=""/>
          <Image src='/images/positive_cloud.png' alt=""/>
        </div>
        <div style={{ margin: "auto", maxWidth: 523, marginBottom: "24px" }}>
          <CountBox
            data={overallSentiment}
            column={3}
            onClick={(sentiment) => handleSortBySentiment(sentiment, filterVaccine)}
          />
        </div>
        <div style={{ backgroundColor: "#18191a" }}>
          <Table
            header={exVacList}
            activeHeader={activeHeader}
            data={commentList}
            onClick={(e, index) => handleSelected(e, index)}
            onSelectText={(text) => handleSelectedComment(text)}
          />
        </div>
      </div>
    </BodyContainer>
  );
}

export default App;
