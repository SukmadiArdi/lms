# Momentum LMS - Project Website

Momentum LMS adalah platform Learning Management System berbasis web modern. Aplikasi ini dibangun dengan HTML, JavaScript, dan Tailwind CSS (via CDN) di sisi *frontend*, serta Node.js (Express) untuk pengaturan routing dan *backend*.

## Pengujian Kualitas Aplikasi (Software Quality Testing)

Aplikasi telah diuji berdasarkan beberapa aspek kualitas utama (mengacu pada standar kualitas perangkat lunak). Berikut adalah hasil pengujiannya:

| Aspek Kualitas | Skenario Pengujian | Hasil yang Diharapkan | Hasil Pengujian | Status |
|---|---|---|---|---|
| **Functionality (Fungsionalitas)** | Navigasi menu utama (`Home`, `Features`, `Pricing`, `About Us`) | Berpindah antar halaman dengan tepat tanpa *broken link*. | Semua tautan navigasi berfungsi dan diarahkan ke path yang benar. | ✅ Lulus |
| | Tombol Otentikasi (`Log In`, `Get Started`) | Mengarahkan ke halaman `login.html` dan `signup.html`. | Sistem mengalihkan pengguna ke formulir otentikasi dengan sukses. | ✅ Lulus |
| | Navigasi Dashboard & Sidebar | Berpindah dari Dashboard ke My Courses dan Course Player. | Sidebar berfungsi dengan *state* "Active" yang dinamis. Tombol "Exit Player" mengembalikan ke My Courses. | ✅ Lulus |
| **Usability (Kebergunaan)** | Konsistensi UI & Desain (Tema) | Palet warna, font (*Inter*), dan *Logo* seragam di semua halaman. | Skema warna dan letak logo tersinkronisasi 100% menggunakan *Design System* Momentum. | ✅ Lulus |
| | Umpan Balik Visual (Interactive UI) | Tombol memberikan efek *hover*, *focus*, dan *scale* saat ditekan. | Adanya efek interaktif (Tailwind utilities) di setiap tombol dan link. | ✅ Lulus |
| **Performance (Performa)** | Waktu Muat Halaman (Page Load) | Halaman memuat dengan cepat tanpa *render-blocking* yang fatal. | Karena arsitektur statis yang ringan dan Tailwind CSS terkompresi, halaman merender dengan instan. | ✅ Lulus |
| **Reliability (Keandalan)** | Isolasi Error Path | Jika file tak ditemukan atau parameter salah, sistem tak boleh rusak secara keseluruhan. | Server Express menangani perutean file statis (*static serving*) secara stabil. | ✅ Lulus |
| **Portability (Portabilitas)** | Deployment Readiness | Aplikasi dapat langsung di-deploy ke Vercel atau environment Node.js. | Aplikasi menggunakan *file structure* (`public/`, `server.js`, `vercel.json`) yang kompatibel dengan Vercel. | ✅ Lulus |
| **Compatibility (Kompatibilitas)** | Responsivitas Perangkat Mobile | Tampilan harus menyesuaikan diri dengan ukuran layar kecil (HP/Tablet). | Layout menggunakan Flexbox/Grid responsif (seperti menu navigasi yang disembunyikan `hidden md:flex`). | ✅ Lulus |

## Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS (Design System terintegrasi)
- **Backend & Routing**: Node.js, Express.js
- **Database / Auth** (Planned): Supabase (PostgreSQL)
- **Deployment**: Vercel (Production-Ready)
