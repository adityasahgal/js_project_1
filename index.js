const modal = document.querySelector('.modal');
// const overlay = document.getElementById('overlay');

const openModal = () =>{
    console.log('Modal is open');
    modal.classList.remove('hidden');
    // modal.classList.remove('hidden');
};
const closeModal = () =>{
    console.log('Modal is close');
    modal.classList.add('hidden');
};

