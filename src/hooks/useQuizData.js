import { useState, useEffect } from 'react';
import { fetchQuizQuestions } from '../api/quizApi';

export const useQuizData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuizData = async () => {
      try {
        setIsLoading(true);
        const questions = await fetchQuizQuestions();
        setData(questions);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    getQuizData();
  }, []);

  return { data, isLoading, error };
};