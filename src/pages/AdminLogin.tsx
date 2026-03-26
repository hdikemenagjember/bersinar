import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, LogIn, Loader2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Email atau password salah.");
      setLoading(false);
      return;
    }

    // Check if user has an admin role
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .limit(1)
      .single();

    if (!roles) {
      await supabase.auth.signOut();
      setError("Akun Anda tidak memiliki akses admin.");
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/admin/dashboard");
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
              <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Masukkan email" required className="mt-1 py-5 text-base rounded-xl" />
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Masukkan password" required className="mt-1 py-5 text-base rounded-xl" />
            </div>

            {error && (
              <p className="text-sm text-destructive font-medium">{error}</p>
            )}

            <Button type="submit" size="lg" className="w-full rounded-xl py-6 text-base" disabled={loading}>
              {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <LogIn className="w-5 h-5 mr-2" />}
              Masuk
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminLogin;
