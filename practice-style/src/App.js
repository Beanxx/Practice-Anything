import "./App.css";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const BlueButton = styled.button`
  background-color: blue;
  color: white;

  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;

const BigBlueButton = styled(BlueButton)`
  padding: 10px;
  margin-top: 10px;
`;

const BigRedButton = styled(BigBlueButton)`
  background-color: red;
`;

const Button1 = styled.button`
  background: ${(props) => (props.skyblue ? "skyblue" : "white")};
`;

const Button2 = styled.button`
  background: ${(props) => (props.color ? props.color : "white")};
`;

const Button3 = styled.button`
  background: ${(props) => props.color || "white"};
`;

function App() {
  return (
    <Container>
      <BlueButton>Blue Button</BlueButton>
      <br />
      <BigBlueButton>Big Blue Button</BigBlueButton>
      <br />
      <BigRedButton>Big Red Button</BigRedButton>
      <br />
      <GlobalStyle />
      <Button1>Button1</Button1>
      <Button1 skyblue>Button1</Button1>
      <br />
      <Button2>Button2</Button2>
      <Button2 color="orange">Button2</Button2>
      <Button2 color="tomato">Button2</Button2>
      <br />
      <Button3>Button3</Button3>
      <Button3 color="pink">Button3</Button3>
      <Button3 color="turquoise">Button3</Button3>
    </Container>
  );
}

export default App;

const Container = styled.div`
  @media ${(props) => props.theme.desktop} {
    background-color: ${(props) => props.theme.mainColor};
  }
  @media ${(props) => props.theme.mobile} {
    background-color: ${(props) => props.theme.subColor};
  }
`;
