import './App.css';
import Home from './pages/Home.js'
import MovieDetailPage from './pages/MovieDetail'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const theme = {
  primary: 'white',
  secondary: 'grey',
  black: 'black'
}

const AppStyled = styled.div`
  /* background-color: white; */
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: 'Heebo', sans-serif;
`

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppStyled>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/movie-detail/:movieID' exact component={MovieDetailPage} />
          </Switch>
        </AppStyled>
      </ThemeProvider>
    </Router>
  );
}

export default App;
