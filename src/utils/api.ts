import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/travel-safety'; // Replace with the actual API endpoint

export const fetchCountryStatus = async (countryCode: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${countryCode}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching country status:', error);
        throw error;
    }
};