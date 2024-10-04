import axios from 'axios';
import { Schedule } from '@/types/Schedule';

const API_URL = 'http://localhost:3000/data';

export const getSchedules = async (): Promise<Schedule[]> => {
  const params = new URLSearchParams();
  
  const response = await axios.get<Schedule[]>(`${API_URL}?${params}`);  
  
  return response.data;
};