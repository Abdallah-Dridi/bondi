// src/components/sections/Stats.tsx
"use client";

export default function Stats() {
  const stats = [
    { value: "$2.4B+", label: "Total Volume Locked" },
    { value: "150K+", label: "Active Users" },
    { value: "99.99%", label: "Uptime" },
    { value: "< 0.01s", label: "Transaction Speed" }
  ];

  return (
    <section id="stats" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center hover-card">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}