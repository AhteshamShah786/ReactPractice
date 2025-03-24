
import Greet from './Components/Greet.js';
import Message from './Components/Message.js'
import Counter from './Components/Counter.js'
function App() {
  return (
    <div className="App">
     
       <Greet name = "Ahtesham"> <p>This is children props</p></Greet>
        
       <Message />

       <Counter />
      
    </div>
  );
}

export default App;
