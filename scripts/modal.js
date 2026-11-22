// scripts/modal.js
const modal = document.getElementById('save-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

if (openModalBtn && modal && closeModalBtn) {
  openModalBtn.addEventListener('click', () => {
    modal.showModal();
  });

  closeModalBtn.addEventListener('click', () => {
    modal.close();
  });

  // Закрытие по клику на затемненный фон
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
}