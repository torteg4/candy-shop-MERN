
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';
import DisplayList from './components/DisplayList';
import DisplayOne from './components/DisplayOne';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route index />
            <Route path="/candies/create" element ={<Form />}/>
            <Route path="candies" element ={<DisplayList />}/>
            <Route path="/candies/:id" element= {<DisplayOne />} />
            <Route path="/candies/update/:id" element= {<UpdateForm />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
