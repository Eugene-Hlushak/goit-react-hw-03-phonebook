import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Title, Container } from './Phonebook/PhoneBook.styled';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = value => {
    if (this.state.contacts.find(({ name }) => name === value.name)) {
      alert(`${value.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, value],
      };
    });
  };

  deleteContact = contactId =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));

  showContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={value => this.addContact(value)} />
        <Title>Contacts</Title>
        <Filter handleChange={this.onChangeHandler} />
        <ContactList
          contacts={this.showContacts()}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
