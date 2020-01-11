import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxirious Rooms"
                    subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <Contact />
        </>
    );

}
