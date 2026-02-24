# Portfolio Website Samuel Silaban

Website portfolio modern dengan tema gelap untuk Samuel Silaban, mahasiswa Sistem Informasi Kelautan.

## 🌟 Fitur

- **Modern Design**: Tema gelap dengan aksen warna emas (#FFB800)
- **Responsive**: Dapat diakses dengan sempurna di desktop, tablet, dan mobile
- **Interactive**: Animasi smooth, hover effects, dan transisi yang halus
- **Dynamic Content**: Hero section dengan konten yang berubah otomatis
- **Professional Sections**: About, Skills, Experience, Projects, Contact
- **Mobile-First**: Navbar responsif dengan hamburger menu
- **Loading Animations**: Fade-in effects dan animated skill bars
- **Contact Form**: Form kontak dengan validasi

## 📁 Struktur File

```
web-portofolio-sam/
├── index.html          # File HTML utama
├── styles.css          # File CSS dengan styling modern
├── script.js           # JavaScript untuk interaktivitas
├── assets/            
│   ├── README.md       # Panduan untuk gambar
│   ├── profile.svg     # Placeholder foto profil
│   ├── project1.svg    # Placeholder proyek 1
│   ├── project2.svg    # Placeholder proyek 2
│   └── project3.svg    # Placeholder proyek 3
└── README.md           # File ini
```

## 🚀 Cara Menggunakan

1. **Buka Website**: 
   - Double-click file `index.html` untuk membuka di browser
   - Atau gunakan Live Server di VS Code

2. **Ganti Gambar**:
   - Upload foto profil sebagai `assets/profile.jpg` (400x400px)
   - Upload screenshot proyek sebagai `assets/project1.jpg`, `project2.jpg`, `project3.jpg` (600x400px)
   - Lihat `assets/README.md` untuk panduan lengkap

3. **Kustomisasi Konten**:
   - Edit `index.html` untuk mengubah teks, link, dan informasi personal
   - Sesuaikan pengalaman, proyek, dan skill sesuai kebutuhan

## 🎨 Kustomisasi

### Mengubah Warna Theme
Edit variabel di `styles.css`:
```css
/* Warna utama */
.highlight { color: #FFB800; } /* Ubah warna aksen */

/* Background gradients */
body { background: linear-gradient(135deg, #0F1419 0%, #1a1d29 50%, #2d3748 100%); }
```

### Menambah/Mengurangi Skills
Edit section skills di `index.html`:
```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-python"></i> <!-- Icon dari Font Awesome -->
    </div>
    <span>Nama Skill</span>
    <div class="skill-level">
        <div class="skill-bar" style="width: 85%"></div> <!-- Ubah persentase -->
    </div>
</div>
```

### Mengubah Hero Content
Content hero akan berubah otomatis setiap 5 detik. Untuk mengubahnya, edit array `heroTexts` di `script.js`:
```javascript
const heroTexts = [
    {
        title: "Judul Baru dengan <span class='highlight'>HIGHLIGHT</span>",
        description: "Deskripsi baru..."
    },
    // Tambah content lain...
];
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Layout penuh dengan side portfolio
- **Tablet**: 768px - 1024px - Layout stack, tanpa side portfolio  
- **Mobile**: < 768px - Mobile menu, layout vertikal
- **Small Mobile**: < 480px - Font dan spacing disesuaikan

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantic modern
- **CSS3**: Flexbox, Grid, Animations, Custom Properties
- **JavaScript ES6+**: Interactive features, DOM manipulation
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter)

## 📧 Kontak Form

Form kontak sudah include:
- Validasi input real-time
- Email format validation  
- Success/error notifications
- Responsive design

Untuk menghubungkan dengan backend, edit function `contactForm.addEventListener` di `script.js`.

## 🔧 Pengembangan Lanjutan

### Menambah Section Baru
1. Tambah HTML section di `index.html`
2. Tambah styling di `styles.css`
3. Tambah navigation link di navbar
4. Update smooth scroll di `script.js`

### Optimasi Performance
- Compress gambar sebelum upload
- Gunakan format WebP untuk gambar modern
- Minify CSS dan JavaScript untuk production
- Implementasi lazy loading untuk gambar

## 📝 TODO/Improvement Ideas

- [ ] Tambah dark/light mode toggle
- [ ] Implementasi progressive web app (PWA)
- [ ] Tambah blog section
- [ ] Integrasi dengan CMS (headless)
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Certification/achievements section

## 🐛 Troubleshooting

**Gambar tidak muncul?**
- Cek path file gambar di folder `assets/`
- Pastikan nama file sesuai dengan yang di HTML
- Refresh browser (Ctrl+F5)

**Mobile menu tidak berfungsi?**
- Pastikan JavaScript enabled di browser
- Cek console browser untuk error

**Animasi tidak smooth?**
- Update browser ke versi terbaru
- Disable hardware acceleration jika perlu

## 📄 Lisensi

Portfolio ini dibuat khusus untuk Samuel Silaban. Silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Made with ❤️ for Samuel Silaban - Marine Information Systems Student**