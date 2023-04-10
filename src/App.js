
import Home from './layer/Home'
import Career from './layer/Career'
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
    </div>
  );
}

export default App;
