import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import './nav-link.styles.scss';
import {pageSelector} from '../../../redux/nav/nav.selector';

const NavLink = ({active_page,history}) => {
    return(
        <div className="nav--link">
            <span className={active_page === 'home' ? 'nav--link__item active_page' : 'nav--link__item'} onClick={()=> {history.push('/')}}>Home</span>
            <span className={active_page === 'service' ? 'nav--link__item active_page' : 'nav--link__item'} onClick={()=> {history.push('/service')}}>Service</span>
            <span className={active_page === 'work' ? 'nav--link__item active_page' : 'nav--link__item'} onClick={()=> {history.push('/work')}}>How it works</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    active_page: pageSelector
})

export default withRouter(connect(mapStateToProps)(NavLink))