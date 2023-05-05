import { Component } from 'react';
import {
  InputTitle,
  SearchInput,
  AddButton,
  PhonebookAddForm,
} from './Phonebook.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.changeContactList(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <PhonebookAddForm onSubmit={this.onFormSubmit}>
        <InputTitle>Name</InputTitle>
        <SearchInput
          onChange={this.onChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
        />
        <InputTitle>Phone</InputTitle>
        <SearchInput
          onChange={this.onChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
        />
        <AddButton>Add contact</AddButton>
      </PhonebookAddForm>
    );
  }
}
