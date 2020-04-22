import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Reposiories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form action="">
        <input placeholder="Enter the repo name" />
        <button type="submit">Search</button>
      </Form>
      <Reposiories>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/2737134?s=460&u=48ab411bf8f3dcb74a3dfa57110ec92762c0b578&v=4"
            alt="nilo"
          />
          <div>
            <strong>github-web-ts</strong>
            <p>this project was bootstrapped with Create React App.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/2737134?s=460&u=48ab411bf8f3dcb74a3dfa57110ec92762c0b578&v=4"
            alt="nilo"
          />
          <div>
            <strong>github-web-ts</strong>
            <p>this project was bootstrapped with Create React App.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/2737134?s=460&u=48ab411bf8f3dcb74a3dfa57110ec92762c0b578&v=4"
            alt="nilo"
          />
          <div>
            <strong>github-web-ts</strong>
            <p>this project was bootstrapped with Create React App.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Reposiories>
    </>
  );
};

export default Dashboard;
