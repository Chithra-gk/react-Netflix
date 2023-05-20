import './App.css';
import Row from './components/Row';
import requests from './request';


function App() {
  return (
    <div >
     <h1>NetFlix</h1>
     <Row title={'Netflix Originals'} fetchurl={requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
