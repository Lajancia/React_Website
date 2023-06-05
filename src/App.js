
import Home from './layer/Home'
import Career from './layer/Career'
import Projects from './layer/Projects';
import Bubble from './layer/Bubble';
// import Model from './components/Model'
import Landing from './layer/Landing';

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
      <Landing/>
      {/* <Bubble/> */}
      {/* <Home /> */}
      {/* <Career/> */}
      {/* <Projects/> */}
      {/* <Model/> */}
    </div>
  );
}

export default App;
