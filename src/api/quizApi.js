import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const fetchQuizQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/quiz`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch quiz questions: " + error.message);
  }
};