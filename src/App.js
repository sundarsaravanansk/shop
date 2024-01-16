
import { useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import ImageSlider from './Component/ImageSlider';
import ProductDisplay from './Component/ProductDisplay';
import ProductList from './Component/ProductList';
import ProductSection1 from './Component/ProductSection1';


function App() {

  let[status , setStatus]=useState('all');
  function handleData(data){
    setStatus(data);
    console.log(data)
  }
  let[headerCount , setHeadercount]=useState(0);

  let [plist, setPlist]=useState([])

  function handleplist(newpList){
    setPlist(newpList);
    //console.log(newpList)
  }

  return (
    <>
      <Header onData={(data)=>{handleData(data)}} headerCount={headerCount} plist={plist}/>
      <ProductDisplay/>
      <ImageSlider/>
      <ProductList status={status} onHeadercount={(count)=>{setHeadercount(count)}} onplist={(newpList)=>{handleplist(newpList)}}/>
      <Footer/>
    </>
  );
}

export default App;
