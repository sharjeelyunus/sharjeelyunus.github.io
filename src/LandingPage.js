import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
            {/* Profile Section */}
            <div className="profile">
                <img className="profile__pic" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/sharjeel-cover.png?alt=media&token=52e2228a-e5e5-4aa3-b87c-afedd11f1ea3" alt="Sharjeel Yunus | Web Developer & Graphic Designer" title="Sharjeel Yunus | Web Developer & Graphic Designer" />
                <div className="header__info">
                    <div>
                        <b><span className="hello">Hello.👋</span></b>
                    </div>
                    <div className="intro__card">
                        <span className="comment">{"// Self-Introduction"}</span> <br />
                        <span className="card__title">Name</span>
                        <span className="yellow">&nbsp;{"{"}</span> <br />
              &nbsp; FirstName: <span className="blue">Sharjeel;</span> <br />
              &nbsp; LastName: <span className="blue">Yunus;</span> <br />
                        <span className="yellow">{"}"}</span>
                    </div>
                    <br />
                    <div className="intro__card">
                        <span className="card__title">What I Do?</span>
                        <span className="yellow">&nbsp;{"{"}</span> <br />
              &nbsp; Profession: <span className="blue">Developer;</span> <br />
              &nbsp; Hobby: <span className="blue">Designer;</span> <br />
                        <span className="yellow">{"}"}</span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about">
                <div className="about__container">
                    <div className="about__details">
                        <h2 title="Who I am?">About Me</h2>
                        <p id="about-para">
                            Hi, I’m Sharjeel Yunus, a&nbsp;
                            <span title="at Islamia University of Bahwalpur">
                                Computer Science Student.</span>
                                &nbsp; I have serious passion for modren looking websites with a little
                                bit of animation.
                        </p>
                        <div class="technologies">Technologies that I use:</div>
                        <div class="display__skills">
                            <ul class="left__skills">
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Freact-logo.png?alt=media&token=e963cc0b-ead5-4820-b170-863f5f5645f5" alt="Reactjs" /> React</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fjs-logo.png?alt=media&token=c1aeb644-c818-4927-84ee-b8c2051cbae2" alt="JS" /> JavaScript</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fhtml-logo.png?alt=media&token=98f4ecc0-930e-46d2-9e70-8e31c9db9a06" alt="HTML" /> HTML / CSS</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2F5847f40ecef1014c0b5e488a.png?alt=media&token=23cc3649-079c-4662-b681-3a542064e727" alt="" /> Firebase</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/App%20Development%2Fflutter-logo.png?alt=media&token=701b89ad-3d40-45ba-ab70-7db99a5b0ef6" alt="Flutter" /> Flutter</li>
                            </ul>
                            <ul class="right__skills">
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fnodejs.png?alt=media&token=2f4f2c45-0951-45e2-8665-cc2835f1a71c" alt="NodeJS" /> Node.js / Express.js</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fmongodb.png?alt=media&token=5169fa2a-307b-47f8-9340-7b3077807b5d" alt="MongoDB" /> MongoDB</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Web%20Dev%2Fbootstrap-5-1.svg?alt=media&token=19dcc7df-09f0-434c-ba35-7cca1cbf639d" alt="Bootstrap" /> Bootstrap</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/illustrator.png?alt=media&token=6de3232e-ba22-4228-8383-6ae8b4270507" alt="Illustrator" /> Illustrator</li>
                                <li><img className="skill" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/photoshop-cc.svg?alt=media&token=c5ea16d6-675f-43ba-9079-85957f2cc6f4" alt="Photoshop" /> Photoshop</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img
                            className="about__cover"
                            src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Sharjeel%20artwork.png?alt=media&token=8e3ba1cd-0e01-4387-9517-b92da563bd8a"
                            alt="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
