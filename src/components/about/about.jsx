import React from "react";
import ImG from "../../images/me2.jpg";
import "./about.css";
import Resume from '../resume/resume.pdf'
const about = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('')
      alert('Screenshot nagaram na yar')
    }
  })
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={ImG} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="a-title">About Me</h1>
        <div className="sep">
          <p className="a-sub" data-aos="fade-left">
            Currently I'm working as Executive Tech Lead at{" "}
            <span style={{ fontWeight: "bold" }}>CSIT Association of BMC</span>{" "}
            where i've got chance to engage with many experienced personalities
            collectively organizing several events.
          </p>
          <br />
          <p className="a-desc" data-aos="fade-left" data-aos-delay={200}>
            I'm also active as College Representative in youth organization
            named <span style={{ fontWeight: "bold" }}>Code For Change</span>{" "}
            that is a national community from Nepal and a home of several IT
            personalities across the Nation.
          </p>
        </div>
        <br />
        <a className="hero" href={Resume} style={{ 'padding': '5px', 'backgroundColor': 'green', 'color': 'white', 'textDecoration': 'none' }} target="_blank">Download Resume</a>
      </div>
    </div>
  );
};

export default about;
