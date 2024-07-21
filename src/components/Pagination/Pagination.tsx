import { NavLink } from 'react-router-dom';
import './Pagination.css';

type PaginationProps = {
  totalPages: number;
};

export const Pagination = (props: PaginationProps) => {
  const { totalPages } = props;
  const pagesLink = Array.from({ length: totalPages }).map((_, index) => `${index + 1}`);

  return (
    pagesLink.length > 0 && (
      <ul className="pagination">
        {pagesLink.map((page) => (
          <li key={page}>
            <NavLink to={`/${page}`}>{page}</NavLink>
          </li>
        ))}
      </ul>
    )
  );
};
