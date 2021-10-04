import React from 'react';
import './service-item.styles.scss';


const ServiceItem = ({item}) => {
    const {text,icon} = item;
    return (
        <div className="service--item">
            <i className={icon}></i>
            <span>{text}</span>
        </div>
    )
}

export default ServiceItem;