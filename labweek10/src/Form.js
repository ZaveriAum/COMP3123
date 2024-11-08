import { canada_province } from "./assets/data/province_data";
import { user_details } from "./assets/data/user_information";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Form.css"

function Form() {
    let selectedProvince;
    let cities = [];

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        Email: '',
        FullName: '',
        Address: '',
        City: '',
        Province: '',
        PostCode: ''
    });

    const onProvinceSelected = (event) => {
        const province = event.target.value;
        selectedProvince = province;
        cities = canada_province[selectedProvince];
        const cityDropdown = document.getElementById("city");

        cityDropdown.innerHTML = "";

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Select City";
        cityDropdown.appendChild(defaultOption);

        for (let i = 0; i < cities.length; i++) {
            const option = document.createElement("option");
            option.value = cities[i];
            option.text = cities[i];
            cityDropdown.appendChild(option);
        }
    };

    const onSubmit = (event) => {
        const updatedDetails = {
            Email: document.getElementById('email').value,
            FullName: document.getElementById('name').value,
            Address: `${document.getElementById('address2').value} ${document.getElementById('address1').value}`,
            City: document.getElementById('city').value,
            Province: document.getElementById('province').value,
            PostCode: document.getElementById('p_code').value
        };

        setUserDetails(updatedDetails);

        navigate('/user', { state: updatedDetails });

        console.log(user_details)
    };

    return (

        <div className="form-container">
            <form onSubmit={onSubmit} className="form">
                <h1>User Details</h1>
                <div>
                    <input type="text" id="email" placeholder="Email" required />
                    <input type="text" id="name" placeholder="Full Name" required />
                </div>

                <input type="text" id="address1" placeholder="1234 King st" required />
                <input type="text" id="address2" placeholder="Appartment or studio no" />
                <div className="select-container">
                    {/* Province Dropdown */}
                    <select id="province" name="province" value={selectedProvince} onChange={onProvinceSelected} required>
                        <option value="">Select Province</option>
                        {Object.keys(canada_province).map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))}
                    </select>

                    {/* City Dropdown */}
                    <select id="city" name="city" required>
                        <option value="">Select City</option>
                    </select>

                    <input type="text" id="p_code" placeholder="M0R 1X3" required />
                </div>
                <button type="submit">Submit</button>
            </form>

        </div >);
}

export default Form