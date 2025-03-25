
import Greet from './Components/Greet.js';
import Message from './Components/Message.js'
import Counter from './Components/Counter.js'
import Form from './Components/Form.js'
function App() {
  return (
    <div className="App">
     
       <Greet name = "Ahtesham"> <p>This is children props</p></Greet>
        
       <Message />

       <Counter />
      
      <Form />
    </div>
  );
}

export default App;
