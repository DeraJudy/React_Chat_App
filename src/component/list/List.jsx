import React from 'react'
import "./list.css"
import ChatList from "./chatList/chatList"
import Userinfo from './userinfo/Userinfo'

const List = () => {
  return (
    <div className='list'>
      < Userinfo />
      < ChatList />
    </div>
  )
}

export default List
