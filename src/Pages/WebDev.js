import React from 'react';
import firebase from '../firebase';
import './WebDev.css';

class WebDev extends React.Component {
    constructor(props) {
        super(props);
        this.state = { WebDevLive: [], WebDev: [] }
    }

    componentDidMount() {
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
                <div className="webdev">
                    <header className="head">
                        <h1>web dev projects</h1>
                        <p>Check out my latest web development portfolio projects. <br />
                            Technologies i'm familiar with: <br />
                            HTML/CSS <span className="yellow">x</span> JAVASCRIPT&nbsp;
                            <span className="yellow">x</span> REACT.JS&nbsp;
                            <span className="yellow">x</span> MERN&nbsp;
                            <span className="yellow">x</span> FIREBASE
                        </p>
                    </header>

                    <ul className="grid-wrapper-dev" id="web-dev">
                        {this.state.WebDevLive.map(data => {
                            return (
                                <li className='box-web zone-web'>
                                    <div className='live'>
                                        <a href={data.live} target='_blank' rel="noreferrer">
                                            <img src={data.liveSvg} alt="" />
                                        </a>
                                    </div>
                                    <div className='bar'><p>{data.name}</p></div>
                                    <div className='main'>
                                        <img src={data.webImg} className='image' alt="" /></div>
                                    <div className='middle'>
                                        <div className='text'><a href={data.sourceCode} target='_blank' rel="noreferrer">SOURCE CODE</a>
                                        </div>
                                    </div>
                                    <div className='dev-language'><img src={data.devLangImg} alt="" />
                                        <p>{data.devLang}</p>
                                    </div>
                                </li>
                            );
                        })}
                        {this.state.WebDev.map(data => {
                            return (
                                <li className='box-web zone-web'>
                                    <div className='bar'><p>{data.name}</p></div>
                                    <div className='main'>
                                        <img src={data.webImg} className='image' alt="" /></div>
                                    <div className='middle'>
                                        <div className='text'><a href={data.sourceCode} target='_blank' rel="noreferrer">SOURCE CODE</a>
                                        </div>
                                    </div>
                                    <div className='dev-language'><img src={data.devLangImg} alt="" />
                                        <p>{data.devLang}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default WebDev;
