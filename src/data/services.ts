export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  documents: string[];
  estimatedTime: string;
  details: string;
}

export const services: Service[] = [
  {
    id: "rekomendasi",
    title: "Surat Rekomendasi",
    description: "Pengajuan surat rekomendasi untuk keperluan keagamaan dan pendidikan.",
    icon: "📄",
    documents: ["KTP / NIK", "Surat Permohonan", "Foto 3x4 (2 lembar)", "Fotokopi Kartu Keluarga"],
    estimatedTime: "3–5 hari kerja",
    details: "Layanan ini menyediakan surat rekomendasi resmi dari Kemenag Jember untuk berbagai keperluan keagamaan, pendidikan, dan administrasi. Surat rekomendasi dapat digunakan untuk pendaftaran haji, umrah, dan kegiatan keagamaan lainnya.",
  },
  {
    id: "legalisasi",
    title: "Legalisasi Dokumen",
    description: "Legalisasi dokumen resmi seperti ijazah, akta nikah, dan sertifikat.",
    icon: "✅",
    documents: ["Dokumen asli yang akan dilegalisasi", "Fotokopi dokumen (2 rangkap)", "KTP pemohon", "Surat pengantar dari instansi terkait"],
    estimatedTime: "1–3 hari kerja",
    details: "Layanan legalisasi dokumen untuk mengesahkan dokumen-dokumen resmi yang dikeluarkan oleh Kemenag. Termasuk ijazah madrasah, akta nikah, sertifikat pelatihan keagamaan, dan dokumen lainnya.",
  },
  {
    id: "bantuan",
    title: "Bantuan Keagamaan",
    description: "Permohonan bantuan untuk kegiatan dan pembangunan sarana keagamaan.",
    icon: "🤲",
    documents: ["Proposal kegiatan / pembangunan", "KTP pengurus organisasi", "Surat keterangan dari desa/kelurahan", "RAB (Rencana Anggaran Biaya)", "Foto lokasi / kegiatan"],
    estimatedTime: "7–14 hari kerja",
    details: "Program bantuan untuk mendukung kegiatan keagamaan masyarakat, pembangunan dan renovasi rumah ibadah, serta kegiatan sosial keagamaan di wilayah Kabupaten Jember.",
  },
  {
    id: "konsultasi",
    title: "Konsultasi Hukum",
    description: "Konsultasi mengenai hukum keluarga, pernikahan, dan keagamaan.",
    icon: "⚖️",
    documents: ["KTP pemohon", "Dokumen pendukung terkait permasalahan"],
    estimatedTime: "Langsung (jadwal konsultasi)",
    details: "Layanan konsultasi hukum terkait permasalahan keluarga, pernikahan, perceraian, waris, dan hukum keagamaan lainnya. Konsultasi dilakukan oleh tenaga ahli dari Kemenag Jember.",
  },
];
