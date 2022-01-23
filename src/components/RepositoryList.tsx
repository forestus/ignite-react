import { RepositoryItem, RepositoryItemTable } from './RepositoryItem';
import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

// https://api.github.com/orgs/rocketseat/repos
export interface IRepository {
  name: string;
  description: string;
  html_url: string;
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  return (
    <>
      <section className="repository-list">
        <h1>Lista de repositorios</h1>

        <ul>
          {repositories.map((repository) => {
            return (
              <RepositoryItem key={repository.name} repository={repository} />
            );
          })}
        </ul>
      </section>
      <section className="repository-list-table">
        <h1>Lista de repositorios</h1>
        <table>
          <tbody>
            {repositories.map((repository) => {
              return (
                <RepositoryItemTable
                  key={repository.name}
                  repository={repository}
                />
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="repository-list-card">
        <h1>Lista de repositorios</h1>
        {repositories.map((repository) => {
          return (
            <div className="teste">
              <RepositoryItemTable
                key={repository.name}
                repository={repository}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
