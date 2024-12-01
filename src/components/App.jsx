import ContactForm from "./contactform/ContactForm";
import SearchBox from "./searchbox/SearchBox";
import ContactList from "./contactlist/ContactList";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
