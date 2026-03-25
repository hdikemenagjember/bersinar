import { useState } from "react";
import { Search, Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const statusSteps = [
  { label: "Diterima", desc: "Permohonan masuk ke sistem", date: "25 Mar 2026", done: true },
  { label: "Diproses", desc: "Sedang diverifikasi petugas", date: "26 Mar 2026", done: true },
  { label: "Verifikasi", desc: "Pengecekan dokumen pendukung", date: "-", done: false },
  { label: "Selesai", desc: "Dokumen siap diambil/dikirim", date: "-", done: false },
];

const TrackingPage = () => {
  const [query, setQuery] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <PageLayout>
      <div className="container py-8 max-w-lg">
        <h1 className="text-heading mb-2">Lacak Permohonan</h1>
        <p className="text-muted-foreground mb-6">Masukkan nomor registrasi untuk melihat status permohonan Anda.</p>

        <div className="flex gap-2 mb-8">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Contoh: KMG-12345678"
            className="py-6 text-base rounded-xl"
          />
          <Button size="lg" className="rounded-xl px-6 py-6" onClick={() => setShowResult(query.length > 0)}>
            <Search className="w-5 h-5" />
          </Button>
        </div>

        {showResult && (
          <div className="animate-fade-in">
            <div className="bg-card border rounded-xl p-6 mb-4">
              <p className="text-sm text-muted-foreground">Nomor Registrasi</p>
              <p className="text-lg font-bold text-primary">{query}</p>
              <p className="text-sm text-muted-foreground mt-1">Layanan: Surat Rekomendasi</p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-subheading mb-5">Status Permohonan</h2>
              <div className="space-y-0">
                {statusSteps.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${s.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        {s.done ? <Check className="w-4 h-4" /> : i + 1}
                      </div>
                      {i < statusSteps.length - 1 && (
                        <div className={`w-0.5 h-12 ${s.done ? "bg-primary" : "bg-muted"}`} />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className={`font-semibold ${s.done ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</p>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default TrackingPage;
