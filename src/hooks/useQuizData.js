import { useQuery } from "@tanstack/react-query";
import { fetchQuizQuestions } from "../api/quizApi";

export const useQuizData = () => {
  return useQuery({
    queryKey: ["quizQuestions"], 
    queryFn: fetchQuizQuestions,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false, 
  });
};
