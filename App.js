/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import styled from "@emotion/primitives";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: hotpink;
`;

const Description = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome to Emotion Primitives</Title>
        <Description>Style and render primitives across targets.</Description>
      </Container>
    );
  }
}
