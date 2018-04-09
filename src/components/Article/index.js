import React, { Component } from "react";
import { StyledSection } from "./styled";

class Article extends Component {
  state = {
    open: false
  };

  handleClick = () => this.setState({ open: !this.state.open });

  render() {
    const {open} = this.state;
    const {title, text} = this.props;
    const toggleText = open ? "Скрыть" : "Показать";
    return (
      <StyledSection isOpen={open}>
        <h1>{title}</h1>
        <p>
          {text}
        </p>
          <button onClick={this.handleClick}>{toggleText}</button>
      </StyledSection>
    );
  }
}

export default Article;
