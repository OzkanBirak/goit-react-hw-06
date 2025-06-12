import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.number}>{number}</span>
      </div>
      <button
        className={styles.deleteButton}
        onClick={handleDelete}
        type="button"
      >
        Sil
      </button>
    </li>
  );
};

export default Contact;