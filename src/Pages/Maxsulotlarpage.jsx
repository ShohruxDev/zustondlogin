import React, { useState } from "react";
import useStore from "../store";
import "./asosiypage.css";

function AsosiyPage() {
  const { users, addUser, deleteUser, updateUser } = useStore();
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", date: "", price: "", image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (form.firstName && form.lastName && form.date && form.price && form.image) {
      if (editIndex !== null) {
        updateUser(editIndex, form);
        setEditIndex(null);
      } else {
        addUser({
          ...form,
          id: Date.now(),
        });
      }
      setForm({ firstName: "", lastName: "", date: "", price: "", image: null });
    }
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  return (
    <div className="maxsulot">
      <div style={{ margin: '45px 50px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          name="firstName"
          placeholder="Ismi"
          value={form.firstName}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Familiyasi"
          value={form.lastName}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="price"
          placeholder="Narxi"
          value={form.price}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, "");
            setForm((prev) => ({ ...prev, price: value }));
          }}
          className="input"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="input"
        />
        <button onClick={handleSubmit} className="btn">
          {editIndex !== null ? "Saqlash" : "Qo‘shish"}
        </button>
      </div>

      <div className="zustodmap">
        <div className="zusmap">
          {users.map((user, index) => (
            <div key={index} className="zustondmap">
              {user.image && <img src={user.image} alt="User" className="asosiyimage" />}
              <div>
                <p style={{ margin: '5px 0px' }}>{user.firstName} {user.lastName}</p>
                <p className="text-gray-500">{user.date}</p>
                <p className="text-green-500">Narxi: {user.price} so‘m</p>
                <button onClick={() => handleEdit(index)} className='like'>O‘zgartirish</button>
                <button onClick={() => deleteUser(index)} className='like' style={{ marginLeft: '20px' }}>O‘chirish</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AsosiyPage;

