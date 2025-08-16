import { Tabs } from "../components/ui/tabs";
import { cn } from "../lib/utils";

// Individual service content blocks kept small & composable
const ServiceBlock = ({
  title,
  tagline,
  points,
  accent,
}: {
  title: string;
  tagline: string;
  points: string[];
  accent?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full mx-auto p-6 md:p-10 rounded-3xl border backdrop-blur-xl",
        "bg-white/70 dark:bg-zinc-900/60 border-white/40 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      )}
    >
      <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 opacity-60 bg-gradient-to-br",
            accent || "from-[#421fb8]/30 via-fuchsia-400/20 to-transparent"
          )}
        />
        <div className="absolute inset-0 backdrop-[140px]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold poppins-regular tracking-tight text-[#421fb8] dark:text-violet-300">
        {title}
      </h2>
      <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-prose poppins-regular">
        {tagline}
      </p>
      <ul className="mt-6 grid gap-3 md:gap-4 text-sm md:text-[15px] text-gray-800 dark:text-gray-200 poppins-regular list-none">
        {points.map((p) => (
          <li
            key={p}
            className="group flex items-start gap-3 rounded-xl px-4 py-3 bg-white/60 dark:bg-zinc-800/40 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
          >
            <span className="mt-1 text-[#421fb8] dark:text-violet-300 group-hover:scale-110 transition-transform">
              {/* decorative icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <span className="leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const tabs = [
    {
      title: "Artificial Intelligence",
      value: "ai",
      content: (
        <ServiceBlock
          title="AI / ML / GenAI Enablement"
          tagline="Designing and shipping intelligent capabilities that create measurable business leverage while keeping safety & governance front and center."
          points={[
            "Strategy: AI maturity assessment, roadmap & KPI design",
            "Custom & fine-tuned LLM (RAG, agents, guardrails, eval harnesses)",
            "ML Pipelines: feature store, experiment tracking, CI/CD for models",
            "Edge & realtime inference optimizations (quantization / distillation)",
            "Responsible AI: bias + drift monitoring, red-teaming, governance",
            "Automation: workflow orchestration, intelligent copilots & chatbots",
          ]}
        />
      ),
    },
    {
      title: "Reporting & Analysis",
      value: "analytics",
      content: (
        <ServiceBlock
          title="Reporting & Advanced Analytics"
          tagline="Turning raw data exhaust into crisp operational & executive intelligence with fast iteration loops."
          points={[
            "Modern data stack architecture & warehouse / lakehouse modeling",
            "Dashboard & semantic layer design (self-serve metrics)",
            "Data quality / lineage observability & cost optimization",
            "Causal & cohort analysis, experimentation frameworks",
            "Forecasting, anomaly detection & real-time alerting",
            "Embedded analytics & narrative (NL to insights) reporting",
          ]}
          accent="from-indigo-400/30 via-sky-300/20 to-transparent"
        />
      ),
    },
    {
      title: "Product Management",
      value: "product",
      content: (
        <ServiceBlock
          title="Product Management & Delivery"
          tagline="Zero to one and one to n execution: crisp discovery, ruthless prioritization, and outcome-focused delivery."
          points={[
            "Discovery: problem framing, user research, JTBD synthesis",
            "Roadmapping & portfolio alignment with measurable OKRs",
            "Spec excellence: PRDs, user stories, acceptance criteria",
            "Release strategy: beta programs, phased rollouts, adoption playbooks",
            "Product analytics instrumentation & experiment design",
            "Cross-functional rituals & stakeholder communication frameworks",
          ]}
          accent="from-purple-500/30 via-pink-400/20 to-transparent"
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100dvh-4rem)] w-full px-4 mt-6 gap-10 overflow-x-hidden">
      <header className="text-center space-y-3 max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight poppins-regular text-[#334054] dark:text-white ">
          Services
        </h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 poppins-regular">
          Partnering across the lifecycle—from strategy and discovery to scaled
          AI-powered products—while keeping velocity, reliability and ethics
          aligned.
        </p>
      </header>
      <div className="w-[90%] md:w-full mx-auto flex flex-col items-center">
        <Tabs
          tabs={tabs}
          containerClassName="gap-2 justify-center"
          tabClassName="text-xs md:text-sm font-medium transition-colors hover:text-[#421fb8]"
          activeTabClassName="bg-white/70 dark:bg-zinc-800 shadow-md border border-white/40 dark:border-white/10"
          contentClassName="w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Services;
