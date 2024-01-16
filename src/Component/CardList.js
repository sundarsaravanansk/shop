import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar, faPlus , faMinus } from "@fortawesome/free-solid-svg-icons";

const CardList = (props) => {
    return (
        <div className='card-item' key={props.cardData.id}>
    <Card className='Card '>
        <div className='pimg '>
      <Card.Img variant="top" src={props.cardData.img} />
      </div>
      <Card.Body>
        <Card.Title><p>{props.cardData.Name}</p></Card.Title>
        <Card.Text>
          <div className='df'>
          <div>
        <h5 className='off'>{props.cardData.pr}% off </h5>
        </div>
        <div className='del'>
        <del>₹ {props.cardData.dis}</del>
        </div>
        </div>
          <h5>From ₹ {props.cardData.From} /{props.cardData.Q} kg</h5>
          <div className='inbtn'><button className='pluse' onClick={()=>{props.onAddInc(props.cardData.Name)}}><FontAwesomeIcon icon={faPlus} fade  style={{color : 'green'}}/></button>
        <span className='span'>₹{parseInt(props.cardData.From) * parseInt(props.cardData.orderedQ)}  /</span> <span className='span'>{parseInt(props.cardData.Q) * parseInt(props.cardData.orderedQ) }KG</span>
        <button className='minus' onClick={()=>{props.onDec(props.cardData.Name)}}><FontAwesomeIcon icon={faMinus}  style={{color : 'red'}} /></button> 
             
            </div>
         <span><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'gray'}}/></span>
      </Card.Text>
        <div className='addbtn'>
        <Button variant="primary" onClick={()=>{props.onHeadercount(props.cardData.Name)}}><FontAwesomeIcon icon={faCartShopping} style={{paddingRight : '10px'}} />Add to card {" "}</Button>
      </div>
      </Card.Body>
    </Card>
        </div>
    );
}

export default CardList;
