import React from 'react';
import './service-section.styles.scss';
import ServiceItem from '../../../component/resuse-component/service-section/service-item.component';
const services = [
    {
        id: 1,
        text: 'Free Inspection',
        icon: 'far fa-lightbulb'
    },
    {
        id: 2,
        text: 'File a Claim',
        icon: 'far fa-file-powerpoint'
    },
    {
        id: 3,
        text: 'Replace or Repare a Roof',
        icon: 'fas fa-screwdriver'
    }
]

const ServiceSection = () => {
    return (
        <div className="service">
            {services.map(item => <ServiceItem key={item.id} item={item}/>)}
        </div>
    )
}

export default ServiceSection;