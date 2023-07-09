import {useState} from "react"
import Work from './layer/Work'
import Landing from './layer/Landing';
import {Route,Routes} from 'react-router-dom';
import Education from './layer/Education'
import Project from './components/Room'
const styles = {
  // background: {
  //   height: '100vh',
  //   width:'100vw'
  // }
}
function App() {
  document.title = "Lajancia React Portfolio";
  const [render,setRender] = useState(true);
  // console.log(render)
  return (
    <div style={styles.background}>
      
      <Routes>
          <Route exact path="/" element={<Landing render={render} setRender={setRender}/>}></Route>
          <Route path="/work" element={< Work/>}></Route>
          <Route path="/education" element={< Education/>}></Route>
          <Route path="/Project1" element={< Project/>}></Route>
          <Route path="/" element={'Not found'}></Route>
        </Routes>
    </div>
  );
}

export default App;
