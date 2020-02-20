let modal = document.getElementById('gallery-modal');
let modalImg = document.getElementById("gallery-modal-image");
let captionText = document.getElementById("gallery-modal-caption");

function showModal(src, caption) {
    modal.classList.add("open");
    modalImg.src = src;
    captionText.innerHTML = caption;
}

const galleryEl = document.getElementById('gallery')
galleryEl.addEventListener('click', ({target}) => {
    if (target.classList.contains('myImg')) {
       showModal(
           target.src,
           target.alt
        )
    }
})

let crissCross = document.getElementById("gallery-modal-close");

crissCross.addEventListener('click', () => {
  modal.classList.remove("open")
})