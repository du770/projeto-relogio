
import './App.css'
import { useEffect , useState } from 'react';
import { obterHoraAtual, obterDiaSemana, obterDataAtual } from './utilis/tempo.ts';
function App() {
  // estado apenas para forçar atualização
  const [_, setTick] = useState(0);

  useEffect(() => {
   const intervalo = setInterval(() => {
   setTick(tick => tick + 1); // muda o estado para forçar render
    }, 1000);
  }, []);

  return (
    <div>
      <p>Hoje é: {obterDiaSemana()}</p>
      <p>Data atual: {obterDataAtual()}</p>
      <p>Hora atual: {obterHoraAtual()}</p>
    </div>
  );
}
export default App
