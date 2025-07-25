
import './App.css'
import { obterHoraAtual, obterDiaSemana } from './utilis/tempo.ts';
function App() {
  return (
    <div>
      <p>Hoje é: {obterDiaSemana()}</p>
      <p>Hora atual: {obterHoraAtual()}</p>
    </div>
  );
}
export default App
