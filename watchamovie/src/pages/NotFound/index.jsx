import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./styles.css"

const NotFound = ({ text }) => {
    return (
        <div className="container">
            <div className="back-container">
                <Link to="/" className="back">
                    <BiArrowBack />
                </Link>
            </div>
            <p className="text-notFound">{text}</p>
        </div>
    );
};

export default NotFound;
