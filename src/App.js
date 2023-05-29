
import Home from './layer/Home'
import Work from './layer/Work'
import Projects from './layer/Projects';
import Bubble from './layer/Bubble';
import Career from './layer/Career';
import Model from './components/Model'
import Landing from './layer/Landing';
import {Route,Routes} from 'react-router-dom';

const styles = {
  // background: {
  //   height: '100vh',
  //   width:'100vw'
  // }
}
function App() {
  document.title = "Lajancia React Portfolio";
  return (
    <div style={styles.background}>
      
      <Routes>
          <Route exact path="/" element={<Landing/>}></Route>
          <Route path="/product1" element={< Work/>}></Route>
          <Route path="/" element={'Not found'}></Route>
        </Routes>
      {/* <Bubble/> */}
      {/* <Home /> */}
      {/* <Career/> */}
      {/* <Projects/> */}
      {/* <Model/> */}
    </div>
  );
}

export default App;
