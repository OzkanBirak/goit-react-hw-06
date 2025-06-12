import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        İletişim Ara
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="İsme göre ara..."
        />
      </label>
    </div>
  );
};

export default SearchBox;