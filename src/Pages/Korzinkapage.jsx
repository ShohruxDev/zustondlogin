import React from 'react';
import { useStateValue } from '../context/newsadd';
import { useNavigate } from 'react-router-dom';
import "./korzinka.css";

function Korzinkapage() {
  const { basket } = useStateValue(); 
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>{basket.length} ta mahsulot</b>
        <b>Umumiy narx: {basket.reduce((acc, cur) => acc + Number(cur.price), 0)} so'm</b>
      </div>

      {basket.length > 0 ? ( 
        <div className="zusmap">
         <div style={{
         }} className="zusmap">
         {basket.map((user, index) => (
            <div key={user.id || index} className="zustondmap"> 
              {user.image && <img style={{
                width:'50%',
                height:'50%'
              }} src={user.image} alt="User" />}
              <div>
                <p>{user.firstName} {user.lastName}</p>
                <p className="text-gray-500">{user.date}</p>
                <p>Narxi: {user.price} so'm</p>
                <button className='like'>Like</button>
                <button style={{ marginLeft: '20px' }} className='like'>Sotib ol</button>
              </div>
            </div>
          ))}
         </div>
        </div>
      ) : (
        <p>Korzinka bo‘sh</p>
      )}
    </>
  );
}

export default Korzinkapage;

