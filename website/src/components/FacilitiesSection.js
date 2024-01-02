import React from 'react';
import nustLogo from '../images/nust.png';
import fastLogo from '../images/fast.png';
import mcsLogo from '../images/mcs.png';
import emeLogo from '../images/eme.png';
import custLogo from '../images/cust.png';
import bahriaUniversityLogo from '../images/bahria_university.png';

function FacilitiesSection() {
  return (
    <section className="facilities">
      <h1>Explore Universities and Campuses in Pakistan</h1>
      <p>At UniFinder, we keep a close eye on a variety of universities and their campuses across Pakistan. Discover the educational opportunities they offer.</p>

      <div className="row">
        <div className="university-col">
          <img src={nustLogo} alt="NUST Logo" />
          <h3>NUST</h3>
          <p>NUST proudly stands at 355 in the world, 83 among Asian universities, and 1 in Pakistan. The university offers 136 academic programs across various disciplines.</p>
        </div>

        <div className="university-col">
          <img src={fastLogo} alt="FAST Logo" />
          <h3>FAST</h3>
          <p>FAST University has five modern campuses in Karachi, Lahore, Islamabad, Peshawar, and Chiniot-Faisalabad. These campuses provide world-class educational facilities and a diverse range of programs.</p>
        </div>

        <div className="university-col">
          <img src={mcsLogo} alt="MCS Logo" />
          <h3>MCS</h3>
          <p>MC School of Engineering (MCS) is a prestigious institution known for its commitment to excellence in engineering education and research.</p>
        </div>
      </div>

      <div className="row">
        <div className="university-col">
          <img src={emeLogo} alt="EME Logo" />
          <h3>EME</h3>
          <p>EME, a constituent college of NUST, offers various engineering and computer science programs, preparing students for technical excellence.</p>
        </div>

        <div className="university-col">
          <img src={custLogo} alt="CUST Logo" />
          <h3>CUST</h3>
          <p>Capital University of Science and Technology (CUST) provides a wide array of academic programs, fostering innovation and creativity among students.</p>
        </div>

        <div className="university-col">
          <img src={bahriaUniversityLogo} alt="Bahria University Logo" />
          <h3>Bahria University</h3>
          <p>Bahria University offers a diverse range of programs and is known for its commitment to academic excellence and research in various fields.</p>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
