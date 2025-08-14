import React, { useState, useEffect } from "react";
import { Input } from "../../components/ui/input";

const PuzzleGame: React.FC = () => {
  const [imgUrl, setImgUrl] = useState("profile.png"); // Default image
  const [positions, setPositions] = useState<number[]>([...Array(16).keys()]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null); // Track selected piece for mobile
  const pieceSize = 50; // Adjust piece size for mobile screens

  useEffect(() => {
    setPositions((prevPositions) => {
      const newPos = [...prevPositions];
      newPos.sort(() => Math.random() - 0.5);
      return newPos;
    });
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    e.dataTransfer.setData("text/plain", position.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    e.preventDefault();
    const originalPosition = parseInt(e.dataTransfer.getData("text"));

    setPositions((prevPositions) => {
      const newPos = [...prevPositions];
      [newPos[originalPosition], newPos[position]] = [newPos[position], newPos[originalPosition]];
      return newPos;
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle piece selection and swapping for mobile
  const handlePieceClick = (position: number) => {
    if (selectedPiece === null) {
      setSelectedPiece(position); // Select first piece
    } else {
      // Swap with selected piece and reset selection
      setPositions((prevPositions) => {
        const newPos = [...prevPositions];
        [newPos[selectedPiece], newPos[position]] = [newPos[position], newPos[selectedPiece]];
        return newPos;
      });
      setSelectedPiece(null);
    }
  };

  return (
    <div className="game-container flex flex-col justify-center gap-6 items-center md:flex-row">
      <div
        className="puzzle-container border-[3px] border-[#aaa9a9] grid grid-cols-4 bg-white"
        style={{
          width: pieceSize * 4.1, 
          height: pieceSize * 4.1,
        }}
      >
        {positions.map((pos, index) => {
          const x = (pos % 4) * pieceSize;
          const y = Math.floor(pos / 4) * pieceSize;
          return (
            <div
              key={index}
              className={`puzzle-piece ${selectedPiece === index ? "border-2 border-blue-500" : ""}`}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
              onClick={() => handlePieceClick(index)} // Handle click for mobile
              style={{
                width: pieceSize,
                height: pieceSize,
                backgroundImage: `url('${imgUrl}')`,
                backgroundPosition: `-${x}px -${y}px`,
                backgroundSize: `${pieceSize * 4}px ${pieceSize * 4}px`,
              }}
            />
          );
        })}
      </div>
      <p className="md:hidden text-xs my-[-10px] text-center text-neutral-300">
        Tap on two pieces to swap them.
      </p>

      <div className="flex flex-col items-center gap-2 mt-0 md:mt-0">
        <div className="reference-image mb-4">
          <img src={imgUrl} alt="Reference" className="w-24 h-24 object-cover" />
        </div>

        <label className="custom-file-upload text-center cursor-pointer mt-[-10px] bg-[#EFF1C5] px-4 py-0 rounded transition">
          Upload Image
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default PuzzleGame;
