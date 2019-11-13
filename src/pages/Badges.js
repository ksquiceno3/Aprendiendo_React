import React from 'react'

import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import Navbar from '../componentes/Navbar'

class Badges extends React.Component
{
    render(){
        return (
            <div>
                <Navbar />
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className="btn btn-primary">
                            New Badge
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges