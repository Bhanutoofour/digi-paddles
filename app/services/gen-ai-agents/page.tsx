import { ServiceDetailPage } from "@/app/components/service-detail-page";

export default function GenAIAgentsPage() {
  return (
    <ServiceDetailPage
      title="Gen AI Agents"
      description="Custom AI agents and intelligent automation to streamline your business processes."
      offerings={[
        "Custom GPT and AI chatbots",
        "Intelligent automation",
        "AI-powered workflows",
        "Natural language processing",
        "Machine learning integration",
      ]}
    />
  );
}
