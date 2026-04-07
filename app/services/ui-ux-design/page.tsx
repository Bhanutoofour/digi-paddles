import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function UIUXDesignPage() {
  return (
    <ServiceDetailPage
      title="UI/UX Design"
      description="Beautiful, intuitive interfaces designed to deliver exceptional user experiences."
      offerings={[
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design systems",
      ]}
    />
  );
}
