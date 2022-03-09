import React from 'react';
import DevArticles from './DevArticles';
import styles from './featuredblogs.module.css';

const FeaturedBlogs = () => {
  return (
    <section id='Blogs' className={styles.blogs}>
      <div>
        <h1>Featured Blogs</h1>
      </div>
      <div>
        <DevArticles />
      </div>
    </section>
  );
};

export default FeaturedBlogs;
