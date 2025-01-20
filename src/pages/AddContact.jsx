import React, { useState } from 'react'
import { Button, FloatingLabel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { addContact } from '../server/allApi';
import { Link, useNavigate } from 'react-router-dom';

const AddContact = () => {

    const navigate = useNavigate();
    
    const [ContactDetails,SetcontactDetails] = useState({
        Name:"",email:"",number:""
    })
    console.log(ContactDetails);

    const newContact= async ()=>{
      const {Name,email,number} = ContactDetails
      if(Name && email && number){
        try {
          const result = await addContact(ContactDetails)
          if(result.status >= 200 && result.status < 300){
            alert("Contact Saved")
            navigate('/')

          }else{
            alert("Api call failed")
          }
          
        } catch (err) {
          console.log(err);
          
          
        }
      }else{
        alert("please fill all details!!")
      }
    }
    
  return (
 

  <div className="d-flex justify-content-center align-items-center vh-100" >
  <div className="container m-5 text-center border rounded bg-primary" style={{width:"500px"}}>
       <h2 className='fw-bolder text-light  mb-4 mt-3'>Add Contact</h2>
    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
      <Form.Control
        onChange={e =>
          SetcontactDetails({ ...ContactDetails, Name: e.target.value })
        }
        type="text"
        placeholder="name"
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
      <Form.Control
        onChange={e =>
          SetcontactDetails({ ...ContactDetails, email: e.target.value })
        }
        type="email"
        placeholder="name@example.com"
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Mobile Number">
      <Form.Control
        onChange={e =>
          SetcontactDetails({ ...ContactDetails, number: e.target.value })
        }
        type="number"
      />
    </FloatingLabel>
   <div className='d-flex justify-content-evenly mb-3'>
      <Button  onClick={newContact} className="mt-4 btn btn-success">
        Save
      </Button>
      <Link to={'/'}><Button className="mt-4">
        Back
      </Button></Link>
   </div>
  </div>
</div>

  )
}

export default AddContact