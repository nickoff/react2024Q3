import './Fallback.css';

interface FallbackProps {
  reloadCallback: () => void;
}

export const Fallback = (props: FallbackProps) => {
  const { reloadCallback } = props;

  return (
    <div className="fallback">
      <h2>Ups... 😟 Something went wrong!</h2>
      <button className="fallback__reload-button" onClick={reloadCallback}>
        Try reload
      </button>
    </div>
  );
};
