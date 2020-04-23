import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/2737134?s=460&u=48ab411bf8f3dcb74a3dfa57110ec92762c0b578&v=4"
            alt="nilo"
          />
          <div>
            <strong>facebook/react</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1234</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1234</strong>
            <span>Folks</span>
          </li>
          <li>
            <strong>1234</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="test">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
