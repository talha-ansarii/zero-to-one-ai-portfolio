import MarbleCup from "./MarbleCup";

// Removed previous tabbed ServiceBlock UI in favor of interactive cups

const Services = () => {
  // Marble data derived from the provided image columns
  const deepLearning = [
    { id: 1, technology: "Forecasting", color: "bg-blue-500" },
    { id: 2, technology: "Tabular Data", color: "bg-blue-500" },
    { id: 3, technology: "Images", color: "bg-blue-500" },
    { id: 4, technology: "Audio", color: "bg-blue-500" },
    { id: 5, technology: "Text", color: "bg-blue-500" },
    { id: 6, technology: "Sensor/IoT Data", color: "bg-blue-500" },
    { id: 7, technology: "Graph Data", color: "bg-blue-500" },
    { id: 8, technology: "Video", color: "bg-blue-500" },
  ];

  const neuralNetwork = [
    { id: 21, technology: "Sequencing", color: "bg-yellow-500" },
    { id: 22, technology: "Classification", color: "bg-yellow-500" },
    { id: 23, technology: "Recognition", color: "bg-yellow-500" },
    { id: 24, technology: "Transcription", color: "bg-yellow-500" },
    { id: 25, technology: "Categorization", color: "bg-yellow-500" },
    { id: 26, technology: "Monitoring", color: "bg-yellow-500" },
    { id: 27, technology: "Relationships", color: "bg-yellow-500" },
    { id: 28, technology: "Detection", color: "bg-yellow-500" },
  ];

  const nlp = [
    { id: 41, technology: "Extraction", color: "bg-green-500" },
    { id: 42, technology: "Modeling", color: "bg-green-500" },
    { id: 43, technology: "Vision", color: "bg-green-500" },
    { id: 44, technology: "Processing", color: "bg-green-500" },
    { id: 45, technology: "Understanding", color: "bg-green-500" },
    { id: 46, technology: "Patterning", color: "bg-green-500" },
    { id: 47, technology: "Networks", color: "bg-green-500" },
    { id: 48, technology: "Tracking", color: "bg-green-500" },
  ];

  const genAI = [
    { id: 61, technology: "Prediction", color: "bg-purple-500" },
    { id: 62, technology: "Linking", color: "bg-purple-500" },
    { id: 63, technology: "OCR", color: "bg-purple-500" },
    { id: 64, technology: "Speech-to-text", color: "bg-purple-500" },
    { id: 65, technology: "Sentiment", color: "bg-purple-500" },
    { id: 66, technology: "Interpretation", color: "bg-purple-500" },
    { id: 67, technology: "Knowledge", color: "bg-purple-500" },
    { id: 68, technology: "Captioning", color: "bg-purple-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full px-4 mt-6 gap-10 overflow-x-hidden">
      <header className="text-center space-y-3 max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight poppins-regular text-[#334054] dark:text-white ">
          Services
        </h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 poppins-regular">
          Explore capabilities across four cups—Deep Learning, Neural Networks, NLP, and Generative AI.
        </p>
      </header>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        <div className="rounded-3xl p-4 h-[420px] md:h-[520px]">
          <div className="h-full">
            <MarbleCup marbles={deepLearning} cupName="Deep Learning" compact fillParent />
          </div>
        </div>

        <div className="rounded-3xl  p-4 h-[420px] md:h-[520px]">
          <div className="h-full">
            <MarbleCup marbles={neuralNetwork} cupName="Neural Network" compact fillParent />
          </div>
        </div>

        <div className="rounded-3xl p-4 h-[420px] md:h-[520px]">
          <div className="h-full">
            <MarbleCup marbles={nlp} cupName="NLP" compact fillParent />
          </div>
        </div>

        <div className="rounded-3xl p-4 h-[420px] md:h-[520px]">
          <div className="h-full">
            <MarbleCup marbles={genAI} cupName="Generative AI" compact fillParent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;