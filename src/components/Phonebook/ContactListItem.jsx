import PropTypes from 'prop-types';
import { ContactItem, Contact } from './PhoneBook.styled';

export default function ContactListItem({ contacts, deleteContact }) {
  return (
    <>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <Contact>
            {contact.name}: {contact.number}
          </Contact>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </ContactItem>
      ))}
    </>
  );
}

ContactListItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
