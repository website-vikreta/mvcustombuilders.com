import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceDetailPage from "@/components/ui/service-detail-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";
import { SERVICES, getService } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} | MV Custom Builders, Belleville NJ`;
  return {
    title,
    description: service.description,
    openGraph: {
      title,
      description: service.description,
    },
  };
}

export default async function Service({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <ServiceDetailPage service={service} />
      </main>
      <SiteFooter />
    </>
  );
}
