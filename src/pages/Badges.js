import React from 'react'
import { Link } from 'react-router-dom'

import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import BadgesList from '../componentes/BadgesList'
import PageError from '../componentes/PageError'
import PageLoading from '../componentes/PageLoading'
import api from '../api'

class Badges extends React.Component
{
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount()
    {
        this.fetchData();
    }

    fetchData = async() => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })
        }catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render(){
        if (this.state.loading === true){
            return <PageLoading />
        }

        if (this.state.error){
            return <PageError error={this.state.error}/>
        }

        return (
            <React.Fragment>
                <div>
                    <div className="Badges">
                        <div className="Badges__hero">
                            <div className="Badges__container">
                                <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                            </div>
                        </div>
                    </div>

                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            <Link to="/badge/new" className="btn btn-primary">
                                New Badge
                            </Link>
                        </div>
                        <div className="Badges__list">
                            <div className="Badges__container">
                                <BadgesList badges={this.state.data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges
