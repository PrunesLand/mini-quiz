import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Finish from './pages/finish/Finish';
import TemplateQuiz from './pages/templateQuiz/TemplateQuiz';
import Welcome from './pages/welcome/Welcome'
import { createTheme, ThemeProvider } from "@material-ui/core";
import Navigation from './components/navigation/Navigation';

// material ui's global theme custom values
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
      {/* Theme provider will allow global access to all components in the app. */}
      {/* Router components allow for navigation between pages */}
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation>
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
          </Navigation>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
