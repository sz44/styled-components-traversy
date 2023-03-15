import { StyledContainer } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Globals";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors : {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <>
        <Header />
        <StyledContainer>
          <h1>Hello World</h1> 
          {content.map( (item, index) => <Card key={index} item={item}/> )}       
        </StyledContainer> 
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
