import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, LogIn } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username") as string;
    const password = form.get("password") as string;

    // Temporary UI-only mock — will be replaced with real auth
    if (username === "superadmin" && password === "admin123") {
      sessionStorage.setItem("admin_role", "super_admin");
      sessionStorage.setItem("admin_name", "Super Admin");
      navigate("/admin/dashboard");
    } else if (username === "admin" && password === "admin123") {
      sessionStorage.setItem("admin_role", "admin_layanan");
      sessionStorage.setItem("admin_name", "Admin Layanan");
      navigate("/admin/dashboard");
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <PageLayout>
      <div className="container py-16 max-w-sm">
        <div className="bg-card border rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-heading text-center">Login Admin</h1>
            <p className="text-sm text-muted-foreground text-center mt-1">
              Masuk untuk mengelola layanan
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-sm font-semibold">Username</Label>
              <Input id="username" name="username" placeholder="Masukkan username" required className="mt-1 py-5 text-base rounded-xl" />
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Masukkan password" required className="mt-1 py-5 text-base rounded-xl" />
            </div>

            {error && (
              <p className="text-sm text-destructive font-medium">{error}</p>
            )}

            <Button type="submit" size="lg" className="w-full rounded-xl py-6 text-base">
              <LogIn className="w-5 h-5 mr-2" /> Masuk
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminLogin;
