import { motion } from "framer-motion";
import { IconBolt, IconBrain, IconBrandGithub, IconBrandYoutube, IconChartBar, IconDatabase, IconLanguage, IconRobot } from "@tabler/icons-react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";

const projectsData = [
  {
    title: "India's first AI enabled Energy Trade Portal",
    description: "Revolutionizing energy trading with advanced AI algorithms and predictive analytics",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full">
            <IconBolt className="w-7 h-7 text-[#2E9BFF]" stroke={1.5} />
          </div>,
    className: "md:col-span-2",
    content: {
      title: "India's first AI enabled Energy Trade Portal",
      text: "Our cutting-edge Energy Trade Portal leverages state-of-the-art AI to optimize energy trading across India. The system uses predictive analytics to forecast demand and supply patterns, enabling more efficient trading and distribution of energy resources nationwide.",
      images: ["/ecom.png", "/ecom2.png", "/ecom3.png"],
      link: "#",
      linkText: "Learn More",
      techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS", "Docker", "Redis"],
      features: [
        "Real-time energy price prediction using machine learning algorithms",
        "Automated trading strategies based on market trends and historical data",
        "Advanced risk management system with predictive analytics",
        "Integration with multiple energy exchanges across India",
        "Regulatory compliance monitoring and automated reporting"
      ],
      metrics: {
        users: "500+",
        efficiency: "92%",
        satisfaction: "97%"
      },
      testimonial: {
        quote: "This platform has revolutionized our energy trading operations. The AI predictions are incredibly accurate and have increased our profitability by 40%.",
        author: "Rajesh Kumar",
        position: "Head of Trading, PowerCorp India"
      }
    }
  },
  {
    title: "GenAI enabled translation service",
    description: "Breaking language barriers with AI-powered real-time translation",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full">
            <IconLanguage className="w-7 h-7 text-[#4CAF50]" stroke={1.5} />
          </div>,
    content: {
      title: "GenAI enabled translation service",
      text: "Our translation service uses generative AI models to provide contextually accurate translations across multiple Indian languages. The system understands cultural nuances and regional dialects, making communication seamless across the diverse linguistic landscape of India.",
      images: ["/sumz.png", "/sumz2.png", "/sumz3.png"],
      link: "#",
      linkText: "View Demo",
      techStack: ["React", "FastAPI", "PyTorch", "Transformers", "PostgreSQL", "GCP", "Kubernetes"],
      features: [
        "Support for 22 official Indian languages with regional dialects",
        "Context-aware translation preserving cultural nuances",
        "Real-time voice translation with speech synthesis",
        "Document translation with formatting preservation",
        "API integration for third-party applications"
      ],
      metrics: {
        users: "2M+",
        efficiency: "94%",
        satisfaction: "96%"
      },
      testimonial: {
        quote: "The accuracy of translations, especially for technical documents, is outstanding. It has transformed our multilingual customer support.",
        author: "Dr. Priya Sharma",
        position: "CTO, GlobalTech Solutions"
      }
    }
  },
  {
    title: "Bid automation through LLMs",
    description: "Streamlining the bidding process with language models",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full">
            <IconRobot className="w-7 h-7 text-[#9C27B0]" stroke={1.5} />
          </div>,
    content: {
      title: "Bid automation through LLMs",
      text: "Our Large Language Model-powered bidding system revolutionizes procurement processes by automatically analyzing RFPs, generating competitive bids, and optimizing pricing strategies based on historical data and market trends.",
      images: ["/seven.png", "/seven1.png", "/seven2.png"],
      link: "#",
      linkText: "Case Study"
    }
  },
  {
    title: "India's first creative media powered by AI thinking",
    description: "Creating innovative media content with AI-driven creativity",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-orange-500/10 rounded-full">
            <IconBrain className="w-7 h-7 text-[#FF9800]" stroke={1.5} />
          </div>,
    className: "md:col-span-2",
    content: {
      title: "India's first creative media powered by AI thinking",
      text: "Our platform enables creators to produce stunning visual and written content with the assistance of AI that understands artistic principles and creative processes. The system can generate ideas, design concepts, and full campaigns tailored to Indian cultural contexts.",
      images: ["/movix.png", "/movix1.png", "/movix2.png"],
      link: "#",
      linkText: "View Gallery"
    }
  },
  {
    title: "Inventory automation through agentic AI",
    description: "Optimizing inventory management with autonomous AI agents",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/10 rounded-full">
            <IconDatabase className="w-7 h-7 text-[#FFC107]" stroke={1.5} />
          </div>,
    content: {
      title: "Inventory automation through agentic AI",
      text: "Our agentic AI system autonomously manages inventory across complex supply chains. It predicts demand patterns, suggests optimal reorder points, identifies potential stockouts, and coordinates with suppliers—all while continuously learning from operational data.",
      images: ["/seven3.png", "/seven4.png", "/seven5.png"],
      link: "#",
      linkText: "See Results"
    }
  },
  {
    title: "Chat your database through agentic AI",
    description: "Conversational interface for database interactions",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-pink-500/10 rounded-full">
            <IconDatabase className="w-7 h-7 text-[#E91E63]" stroke={1.5} />
          </div>,
    content: {
      title: "Chat your database through agentic AI",
      text: "Our solution transforms how businesses interact with their data by enabling natural language conversations with databases. Users can ask complex questions in plain language and receive accurate, contextualized information without writing a single line of SQL.",
      images: ["/repolens.png", "/repolens2.png", "/repolens3.png"],
      link: "#",
      linkText: "Try Demo"
    }
  },
  {
    title: "Forecasting automation",
    description: "Predictive analytics for business intelligence",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-blue-400/10 rounded-full">
            <IconChartBar className="w-7 h-7 text-[#03A9F4]" stroke={1.5} />
          </div>,
    content: {
      title: "Forecasting automation",
      text: "Our forecasting system combines multiple AI models to provide accurate predictions across various business metrics. From sales forecasting to resource planning, the system continuously adapts to changing conditions and improves over time.",
      images: ["/mathsloyal.png", "/sumzz.png", "/tubehelp.png"],
      link: "#",
      linkText: "View Dashboard"
    }
  },
  {
    title: "Chat with GitHub repo",
    description: "Conversational interface for code repositories",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-gray-500/10 rounded-full">
            <IconBrandGithub className="w-7 h-7 text-gray-200" stroke={1.5} />
          </div>,
    content: {
      title: "Chat with GitHub repo",
      text: "Our GitHub integration allows developers to have natural conversations with their codebase. The AI understands code structure, can explain complex functions, suggest improvements, and help navigate large repositories through simple conversational queries.",
      images: ["/ecom4.png", "/ecom5.png", "/ecomm.png"],
      link: "#",
      linkText: "GitHub Plugin"
    }
  },
  {
    title: "Chat with YouTube video",
    description: "Interactive conversations with video content",
    icon: <div className="flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-full">
            <IconBrandYoutube className="w-7 h-7 text-[#F44336]" stroke={1.5} />
          </div>,
    className: "md:col-span-2",
    content: {
      title: "Chat with YouTube video",
      text: "Our YouTube integration transforms passive video consumption into an interactive experience. Users can ask questions about video content, request summaries of specific sections, or explore related concepts—all through a conversational interface that understands both audio and visual content.",
      images: ["/free.png", "/distance.png", "/dtu.png"],
      link: "#",
      linkText: "Try It Now",
      techStack: ["Next.js", "OpenAI GPT-4", "Whisper API", "YouTube API", "Supabase", "Vercel"],
      features: [
        "Automatic video transcription and content analysis",
        "Interactive Q&A with video content using natural language",
        "Chapter-wise summaries and key points extraction",
        "Multi-language subtitle generation and translation",
        "Smart bookmarking and note-taking capabilities"
      ],
      metrics: {
        users: "150k+",
        efficiency: "88%",
        satisfaction: "95%"
      },
      testimonial: {
        quote: "This tool has completely changed how we consume educational content. Students can now interact with lectures in ways we never imagined.",
        author: "Prof. Ankit Mehta",
        position: "Dean of Technology, IIT Delhi"
      }
    }
  },
];

const Projects = () => {
  // Derive cards for carousel
  const cards = projectsData.map((p) => {
    const firstImage = p.content?.images?.[0] || "/hero.jpeg";
  const category = p.title.split(" ")[0];
    const content = (
      <div className="space-y-6">
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm md:text-base">{p.content?.text}</p>
        {p.content?.features && (
          <div>
            <h4 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-100">Key Features</h4>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
              {p.content.features.map((f: string) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}
        {p.content?.techStack && (
          <div>
            <h4 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-100">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {p.content.techStack.map((t: string) => (
                <span key={t} className="px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800 text-xs font-mono tracking-wide text-neutral-700 dark:text-neutral-300">{t}</span>
              ))}
            </div>
          </div>
        )}
        {p.content?.metrics && (
          <div className="grid grid-cols-3 gap-4 text-center">
            {Object.entries(p.content.metrics).map(([k, v]) => (
              <div key={k} className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <p className="text-lg md:text-2xl font-bold text-indigo-500">{v as string}</p>
                <p className="text-[10px] md:text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{k}</p>
              </div>
            ))}
          </div>
        )}
        {p.content?.testimonial && (
          <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
            <p className="italic text-sm md:text-base text-neutral-700 dark:text-neutral-200">“{p.content.testimonial.quote}”</p>
            <p className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400">— {p.content.testimonial.author}, {p.content.testimonial.position}</p>
          </div>
        )}
        {p.content?.images && p.content.images.length > 1 && (
          <div className="grid grid-cols-3 gap-2">
            {p.content.images.slice(1).map((img: string) => (
              <img key={img} src={img} alt={p.title} className="h-24 w-full object-cover rounded-md" loading="lazy" />
            ))}
          </div>
        )}
      </div>
    );
    return {
      src: firstImage,
      title: p.title,
      category,
      content,
    };
  });

  return (
    <div className="w-full h-[calc(100dvh-25px)]  md:h-[calc(100dvh-50px)] overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-[100vw] h-[100dvh]"
      >
        <div className="h-full">
          <Carousel
            items={cards.map((card, i) => (
              <Card key={card.title} card={card} index={i} layout />
            ))}
          />
        </div>
      </motion.div>
    </div>
  );
};

// Helper function for class names
// (local cn helper removed - unused after refactor)

export default Projects;
