import React from 'react';
import firebase from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './Certificates.css';

class Certificates extends React.Component {
    constructor(props) {
        super(props);
        this.state = { certificatesList: [], badgesList: [], GCPBadgesList: [] }
    }

    componentDidMount() {
        firebase.database().ref("Certificates-List").on("value", snapshot => {
            let certificatesList = [];
            snapshot.forEach(snap => {
                certificatesList.push(snap.val());
            });
            this.setState({ certificatesList: certificatesList });
        });

        firebase.database().ref("Badges").on("value", snapshot => {
            let badgesList = [];
            snapshot.forEach(snap => {
                badgesList.push(snap.val());
            });
            this.setState({ badgesList: badgesList });
        });

        firebase.database().ref("GCP-Badges").on("value", snapshot => {
            let GCPBadgesList = [];
            snapshot.forEach(snap => {
                GCPBadgesList.push(snap.val());
            });
            this.setState({ GCPBadgesList: GCPBadgesList });
        });
    }

    render() {
        return (
            <div className="achievements">
                <div className="certificates-page">
                    <div>
                        <div id="title-certificates">
                            <h1>Certifications</h1>
                        </div>
                        <div className="certificates-list">
                            <ul className="grid-wrapper-certificates" id="certificates">
                                {this.state.certificatesList.map(data => {
                                    return (
                                        <li className="box-c">
                                            <FontAwesomeIcon icon={faTrophy} /> &nbsp;
                                            <b>{data.courseName}</b><br /> <em>{data.institute}</em>
                                            <a href={data.link} target="_blank" rel="noreferrer" title="Credentials"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="badges">
                    <h1>Badges</h1>
                    <div className="grid-wrapper-badges" id="badges">
                        <div className="badge">
                            {this.state.badgesList.map(data => {
                                return (
                                    <div>
                                        <img src={data.img} alt={data.name} title={data.name} />
                                        <p>{data.name}</p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>

                <div className="qwiklabs">
                    <div className="q-heading">
                        <h1>Qwiklabs - GCP</h1>
                    </div>
                    <div>
                        <p className="q-description">
                            Qwiklabs provides real cloud environments that help developers and
                  IT professionals learn cloud platforms and software. <br />
                  These are the Badges I got from Qwiklabs learning Google Cloud
                  Platform (GCP) <br />
                            <a
                                href="https://www.qwiklabs.com/public_profiles/73e51438-ea6a-4ddf-808e-9f7f8f606296"
                                target="_blank" rel="noreferrer"
                            >Click here to see my Qwiklabs profile</a
                            >
                        </p>
                    </div>
                    <div className="q-badges">
                        <div className="grid-wrapper-qwiklabs" id="badge_box">
                            {this.state.GCPBadgesList.map(data => {
                                return (
                                    <div className="box-q">
                                        <img src={data.img} alt={data.name} title={data.name} />
                                        <p>{data.name} <br /> <span>{data.issueDate}</span></p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Certificates;