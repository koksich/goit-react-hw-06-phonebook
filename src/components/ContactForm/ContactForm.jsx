import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
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