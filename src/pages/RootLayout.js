import { Outlet, useLocation } from "react-router-dom";
import CustomNavbar from "../components/Layout/CustomNavbar";

const RootLayout = (props) => {
    const location = useLocation(); // Get the current location

    return (
        <div>
            {/* The cart button is conditionally rendered inside CustomNavbar */}
            <CustomNavbar onShowModal={props.onShowModal} currentPath={location.pathname} />
            
            <main>
                <Outlet /> {/* This will display the currently active route's component */}
            </main>
        </div>
    );
};

export default RootLayout;
