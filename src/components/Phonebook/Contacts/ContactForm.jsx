import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputTitle,
  SearchInput,
  AddButton,
  PhonebookAddForm,
} from '../Phonebook.styled';

export function ContactForm({ changeContactList }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const resetForm = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
    setName('');
    setNumber('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    changeContactList({ name, number });
    resetForm(e);
  };

  return (
    <PhonebookAddForm onSubmit={handleFormSubmit}>
      <InputTitle>Name</InputTitle>
      <SearchInput
        onChange={handleChangeName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputTitle>Phone</InputTitle>
      <SearchInput
        onChange={handleChangeNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddButton>Add contact</AddButton>
    </PhonebookAddForm>
  );
}

ContactForm.propTypes = {
  dataContacts: PropTypes.func,
};
