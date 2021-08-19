import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div style={{width: '75%', margin: 'auto', marginTop: '20px'}}>
      <ContactForm />
      <br />
      <ContactList />
    </div>
  );
}

export default App;
