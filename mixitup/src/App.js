import './App.scss';
import Landing from './landing/Landing';


function App() {
  return (
    <div className='container'>
        <Landing />
        <div id="content" style={{backgroundColor: "#fcbf49ff", height:"500px", marginTop:"1vw"}}>two</div>
        {/* <div style={{height:"500px", color:"white", backgroundColor:"black"}}>
        stu
        </div> */}
    </div>
    
  );
}

export default App;
