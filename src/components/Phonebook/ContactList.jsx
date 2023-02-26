import PropTypes from 'prop-types';
import ContactListItem from 'components/Phonebook/ContactListItem';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      <ContactListItem contacts={contacts} deleteContact={deleteContact} />
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
