import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Finish from './pages/Finish';
import TemplateQuiz from './pages/TemplateQuiz';
import Welcome from './pages/Welcome'
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: '#9fa8da',
      light: '#d1d9ff',
      dark: '#6f79a8'
    },
    secondary: {
      main: '#9fc5da',
      light: '#d1f8ff',
      dark: '#6f94a8'

    }

  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Quicksand',
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
            <Route path='/Template'>
              <TemplateQuiz />
            </Route>
            <Route path='/'>
              <Finish />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
