
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { motion } from "framer-motion";

interface ModalContentProps {
  title?: string;
  text?: string;
  images?: string[];
  link?: string;
  linkText?: string;
  techStack?: string[];
  features?: string[];
  metrics?: {
    users?: string;
    efficiency?: string;
    satisfaction?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface AnimatedModalDemoProps {
  content?: ModalContentProps;
}

export function AnimatedModalDemo({content}: AnimatedModalDemoProps) {
  const images = content?.images;

  return (
    <Modal>
      <ModalTrigger className="w-full px-4 py-2.5 text-sm font-mono tracking-wider text-[#A0A0A0] border border-[#6A5ACD]/40 rounded-lg bg-[#272751]/50 hover:bg-[#6A5ACD]/15 hover:border-[#6A5ACD]/70 transition-all duration-300 flex justify-center items-center group/modal-btn">
        <span className="group-hover/modal-btn:translate-x-1 text-center transition duration-300">
          View Details
        </span>
        <div className="ml-2 opacity-60 group-hover/modal-btn:opacity-100 group-hover/modal-btn:translate-x-1 transition duration-300 text-[#6A5ACD]">
          →
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="bg-[#1A1A2E] border border-[#272751]max-h-[85vh] overflow-y-auto">
          <div className=" top-0 bg-[#1A1A2E] z-10 pb-6 border-b border-[#272751]/50">
            <h4 className="text-2xl md:text-4xl font-mono text-[#A0A0A0] font-bold text-center pt-6">
              {content?.title}
            </h4>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Project Overview */}
            <div className="space-y-4">
              <h5 className="text-lg font-mono text-[#6A5ACD] font-semibold">Project Overview</h5>
              <p className="text-[#6B6B8D] leading-relaxed tracking-wide">
                {content?.text}
              </p>
            </div>

            {/* Project Images */}
            {images && images.length > 0 && (
              <div className="space-y-4">
                <h5 className="text-lg font-mono text-[#6A5ACD] font-semibold">Screenshots & Features</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((img: string, idx: number) => (
                    <motion.div
                      key={"images" + idx}
                      whileHover={{
                        scale: 1.02,
                        zIndex: 100,
                      }}
                      className="rounded-xl p-2 bg-[#272751] border-[#6A5ACD]/30 border overflow-hidden shadow-lg group cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`Project screenshot ${idx + 1}`}
                        className="rounded-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Stack */}
            <div className="space-y-4">
              <h5 className="text-lg font-mono text-[#6A5ACD] font-semibold">Technical Stack</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {content?.techStack?.map((tech: string, idx: number) => (
                  <div key={idx} className="bg-[#272751]/50 border border-[#6A5ACD]/20 rounded-lg px-3 py-2 text-center">
                    <span className="text-sm text-[#A0A0A0] font-mono">{tech}</span>
                  </div>
                )) || (
                  <>
                    <div className="bg-[#272751]/50 border border-[#6A5ACD]/20 rounded-lg px-3 py-2 text-center">
                      <span className="text-sm text-[#A0A0A0] font-mono">React</span>
                    </div>
                    <div className="bg-[#272751]/50 border border-[#6A5ACD]/20 rounded-lg px-3 py-2 text-center">
                      <span className="text-sm text-[#A0A0A0] font-mono">Node.js</span>
                    </div>
                    <div className="bg-[#272751]/50 border border-[#6A5ACD]/20 rounded-lg px-3 py-2 text-center">
                      <span className="text-sm text-[#A0A0A0] font-mono">AI/ML</span>
                    </div>
                    <div className="bg-[#272751]/50 border border-[#6A5ACD]/20 rounded-lg px-3 py-2 text-center">
                      <span className="text-sm text-[#A0A0A0] font-mono">MongoDB</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h5 className="text-lg font-mono text-[#6A5ACD] font-semibold">Key Features</h5>
              <div className="space-y-3">
                {content?.features?.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#6A5ACD] mt-2 flex-shrink-0"></div>
                    <span className="text-[#6B6B8D] leading-relaxed">{feature}</span>
                  </div>
                )) || (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6A5ACD] mt-2 flex-shrink-0"></div>
                      <span className="text-[#6B6B8D] leading-relaxed">Advanced AI-powered analytics and predictions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6A5ACD] mt-2 flex-shrink-0"></div>
                      <span className="text-[#6B6B8D] leading-relaxed">Real-time data processing and visualization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6A5ACD] mt-2 flex-shrink-0"></div>
                      <span className="text-[#6B6B8D] leading-relaxed">Scalable cloud infrastructure with 99.9% uptime</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6A5ACD] mt-2 flex-shrink-0"></div>
                      <span className="text-[#6B6B8D] leading-relaxed">Enterprise-grade security and compliance</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Project Metrics */}
            <div className="space-y-4">
              <h5 className="text-lg font-mono text-[#6A5ACD] font-semibold">Impact & Results</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#272751]/30 border border-[#6A5ACD]/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#A0A0A0] font-mono">{content?.metrics?.users || "10k+"}</div>
                  <div className="text-sm text-[#6B6B8D]">Active Users</div>
                </div>
                <div className="bg-[#272751]/30 border border-[#6A5ACD]/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#A0A0A0] font-mono">{content?.metrics?.efficiency || "85%"}</div>
                  <div className="text-sm text-[#6B6B8D]">Efficiency Increase</div>
                </div>
                <div className="bg-[#272751]/30 border border-[#6A5ACD]/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#A0A0A0] font-mono">{content?.metrics?.satisfaction || "98%"}</div>
                  <div className="text-sm text-[#6B6B8D]">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            {content?.testimonial && (
              <div className="space-y-4">
                <h5 className="text-lg font-mono text-[#6A5ACD] font-semibold">Client Testimonial</h5>
                <div className="bg-[#272751]/20 border-l-4 border-[#6A5ACD] p-4 rounded-r-lg">
                  <p className="text-[#6B6B8D] italic leading-relaxed mb-3">"{content.testimonial.quote}"</p>
                  <div className="text-sm text-[#A0A0A0]">
                    <span className="font-semibold">{content.testimonial.author}</span>
                    <span className="text-[#6B6B8D]"> - {content.testimonial.position}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ModalContent>
        <ModalFooter className="gap-4 justify-center bg-[#1A1A2E] border-t border-[#272751]/50">
         {content?.link && content?.linkText && (
          <a 
            target="_blank" 
            href={content.link} 
            className="bg-[#6A5ACD] hover:bg-[#5849B8] text-white text-sm px-8 py-3 rounded-full font-mono tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[0_0_15px_rgba(106,90,205,0.4)]"
          >
            {content.linkText}
            <span className="text-lg">→</span>
          </a>
         )}
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}


