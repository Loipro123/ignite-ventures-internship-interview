import React,{ useEffect }from 'react';
import './service.styles.scss';
import {connect} from 'react-redux';
import {ActivePage} from '../../redux/nav/nav.action';
const Service = ({activeSidebar}) => {
    useEffect(() => {
       activeSidebar('service')
      });
    return(
        <div className="service--page">SERVICE PAGE</div>
    )
}

const mapDispatchToState = dispatch => ({
    activeSidebar: page => dispatch(ActivePage(page))
})

export default connect(null,mapDispatchToState)(Service);