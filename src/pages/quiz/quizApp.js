import React from "react";
import { useQuizApp } from "./useQuizApp";

const QuizApp = () => {
  const {
    questions,
    currentQuestionIndex,
    selectedOption,
    showExplanation,
    isAnswerChecked,
    handleOptionSelect,
    handleExplanationToggle,
    handleNextQuestion,
    handlePrevQuestion,
    currentQuestion,
    numbers,
    isLoading,
    error,
  } = useQuizApp();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl font-semibold text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl font-semibold text-red-500">
          Error loading quiz questions!
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-full p-4 mb-8">
          <h1 className="text-center text-2xl font-semibold text-red-400">
            Quiz Application UI
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex gap-6">
          <div className="flex-1">
            <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
              Quiz Title
            </h2>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border-4 border-blue-500">
              <p className="text-gray-700">{currentQuestion.question}</p>
            </div>

            <div className="space-y-2 mb-6">
              {currentQuestion.options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className={`p-3 rounded border cursor-pointer transition-colors
                    ${
                      selectedOption === option
                        ? isAnswerChecked
                          ? option === currentQuestion.correctAnswer
                            ? "bg-darkGreen text-white"
                            : "bg-darkRed text-white"
                          : "bg-blue-100"
                        : "hover:bg-gray-50"
                    }`}
                >
                  {option}
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={handlePrevQuestion}
                className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
              >
                Prev
              </button>
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>

            <div
              onClick={handleExplanationToggle}
              className="bg-white shadow-lg rounded-lg p-4 mt-6 cursor-pointer"
            >
              <h3 className="font-semibold mb-2 text-gray-800">Explanation</h3>
              {showExplanation && (
                <p
                  className={`text-gray-700 ${
                    isAnswerChecked
                      ? selectedOption === currentQuestion.correctAnswer
                        ? "text-green-500"
                        : "text-red-500"
                      : ""
                  }`}
                >
                  {currentQuestion.explanation}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-72">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    Question {currentQuestionIndex + 1}/{questions.length}
                  </span>

                  <button
                    onClick={handleExplanationToggle}
                    className="text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-md"
                  >
                    Need Help?
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {numbers.map((num) => (
                <div
                  key={num}
                  className={`h-10 w-10 rounded-full flex items-center justify-center cursor-pointer
                    ${
                      num === currentQuestionIndex + 1
                        ? "bg-blue-100"
                        : "bg-gray-200"
                    }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
