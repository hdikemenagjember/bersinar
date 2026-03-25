import { Link } from "react-router-dom";
import { Eye, Download, Clock, FileText, Loader2, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const mockApplications = [
  { id: "KMG-84921035", service: "Surat Rekomendasi", date: "20 Mar 2026", status: "Diproses", color: "bg-warning" },
  { id: "KMG-73810294", service: "Legalisasi Dokumen", date: "15 Mar 2026", status: "Selesai", color: "bg-success" },
  { id: "KMG-62019384", service: "Bantuan Keagamaan", date: "10 Mar 2026", status: "Verifikasi", color: "bg-info" },
];

const summaryItems = [
  { label: "Total", value: "3", icon: FileText },
  { label: "Proses", value: "2", icon: Loader2 },
  { label: "Selesai", value: "1", icon: CheckCircle },
];

const Dashboard = () => (
  <PageLayout>
    <div className="container py-8 max-w-2xl">
      <h1 className="text-heading mb-2">Dashboard Saya</h1>
      <p className="text-muted-foreground mb-8">Daftar permohonan yang pernah Anda ajukan.</p>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {summaryItems.map((s, i) => (
          <div key={i} className="bg-card border rounded-xl p-4 text-center">
            <s.icon className="w-6 h-6 text-primary mx-auto" />
            <p className="text-2xl font-bold text-primary mt-1">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Applications */}
      <div className="space-y-3">
        {mockApplications.map((app) => (
          <div key={app.id} className="bg-card border rounded-xl p-5 animate-fade-in">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-bold text-sm">{app.id}</p>
                <p className="text-subheading mt-0.5">{app.service}</p>
              </div>
              <span className={`${app.color} text-xs font-semibold px-3 py-1 rounded-full text-primary-foreground`}>
                {app.status}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1"><Clock className="w-3 h-3" /> Diajukan: {app.date}</p>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="rounded-lg">
                <Link to="/lacak"><Eye className="w-4 h-4 mr-1" /> Lihat Status</Link>
              </Button>
              {app.status === "Selesai" && (
                <Button size="sm" className="rounded-lg">
                  <Download className="w-4 h-4 mr-1" /> Unduh Dokumen
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Dashboard;
