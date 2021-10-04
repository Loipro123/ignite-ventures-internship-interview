import React from 'react';
import './header.styles.scss';
import NavLogo from './nav-logo/nav-logo.component';
import NavLink from './nav-link/nav-link.component';
import SearchSection from '../search-section/search-section.component';
const Header = () => {
    return(
        <section className="header">
            <div className="header__content">
                <NavLogo/>
                <NavLink/>
                <SearchSection/>
            </div>
        </section>
    )
}


export default Header;