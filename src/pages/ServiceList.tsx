import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceList = () => (
  <PageLayout>
    <div className="container py-8">
      <h1 className="text-heading mb-2">Pilih Layanan</h1>
      <p className="text-muted-foreground mb-8">Silakan pilih jenis layanan yang Anda butuhkan.</p>

      <div className="grid gap-4">
        {services.map((s) => (
          <div key={s.id} className="bg-card border rounded-xl p-6 shadow-sm animate-fade-in">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{s.icon}</span>
              <div className="flex-1">
                <h2 className="text-subheading">{s.title}</h2>
                <p className="text-sm text-muted-foreground mt-1 mb-4">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="lg" className="rounded-xl">
                    <Link to={`/layanan/${s.id}`}>
                      Lihat Detail <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl">
                    <Link to={`/formulir/${s.id}`}>Ajukan Sekarang</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default ServiceList;
