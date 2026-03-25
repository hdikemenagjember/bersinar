import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut, Users, FileText, CheckCircle, Clock,
  Search, Eye, MoreHorizontal, Shield, ShieldCheck,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AdminRole = "super_admin" | "admin_layanan";

const allApplications = [
  { id: "KMG-84921035", name: "Ahmad Fauzi", service: "Surat Rekomendasi", date: "20 Mar 2026", status: "Diproses" },
  { id: "KMG-73810294", name: "Siti Aminah", service: "Legalisasi Dokumen", date: "15 Mar 2026", status: "Selesai" },
  { id: "KMG-62019384", name: "Budi Santoso", service: "Bantuan Keagamaan", date: "10 Mar 2026", status: "Verifikasi" },
  { id: "KMG-51029384", name: "Dewi Rahmawati", service: "Konsultasi Hukum", date: "8 Mar 2026", status: "Diterima" },
  { id: "KMG-40293847", name: "Hasan Basri", service: "Surat Rekomendasi", date: "5 Mar 2026", status: "Selesai" },
];

const adminList = [
  { name: "Super Admin", role: "super_admin", email: "superadmin@kemenag-jember.go.id" },
  { name: "Admin Layanan", role: "admin_layanan", email: "admin@kemenag-jember.go.id" },
];

const statusColor: Record<string, string> = {
  Diterima: "bg-info text-info-foreground",
  Diproses: "bg-warning text-warning-foreground",
  Verifikasi: "bg-accent text-accent-foreground",
  Selesai: "bg-success text-success-foreground",
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<AdminRole | null>(null);
  const [adminName, setAdminName] = useState("");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"permohonan" | "admin">("permohonan");

  useEffect(() => {
    const storedRole = sessionStorage.getItem("admin_role") as AdminRole | null;
    const storedName = sessionStorage.getItem("admin_name");
    if (!storedRole) {
      navigate("/admin");
      return;
    }
    setRole(storedRole);
    setAdminName(storedName || "Admin");
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_role");
    sessionStorage.removeItem("admin_name");
    navigate("/admin");
  };

  if (!role) return null;

  const isSuperAdmin = role === "super_admin";
  const filtered = allApplications.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.id.toLowerCase().includes(search.toLowerCase()) ||
      a.service.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: "Total Permohonan", value: allApplications.length, icon: FileText },
    { label: "Sedang Diproses", value: allApplications.filter((a) => a.status !== "Selesai").length, icon: Clock },
    { label: "Selesai", value: allApplications.filter((a) => a.status === "Selesai").length, icon: CheckCircle },
    ...(isSuperAdmin ? [{ label: "Total Admin", value: adminList.length, icon: Users }] : []),
  ];

  return (
    <PageLayout>
      <div className="container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {isSuperAdmin ? (
                <ShieldCheck className="w-5 h-5 text-primary" />
              ) : (
                <Shield className="w-5 h-5 text-primary" />
              )}
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {isSuperAdmin ? "Super Admin" : "Admin Layanan"}
              </span>
            </div>
            <h1 className="text-heading">Selamat Datang, {adminName}</h1>
            <p className="text-muted-foreground text-sm">Panel administrasi layanan publik</p>
          </div>
          <Button variant="outline" size="sm" className="rounded-lg" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-1" /> Keluar
          </Button>
        </div>

        {/* Stats */}
        <div className={`grid gap-3 mb-8 ${isSuperAdmin ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3"}`}>
          {stats.map((s, i) => (
            <div key={i} className="bg-card border rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs (Super Admin only) */}
        {isSuperAdmin && (
          <div className="flex gap-1 bg-muted rounded-lg p-1 mb-6 w-fit">
            <button
              onClick={() => setActiveTab("permohonan")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "permohonan" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Permohonan
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "admin" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Kelola Admin
            </button>
          </div>
        )}

        {/* Permohonan Tab */}
        {activeTab === "permohonan" && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari permohonan..."
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>

            {/* Table */}
            <div className="bg-card border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold text-muted-foreground">No. Registrasi</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground">Pemohon</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground hidden md:table-cell">Layanan</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground hidden md:table-cell">Tanggal</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground">Status</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((app) => (
                      <tr key={app.id} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium">{app.id}</td>
                        <td className="p-4">{app.name}</td>
                        <td className="p-4 hidden md:table-cell">{app.service}</td>
                        <td className="p-4 text-muted-foreground hidden md:table-cell">{app.date}</td>
                        <td className="p-4">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[app.status] || "bg-muted text-muted-foreground"}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm" className="rounded-lg">
                              <Eye className="w-4 h-4" />
                            </Button>
                            {isSuperAdmin && (
                              <Button variant="ghost" size="sm" className="rounded-lg">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filtered.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">
                  Tidak ada permohonan ditemukan.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Admin Tab (Super Admin only) */}
        {activeTab === "admin" && isSuperAdmin && (
          <div>
            <div className="bg-card border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold text-muted-foreground">Nama</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Email</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {adminList.map((admin, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="p-4 font-medium">{admin.name}</td>
                      <td className="p-4 text-muted-foreground">{admin.email}</td>
                      <td className="p-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${admin.role === "super_admin" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                          {admin.role === "super_admin" ? "Super Admin" : "Admin Layanan"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default AdminDashboard;
