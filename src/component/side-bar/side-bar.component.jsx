import React from 'react';
import './side-bar.styles.scss';
import Logo from '../../assets/logo-roofing.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ToogleSidebar,ActivePage} from '../../redux/nav/nav.action';
import {pageSelector} from '../../redux/nav/nav.selector';
import {withRouter} from 'react-router-dom';

const SideBar = ({toogleSideBar, page,activeSideBar,history}) => {

    return(
    <div className="side--bar" id="side_bar">
        <div className="side--bar__content">
            <div className="side--bar__header">
                <img src={Logo}  alt="LogoSmall" className="sidebar_logo"/>
                <i className="fa fa-window-close" aria-hidden="true" onClick={()=> {
                     toogleSideBar()
                }}></i>
            </div>
            <div className="side--bar__link">
                <div className="side--bar__item" onClick={() => {
                     toogleSideBar();
                     activeSideBar('home');
                     history.push('/');
                 }}>
                    <span className={page==='home' ? 'active_page' : null}>Home</span>    
                 </div>
                 <div className="side--bar__item" onClick={() => {
                     toogleSideBar();
                     activeSideBar('service');
                     history.push('/service');
                 }}>
                    <span className={page==='service' ? 'active_page' : null}>Service</span>      
                 </div>
                 <div className="side--bar__item" onClick={() => {
                     toogleSideBar();
                     activeSideBar('work');
                     history.push('/work');
                 }}>
                    <span className={page==='work' ? 'active_page' : null}>How it works</span>  
                 </div>
            </div>
         

        </div>
        <div className="side--bar__empty" onClick={()=> {
            toogleSideBar()
        }}></div>
    </div>
);}
const mapStateToProps = createStructuredSelector({
    page: pageSelector
})
const mapDispatchToProps = dispatch => 
  ({
    toogleSideBar: () => dispatch(ToogleSidebar()),
    activeSideBar: (page) => dispatch(ActivePage(page))
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar));