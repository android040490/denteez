
import React, { Component } from 'react';
import {connect} from 'react-redux';

import ModallWindow from 'components/ModallWindow';
import Preloader from 'components/Preloader';
import ServiceCard from 'components/ServiceCard';

import {getServices} from 'redux-store/actions';
import {getServicesData,
        getServicesLoading,
        getServicesError,
        getServicesErrorObject} from 'redux-store/selectors';

class ServiceDirectory extends Component {
    
    componentDidMount() {
        this.props.getServices()
    }

    renderError(){
        return <ModallWindow 
                    title = "Error"
                    message = {this.props.errorObject.message}
                    description = {this.props.errorObject.description}
                />
    }
    
    renderServices(){
        return this.props.services.map((item) => <ServiceCard key={item.id} data={item}/>)
    }

   
    render() {
        let {services, loading, error} = this.props;
        return (
                <div className='service-directory'>
                    <div className="service-directory__header">
                        <h2 className="service-directory__title">Service Directory</h2>
                        <button className="service-directory__btn">Add New Service</button>
                    </div>
                    <div className="service-directory__content">
                        { loading ? <Preloader/> : error ? this.renderError() : this.renderServices()}
                    </div>
                </div>

        );
    }
}

const mapDispatchToProps = {
    getServices
}

const mapStateToProps = (state) => {
    return {
        services : getServicesData(state),
        loading : getServicesLoading(state),
        error : getServicesError(state),
        errorObject : getServicesErrorObject(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDirectory);