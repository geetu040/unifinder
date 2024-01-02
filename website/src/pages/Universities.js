import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Universities() {
    return (
        <>
            <Header />

            <div className="programs">

                <div className='program'>
                    <img src="../images/favicon.png" alt='' />
                    {/* <h1>{$program["program_name"]}</h1>
            <h3>{$program["uni_name"]}</h3>
            <p>{$program["prog_desc"]}</p>
            <a href='{$program["uni_link"]}' target='_blank'>Explore</a> */}
                </div>

            </div>
            
            <Footer />
        </>
    )
}
