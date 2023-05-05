import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from '../Phonebook/Contacts/ContactForm';
import { ContactsList } from '../Phonebook/Contacts/ContactsList/ContactsList';
import { Filter } from '../Phonebook/Contacts/Filter/Filter';
import { Wrapper } from 'components/Wrapper/wrapper';
import { nanoid } from 'nanoid';
import { Notification } from 'utils/Notification';

export function Phonebook({ initialContacts, initialFilter }) {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );

  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeContactList = ({ id, name, number }) => {
    const isFindName = contacts.find(contact => contact.name === name);

    if (isFindName) {
      Notification(name);
      return;
    }

    id = nanoid(4);

    setContacts(contacts => [...contacts, { id, name, number }]);
  };

  const removeContact = contactID => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactID));
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm changeContactList={changeContactList} />
      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactsList contacts={filteredContacts} removeContact={removeContact} />
    </Wrapper>
  );
}

Phonebook.propTypes = {
  initialContacts: PropTypes.array.isRequired,
  initialFilter: PropTypes.string.isRequired,
};
