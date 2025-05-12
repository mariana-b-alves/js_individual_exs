//* METHODS THAT DON'T IMPLY CHANGING THE DATA MODELS

//mostrar popup
export const showPopup = url => {
    popup.classList.add('open');
    popup.firstElementChild.src = url;
}

export const closePopup = () => popup.classList.remove('open');