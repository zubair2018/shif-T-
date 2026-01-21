import { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const base = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const res = await fetch(`${base}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      localStorage.setItem("shifty_token", data.token);
      onLogin && onLogin(data.token);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handle} className="space-y-2">
      <div>
        <label className="block text-xs text-slate-400">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded px-2 py-1 bg-slate-900 border border-slate-700" />
      </div>
      <div>
        <label className="block text-xs text-slate-400">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded px-2 py-1 bg-slate-900 border border-slate-700" />
      </div>
      <div>
        <button className="rounded bg-yellow-400 text-slate-950 px-3 py-1" disabled={loading}>{loading ? 'Logging...' : 'Login'}</button>
      </div>
    </form>
  );
};

export default Login;
