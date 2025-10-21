import { useState } from 'react';
import './App.css'

function App() {
 const [cliques, setCliques] = useState(0);

 const incrementar = () => {
  setCliques(cliques + 1);
};

return (
 <div className="app-container">
  <div className="container-box">
  <h1>Contador de Cliques</h1>
  <p>Você clicou {cliques} vezes</p>
  <button onClick={incrementar}>Clique aqui</button>
</div>
</div>
);
}

export default App;
