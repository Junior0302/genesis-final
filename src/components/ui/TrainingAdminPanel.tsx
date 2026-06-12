"use client";

import { useMemo, useState } from "react";
import {
  adminCustomers,
  adminOrders,
  formatPrice,
  getLevelLabel,
  getLocalizedValue,
  trainings,
  type SupportedLocale,
  type TrainingItem,
  type TrainingLevel,
} from "@/lib/trainings";

type EditableTraining = {
  slug: string;
  title: string;
  level: TrainingLevel;
  price: number;
};

function toEditable(training: TrainingItem, locale: SupportedLocale): EditableTraining {
  return {
    slug: training.slug,
    title: getLocalizedValue(training.title, locale),
    level: training.level,
    price: training.price,
  };
}

export default function TrainingAdminPanel({
  locale,
  labels,
}: {
  locale: SupportedLocale;
  labels: {
    catalog: string;
    orders: string;
    customers: string;
    stripe: string;
    add: string;
    save: string;
    remove: string;
    invoice: string;
    noOrders: string;
    noCustomers: string;
  };
}) {
  const [catalog, setCatalog] = useState<EditableTraining[]>(
    trainings.map((item) => toEditable(item, locale))
  );

  const totals = useMemo(() => {
    const revenue = adminOrders.reduce((sum, order) => sum + order.amount, 0);
    return {
      revenue: formatPrice(revenue, locale),
      trainings: catalog.length,
      clients: adminCustomers.length,
    };
  }, [catalog.length, locale]);

  const updateTraining = (
    index: number,
    field: keyof EditableTraining,
    value: string
  ) => {
    setCatalog((current) =>
      current.map((item, currentIndex) =>
        currentIndex === index
          ? {
              ...item,
              [field]:
                field === "price"
                  ? Number(value) || 0
                  : field === "level"
                  ? (value as TrainingLevel)
                  : value,
            }
          : item
      )
    );
  };

  const addTraining = () => {
    setCatalog((current) => [
      ...current,
      {
        slug: `nouvelle-formation-${current.length + 1}`,
        title: locale === "fr" ? "Nouvelle formation" : locale === "en" ? "New training" : "新课程",
        level: "beginner",
        price: 99,
      },
    ]);
  };

  const removeTraining = (index: number) => {
    setCatalog((current) => current.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[24px] border border-[#FAF9F6]/10 bg-[#251812] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40">
            Stripe
          </p>
          <p className="mt-3 text-3xl font-serif text-[#FAF9F6]">{totals.revenue}</p>
        </div>
        <div className="rounded-[24px] border border-[#FAF9F6]/10 bg-[#251812] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40">
            Catalog
          </p>
          <p className="mt-3 text-3xl font-serif text-[#FAF9F6]">{totals.trainings}</p>
        </div>
        <div className="rounded-[24px] border border-[#FAF9F6]/10 bg-[#251812] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40">
            CRM
          </p>
          <p className="mt-3 text-3xl font-serif text-[#FAF9F6]">{totals.clients}</p>
        </div>
      </div>

      <section className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40">
              {labels.catalog}
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-serif text-[#FAF9F6]">
              {labels.save}
            </h2>
          </div>
          <button
            type="button"
            onClick={addTraining}
            className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-5 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] hover:border-[#FAF9F6]/40"
          >
            {labels.add}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {catalog.map((training, index) => (
            <div
              key={`${training.slug}-${index}`}
              className="grid gap-4 rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5 md:grid-cols-[1.3fr_0.7fr_0.5fr_auto]"
            >
              <input
                value={training.title}
                onChange={(event) => updateTraining(index, "title", event.target.value)}
                className="rounded-full border border-[#FAF9F6]/10 bg-transparent px-4 py-3 text-sm text-[#FAF9F6] outline-none"
              />
              <select
                value={training.level}
                onChange={(event) => updateTraining(index, "level", event.target.value)}
                className="rounded-full border border-[#FAF9F6]/10 bg-[#2A1C15] px-4 py-3 text-sm text-[#FAF9F6] outline-none"
              >
                <option value="beginner">{getLevelLabel("beginner", locale)}</option>
                <option value="intermediate">{getLevelLabel("intermediate", locale)}</option>
                <option value="advanced">{getLevelLabel("advanced", locale)}</option>
              </select>
              <input
                type="number"
                min={0}
                value={training.price}
                onChange={(event) => updateTraining(index, "price", event.target.value)}
                className="rounded-full border border-[#FAF9F6]/10 bg-transparent px-4 py-3 text-sm text-[#FAF9F6] outline-none"
              />
              <button
                type="button"
                onClick={() => removeTraining(index)}
                className="rounded-full border border-[#FAF9F6]/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/70 hover:border-[#F6C8C8]/40 hover:text-[#F6C8C8]"
              >
                {labels.remove}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40">
            {labels.orders}
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {adminOrders.length === 0 ? (
              <p className="text-sm text-[#FAF9F6]/60">{labels.noOrders}</p>
            ) : (
              adminOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-[22px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-[#FAF9F6]/45">
                        {order.id}
                      </p>
                      <p className="mt-2 text-xl font-serif text-[#FAF9F6]">
                        {order.customer}
                      </p>
                      <p className="text-sm text-[#FAF9F6]/60">{order.email}</p>
                    </div>
                    <span className="rounded-full border border-[#FAF9F6]/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/70">
                      {order.status}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-[#FAF9F6]/70">
                    <span>{formatPrice(order.amount, locale)}</span>
                    <button
                      type="button"
                      className="rounded-full border border-[#FAF9F6]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/70 hover:border-[#FAF9F6]/30"
                    >
                      {labels.invoice}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40">
            {labels.customers}
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {adminCustomers.length === 0 ? (
              <p className="text-sm text-[#FAF9F6]/60">{labels.noCustomers}</p>
            ) : (
              adminCustomers.map((customer) => (
                <div
                  key={customer.email}
                  className="rounded-[22px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5"
                >
                  <p className="text-lg font-serif text-[#FAF9F6]">{customer.name}</p>
                  <p className="mt-1 text-sm text-[#FAF9F6]/60">{customer.email}</p>
                  <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#FAF9F6]/45">
                    <span>{customer.lastOrder}</span>
                    <span>{formatPrice(customer.totalSpent, locale)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
