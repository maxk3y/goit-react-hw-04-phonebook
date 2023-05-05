import { Component } from 'react';
import { Filter } from './Phonebook/Contacts/Filter/Filter';
import { ContactForm } from './Phonebook/ContactForm';
import { Wrapper } from './Wrapper/wrapper';
import { ContactsList } from './Phonebook/Contacts/ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Notification } from 'utils/Notification';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const currentContacts = this.state.contacts;
    if (currentContacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  }

  changeContactList = (name, number) => {
    const isFindName = this.state.contacts.find(
      contact => contact.name === name
    );

    if (isFindName) {
      Notification(name);
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, { id: nanoid(), name, number }],
    });
  };

  removeContact = contactID => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactID),
      };
    });
  };

  changeFilter = evt => this.setState({ filter: evt.currentTarget.value });

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm changeContactList={this.changeContactList} />
        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </Wrapper>
    );
  }
}
