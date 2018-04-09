import React from "react";
import Article from "../Article";
import articles from "../../../api/articles";
import { StyledMain } from "./styled";

const ArticleList = () => (
  <StyledMain>
    <h1>Список статей</h1>
    {articles.map(article => (
      <Article
        key={`article${article.id}`}
        title={article.title}
        text={article.text}
      />
    ))}
  </StyledMain>
);

export default ArticleList;
