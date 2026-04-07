import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function DigitalMarketingPage() {
  return (
    <ServiceDetailPage
      title="Digital Marketing"
      description="Data-driven marketing strategies powered by AI insights to increase visibility and conversions."
      offerings={[
        "SEO and content strategy",
        "Social media management",
        "PPC and ad campaigns",
        "Email marketing automation",
        "Analytics and reporting",
      ]}
    />
  );
}
