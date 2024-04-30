import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

// Input parameter ma post avi che atle k post no data avelo che mate apde teno use kari shakishu
const Product = ({post}) => {

  // apde pahela cart no data joishe j thi apde 'Add to Cart' and ' Remove Item' button no joi samji ne use kari shakiye
  const {cart} = useSelector((state) => state);
  // redux ma function call karishu niche ni method thi
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
      {/* apde description ma total 10 word j rakhela che te niche mujab kari shakay che */}
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        
        {
          /* cart ni ander apdi pase avi koi entity padi che j ni naam apde 'p' rakhelu che ......and aa 'p' mate apde check kariye chiye k aaa 'p' ni id (p.id) a apdi post ni id (post.id) na equal(==) che to apde te iteam ni cart ma nakheli che tem kahevay mate apde "Remove Item" form vart valu button ne active kari daoshu and jo aa 'p.id == post.id' false hoy to apde am kahi shakiye k item a cart ma nathi  */
          cart.some((p) => p.id == post.id) ?
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove Item
          </button>) 
          
          :


          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
