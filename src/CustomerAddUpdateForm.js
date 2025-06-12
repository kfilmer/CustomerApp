import React from 'react';

export default function CustomerAddUpdateForm({ formObject, onChange, onSave, onDelete, onCancel }) {
  const mode = formObject.id >= 0 ? 'Update' : 'Add';

  return (
    <div className="boxed">
      <div><h4>{mode}</h4></div>
      <form>
        <table id="customer-add-update">
          <tbody>
            <tr>
              <td className="label">Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={onChange}
                  value={formObject.name}
                  placeholder="Customer Name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="label">Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  onChange={onChange}
                  value={formObject.email}
                  placeholder="name@company.com"
                />
              </td>
            </tr>
            <tr>
              <td className="label">Pass:</td>
              <td>
                <input
                  type={mode === 'Update' ? 'text' : 'password'}
                  name="password"
                  onChange={onChange}
                  value={formObject.password}
                  placeholder="password"
                />
              </td>
            </tr>
            <tr className="button-bar">
              <td colSpan="2">
                <input type="button" value="Delete" onClick={onDelete} />
                <input type="button" value="Save" onClick={onSave} />
                <input type="button" value="Cancel" onClick={onCancel} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
