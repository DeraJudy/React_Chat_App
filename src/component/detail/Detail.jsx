import React from 'react'
import "./detail.css";
import { auth, db } from "../../lib/firebase";

const Detail = () => {
  return (
    <div className='detail'>

      <div className="user">
        <img src="./avatar.png" alt="" />
        <h3>Jane Doe</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">

              <div className="photoDetail">
                <img src="./fotik.jpg" alt="" />
                <span>SunLight</span>
              </div>
      
              <img src="./download.png" alt="" className='icon'/>
            </div>

            <div className="photoItem">

              <div className="photoDetail">
                <img src="./ross.jpg" alt="" />
                <span>Hills</span>
              </div>
      
              <img src="./download.png" alt="" className='icon'/>
            </div>

            <div className="photoItem">

              <div className="photoDetail">
                <img src="./moment.jpg" alt="" />
                <span>A Moment</span>
              </div>
      
              <img src="./download.png" alt="" className='icon'/>
            </div>

          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={()=>auth.signOut()}>LOG OUT</button>
      </div>

    </div>
  )
}

export default Detail
