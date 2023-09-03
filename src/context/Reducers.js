export const cartReducer = (state,action) => {
   switch(action.type){
         case 'AddToCart':
            return {...state,cart:[...state.cart,{...action.payload,qty:1 }]};
        default : return state;
   }
}

export const productReducer = (state,action) => {
    switch(action.type){
        default : return state;
    }
}