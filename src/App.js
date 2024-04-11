import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
`;
const SecondButton = styled.button`
  background: blue;
  color: yellow;
  font-size: 3rem;
`;

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <SecondButton>Click me</SecondButton>
      <Landing />
    </div>
  );
}

export default App;
