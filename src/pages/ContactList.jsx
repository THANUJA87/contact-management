import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteContact, getContact } from '../server/allApi'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import user from '../assets/user.png'


const ContactList = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  const [allContact, SetAllContact] = useState([])

  useEffect(()=>{
    displayContact()
  },[])

    const displayContact = async () =>{
      try {
        const result= await getContact()
        console.log(result);
        if(result.status >=200 && result.status<300 )
        {
              SetAllContact(result.data)
        }else{
          alert("Api call failed")
        } 
        
      } catch (err) {
        console.log(err);
        
        
      }
        
    }

    const delContact = async (id)=>{
      try{
        await deleteContact(id)
        displayContact()
      }catch(err){
        console.log(err);
        
      }
    }

  return (
    <div className=" bg-light "  style={{minHeight:'100vh'}}>
      <h1 className='pt-5 text-center text-success'><i class="fa-solid fa-address-book"></i> Contact Management</h1>
      <div className=' container d-flex justify-content-between align-items-center '>
        <h2 className='text-success mb-5' >
          Contact List
          </h2>
          <Link to="/add">
            <button className="btn btn-success "> + Add Contact</button>
          </Link>
       
      </div>
      <Row className='ms-3'>
        {
          allContact?.length>0 ? 
          allContact.map(contact =>(

           <Col sm={12} md={6} lg={3}className='ms-5 text-center' >
            <Card border='primary' style={{ width: '18rem' }}>
            <Card.Header> <img  width={'50px'} src={user} alt="" /> </Card.Header>
            <Card.Body>
              <Card.Title>{contact.Name}</Card.Title>
              <Card.Text>
              {contact.email} <br/>
              {contact.number}
              </Card.Text>
              <div className='d-flex justify-content-between'>
                <Link to={`/edit/${contact.id}`} className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></Link>
                <Button className='btn btn-danger' onClick={()=>delContact(contact?.id)}><i class="fa-solid fa-trash"></i>  </Button>
              </div>
            </Card.Body>
          </Card>
           </Col>
          ))
          :
            <div>No Contact saved</div>
          }
        

         </Row>



 
    </div>
   
  )
}

export default ContactList