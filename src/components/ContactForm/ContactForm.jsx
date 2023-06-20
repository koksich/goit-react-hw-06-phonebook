import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getConatcs } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getConatcs);

  const onSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget.elements;

    if (onDuplicateCheck(name.value)) {
            alert(`${name.value} is already in contacts`);
      event.currentTarget.reset();
      name.focus();
      return;
    }
    dispatch(addContact(name.value, number.value));
    event.currentTarget.reset();
  }

const onDuplicateCheck = name => {
  return contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="name"
      />

      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="number"
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}