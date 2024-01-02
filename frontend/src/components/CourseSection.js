import React from 'react';

function CourseSection() {
  return (
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
  );
}

export default CourseSection;
