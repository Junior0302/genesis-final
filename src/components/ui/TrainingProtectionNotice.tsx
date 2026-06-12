import { trainingProtectionNotice, type SupportedLocale } from "@/lib/trainings";

export default function TrainingProtectionNotice({
  locale,
}: {
  locale: SupportedLocale;
}) {
  return (
    <div className="w-full border-t border-[#FAF9F6]/10 bg-[#251812]">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-8">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#FAF9F6]/55 leading-relaxed">
          {trainingProtectionNotice[locale]}
        </p>
      </div>
    </div>
  );
}
