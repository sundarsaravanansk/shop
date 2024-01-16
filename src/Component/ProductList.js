import React, { useState } from 'react';
import { Data } from '../Database/ProductListData';
import CardList from './CardList';
import './Card.css';


const ProductList = (props) => {

    const[plist , setPlist]=useState(Data)

    function handleAddInc(val){
        const newpList = plist.map((data)=>{
            if(data.Name === val ){
                return  {...data, orderedQ : data.orderedQ + 1}
            }else{
                return data;
            }
        })
        setPlist(newpList)
    }

    function handleDec(val){
        const newpList = plist.map((data)=>{
            if(data.Name === val  && data.orderedQ > 0){
                return  {...data, orderedQ : data.orderedQ - 1}
            }else{
                return data;    
            }
        })
        setPlist(newpList)
    }

    function handleHeadercount(name){
       
        const newpList = plist.map((data)=>{
            if(data.Name === name && data.addtocard === 0){
                return  {...data, addtocard : 1}
            }else{
                return data;
            }
        })
        setPlist(newpList)
        checkAddedCount();
        datasent();
    }
    checkAddedCount();
    datasent();
    
    function checkAddedCount(){
        let count = 0;
        plist.forEach((val)=>{
            if(val.addtocard === 1){
                count ++
            }
        })
       
        props.onHeadercount(count)
    }

    function datasent(){
        props.onplist(plist)
    }

    return (
        <div className='product'>
            <div className='mx-w df'>
            {
                plist.map(val =>{
                    if(val.cat.includes(props.status)){
                        return<CardList cardData={val} onHeadercount={(val)=>{handleHeadercount(val)}} onAddInc={(val)=>{handleAddInc(val)}}    onDec={(val)=>{handleDec(val)}}/>
                    }
                })
            }
           
            </div>
        </div>
    );
}

export default ProductList;
