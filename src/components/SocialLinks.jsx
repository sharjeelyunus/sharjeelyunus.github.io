import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './SocialLinks.css';

function SocialLinks() {
  return (
    <div>
      <ul className='social-icon'>
        <li>
          <a
            href='https://www.facebook.com/sharjeelyunus1'
            target='_blank'
            title='Like me on Facebook'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/sharjeelyunus/'
            target='_blank'
            rel='noreferrer'
            title='Follow me on Instagram'
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/sharjeelyunus'
            target='_blank'
            rel='noreferrer'
            title='Follow me on Twitter'
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/sharjeelyunus'
            target='_blank'
            rel='noreferrer'
            title='Follow me on GitHub'
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/sharjeel-yunus'
            target='_blank'
            rel='noreferrer'
            title='Connect with me on LinkedIn'
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
