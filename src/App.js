import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Finish from './pages/finish/Finish';
import TemplateQuiz from './pages/templateQuiz/TemplateQuiz';
import Welcome from './pages/welcome/Welcome'
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Welcome />
            </Route>
            <Route path='/template'>
              <TemplateQuiz />
            </Route>
            <Route path='/finish'>
              <Finish />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
