import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Header from './component/header/header.component';
import Home from './page/home/home.component';
import SideBar from './component/side-bar/side-bar.component';
import {displaySelector} from './redux/nav/nav.selector';
import Service from './page/service/service.component';
import Work from './page/work/work.component';


function App({displaySidebar}) {
  return (
    <div className="App">
        <Header/>
        {
          displaySidebar===true ? <SideBar/> : null
        }
        <Switch>
          <Route exact path='/service' component={Service}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/' component={Home}/>
        </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  displaySidebar: displaySelector
})

export default connect(mapStateToProps)(App);
