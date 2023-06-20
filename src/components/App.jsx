import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper, Title } from './App.styled';

export const App = () => {
  

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};


