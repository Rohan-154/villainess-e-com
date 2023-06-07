import axios from 'axios';
const getAddresses = async (encodedToken) => {
  const response = await axios.get("/api/user/addresses", {
    headers: { authorization: encodedToken },
  });
  return response.data;
};

const addAddress = async (address, encodedToken) => {
  const response = await axios.post("/api/user/address", { address }, {
    headers: { authorization: encodedToken },
  });
  return response.data;
};

const updateAddress = async (addressId, updatedAddress, encodedToken) => {
  const response = await axios.put(`/api/user/address/${addressId}`, { address: updatedAddress }, {
    headers: { authorization: encodedToken },
  });
  return response.data;
};

const deleteAddress = async (addressId, encodedToken) => {
  const response = await axios.delete(`/api/user/address/${addressId}`, {
    headers: { authorization: encodedToken },
  });
  return response.data;
};

export {getAddresses, addAddress,updateAddress,deleteAddress};