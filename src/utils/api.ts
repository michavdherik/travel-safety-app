import axios from 'axios';

const API_BASE_URL = 'https://restcountries.com/v3.1/name'; // REST Countries API endpoint

export const fetchCountryStatus = async (countryName: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${countryName}`);
        if (response.data.length === 0) {
            throw new Error('Country not found');
        }
        return response.data[0]; // Return the first country data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            throw new Error('Country not found');
        }
        console.error('Error fetching country status:', error);
        throw error;
    }
};