import PayPalReturnClient from "@/components/ui/PayPalReturnClient";

export default async function PayPalReturnPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string; slug?: string; order?: string }>;
}) {
  const { locale } = await params;
  const query = await searchParams;

  const paypalOrderId = query.token ?? "";
  const slug = query.slug ?? "";
  const order = query.order ?? "GC-PENDING";

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto">
          <PayPalReturnClient
            paypalOrderId={paypalOrderId}
            locale={locale}
            slug={slug}
            order={order}
          />
        </div>
      </section>
    </div>
  );
}

