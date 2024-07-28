import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { unselectAll } from '../../store/reducers/selectedPerson';
import './Snackbar.css';

export const Snackbar = () => {
  const selectedItems = useAppSelector((state) => state.selectedPerson.selectedPerson);
  const dispatch = useAppDispatch();

  const handleUnselectAll = () => {
    dispatch(unselectAll());
  };

  if (selectedItems.length) {
    return (
      <div className="snackbar">
        <span>{`${selectedItems.length} item${selectedItems.length > 1 ? 's are' : ' is'} selected`}</span>
        <div className="snackbar__button-wrapper">
          <button className="snackbar__button" onClick={handleUnselectAll}>
            Unselect all
          </button>
          <button className="snackbar__button">Download</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
