// Update slots dynamically
function updateSlots(tripId, newSlots) {
    document.getElementById(tripId).querySelector('.slots').innerText = `Slots Available: ${newSlots}`;
}

// Image Modal Functionality
let slideIndex = 1;

function openModal(element) {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'block';
    const modalImg = document.getElementById('expandedImg');
    modalImg.src = element.src;
    const caption = document.getElementById('caption');
    caption.innerHTML = element.alt;
    slideIndex = Array.from(element.parentElement.parentElement.children).indexOf(element.parentElement) + 1;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const items = document.querySelectorAll('.gallery-item img');
    if (n > items.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = items.length; }
    const modalImg = document.getElementById('expandedImg');
    modalImg.src = items[slideIndex - 1].src;
    const caption = document.getElementById('caption');
    caption.innerHTML = items[slideIndex - 1].alt;
}
