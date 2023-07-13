import React from "react";

// This function displays the About Me section

export default function AboutMe() {
  return (
    <div className="card m-3" >
      <h4 className="card-header">About Me</h4>
      <div className="row card-body">
        <div className="col-sm-4 justify-content-center align-items-center">
          <img className="card-img" src={require("./images/CAG-profile-photo.jpeg")} alt="Cesar Alonso Garcia" />
        </div>
        <div className="col-sm-8">
          <p>
            I am an Electrical Engineer with 11 years of professional experience
            currently working for Heads Up Technologies. Most of my experience
            is in PCB design for enterprise servers. However, I also have
            experience within the transportation industry, the medical device
            industry, and the aviation industry.
          </p>
          <p>
            I am based out of Dallas, TX. When I was in college at St. Mary's
            University in San Antonio, TX., I finished several programming
            classes since I was not sure if I wanted to be a Software Engineer
            or an Electrical Engineer. I almost completed a double major degree,
            but I decided to stay in the Electrical Engineering path.
          </p>
          <p>
            After several years, I finally decided to look for a way to get more
            proficient in Web Development so I decided to join the SMU Full
            Stack Developer Bootcamp. I really enjoy coding and developing
            websites. Feel free to take a look at some of my most recent
            creations!
          </p>
        </div>
      </div>
    </div>
  );
}
