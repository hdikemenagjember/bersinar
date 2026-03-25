import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, FileText, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";
import heroImg from "@/assets/hero-illustration.png";

const steps = [
  { icon: MessageCircle, title: "Hubungi WhatsApp", desc: "Kirim pesan ke nomor resmi kami" },
  { icon: FileText, title: "Isi Formulir", desc: "Lengkapi data dan dokumen Anda" },
  { icon: CheckCircle, title: "Terima Hasil", desc: "Dokumen dikirim ke WhatsApp Anda" },
];

const Home = () => (
  <PageLayout>
    {/* Hero */}
    <section className="bg-accent">
      <div className="container py-10 md:py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-display text-primary mb-4">Layanan Publik Digital</h1>
          <p className="text-body-lg text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0">
            Ajukan layanan Kemenag Jember dengan mudah melalui WhatsApp. Cepat, transparan, dan tanpa antri.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button asChild size="lg" className="text-base px-8 py-6 rounded-xl">
              <Link to="/layanan">Mulai Layanan <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-xl">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-5 h-5" /> Chat WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <img src={heroImg} alt="Layanan Publik" width={1280} height={720} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>

    {/* Steps */}
    <section className="container py-12">
      <h2 className="text-heading text-center mb-8">Cara Menggunakan Layanan</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center bg-card rounded-xl p-6 shadow-sm border animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary/60 mb-1">Langkah {i + 1}</span>
            <h3 className="text-subheading mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="bg-muted">
      <div className="container py-12">
        <h2 className="text-heading text-center mb-8">Layanan Tersedia</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.id}
              to={`/layanan/${s.id}`}
              className="flex items-start gap-4 bg-card rounded-xl p-5 border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ServiceIcon name={s.icon} className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-subheading group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-1 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Home;
