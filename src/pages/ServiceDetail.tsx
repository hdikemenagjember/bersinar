import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, CheckSquare } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <PageLayout>
        <div className="container py-16 text-center">
          <p className="text-lg text-muted-foreground">Layanan tidak ditemukan.</p>
          <Button asChild className="mt-4"><Link to="/layanan">Kembali ke Daftar Layanan</Link></Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container py-8 max-w-2xl">
        <Link to="/layanan" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Layanan
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{service.icon}</span>
          <h1 className="text-heading">{service.title}</h1>
        </div>

        <p className="text-body-lg text-muted-foreground mb-8">{service.details}</p>

        {/* Estimated time */}
        <div className="flex items-center gap-3 bg-accent rounded-xl p-4 mb-6">
          <Clock className="w-6 h-6 text-accent-foreground" />
          <div>
            <p className="text-sm font-semibold text-accent-foreground">Estimasi Waktu</p>
            <p className="text-sm text-muted-foreground">{service.estimatedTime}</p>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-card border rounded-xl p-6 mb-8">
          <h2 className="text-subheading mb-4 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-primary" /> Dokumen yang Diperlukan
          </h2>
          <ul className="space-y-3">
            {service.documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="rounded-xl text-base py-6">
            <Link to={`/formulir/${service.id}`}>Ajukan Permohonan <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl text-base py-6">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">💬 Tanya via WhatsApp</a>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServiceDetail;
