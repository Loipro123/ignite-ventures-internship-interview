import React from 'react';
import './search.styles.scss';

class Search extends React.Component{
    render(){
        return (
            <div className="search">
                <div className="search--wrap">
                   <i className="fas fa-map-marker-alt"></i>
                   <input type="text" placeholder="Enter your address" id="search_input" />
                   <button>Get Inspection</button>
                </div>
            </div>
        )
    }
}

export default Search;