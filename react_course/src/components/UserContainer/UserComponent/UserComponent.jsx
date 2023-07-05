import styles from "./UserComponent.module.scss";

const UserComponent = (props) => {
  const { user, handleClick, handleDelete } = props
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
