import React from 'react';
import { FaReact } from 'react-icons/fa';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Site criado por Felipe Rangel, utilizando
          <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer"> React</a>
        </p>
        <FaReact />
      </footer>
    );
  }
}

export default Footer;
