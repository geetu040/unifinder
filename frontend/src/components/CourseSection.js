import React, { useState, useEffect } from 'react';

function CourseSection() {
	const [data, setData] = useState(null);
  
	useEffect(() => {
	  // Fetch data from the API
	  fetch('https://unifinder-data.azurewebsites.net/titles')
		.then(response => response.json())
		.then(result => {
		  // Update the state with the fetched data
		  setData(result);
		})
		.catch(error => {
		  console.error('Error fetching data:', error);
		});
	}, []); // Empty dependency array ensures the effect runs only once
  
	return (
		<>

			{data && Object.keys(data).map((key) => {
				return (
					<section key={key} className="course">
						<h1>{key.charAt(0).toUpperCase() + key.slice(1)}</h1>

						<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
							{data[key].map((val) => {
								return <span style={{ padding: "10px 15px", backgroundColor: "rgb(231 231 231)", margin: "4px", borderRadius: "10px" }} className='val' key={val}>{val}</span>
							})}
						</div>
					</section>
				);
			})}

			<section className="course">
				<h1>Explore Your Degree Options</h1>
				<p>Welcome to UniFinder, your gateway to discovering a world of educational possibilities. We're dedicated to helping you find the perfect degree programs and universities to kickstart your academic journey.</p>

				<div className="row">
					<div className="course-col">
						<h3>Software Engineering</h3>
						<p>If you're a computer enthusiast and aspire to delve into the dynamic world of software engineering, UniFinder is your guiding star.</p>
					</div>

					<div className="course-col">
						<h3>Mechanical Engineering</h3>
						<p>Fascinated by creating machines that shape the future? Discover the right mechanical engineering programs with us.</p>
					</div>

					<div className="course-col">
						<h3>Electrical Engineering</h3>
						<p>Electrify your passion for designing innovative electrical solutions by exploring electrical engineering programs through UniFinder.</p>
					</div>
				</div>

				<div className="row">
					<div className="course-col">
						<h3>Civil Engineering</h3>
						<p>If you dream of building the world's infrastructure, UniFinder can lead you to top-notch civil engineering programs and universities.</p>
					</div>

					<div className="course-col">
						<h3>Computer Science</h3>
						<p>Ready to master the art of algorithms and coding? UniFinder connects you with outstanding computer science degree options.</p>
					</div>

					<div className="course-col">
						<h3>Business Administration</h3>
						<p>Unlock the doors to the business world by finding the right business administration programs that match your ambitions.</p>
					</div>
				</div>
			</section>

		</>
	);
}

export default CourseSection;
