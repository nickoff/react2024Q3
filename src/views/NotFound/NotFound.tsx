import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found__image" src="/24.png" alt="404" />
      <h3>404: Page not found</h3>
      <Link className="not-found__link" to={'/'}>
        Back to Home
      </Link>
    </div>
  );
};
