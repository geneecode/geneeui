let modalRootSelector = () => document.body;

export const setModalRootSelector = (selector: () => HTMLElement) =>{
  modalRootSelector = selector;
};

export const getModalRoot = () => modalRootSelector();