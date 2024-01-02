import React from 'react';

function TestimonialsSection() {
  return (
    <section className="testimonials">
		<h1>Transforming Dreams into Realities: Hear from Our Satisfied Users</h1>
		<p>Discover What Students Have to Say About Their UniFinder Journey</p>
		<div className="row">
			<div className="testimonial-col">
				<img src='/images/user1.jpg' alt="User" />
				<div>
					<p>My educational journey at NUST has been nothing short of extraordinary, and UniFinder played a pivotal role in helping me navigate this path. UniFinder's platform consolidated a wealth of information on various courses and degrees offered by different universities, presenting it all on a single, user-friendly page. This time-saving convenience allowed me to focus on my studies and explore my academic interests with ease. Thanks to UniFinder, I made an informed choice that has had a profound impact on my future.</p>
					<h3>Usman Bashir</h3>
					<div className="rating">
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
					</div>
				</div>
			</div>
			<div className="testimonial-col">
				<img src='/images/user2.jpg' alt="User" />
				<div>
					<p>UniFinder is more than just a platform; it's a dream come true. Finding the perfect university can be a daunting task, but with UniFinder's guidance and support, I was able to discover my dream university with ease. The platform provided not only valuable information but also the confidence I needed to make the right choice. I'm thrilled that I found this reliable and genuine source of guidance at the right time. UniFinder truly transformed my educational aspirations into reality.</p>
					<h3>Farooq</h3>
					<div className="rating">
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-regular fa-star"></i>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}

export default TestimonialsSection;
