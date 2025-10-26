// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const contentPanels = document.querySelectorAll('.content-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        contentPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content panel
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(tabName).classList.add('active');
    });
});

// Gallery carousel functionality
const galleryTrack = document.getElementById('galleryTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const addImageBtn = document.getElementById('addImageBtn');

let currentIndex = 0;
const totalImages = 8;
const imagesPerView = 3;
const maxIndex = totalImages - imagesPerView;

function updateGallery() {
    const translateX = -(currentIndex * (100 / imagesPerView + 5.33)); // 5.33% accounts for gap
    galleryTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateGallery();
    }
});

addImageBtn.addEventListener('click', () => {
    alert('Add Image functionality would open a file picker dialog here. In this demo, image uploads are not available in the sandboxed environment.');
});

// Initialize gallery
updateGallery();