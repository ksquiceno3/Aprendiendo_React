import React from 'react';

import './styles/BageNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../componentes/Navbar'
import BadgeForm from '../componentes/badgeForm'
import Badge from '../componentes/badge'
class BadgeNew extends React.Component 
{
    state = { form: {}};

    handleChange = e => {
        this.setState({
            form: {
                [e.target.name]: e.target.value
            }
        })
    }

    render()
    {
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Karen"
                                lastName="Quiceno"
                                twiter="@Merito"
                                jobTitle="Aprendiz"
                                url="https://es.gravatar.com/userimage/174643206/27910e0741bfc378a1026fca15e0ac1a.jpg"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew