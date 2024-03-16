import React from "react";

import Navbar from '../Comm_section_folder/Components/Navbar'
import Footer from '../Comm_section_folder/Components/Footer'
import ErrorCom from "../Comm_section_folder/Components/ErrorCom";

const Error = () => {
    return (
        <>
            <Navbar />
            <ErrorCom />
            <Footer />
        </>
    );
};

export default Error;