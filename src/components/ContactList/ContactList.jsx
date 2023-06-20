import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { getConatcs, getFilter } from 'redux/contactsSlice';
import {  useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getConatcs);
  const filter = useSelector(getFilter);


   const findContacts = () => {
     const normalizedFilter = filter.toLowerCase();
     return contacts.filter(contact =>
       contact.name.toLowerCase().includes(normalizedFilter)
     );
   };

  const filteredContacts = findContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} phone={number} />;
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};
