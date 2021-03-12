import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import RadioButton from './components/RadioButton'

function App() {
  return (
    <div>
      <Button onClick='alertFunction(abc)'></Button>
      <InputField></InputField>
      <RadioButton></RadioButton>
    </div>
  );
}

function alertFunction(alertVal){
  alert(alertVal);
}

export default App;
