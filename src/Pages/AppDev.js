import React from 'react';
import firebase from '../firebase';
import Project from '../components/Project';

class AppDev extends React.Component {
    constructor(props) {
        super(props);
        this.state = { AppDevelopment: [], app_page: [] }
    }

    componentDidMount() {
        firebase.database().ref("AppDevelopment").on("value", snapshot => {
            let AppDevelopment = [];
            snapshot.forEach(snap => {
                AppDevelopment.push(snap.val());
            });
            this.setState({ AppDevelopment: AppDevelopment });
        });
        firebase.database().ref("app_page").on("value", snapshot => {
            let app_page = [];
            snapshot.forEach(snap => {
                app_page.push(snap.val());
            });
            this.setState({ app_page: app_page });
        });
    }
    render() {
        return (
            <div>
                {this.state.app_page.map(data => {
                    return (
                        <div className="head g_head">
                            <header>
                                <h1>{data.pageTitle}</h1>
                                <p>
                                    {data.description_l1}<br />{data.description_l2}<br />
                                    {data.skill1} <span className='yellow'>/</span> {data.skill2} <span className='yellow'>x</span> {data.skill3}
                                </p>
                            </header>
                        </div>
                    );
                })}

                <ul className="grid-wrapper-dev" id="app-dev">
                    {this.state.AppDevelopment.map(data => {
                        return (
                            <Project
                                appName={data.appName}
                                devLang={data.Technology}
                                devLangImg={data.TechImg}
                                sourceCode={data.sourceCode}
                                webImg={data.appImg}
                            />
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default AppDev;
