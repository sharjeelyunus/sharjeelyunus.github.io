import React from 'react';
import './DevArticles.css';

class DevArticles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
        }
    }

    callApi = (username = 'sharjeelyunus') => {
        fetch(`https://dev.to/api/articles?username=${username}`)
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((jsonResult) => {
                // Do something with the result
                this.setState({ articles: jsonResult })
            })
    }

    componentDidMount() {
        this.callApi(this.props.username);
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.articles.map(
                        item =>
                            <div className="item">
                                <a href={item.canonical_url}>
                                    <h1 className="heading"><strong>{item.title}</strong></h1></a>
                                {item.cover_image ?
                                    <img src={item.cover_image} alt=""></img> :
                                    <div className="description"><h2>{item.description}</h2></div>
                                }
                            </div>
                    )}
                </div>
            </div>
        )
    }
}

export default DevArticles;