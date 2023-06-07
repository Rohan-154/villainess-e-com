import React, { useState } from 'react';
import './AddressManagement.css';

const AddressForm = ({ onAddAddress }) => {
  const [newAddress, setNewAddress] = useState({
    name: '',
    line1: '',
    line2: '',
    pincode: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddAddress(newAddress);
    setNewAddress({
      name: '',
      line1: '',
      line2: '',
      pincode: '',
      mobile: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <input
        name="name"
        value={newAddress.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="line1"
        value={newAddress.line1}
        onChange={handleChange}
        placeholder="Address Line 1"
        required
      />
      <input
        name="line2"
        value={newAddress.line2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        name="pincode"
        value={newAddress.pincode}
        onChange={handleChange}
        placeholder="Pincode"
        required
      />
      <input
        name="mobile"
        value={newAddress.mobile}
        onChange={handleChange}
        placeholder="Mobile Number"
        required
      />
      <button type="submit">Add Address</button>
    </form>
  );
};

export default AddressForm;
