
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-row bg-green-300 max-w-3xl border-b-2 border-slate-700 gap-2 my-6 mt-6 ">

      <div className="flex flex-row gap-10 justify-between ">

        <div className="  bg-pink-800  object-cover items-center ">
        {/* apde cart ni ander cartIteam ma apde item={item} apelu che and apde iteam ni index pan pass kareli che as a prop......mate apde ane DE-STRUCTURE  kari ne ahiya CartIteam ma use kari shakiye chiye ....mate apde ahiya te perticulore iteam ne access kari shakiye chiye */}
          <img src={item.image} alt=""
            className=" rounded-full  scale-90  "
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className=" font-bold opacity-70">{item.title}</h1>
          <h1>{item.description}</h1>
          <div className=" text-green-500 flex flex-row justify-between ">
            <p className="font-bold">${item.price}</p>
            <div className=" text-4xl cursor-pointer"
            onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
