import logo from './logo.svg';
import './App.css';
import Header from './componentes/header';
import Section from './componentes/section';
import Footer from './componentes/footer'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
function App() {
  return (
   <div>
    <Header/>
    <Section/>
    <Footer/>
   </div>

  );
}

export default App;
