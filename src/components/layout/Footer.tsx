import { MapPin, Phone, Mail, Clock, MessageCircle, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-12">
    <div className="container py-10 grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-bold mb-3">Kantor Kemenag Jember</h3>
        <div className="space-y-2 text-sm opacity-90">
          <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Jl. KH. Wahid Hasyim No. 1, Jember, Jawa Timur</p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> (0331) 421-000</p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> layanan@kemenag-jember.go.id</p>
          <p className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0" /> Senin – Jumat, 08:00 – 16:00 WIB</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3">Layanan Kami</h3>
        <ul className="space-y-1 text-sm opacity-90">
          <li>Surat Rekomendasi</li>
          <li>Legalisasi Dokumen</li>
          <li>Bantuan Keagamaan</li>
          <li>Konsultasi Hukum</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3">Hubungi via WhatsApp</h3>
        <p className="text-sm opacity-90 mb-3">Kirim pesan ke nomor WhatsApp resmi kami untuk memulai layanan.</p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-success px-5 py-3 text-sm font-semibold text-success-foreground hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" /> Chat WhatsApp
        </a>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 flex items-center justify-between px-6 py-4 text-xs opacity-70">
      <span>&copy; 2026 Kementerian Agama Kabupaten Jember. Semua hak dilindungi.</span>
      <Link to="/admin" className="inline-flex items-center gap-1 hover:opacity-100 transition-opacity">
        <Lock className="w-3 h-3" /> Admin
      </Link>
    </div>
  </footer>
);

export default Footer;
