import React from 'react';
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
                                    <p>{data.webDesc}</p>
                                    <div className='text'><a href={data.sourceCode} target='_blank' rel="noreferrer">SOURCE CODE</a></div>
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
                                    <p>{data.webDesc}</p>
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
        )
    }
}

export default WebDev;
