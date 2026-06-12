import { BarChart3, BriefcaseBusiness, ShieldCheck } from "lucide-react";

const coverMap = {
  "entreprendre-avec-clarte": {
    Icon: BriefcaseBusiness,
    accent: "from-[#A8805A]/35 via-[#6C4A34]/20 to-transparent",
    label: "Genesis Business"
  },
  "systeme-commercial-premium": {
    Icon: BarChart3,
    accent: "from-[#8D6A46]/35 via-[#4A3225]/20 to-transparent",
    label: "Premium Sales"
  },
  "croissance-digitale-premium": {
    Icon: ShieldCheck,
    accent: "from-[#B48A5A]/30 via-[#5B3C2A]/20 to-transparent",
    label: "Digital Growth"
  }
} as const;

export default function TrainingCover({
  slug,
  title,
  className = "",
}: {
  slug: string;
  title: string;
  className?: string;
}) {
  const config = coverMap[slug as keyof typeof coverMap] ?? coverMap["entreprendre-avec-clarte"];
  const Icon = config.Icon;

  return (
    <div className={`relative overflow-hidden bg-[#1E140F] ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${config.accent}`} />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-screen" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #FAF9F6 0, transparent 35%), radial-gradient(circle at 80% 30%, #D4AF37 0, transparent 30%)" }} />
      <div className="absolute inset-0 border border-[#FAF9F6]/8" />

      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-10">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
          <span>Genesis Connect</span>
          <span>{config.label}</span>
        </div>

        <div className="flex flex-col items-start gap-6">
          <div className="flex h-18 w-18 items-center justify-center rounded-[22px] border border-[#FAF9F6]/10 bg-[#FAF9F6]/[0.03] backdrop-blur-sm md:h-24 md:w-24">
            <Icon className="h-8 w-8 text-[#E6D8C8] md:h-10 md:w-10" strokeWidth={1.4} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FAF9F6]/40">
              Premium Training
            </p>
            <h3 className="mt-3 max-w-md text-2xl font-serif leading-tight text-[#FAF9F6] md:text-4xl">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
