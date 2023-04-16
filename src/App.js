
import Home from './layer/Home'
import Career from './layer/Career'
import Projects from './layer/Projects';
import Model from './components/Model'
const styles = {
  // background: {
  //   height: '100vh',
  //   width:'100vw'
  // }
}
function App() {

  return (
    <div style={styles.background}>
      <Home />
      <Career/>
      <Projects/>
      {/* <Model/> */}
    </div>
  );
}

export default App;
