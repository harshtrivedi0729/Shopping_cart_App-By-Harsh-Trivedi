import { createSlice } from "@reduxjs/toolkit";


// apde Slice banaviyu
export const CartSlice = createSlice({
    // Step-2
    name:"cart",
    // Step-2
    initialState:[],
    // Step-3
    reducers:{
        // MMMIIMMPP
        // reducers function a input ma 2 vastu le che 1.)state and 2.)action
        add:(state,action) => {
            // MMIIIMMMPPP
            // apde j bija function (j Product.jsx che tema addtoCart ma jai ne Dispatch function) ma jaine apda function (ahiya add) ne teno input parameter (j ahiya 'post') che tene access karva mangiye chiye to apde 'action.payload' no use karvo padshe
            // j pan apde inut-parameter send karelu hae / set karelu hase j tene access karva mate apde "action.payload" no use karvo pade che
            // state.push(input-parameter);
            // state.push(post); ----->>> to aaa post che tene apde access karvi che to apde "action.payload" no use karishu 
            // TUK MA J PAN APDE INPUT-PARAMETER APELU CHE TENE APDE "action.payload" VADE ACCESS KARI SHAKIEYE CHIYE
            state.push(action.payload);
        },
        remove:(state,action) => {
            // apde ahiya avu lakhelu che k aa state ni ander avi j iteam ne save karjo j "action" input-parameter ni ID  avi che tene equal na hoy
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

// Syntax j che aa
export const {add, remove} = CartSlice.actions;
// Syntax j che aa
export default CartSlice.reducer;