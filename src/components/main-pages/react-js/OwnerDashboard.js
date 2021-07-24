import React from 'react'
import '../css/OwnerDashboard.css'
import NavbarFixed from '../../essentials/NavbarFixed';
import Footer from '../../essentials/Footer'
import RentalCard from '../../owner-dash-sources/RentalCard';


function OwnerDashboard() {
    return (
        <>
        <body className="owner-dashboard">
            <NavbarFixed />
            <div className="owner-dashboard-title-container">
                <h1 className="your-rental">Your Rental</h1>
                </div>
                <div className="owner-dashboard-card">
                <RentalCard />
            </div>
        </body>
        <Footer />
        </>
    )
}

export default OwnerDashboard
