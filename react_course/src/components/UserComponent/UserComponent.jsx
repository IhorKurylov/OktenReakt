import styles from "./UserComponent.module.scss";

const UserComponent = (props) => {
  const { name, nickname, email, element } = props
  return (
    <div className={styles.container}>
      <h6>{name}</h6>
      <h6>{nickname}</h6>
      <h6>{email}</h6>
      {element}
    </div>
  )
}

export default UserComponent;
