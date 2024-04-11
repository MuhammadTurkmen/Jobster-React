import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
`;

function App() {
  return (
    <div>
      <Landing />
    </div>
  );
}

export default App;
