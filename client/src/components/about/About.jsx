import "./about.css";
import Me from "../../img/rev.jpg";
import Award from "../../img/Newspaper.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Tech Enthusiast and Innovator | NIT Jamshedpur Student | Google Data
          Analytics Certified
        </p>
        <p className="a-desc">
          Bittu Thakur is a technology enthusiast based in Jharkhand. He is
          currently a Technical Team Member at Team Revanta, where he
          collaborates on various technical projects. Bittu also gained valuable
          experience as a Summer Trainee at NTPC Limited and contributed to
          event management and content creation for OJASS - NIT Jamshedpur. He
          is pursuing a Bachelor of Technology in Mechanical Engineering at NIT
          Jamshedpur and holds a Google Data Analytics certification from
          Coursera.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              <strong>Date of Accomplishment:</strong> May 8, 2019
            </h4>
            <p className="a-award-desc">
              In May 2019, I secured the 6th position in the district in the
              ICSE examinations, showcasing my dedication to academic excellence
              and commitment to personal growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
