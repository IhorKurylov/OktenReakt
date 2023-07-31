import { useEffect, useState } from 'react';

const FuncComponent = (props) => {
  const [ carInfo, setCarInfo ] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964
  });

  const [isOpen, setIsOpen] = useState(false)

  const handleInfoChange = () => {
    setCarInfo((pr) => {
      return {
        ...pr,
        model: "Mustang1",
        color: "red1",
        year: 19641
      }
    })
  }
  // useEffect(()=>{
  //   isOpen && console.log("UPDATE isOpen", isOpen);
  // },[isOpen]) //by any update

  // useEffect(()=>{
  //   console.log("UPDATE carInfo");
  // },[carInfo]) //by any update


  useEffect(()=>{
    console.log("MOUNTING");
    const interval = setInterval(()=> console.log('interval'), 1000)

    return ()=> { //todo only by  unmounting
      clearInterval(interval)
      console.log('UNMOUNT'); //todo only by  unmounting
    } //todo only by  unmounting
  },[]) //only at mounting

  // useEffect(()=>{
  //   console.log("UPDATE");
  // }) //by any update


  // console.log('CONSOLE');
  return (
    <div>
      <button onClick={handleInfoChange}>
        Change info
      </button>
      <button onClick={()=>setIsOpen((prevState)=> !prevState)}>
        Change isOpen
      </button>
      <p>{carInfo.brand}</p>
      <p>{carInfo.model}</p>
      <p>{carInfo.color}</p>
      <p>{carInfo.year}</p>
    </div>
  );
};
export default FuncComponent;
