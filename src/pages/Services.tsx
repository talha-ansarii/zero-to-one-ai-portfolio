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
    <div className="flex flex-col justify-around items-center h-[calc(100dvh-25px)] w-full px-4 mt-6 gap-10 overflow-x-hidden overflow-y-auto">
      <header className="text-center max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight poppins-regular text-[#334054] dark:text-white ">
          Services
        </h1>
      </header>

      <div className="w-full max-w-7xl mx-auto flex overflow-x-auto overscroll-contain touch-pan-x no-scrollbar snap-x snap-mandatory snap-always gap-0 sm:overflow-visible sm:overscroll-auto sm:snap-none sm:grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-6 md:gap-8">
        <div className="rounded-3xl p-0 sm:p-4 h-[560px] md:h-[540px] min-w-full basis-full flex-shrink-0 snap-start sm:min-w-0 sm:basis-auto place-content-end ">
          <div className="h-full">
            <MarbleCup marbles={deepLearning} cupName="Deep Learning" compact fillParent />
          </div>
        </div>

        <div className="rounded-3xl  p-0 sm:p-4 h-[560px] md:h-[540px] min-w-full basis-full flex-shrink-0 snap-start sm:min-w-0 sm:basis-auto">
          <div className="h-full">
            <MarbleCup marbles={neuralNetwork} cupName="Neural Network" compact fillParent />
          </div>
        </div>

        <div className="rounded-3xl p-0 sm:p-4 h-[560px] md:h-[540px] min-w-full basis-full flex-shrink-0 snap-start sm:min-w-0 sm:basis-auto">
          <div className="h-full">
            <MarbleCup marbles={nlp} cupName="NLP" compact fillParent />
          </div>
        </div>

        <div className="rounded-3xl p-0 sm:p-4 h-[560px] md:h-[540px] min-w-full basis-full flex-shrink-0 snap-start sm:min-w-0 sm:basis-auto">
          <div className="h-full">
            <MarbleCup marbles={genAI} cupName="Generative AI" compact fillParent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;