import { ContactItem } from './ContactsItem/ContactsItem';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
        >
          <button
            style={{ marginLeft: 10 }}
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            Delete
          </button>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
