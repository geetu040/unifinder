import React, { useState } from 'react';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';

export default function Universities() {

    const [data, setData] = useState();
    const [notFound, setNotFound] = useState();

    const handleSearch = async (searchTerm) => {
        try {

            // fetching data based on the user input
            const apiUrl = `http://localhost:8000/search?query=${encodeURIComponent(searchTerm)}`;

            const response = await fetch(apiUrl, {
                method: 'GET',
            });

            // error handling
            if (!response.ok) {
                alert("Server is not responding!");
                throw new Error('Network response was not ok');
            }

            const temp = await response.json();

            // if an empty array is returned from the server
            if (temp.length === 0) {
                setNotFound(true);
            }
            else {
                setNotFound(false);
            }

            setData(temp);
            console.log(temp);

        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <>
            <SubHeader page="Universities" onSearch={handleSearch} />

            <div className="programs">

                {/* display the results is data is returned from the server */}
                {data && (
                    <div className="card-container">
                        {data.map((item, index) => (
                            <div className="course-col" key={index}>
                                <h3>{item.program}</h3>
                                <h4>{item.institute}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* if no results are returned */}
                {notFound && (
                    <div>
                        <h4 style={{marginTop: "10px"}}>Unfortunately, we could not find what you were looking for.</h4>

                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

