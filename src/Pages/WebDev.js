import React from 'react';
import Project from '../components/Project';
import firebase from '../firebase';
import './WebDev.css';

class WebDev extends React.Component {
    constructor(props) {
        super(props);
        this.state = { web_page: [], WebDevLive: [], WebDev: [] }
    }

    componentDidMount() {
        firebase.database().ref("web_page").on("value", snapshot => {
            let web_page = [];
            snapshot.forEach(snap => {
                web_page.push(snap.val());
            });
            this.setState({ web_page: web_page });
        });
        firebase.database().ref("WebDevLive").on("value", snapshot => {
            let WebDevLive = [];
            snapshot.forEach(snap => {
                WebDevLive.push(snap.val());
            });
            this.setState({ WebDevLive: WebDevLive });
        });
        firebase.database().ref("WebDev").on("value", snapshot => {
            let WebDev = [];
            snapshot.forEach(snap => {
                WebDev.push(snap.val());
            });
            this.setState({ WebDev: WebDev });
        });
    }
    render() {
        return (
            <div>
                {this.state.web_page.map(data => {
                    return (
                        <div className="webdev">
                            <header className="head">
                                <h1>{data.pageTitle}</h1>
                                <p>
                                    {data.description_l1}<br />{data.description_l2}<br />
                                    {data.skill1} <span className='yellow'>/</span> {data.skill2} <span className='yellow'>x</span> {data.skill3} <span className='yellow'>/</span> {data.skill4} <span className='yellow'>/</span> {data.skill5}
                                </p>
                            </header>
                        </div>
                    );
                })}

                <ul className="grid-wrapper-dev" id="web-dev">
                    {this.state.WebDevLive.map(data => {
                        return (
                            <Project
                                appName={data.name}
                                live={data.live}
                                liveSvg={data.liveSvg}
                                devLang={data.devLang}
                                devLangImg={data.devLangImg}
                                sourceCode={data.sourceCode}
                                webDesc={data.webDesc}
                                webImg={data.webImg}
                            />
                        );
                    })}
                    {this.state.WebDev.map(data => {
                        return (
                            <Project
                                appName={data.name}
                                devLang={data.devLang}
                                devLangImg={data.devLangImg}
                                sourceCode={data.sourceCode}
                                webDesc={data.webDesc}
                                webImg={data.webImg}
                            />
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default WebDev;
