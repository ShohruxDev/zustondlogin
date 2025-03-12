import React, { useState } from 'react';
import { useStateValue } from '../context/newsadd';
import { useNavigate } from 'react-router-dom';
import useStore from "../store";
import "./addpage.css";

function AddPage() {
  const {wishlist, setwishlist} = useStateValue();
  const { isAuthenticated } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 

  if (!isAuthenticated) {
    return <h2 className="no-access">Bu sahifaga kirish uchun oldin tizimga kiring!</h2>;
  }

  return (
    <>
      <p>{wishlist.length}</p>
      <div className="zusmap">
        {wishlist.map((user, index) => (
          <div key={index} className="zustondmap">
            {user.image && <img src={user.image} alt="User" className="asosiyimagee" />}
            <div>
              <p>{user.firstName} {user.lastName}</p>
              <p className="text-gray-500">{user.date}</p>
              <p>Narxi: {user.price} so'm</p>
              <button onClick={() => {
                setIsModalOpen((prev) => !prev)
                handlwishlist(user)
              }} className='like'>Like</button>
              {isModalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <p>{t("header.lit2")}</p>
                    <button onClick={() => setIsModalOpen(false)} className="close-btn">
                      <p>{t("header.lit4")}</p>
                    </button>
                  </div>
                </div>
              )}
              <button style={{ marginLeft:'20px' }} className='like'>Sotib ol</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddPage;

