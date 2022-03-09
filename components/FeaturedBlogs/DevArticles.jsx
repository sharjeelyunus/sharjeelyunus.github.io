/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styles from './featuredblogs.module.css';

class DevArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  callApi = (username = 'sharjeelyunus') => {
    fetch(`https://dev.to/api/articles?username=${username}`)
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      })
      .then((jsonResult) => {
        // Do something with the result
        this.setState({ articles: jsonResult });
      });
  };

  componentDidMount() {
    this.callApi(this.props.username);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          {this.state.articles.map((item) => (
            <div className={styles.item} key={item.canonical_url}>
              <a href={item.canonical_url} target={'_blank'} rel='noreferrer'>
                {item.cover_image ? (
                  <img src={item.cover_image} alt=''></img>
                ) : (
                  <div className={styles.description}>
                    <h2>{item.description}</h2>
                  </div>
                )}
                <div className={styles.blog__content}>
                  <h1 className={styles.heading}>
                    <strong>{item.title}</strong>
                  </h1>
                  <p>
                    Read More <BsFillArrowRightCircleFill />
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DevArticles;
