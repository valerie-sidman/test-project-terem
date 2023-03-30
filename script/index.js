const buttonWarning = document.querySelector('.btn-warning');
const buttonSuccess = document.querySelector('.btn-success');
const buttonClosePopup = document.querySelector('.popup-close-button');

const popup = document.querySelector('.popup-container');
const blockContainer = document.querySelector('.block-container')
const blockHeader = blockContainer.firstElementChild;
const leftBlock = document.querySelector('.block-center-left');
const middleBlock = document.querySelector('.block-center-middle');

buttonWarning.addEventListener('click', () => {
  if (blockHeader.classList.contains('hidden')) {
    blockHeader.classList.remove('hidden')
  } else {
    blockHeader.classList.add('hidden');
  }
})

buttonClosePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
})

buttonSuccess.addEventListener('click', () => {
  const comparePosition = middleBlock.compareDocumentPosition(leftBlock);

  if (comparePosition === Node.DOCUMENT_POSITION_PRECEDING) {
    blockContainer.insertBefore(middleBlock, leftBlock);
  } else if (comparePosition === Node.DOCUMENT_POSITION_FOLLOWING) {
    blockContainer.insertBefore(leftBlock, middleBlock);
  }
})




