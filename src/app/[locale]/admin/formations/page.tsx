import TrainingAdminPanel from "@/components/ui/TrainingAdminPanel";
import TrainingProtectionNotice from "@/components/ui/TrainingProtectionNotice";
import { getTrainingUi, type SupportedLocale } from "@/lib/trainings";

export default async function AdminFormationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as SupportedLocale;
  const ui = getTrainingUi();

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/40">
            {ui.admin.eyebrow[safeLocale]}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-serif leading-[0.95]">
            {ui.admin.title[safeLocale]}
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <TrainingAdminPanel
            locale={safeLocale}
            labels={{
              catalog:
                safeLocale === "fr"
                  ? "Catalogue"
                  : safeLocale === "en"
                  ? "Catalog"
                  : "目录",
              orders:
                safeLocale === "fr"
                  ? "Commandes"
                  : safeLocale === "en"
                  ? "Orders"
                  : "订单",
              customers:
                safeLocale === "fr"
                  ? "Clients"
                  : safeLocale === "en"
                  ? "Customers"
                  : "客户",
              stripe: "Stripe",
              add:
                safeLocale === "fr"
                  ? "Ajouter"
                  : safeLocale === "en"
                  ? "Add"
                  : "新增",
              save:
                safeLocale === "fr"
                  ? "Ajouter, modifier, supprimer"
                  : safeLocale === "en"
                  ? "Add, edit, remove"
                  : "新增、编辑、删除",
              remove:
                safeLocale === "fr"
                  ? "Supprimer"
                  : safeLocale === "en"
                  ? "Remove"
                  : "删除",
              invoice:
                safeLocale === "fr"
                  ? "Telecharger la facture"
                  : safeLocale === "en"
                  ? "Download invoice"
                  : "下载发票",
              noOrders:
                safeLocale === "fr"
                  ? "Aucune commande pour le moment."
                  : safeLocale === "en"
                  ? "No orders yet."
                  : "暂无订单。",
              noCustomers:
                safeLocale === "fr"
                  ? "Aucun client pour le moment."
                  : safeLocale === "en"
                  ? "No customers yet."
                  : "暂无客户。"
            }}
          />
        </div>
      </section>

      <TrainingProtectionNotice locale={safeLocale} />
    </div>
  );
}
