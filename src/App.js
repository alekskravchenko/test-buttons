import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Flex from './components/Flex';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Flex alignItems="center" direction="column" margin="10rem 1rem" rowGap="25px">
        <Button></Button>
        <Button outline></Button>
      </Flex>
    </div>
  );
}

export default App;