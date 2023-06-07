import React, { useState } from 'react';
import AddressForm from './Addressform';
import AddressCard from './AddressCard';

const AddressManagement = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(0); // Select the first address by default

  const handleAddAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  const handleUpdateAddress = (index, updatedAddress) => {
    const updatedAddresses = addresses.map((address, i) => i === index ? updatedAddress : address);
    setAddresses(updatedAddresses);
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    if (selectedAddress === index) {
      setSelectedAddress(null); // Deselect the address if it's deleted
    }
  };

  const handleAddressSelect = (index) => {
    setSelectedAddress(index);
  };

  return (
    <div>
      <AddressForm onAddAddress={handleAddAddress} />
      {addresses.map((address, index) => (
        <AddressCard 
          key={index} 
          address={address} 
          onUpdateAddress={(updatedAddress) => handleUpdateAddress(index, updatedAddress)} 
          onDeleteAddress={() => handleDeleteAddress(index)} 
          onAddressSelect={() => handleAddressSelect(index)}
          isSelected={selectedAddress === index}
        />
      ))}
    </div>
  );
};

export { AddressManagement };
