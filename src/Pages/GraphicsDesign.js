import React from 'react';
import firebase from '../firebase';
import './GraphicsDesign.css';

class GraphicsDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Portraits: [], gd_page: [] }
    }

    componentDidMount() {
        firebase.database().ref("Portraits").on("value", snapshot => {
            let Portraits = [];
            snapshot.forEach(snap => {
                Portraits.push(snap.val());
            });
            this.setState({ Portraits: Portraits });
        });
        firebase.database().ref("gd_page").on("value", snapshot => {
            let gd_page = [];
            snapshot.forEach(snap => {
                gd_page.push(snap.val());
            });
            this.setState({ gd_page: gd_page });
        });
    }

    render() {
        return (
            <div className="head g_head">
                {this.state.gd_page.map(data => {
                    return (
                        <div>
                            <header>
                                <h1>{data.pageTitle}</h1>
                                <p>
                                    {data.description_l1}<br />{data.description_l2}<br />
                                    {data.skill1} <span className='yellow'>x</span> {data.skill2} <span className='yellow'>x</span> {data.skill3} <span className='yellow'>x</span> {data.skill4}
                                </p>
                            </header>
                            <br />
                            <h2 title="Vector Arts">{data.title}</h2>
                            <p>{data.desc}</p>
                        </div>
                    );
                })}

                <div class="grid-wrapper">
                    {this.state.Portraits.map(data => {
                        return (
                            <div class="box zone blue portrait">
                                <img src={data.imgUrl} title={data.title} alt={data.title} />
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default GraphicsDesign;
