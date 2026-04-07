import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function CustomSoftwarePage() {
  return (
    <ServiceDetailPage
      title="Custom Software"
      description="Tailored software solutions designed to meet your unique business requirements."
      offerings={[
        "Enterprise software development",
        "SaaS applications",
        "Cloud-based solutions",
        "Mobile app development",
        "System integration",
      ]}
    />
  );
}
