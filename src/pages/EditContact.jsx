import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { getContactById, updateContact } from '../server/allApi';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const EditContact = () => {


  const [contactDetails, setContactDetails] = useState({
    Name: '',
    email: '',
    number: ''
  });

  const navigate = useNavigate();
  const { id } = useParams(); 

  
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const result = await getContactById(id); // Assume getContactById is an API function
        if (result.status >= 200 && result.status < 300) {
          setContactDetails(result.data); // Assuming result.data contains the contact object
        } else {
          alert("Failed to fetch contact details");
          navigate('/');
        }
      } catch (err) {
        console.error("Error fetching contact:", err);
        navigate('/');
      }
    };
  
    if (id) fetchContact();
  }, [id, navigate]);

  const handleUpdate = async () => {
    const { Name, email, number } = contactDetails;
    if (Name && email && number) {
      try {
        const result = await updateContact(contactDetails); // Assuming updateContact expects the entire contactDetails object
        if (result.status >= 200 && result.status < 300) {
          alert("Contact Updated");
          navigate('/');
        } else {
          alert("Failed to update contact");
        }
      } catch (err) {
        console.error("Error updating contact:", err);
      }
    } else {
      alert("Please fill all details!!");
    }
  };
  return (
   
 
      <div className="d-flex justify-content-center align-items-center vh-100" >
      <div className="container m-5 text-center border rounded bg-primary" style={{ width: '500px' }}>
        <h2 className="fw-bolder text-light mb-4 mt-3">Edit Contact</h2>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            onChange={e => setContactDetails({ ...contactDetails, Name: e.target.value })}
            value={contactDetails.Name}
            type="text"
            placeholder="Name"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control
            onChange={e => setContactDetails({ ...contactDetails, email: e.target.value })}
            value={contactDetails.email}
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Mobile Number">
          <Form.Control
            onChange={e => setContactDetails({ ...contactDetails, number: e.target.value })}
            value={contactDetails.number}
            type="number"
          />
        </FloatingLabel>
      
          <Button onClick={handleUpdate} className="mt-4 mb-4">
            Update
          </Button>
         
        
      </div>
      </div>
   
  );
};



export default EditContact