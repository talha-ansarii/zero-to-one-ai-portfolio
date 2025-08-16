import { motion } from "framer-motion";
import MarbleCup from "./MarbleCup";


const Game = () => {
  return (
    <div>
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-md top-[-50px] mt-[-50px]  left-1/2 translate-x-[-50%] md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-100 py-4 sm:py-8 text-center"
      >
        "Piece It Together (Literally)!"


      </motion.div>

      <MarbleCup
        cupName="Tech Stack"
        compact
        marbles={[
          { id: 1, technology: "React", color: "bg-blue-500" },
          { id: 2, technology: "TypeScript", color: "bg-blue-600" },
          { id: 3, technology: "Node", color: "bg-green-600" },
          { id: 4, technology: "GSAP", color: "bg-green-500" },
          { id: 5, technology: "NLP", color: "bg-purple-500" },
          { id: 6, technology: "LLM", color: "bg-purple-600" },
          { id: 7, technology: "RAG", color: "bg-yellow-500" },
          { id: 8, technology: "Cloud", color: "bg-red-500" },
        ]}
      />
    </div>
  )
}

export default Game