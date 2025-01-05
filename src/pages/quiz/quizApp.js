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
    isLoading,
    error,
    setCurrentQuestionIndex,
  } = useQuizApp();

  if (isLoading)
    return <div className="text-center p-4 font-bold">Loading...</div>;
  if (error)
    return (
      <div className="text-center p-4 text-red-500 font-bold">{error}</div>
    );

  return (
    <div className="min-h-screen bg-blue-500 p-4 sm:p-8">
      <div className="bg-white rounded-lg py-4 px-6 sm:px-8 mb-4 sm:mb-8 max-w-xl mx-auto shadow-md">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-red-400">
          Quiz Application UI
        </h1>
      </div>

      <div className="bg-white rounded-lg p-6 sm:p-8 max-w-8xl mx-auto min-h-[600px]">
        <h2 className="text-center text-lg sm:text-xl text-gray-700 font-bold mb-4 sm:mb-8">
          Quiz Title
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-blue-200">
              <div className="mb-2 font-bold">
                Question {currentQuestionIndex + 1}
              </div>
              <p className="text-gray-700 font-medium">
                {currentQuestion.question}
              </p>
            </div>

            <div className="space-y-3 mb-4 sm:mb-8">
              {currentQuestion.options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className={`p-4 bg-white shadow rounded-lg cursor-pointer hover:shadow-md transition-all
                    ${
                      selectedOption === option && !isAnswerChecked
                        ? "bg-blue-50 border-2 border-blue-500"
                        : ""
                    }
                    ${
                      isAnswerChecked &&
                      option === currentQuestion.correctAnswer
                        ? "bg-green-50 border-2 border-green-500"
                        : ""
                    }
                    ${
                      isAnswerChecked &&
                      selectedOption === option &&
                      option !== currentQuestion.correctAnswer
                        ? "bg-red-50 border-2 border-red-500"
                        : ""
                    }
                  `}
                >
                  <p className="text-gray-700 font-medium">{option}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between sm:justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
              <button
                onClick={handlePrevQuestion}
                className="px-6 sm:px-8 py-2 rounded-full bg-white shadow hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 font-medium">Prev</p>
              </button>
              <button
                onClick={handleNextQuestion}
                className="px-6 sm:px-8 py-2 rounded-full bg-white shadow hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 font-medium">Next</p>
              </button>
            </div>

            <div className="mt-4 sm:mt-8">
              <div
                onClick={handleExplanationToggle}
                className="bg-white shadow-lg rounded-lg p-4 sm:p-6 min-h-[100px]"
              >
                <h3 className="font-bold mb-3">Explanation</h3>
                <div className="text-gray-700">
                  {showExplanation ? (
                    <p className="text-gray-700 font-medium">
                      {currentQuestion.explanation}
                    </p>
                  ) : (
                    <p className="text-gray-400">Click to see explanation</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-72 self-start">
            <div className="bg-white shadow-lg min-h-[400px] sm:min-h-[600px] rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 font-medium">
                  Question {currentQuestionIndex + 1}/{questions.length}
                </span>
                <button
                  onClick={handleExplanationToggle}
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  Need Help ?
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {Array.from({ length: questions.length }, (_, i) => i + 1).map(
                  (num) => (
                    <div
                      key={num}
                      className={`h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center cursor-pointer
                      ${
                        num === currentQuestionIndex + 1
                          ? "bg-blue-100"
                          : "bg-gray-200"
                      }`}
                      onClick={() => setCurrentQuestionIndex(num - 1)}
                    >
                      {num}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
