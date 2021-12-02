import React from "react";
import ArticleCard from "../../components/ArticleCard";
import MainCard from "../../components/MainCard";
import NewsCardBox from "../../components/NewsCardBox";

const PlaygroundScreen = () => {
  return (
    <>
      <MainCard
        height="600"
        width="860"
        tag="World News"
        title="Speech to the nation on the current situation and the warning of coronavirus"
        date="28 September, 2021"
        author="Walters"
        image="/main-news-1.jpg"
      />

      <br />

      <MainCard
        variant="secondary"
        height="300"
        width="450"
        tag="Business"
        title="Follow some simple rules to invest money in any business"
        date="28 September, 2021"
        image="/main-news-1.jpg"
      />

      <NewsCardBox
        tag="Home News"
        title="A team of British troops is constantly monitoring cyber attacks"
        date="28 September, 2021"
        image="/main-news-1.jpg"
      />

      <br />

      <ArticleCard
        date="28 September, 2021"
        image="/main-news-1.jpg"
        title="Negotiations on a peace agreement between the two countries"
      />
    </>
  );
};

export default PlaygroundScreen;
