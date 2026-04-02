// JavaScript untuk Interaktivitas
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Form Submit Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesanmu sudah dikirim. Kami akan balas segera.');
    this.reset();
});

// Hover Effect untuk Produk (Opsional, tambahan interaktivitas)
const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.05)';
    });
    product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
    });
});
// ============================
// FUNGSI BELI PRODUK (WHATSAPP)
// ============================
function beliProduk(nama, harga, gambar) {
    const nomorWA = "6282134750848"; // GANTI nomor WA kamu

    const pesan = `Halo kak 👋
Saya mau beli produk berikut:

📌 ${nama}
💰 Harga: ${harga}
🖼️ Preview: ${window.location.origin}/${gambar}

Mohon info cara pembayarannya ya 🙏`;

    const linkWA = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
    window.open(linkWA, "_blank");
}

// ============================
// NAVBAR MOBILE
// ============================
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

// ============================
// SCROLL HALUS
// ============================
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
