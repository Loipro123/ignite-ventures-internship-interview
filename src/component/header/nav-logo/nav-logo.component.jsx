import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './nav-logo.styles.scss';
import {ReactComponent as Logo} from '../../../assets/logo-roofing.svg';
import {ToogleSidebar} from '../../../redux/nav/nav.action';
const NavLogo = ({toogleSidebar,history}) => {
    return (
        <div className="nav--logo">
            <Logo className="nav--logo__icon" onClick={()=> {history.push('/')}}/>
            <div className="nav--logo__phone">
                 <i className="fas fa-phone-alt"></i>
                 <span>214-865-8818</span>
            </div>
            <div className="nav--logo__bar" onClick={()=> {
                      toogleSidebar()
                }}>
                <i className="fa fa-bars" aria-hidden="true"></i>
             </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toogleSidebar: () => dispatch(ToogleSidebar())
})
export default withRouter(connect(null, mapDispatchToProps)(NavLogo));