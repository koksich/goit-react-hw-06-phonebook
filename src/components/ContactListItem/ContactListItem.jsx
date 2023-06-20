import PropTypes from 'prop-types';
import { Item, Contact, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <div>
        <Contact>{name}: </Contact>
        <Contact>{phone}</Contact>
      </div>
      <Button type="button" aria-label="delete" onClick={()=> {dispatch(deleteContact(id))}}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};