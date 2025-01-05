import { useState, useEffect } from "react";
import { useQuizData } from "../../hooks/useQuizData";

export const useQuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({}); 
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const { data, isLoading, error } = useQuizData();

  useEffect(() => {
    if (data) {
      setQuestions(data);
    }
  }, [data]);

  const handleOptionSelect = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestionIndex]: option, 
    }));
  };

  const handleExplanationToggle = () => {
    if (selectedOptions[currentQuestionIndex]) {
      setShowExplanation(true);
      setIsAnswerChecked(true);
    } else {
      alert("Please select an option first!");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setIsAnswerChecked(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
      setIsAnswerChecked(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex] || {};
  const numbers = Array.from({ length: questions.length }, (_, i) => i + 1);

  return {
    questions,
    currentQuestionIndex,
    selectedOption: selectedOptions[currentQuestionIndex], 
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
  };
};
