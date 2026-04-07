import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function WebDevelopmentPage() {
  return (
    <ServiceDetailPage
      title="Web Development"
      description="Custom websites and web applications built with cutting-edge technologies for optimal performance."
      offerings={[
        "React and Next.js development",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "API integration and backend development",
        "Performance optimization",
      ]}
    />
  );
}
