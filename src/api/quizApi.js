import axios from "axios";


export const fetchQuizQuestions = async () => {
  const response = await axios.get("http://localhost:5000/api/quiz");
  return response.data;
};
