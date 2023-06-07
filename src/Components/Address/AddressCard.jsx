import React, { useState } from 'react';
import './AddressManagement.css';

const AddressCard = ({ address, onUpdateAddress, onDeleteAddress, onAddressSelect, isSelected }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddress, setEditedAddress] = useState(address);

  const handleSave = () => {
    onUpdateAddress(editedAddress);
    setIsEditing(false);
  };

  return (
    <div className="address-card">
      <input type="checkbox" checked={isSelected} onChange={onAddressSelect} />
      {isEditing ? (
        <>
          <input value={editedAddress.name} onChange={(e) => setEditedAddress({...editedAddress, name: e.target.value})} />
          <input value={editedAddress.line1} onChange={(e) => setEditedAddress({...editedAddress, line1: e.target.value})} />
          <input value={editedAddress.line2} onChange={(e) => setEditedAddress({...editedAddress, line2: e.target.value})} />
          <input value={editedAddress.pincode} onChange={(e) => setEditedAddress({...editedAddress, pincode: e.target.value})} />
          <input value={editedAddress.mobile} onChange={(e) => setEditedAddress({...editedAddress, mobile: e.target.value})} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{address.name}</p>
          <p>{address.line1}</p>
          <p>{address.line2}</p>
          <p>{address.pincode}</p>
          <p>{address.mobile}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={onDeleteAddress}>Delete</button>
    </div>
  );
};

export default AddressCard;
