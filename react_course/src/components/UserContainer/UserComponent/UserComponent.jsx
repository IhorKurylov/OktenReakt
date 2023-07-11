import styles from "./UserComponent.module.scss";
import { useContext } from 'react';
import { UsersContext } from '../../../App.js';
import { HAHAContext } from '../UserContainer.js';

const UserComponent = ({ user }) => {

  const {handleClick, handleDelete} = useContext(UsersContext)
  const haha = useContext(HAHAContext)
  console.log(haha);
  return (
    <div className={styles.container}>
      <h6>{user.name}</h6>
      <h6>{user.email}</h6>
      <h6>{user.phone}</h6>
      <h6>{user.address.city}</h6>
      <button onClick={()=>handleClick(user.name)}>Show me</button>
      <button onClick={()=>handleDelete(user.id)}>Delete me</button>
    </div>
  )
}

export default UserComponent;
