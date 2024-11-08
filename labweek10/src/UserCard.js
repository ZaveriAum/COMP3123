import { useLocation } from 'react-router-dom';
import './UserCard.css'

const UserCard = function () {
    const location = useLocation();
    const userDetails = location.state || {};

    return (
        <div className="user-card">
            <h1>User Details</h1>
            <div className="detail">
                <h3>Email:</h3>
                <p>{userDetails.Email}</p>
            </div>
            <div className="detail">
                <h3>Full Name:</h3>
                <p>{userDetails.FullName}</p>
            </div>
            <div className="detail">
                <h3>Address:</h3>
                <p>{userDetails.Address}</p>
            </div>
            <div className="detail">
                <h3>City:</h3>
                <p>{userDetails.City}</p>
            </div>
            <div className="detail">
                <h3>Province:</h3>
                <p>{userDetails.Province}</p>
            </div>
            <div className="detail">
                <h3>Postal Code:</h3>
                <p>{userDetails.PostCode}</p>
            </div>
        </div>
    );
}

export default UserCard;
