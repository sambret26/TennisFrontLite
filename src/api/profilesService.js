import { API_URL } from './apiConfig.js';

const PROFILES_API_URL = `${API_URL}/profiles`;

export async function getProfiles() {
    try {
        const response = await fetch(`${PROFILES_API_URL}/`);
        if(!response.ok) {
            throw new Error('Failed to fetch profiles');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching profiles:', error);
        throw error;
    }
}