import { IRepository } from './RepositoryList';

export interface IRepositoryProps {
  repository: IRepository;
}
export function RepositoryItem(props: IRepositoryProps) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description || 'default'}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}

export function RepositoryItemTable(props: IRepositoryProps) {
  return (
    <tr>
      <td>
        <strong>{props.repository?.name}</strong>
      </td>
      <td>
        <p>{props.repository.description || 'default'}</p>
      </td>

      <td>
        <a href={props.repository.html_url}>Acessar repositório</a>
      </td>
    </tr>
  );
}
export function RepositoryItemCard(props: IRepositoryProps) {
  return (
    <>
      <strong>{props.repository?.name}</strong>

      <p>{props.repository.description || 'default'}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </>
  );
}
