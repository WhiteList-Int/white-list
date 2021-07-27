import React from 'react'
import './OwnerDashboard.css'
import OwnerNavbar from './OwnerNavbar';
import RentalCard from './RentalCard';
import Footer from './../essentials/Footer';


function OwnerDashboard() {
    return (
        <>
        <body className="owner-dashboard">
            <OwnerNavbar />
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
