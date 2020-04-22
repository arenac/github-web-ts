import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Reposiories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [reposistories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...reposistories, repository]);
    setNewRepo('');
  };

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Enter the repo name"
        />
        <button type="submit">Search</button>
      </Form>
      <Reposiories>
        {reposistories.map(repository => (
          <a key={repository.full_name} href="/">
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        ))}
      </Reposiories>
    </>
  );
};

export default Dashboard;
