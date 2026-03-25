import { Link } from "react-router-dom";
import { CheckCircle, Smartphone } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const SubmissionSuccess = () => {
  const regNumber = `KMG-${Date.now().toString().slice(-8)}`;

  return (
    <PageLayout>
      <div className="container py-16 max-w-md text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>

        <h1 className="text-heading mb-2">Permohonan Terkirim!</h1>
        <p className="text-muted-foreground mb-6">Permohonan Anda telah berhasil dikirim dan sedang diproses.</p>

        <div className="bg-accent rounded-xl p-5 mb-6">
          <p className="text-sm text-muted-foreground mb-1">Nomor Registrasi Anda</p>
          <p className="text-2xl font-bold text-primary tracking-wider">{regNumber}</p>
        </div>

        <div className="bg-card border rounded-xl p-5 mb-8 text-left">
          <p className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-primary" /> Update via WhatsApp
          </p>
          <p className="text-sm text-muted-foreground">
            Status permohonan Anda akan dikirimkan melalui WhatsApp ke nomor yang telah didaftarkan. Simpan nomor registrasi di atas.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild size="lg" className="rounded-xl py-6 text-base">
            <Link to="/lacak">Lacak Status Permohonan</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl py-6 text-base">
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubmissionSuccess;
