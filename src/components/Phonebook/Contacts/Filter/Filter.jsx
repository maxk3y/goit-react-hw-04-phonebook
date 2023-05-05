import { SearchInput } from 'components/Phonebook/Phonebook.styled';
import { ContactsFieldWrapper } from './FilterWrapper';
import { InputTitleContacts } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, changeFilter }) => {
  return (
    <ContactsFieldWrapper>
      <InputTitleContacts>Find contacts by name</InputTitleContacts>
      <SearchInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={changeFilter}
      />
    </ContactsFieldWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
