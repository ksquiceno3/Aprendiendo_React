import React from 'react';

import './styles/BageNew.css'
import header from '../images/badge-header.svg'
import BadgeForm from '../componentes/badgeForm'
import Badge from '../componentes/badge'
class BadgeNew extends React.Component 
{
    state = { 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twiter: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render()
    {
        return (
            <React.Fragment>
                <div>
                    <div className="BadgeNew__hero">
                        <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge
                                    firstName={this.state.form.firstName || 'FIRTS_NAME'}
                                    lastName={this.state.form.lastName || 'LAST_NAME'}
                                    twiter={this.state.form.twiter || 'TWITER'}
                                    jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                    email={this.state.form.email || 'EMAIL'}
                                    url="https://es.gravatar.com/userimage/174643206/27910e0741bfc378a1026fca15e0ac1a.jpg"
                                />
                            </div>

                            <div className="col-6">
                                <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew