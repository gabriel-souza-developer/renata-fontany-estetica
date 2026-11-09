import { useEffect } from 'react'
import { Cabecalho, Capa } from './componentes/capa'
import { Clinica } from './componentes/clinica'
import { Cuidados } from './componentes/cuidados'
import { Rodape, Visita } from './componentes/visita'
import { AcoesFlutuantes } from './componentes/acoes-flutuantes'
import { TELEFONE_LEGIVEL, whatsapp } from './dados'

function App() {
  useEffect(() => {
    import('./motor/motor.js')
  }, [])

  return (
    <>
      <a className="pular" href="#conteudo">Ir para o conteúdo</a>
      <Cabecalho />
      <main id="conteudo">
        <Capa />
        <Clinica />
        <Cuidados />
        <Visita />
      </main>
      <Rodape />
      <AcoesFlutuantes whatsapp={whatsapp()} numero={TELEFONE_LEGIVEL} topo="#topo" />
    </>
  )
}

export default App
