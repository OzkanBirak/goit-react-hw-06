import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim() === '' || number.trim() === '') {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} zaten iletişim listesinde mevcut!`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          İsim
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Telefon Numarası
          <input
            className={styles.input}
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
      </div>
      <button className={styles.button} type="submit">
        İletişim Ekle
      </button>
    </form>
  );
};

export default ContactForm;