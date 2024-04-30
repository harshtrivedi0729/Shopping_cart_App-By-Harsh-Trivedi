import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  // apde API na data ne posts naam na sate variable ma  save kariyo
  const [posts, setPosts] = useState([]);

  // API thi data ne fetch karishu
  async function fetchProductData() {
    // API mathi data ave tya sudhi apde loading chalaviyu
    setLoading(true);

    try{
      // API nu Output
      const res = await fetch(API_URL);
      //  API na output ne .JSON formate ma convert karishu
      // Output ma bdsho data a ARRAY na form ma ave che 
      const data = await res.json();

      // J vo API mathi data male che tene apde setPost kari do .......atle have aa POST a ARRAY thai gayu kem k API mathi j data avelo te ARRAY na form ma hato
      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  // hamesha useEffect aj API ne call kare che 
  // apde vare-vare data nathi lava no aek j vakhat lavishu to chalshe mate apde send parameter ma ("[]") aa apelu che 
  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div className=" bg-teal-600">
      {
        loading ? <Spinner/>  :
         /* Post available che k nahi te joiye chiye niche na code thi */
         
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]  bg-lime-200">
          {
            /* j pan data che a badhaa mate apde card/post/Product banavavi che  */
            posts.map( (post) => (
              /* apde ahiya post pass kari didhi as a prop */
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        /* post available nathi */
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
