import React from 'react'

class BadgeForm extends React.Component {
    state = {};

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick = e => {
        console.log("Button was clicked")
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log("Form was submitedd")
        console.log(this.state)
    }
    render()
    {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit} action="">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.firtsName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.state.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.state.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twiter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twiter"
                            value={this.state.twiter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm