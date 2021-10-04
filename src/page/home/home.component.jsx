import React, {useEffect} from 'react';
import './home.styles.scss';
import ServiceSection from './service-section/service-section.component';
import HomeContent from './home-content/home-content.component';
import {connect} from 'react-redux';
import {ActivePage} from '../../redux/nav/nav.action';
const Home = ({activeSidebar}) => {
    useEffect(() => {
        activeSidebar('home')
       });
    return(
        <div className="home">
           <ServiceSection/>
           <HomeContent/>
        </div>
    )
}
const mapDispatchToState = dispatch => ({
    activeSidebar: page => dispatch(ActivePage(page))
})
export default connect(null, mapDispatchToState)(Home);