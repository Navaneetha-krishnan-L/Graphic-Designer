const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCap = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('close-btn');

function openLightbox(src, caption) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    lightboxCap.innerText = caption;
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Resume scrolling
}

// Close when clicking the 'X' button
closeBtn.addEventListener('click', closeLightbox);

// Close when clicking outside the image (the dark background)
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg && e.target !== lightboxCap) {
        closeLightbox();
    }
});

// Close when pressing the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});