// Mendapatkan elemen-elemen yang diperlukan
const popupButtons = document.querySelectorAll('.popup-button');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-btn');

// Fungsi untuk membuka pop-up
popupButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const targetPopupId = button.id.replace('openPopup', 'popup'); // Mengganti 'openPopup' menjadi 'popup' untuk mendapatkan ID pop-up
        const targetPopup = document.getElementById(targetPopupId);
        if (targetPopup) {
            targetPopup.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Mencegah scroll di background saat pop-up terbuka
        }
    });
});

// Fungsi untuk menutup pop-up
closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const targetPopup = button.closest('.popup');
        if (targetPopup) {
            targetPopup.style.display = 'none';
            document.body.style.overflow = 'auto'; // Mengembalikan scroll di background saat pop-up tertutup
        }
    });
});

// Menutup pop-up jika area di luar pop-up diklik
popups.forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

