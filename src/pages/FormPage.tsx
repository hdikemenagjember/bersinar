import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";

const FormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  if (!service) {
    return (
      <PageLayout>
        <div className="container py-16 text-center">
          <p className="text-lg text-muted-foreground">Layanan tidak ditemukan.</p>
          <Button asChild className="mt-4"><Link to="/layanan">Kembali</Link></Button>
        </div>
      </PageLayout>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate("/sukses");
    }
  };

  return (
    <PageLayout>
      <div className="container py-8 max-w-lg">
        <Link to={`/layanan/${id}`} className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>

        <h1 className="text-heading mb-1">Formulir {service.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">Isi data dengan lengkap dan benar.</p>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${i < step ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-subheading">Data Pribadi</h2>
              <div>
                <Label htmlFor="nama" className="text-sm font-semibold">Nama Lengkap *</Label>
                <Input id="nama" placeholder="Masukkan nama lengkap Anda" required className="mt-1 py-6 text-base rounded-xl" />
              </div>
              <div>
                <Label htmlFor="nik" className="text-sm font-semibold">NIK (Nomor Induk Kependudukan) *</Label>
                <Input id="nik" placeholder="16 digit NIK Anda" required maxLength={16} className="mt-1 py-6 text-base rounded-xl" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold">Nomor WhatsApp *</Label>
                <Input id="phone" type="tel" placeholder="08xxxxxxxxxx" required className="mt-1 py-6 text-base rounded-xl" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-subheading">Alamat & Keterangan</h2>
              <div>
                <Label htmlFor="alamat" className="text-sm font-semibold">Alamat Lengkap *</Label>
                <Textarea id="alamat" placeholder="Tulis alamat lengkap Anda" required className="mt-1 text-base rounded-xl" rows={3} />
              </div>
              <div>
                <Label htmlFor="keterangan" className="text-sm font-semibold">Keterangan Tambahan</Label>
                <Textarea id="keterangan" placeholder="Tambahkan catatan jika ada" className="mt-1 text-base rounded-xl" rows={3} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-subheading">Unggah Dokumen</h2>
              <p className="text-sm text-muted-foreground">Silakan unggah foto atau scan dokumen yang diperlukan.</p>
              <div className="border-2 border-dashed rounded-xl p-8 text-center">
                <input type="file" id="file" className="hidden" multiple accept="image/*,.pdf" />
                <label htmlFor="file" className="cursor-pointer">
                  <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm font-semibold text-primary">Klik untuk memilih file</p>
                  <p className="text-xs text-muted-foreground mt-1">Foto atau PDF, maks. 5 MB per file</p>
                </label>
              </div>

              <div className="bg-accent rounded-xl p-4">
                <p className="text-sm font-semibold text-accent-foreground mb-2">Dokumen yang diperlukan:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.documents.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button type="button" variant="outline" size="lg" className="flex-1 rounded-xl py-6 text-base" onClick={() => setStep(step - 1)}>
                Kembali
              </Button>
            )}
            <Button type="submit" size="lg" className="flex-1 rounded-xl py-6 text-base">
              {step < totalSteps ? "Lanjutkan" : "Kirim Permohonan"}
            </Button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default FormPage;
