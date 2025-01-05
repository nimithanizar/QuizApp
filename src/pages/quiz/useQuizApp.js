import { useState } from "react";
import { useQuizData } from "../../hooks/useQuizData";

export const useQuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndexState] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const { data: questions = [], isLoading, error } = useQuizData();

  const handleOptionSelect = (option) => {
    if (isAnswerChecked) return;
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleExplanationToggle = () => {
    if (!selectedOptions[currentQuestionIndex]) {
      alert("Please select an option first!");
      return;
    }
    setShowExplanation(!showExplanation);
    setIsAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndexState(currentQuestionIndex + 1);
      setShowExplanation(false);
      setIsAnswerChecked(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndexState(currentQuestionIndex - 1);
      setShowExplanation(false);
      setIsAnswerChecked(false);
    }
  };

  const setCurrentQuestionIndex = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndexState(index);
      setShowExplanation(false);
      setIsAnswerChecked(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex] || {};
  const selectedOption = selectedOptions[currentQuestionIndex];
  const numbers = Array.from({ length: questions.length }, (_, i) => i + 1);

  return {
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
    setCurrentQuestionIndex,
  };
};
