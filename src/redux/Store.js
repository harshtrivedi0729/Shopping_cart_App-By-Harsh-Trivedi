import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

// ama input ma aek object ave che jema apde reducer lakhiye chiye..pachi reducer no object banaviye chiye j object ma apde jetali pan slice axist kare che te lakhiyu..........ahiya ahiya Slice ni key ni ander j apde Slice nu naam apelu hoy che te j Slice ni key che.....and aa teni value a apda slice function nu naam che
export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});