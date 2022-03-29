import logo from './logo.svg';
import './App.css';
import Gifts from './Components/Gifts';
//import Classs from './Components/Classs';
//import Product from "../src/Components/Product";
//import {userGetAllgiftQuery} from "../src/Components/gift";


function App() {


  // const responseInfo = userGetAllgiftQuery 
  // console.log("Response Information: "+ responseInfo)
  // if (responseInfo.isLoading) return <div>Loading....</div>
  // if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>
  return (
    <div className="App">
    <Gifts/>
    </div>
  );
}

export default App;

