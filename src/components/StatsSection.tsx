export function StatsSection() {
  const stats = [
    { value: "$10M+", label: "Transactions Tracked" },
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "System Uptime" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}