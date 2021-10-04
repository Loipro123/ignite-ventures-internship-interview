import React,{ useEffect }from 'react';
import './work.styles.scss';
import {connect} from 'react-redux';
import {ActivePage} from '../../redux/nav/nav.action';
const Work = ({activeSidebar}) => {
    useEffect(() => {
       activeSidebar('work')
      });
    return(
        <div className="work">HOW IT WORKS PAGE</div>
    )
}

const mapDispatchToState = dispatch => ({
    activeSidebar: page => dispatch(ActivePage(page))
})

export default connect(null,mapDispatchToState)(Work);