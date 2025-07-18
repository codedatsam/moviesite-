import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import React from 'react';
function App() {
  const [clicked, setClicked] = React.useState(false)
  const handleClick = () =>{
        setClicked(prev => !prev);
    }

  return (
    <>
     <Header/>
     <Form
     click = {clicked}
     handleClick= {handleClick}
     />
     
     
     <Footer
     click = {clicked}
     handleClick= {handleClick}
     />
     
    </>
  )
}

export default App
