import React, { Component } from 'react'

export default class StudentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            first_name: " ",
            last_name: " ",
            email: " ",
            city: " "
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.cities = ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert"]
    }

    handleOnChange(e) {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event fired");
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h3>Student - Controlled Form</h3>
                <form>
                    <label for='first_name'>Enter first name</label>
                    <input type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={this.handleOnChange} placeholder='Enter first name' required />
                    <br />
                    <label for='last_name'>Enter last name</label>
                    <input type="text" id="last_name" name="last_name" value={this.state.last_name} onChange={this.handleOnChange} placeholder='Enter last name' required />
                    <br />
                    <label for='email'>Enter email</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder='Enter email' required />
                    City : <select name="city" value={this.state.city} onChange={this.handleOnChange}>
                        onSelect = {
                            this.cities.map((city) => {
                                return <option key={city}>{city}</option>
                            })
                        }
                    </select>
                    <button name="btn-submit" value="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                {/* <button name="btn-submit" value="submit" onMouseEnter={this.handleClick}>Submit</button> */}
            </div>
        )
    }
}