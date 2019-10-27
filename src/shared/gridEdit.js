
export const editTableLogic = (state, setState) =>
  {
    return(
    {
      onRowAdd: newData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...state.data];
            data.push(newData);
            setState({ ...state, data });
          }, 600);
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...state.data];
            data[data.indexOf(oldData)] = newData;
            setState({ ...state, data });
          }, 600);
        }),
      onRowDelete: oldData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...state.data];
            data.splice(data.indexOf(oldData), 1);
            setState({ ...state, data });
          }, 600);
        }),
    });
  }

/** FROM MATERIAL UI SAMPLE CODE */
/**
editable={{
    onRowAdd: newData =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
          const data = [...deliveryNotes.data];
          data.push(newData);
          setDeliveryNotes({ ...deliveryNotes, data });
        }, 600);
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
          const data = [...deliveryNotes.data];
          data[data.indexOf(oldData)] = newData;
          setDeliveryNotes({ ...deliveryNotes, data });
        }, 600);
      }),
    onRowDelete: oldData =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
          const data = [...deliveryNotes.data];
          data.splice(data.indexOf(oldData), 1);
          setDeliveryNotes({ ...deliveryNotes, data });
        }, 600);
      }),
  }}
  */