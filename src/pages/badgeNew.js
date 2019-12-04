import React from 'react';

import './styles/BageNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../componentes/badgeForm'
import Badge from '../componentes/badge'
import PageLoading from '../componentes/PageLoading'
import api from '../api'

class BadgeNew extends React.Component
{
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twiter: '',
        },
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e => {
      e.preventDefault()
      this.setState({ loading: true, error: null })

      try {
        await api.badges.create(this.state.form)
        this.setState({ loading: false });
      } catch(error){
        this.setState({ loading: false, error: error })
      }
    }

    render()
    {
      if (this.state.loading)
      {
        return <PageLoading />;
      }

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
                                <BadgeForm
                                  onChange={this.handleChange}
                                  onSubmit={this.handleSubmit}
                                  formValues={this.state.form}
                                  error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
