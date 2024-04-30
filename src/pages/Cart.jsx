import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  // apde cart no data lai lidho
  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  // Total Amount ne apde calculate karishu reduce function thi, aa function ni ander accumulator hoy che j na thi apde sum kari shakiye chiye
  // apde aa function tyare j chalaviye chiye jyare apda cart function/array ma koi change thay.
  useEffect( () => {
    // accumulatore = accumulatore + current.price......j ne starting ma default value '0' set karishu
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
    
  }, [cart])

  return (
    // border-bottom, card ne flex karva nu ,2nd parth ma felx and flex-cloumn, 2nd parth ma 3rd component ma flex flex-row and justify-beetween,...have main 2nd valo part che tema apde flex flex-column krishu and iteam beetweeen karishu
    <div>
     {/* <div> */}
  {
    /* cart empty che k nathi te mujab apde output ma dekhadishu */
    cart.length > 0  ? 
    (<div className="flex flex-row mx-auto justify-evenly">


      <div className="flex flex-col">
        {
          /* apde cart ma jetalo pan data che tena upar map function lagaviyu...have apde darek single item mate apde cartItem banavava mangiye chiye */
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col bg-amber-200 w-[30%] max-h-[85vh] items-center mt-4 ">

        {/* <div> */}
        <div className="flex flex-col ">
          <div  className="text-green-800 text-bold text-2xl mt-7">Your Cart</div>
          <div className="text-green-800 underline uppercase text-4xl justify-evenly py-10 ">Summary</div>
          <p className=""> 
          {/* apda cart ni j length hase te j apdi total iteams hase */}
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p className=" font-extrabold  text-rose-400 mt-12"> <span className=" text-4xl py-10 my-12  ">Your</span>
          <br/> <span className=" text-3xl text-teal-500 ">Best </span> <br/>
          <span className=" uppercase text-orange-700 text-6xl"> Expence</span>
          <br/> <span className=" text-fuchsia-600 text-4xl">is below</span>
          </p>
          <p className="font-extrabold mt-32 mb-4">Total Amount: ${totalAmount}</p>
          <button className="bg-green-700 text-white text-2xl font-bold rounded  max-w-sm mb-10">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      {/* jo cart empty hoy to apde aek button banaviyu shop now nu apanane redirect kare che home page upar */}
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
