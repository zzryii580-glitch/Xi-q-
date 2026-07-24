// Navigasi antar halaman (SPA)
function navigateTo(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active');
    
    // Update status active di navigasi
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// Event listener untuk navigasi
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('href').substring(1);
        navigateTo(targetPage);
    });
});

// Animasi Karakter Anime Interaktif (Lompat & Putar)
function animateCharacter() {
    const char = document.getElementById('animeChar');
    const img = char.querySelector('img');
    const hint = char.querySelector('.tap-hint');
    
    // Hapus tulisan "Klik Saya!" saat pertama kali diklik
    if(hint) hint.style.display = 'none';
    
    // Hapus class animasi jika sedang berjalan (untuk reset agar bisa diklik berkali-kali)
    img.classList.remove('char-animate');
    
    // Trigger reflow (force browser to register the removal of the class)
    void img.offsetWidth;
    
    // Tambahkan kembali class animasi
    img.classList.add('char-animate');
    
    // Hapus class setelah animasi selesai (0.8 detik sesuai CSS)
    setTimeout(() => {
        img.classList.remove('char-animate');
    }, 800);
}

// Kirim form kontak ke WhatsApp
function sendToWhatsApp() {
    const name = document.querySelector('.contact-form input[type="text"]').value;
    const email = document.querySelector('.contact-form input[type="email"]').value;
    const message = document.querySelector('.contact-form textarea').value;
    
    if(name === '' || message === '') {
        alert("Mohon isi nama dan pesan terlebih dahulu!");
        return;
    }
    
    const waNumber = '6283189483134';
    const waText = `Halo CHONGQING DESIGN, saya ${name} (${email}). %0A%0A${message}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
    
    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');
}

// Efek Partikel Sakura Jatuh
document.addEventListener('DOMContentLoaded', function() {
    const sakuraContainer = document.getElementById('sakuraContainer');
    
    function createSakura() {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');
        
        // Styling inline untuk partikel sakura
        sakura.style.position = 'absolute';
        sakura.style.background = 'radial-gradient(circle, #ffb7c5 0%, #ff9eaa 100%)';
        sakura.style.borderRadius = '50% 0 50% 50%';
        sakura.style.opacity = Math.random() * 0.8 + 0.2;
        
        // Ukuran acak
        const size = Math.random() * 15 + 5;
        sakura.style.width = `${size}px`;
        sakura.style.height = `${size}px`;
        
        // Posisi awal
        sakura.style.left = Math.random() * window.innerWidth + 'px';
        sakura.style.top = '-20px';
        
        // Animasi jatuh
        const duration = Math.random() * 5 + 5;
        const sway = Math.random() * 200 - 100;
        
        sakura.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${sway}px, ${window.innerHeight + 50}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'linear'
        });
        
        sakuraContainer.appendChild(sakura);
        
        // Hapus partikel setelah selesai
        setTimeout(() => {
            sakura.remove();
        }, duration * 1000);
    }
    
    // Buat partikel sakura setiap 300ms
    setInterval(createSakura, 300);
});
