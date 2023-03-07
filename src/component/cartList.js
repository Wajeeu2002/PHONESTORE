import CartItems from "./cartItems";

export default function cartList({value}) {
  return (
    <div  className ="container-fluid">
      {value.map(item =>{
        return(
          <CartItems 
          key = {item.id} items ={item}/> 
        )
      })}
      
    </div>
  );
}
