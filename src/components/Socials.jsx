import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa';

const Socials = () => {
  return (
    <div style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ color: 'white', margin: '0 10px', fontSize: '24px' }} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{ color: 'white', margin: '0 10px', fontSize: '24px' }} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube style={{ color: 'white', margin: '0 10px', fontSize: '24px' }} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter style={{ color: 'white', margin: '0 10px', fontSize: '24px' }} />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ color: 'white', margin: '0 10px', fontSize: '24px' }} />
      </a>
    </div>
  );
};

export default Socials;
