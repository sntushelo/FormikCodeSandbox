export function rfqItemReducer(state, action){
    switch(action.type) {
        case 'ADD_RFQ_ITEM':
            const items = [...state.data];
            items.push(action.payload);
            return { ...state, items };

        case 'EDIT_RFQ_ITEM':
            const rfqItems = [...state.data];
            rfqItems[rfqItems.indexOf(action.payload.oldData)] = action.payload.newData;
            return { ...state, rfqItems };
    
        case 'DELETE_RFQ_ITEM':
            const data = [...state.data];
            console.log('DELETE ACT:', action, data);
            data.splice(data.indexOf(action.payload), 1);
            return { ...state, data };

        default:
            return state;
    }
}