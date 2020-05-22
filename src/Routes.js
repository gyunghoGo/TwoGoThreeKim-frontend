import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login_JIA from './Pages/JIA/Login_JIA/Login_JIA';
import Main_JIA from './Pages/JIA/Main_JIA/Main_JIA';
import SignUp_JIA from './Pages/JIA/SignUp_JIA/SignUp_JIA';
import Login_GH from './Pages/GH/Login_GH/Login_GH';
import Main_GH from './Pages/GH/Main_GH/Main_GH';
import SignUp_GH from './Pages/GH/SignUp_GH/SignUp_GH';
import Login_NW from './Pages/NW/Login_NW/Login_NW';
import Main_NW from './Pages/NW/Main_NW/Main_NW';
import SignUp_NW from './Pages/NW/SignUp_NW/SignUp_NW';



class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login_JIA} />
          <Route exact path="/main_jia" component={Main_JIA} />
          <Route exact path="/signup_jia" component={SignUp_JIA} />
          <Route exact path="/gh" component={Login_GH} />
          <Route exact path="/main_gh" component={Main_GH} />
          <Route exact path="/signup_gh" component={SignUp_GH} />
          <Route exact path="/nw" component={Login_NW} />
          <Route exact path="/main_nw" component={Main_NW} />
          <Route exact path="/signup_nw" component={SignUp_NW} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;