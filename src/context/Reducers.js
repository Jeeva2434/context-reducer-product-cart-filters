export const cartReducer = (state,action) => {
   switch(action.type){
        case 'Add_to_cart':
            return {...state,cart:[...state.cart,{...action.payload,qty:1 }]};

        case 'Remove_cart':
            return {...state,cart : state.cart.filter(c => c.id !== action.payload.id)};

        case 'Qty_change':
            return {...state,cart: state.cart.filter(c => {
                if(c.id === action.payload.id){
                    return c.qty = action.payload.qty;
                }
                return c.qty;
            })}

        default : return state;
   }
}

export const productReducer = (state,action) => {
    switch(action.type){
        default : return state;
    }
}