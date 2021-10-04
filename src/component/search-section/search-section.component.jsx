import React from 'react';
import './search-section.styles.scss';
import Search from './search/search.component';
const SearchSection = () => {
    return (
        <div className="search--section">
            <h1>Roof enspections make remote and easy</h1>
            <span>Get your roof exspected remotely and connect with our our trusted roofers</span>
            <Search/>
        </div>
    )
}

export default SearchSection;