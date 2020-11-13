import React from "react";
import myImage from "../images/58608497_10218716357490917_1622117445852463104_o.jpg";
function About() {
  return (
    <>
      <section class="container">
        <section class="card mb-3" style={{ maxWidth: "540px" }}>
          <section class="row no-gutters">
            <section class="col-md-4">
              <img src={myImage} class="card-img" alt="..." />
            </section>
            <section class="col-md-8">
              <section class="card-body">
                <h5 class="card-title">About Me</h5>
                <ul>
                  <li>E-mail: jared117@live.com</li>
                  <li>
                    LinkedIn:https://www.linkedin.com/in/jared-bartynski-103a551b2/
                  </li>
                  <li>Github:https://github.com/JaredBartynski</li>
                  <li>Resume:https://my.indeed.com/p/jaredb-8z8cwbn</li>
                </ul>
                <br />
                <p class="card-text">
                  I was born and raised in Allentown, Pennsylvania. I graduated
                  from Parkland High School and spent the next ten years working
                  warehouse jobs. I enjoyed the physical work but I found that
                  it was not mentally stimulating or challenging. I started to
                  learn to code on free websites and found that I really enjoyed
                  it. This made me want to pursue coding and thus I found the
                  Penn boot camp that I am currently attending. Once I graduate
                  in November I will be a full stack developer and will be
                  excited to start my new career.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
      ;
    </>
  );
}

export default About;
