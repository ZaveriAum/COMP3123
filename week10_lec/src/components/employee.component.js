import React, { useRef } from "react";

export default function Employee() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();

    const cities = ["Toronto", "Edmonton", "Calgary", "Red Deer", "Lethbridge", "St. Albert"];

    const handleSubmit = (e) => {
        e.preventDefault();
        const emp = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            city: cityRef.current.value,
        };
        console.log(emp);
    };

    return (
        <div>
            <h3>Employee - UnControlled Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Enter First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    required
                    ref={firstNameRef}
                />
                <br />
                <label htmlFor="lastName">Enter Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    required
                    ref={lastNameRef}
                />
                <br />
                <label htmlFor="email">Enter Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    ref={emailRef}
                />
                <br />
                City:
                <select name="city" ref={cityRef}>
                    {cities.map((city, i) => (
                        <option key={i} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                <br />
                <button type="submit" name="btnSubmit">
                    Submit
                </button>
            </form>
        </div>
    );
}