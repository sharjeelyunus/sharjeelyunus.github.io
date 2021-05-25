import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="profile">
                <img className="profile__pic" src="https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/sharjeel-cover.png?alt=media&token=52e2228a-e5e5-4aa3-b87c-afedd11f1ea3" alt="Sharjeel Yunus | Web Developer & Graphic Designer" title="Sharjeel Yunus | Web Developer & Graphic Designer" />
                <div class="header__info">
                    <div>
                        <b><span class="hello">Hello.👋</span></b>
                    </div>
                    <div class="intro__card">
                        <span class="comment">{"// Self-Introduction"}</span> <br />
                        <span class="card__title">Name</span>
                        <span class="yellow">&nbsp;{"{"}</span> <br />
              &nbsp; FirstName: <span class="blue">Sharjeel;</span> <br />
              &nbsp; LastName: <span class="blue">Yunus;</span> <br />
                        <span class="yellow">{"}"}</span>
                    </div>
                    <br />
                    <div class="intro__card">
                        <span class="card__title">What I Do?</span>
                        <span class="yellow">&nbsp;{"{"}</span> <br />
              &nbsp; Profession: <span class="blue">Developer;</span> <br />
              &nbsp; Hobby: <span class="blue">Designer;</span> <br />
                        <span class="yellow">{"}"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
