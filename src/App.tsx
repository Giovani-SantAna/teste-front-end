import './styleses/globall.scss';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categorias from './components/Categorias'
import MeuCachorro from './components/MeuCachorro'
import PrincipaisMarcas from './components/PrincipaisMarcas'
import Artigos from './components/Artigos'
import Instagram from './components/Instagram'
import SeInscreva from './components/SeInscreva'
import Footer from './components/Footer'
import Parceiros from './components/Parceiros'


//Para melhor organização do codigo o site
//foi separado em diversos componentes
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categorias />
      <MeuCachorro />
      <PrincipaisMarcas />
      <Artigos />
      <Parceiros />
      <Instagram />
      <SeInscreva />
      <Footer />
    </div>
  );
}

export default App;
