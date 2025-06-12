import React, { useState, useEffect } from 'react';
import { getAll, post, put, deleteById } from './memdb.js';
import CustomerList from './CustomerList';
import CustomerAddUpdateForm from './CustomerAddUpdateForm';
import './App.css';

function log(message) {
  console.log(message);
}

export function App() {
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);
  const mode = formObject.id >= 0 ? 'Update' : 'Add';

  useEffect(() => {
    setCustomers(getAll());
  }, []);

  const handleListClick = (item) => {
    log('in handleListClick()');
    setFormObject(formObject.id === item.id ? blankCustomer : item);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject((prev) => ({ ...prev, [name]: value }));
  };

  const onCancelClick = () => setFormObject(blankCustomer);

  const onDeleteClick = () => {
    if (formObject.id >= 0) deleteById(formObject.id);
    setFormObject(blankCustomer);
    setCustomers(getAll());
  };

  const onSaveClick = () => {
    if (mode === 'Add') post(formObject);
    else put(formObject.id, formObject);
    setFormObject(blankCustomer);
    setCustomers(getAll());
  };

  return (
    <div>
      <CustomerList
        customers={customers}
        selectedId={formObject.id}
        onSelect={handleListClick}
      />
      <CustomerAddUpdateForm
        formObject={formObject}
        onChange={handleInputChange}
        onSave={onSaveClick}
        onDelete={onDeleteClick}
        onCancel={onCancelClick}
      />
    </div>
  );
}

export default App;
