import { API_URL } from './apiConfig.js';

const SETTINGS_API_URL = `${API_URL}/settings`;

export async function getBatchsActive() {
    try {
        const response = await fetch(`${SETTINGS_API_URL}/batchsActive`);
        if(!response.ok) {
            throw new Error('Failed to fetch batchsActive');
        }
        const data = await response.json();
        return data['batchs_active'];
    } catch (error) {
        console.error('Error fetching batchsActive:', error);
        throw error;
    }
}

export async function updateBatchsActive(batchsActive) {
    try {
        const response = await fetch(`${SETTINGS_API_URL}/batchsActive`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ batchsActive })
        });
        if(!response.ok) {
            throw new Error('Failed to update batchsActive');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating batchsActive:', error);
        throw error;
    }
}

export async function updateToken(token) {
    try {
        const response = await fetch(`${SETTINGS_API_URL}/token`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        if(!response.ok) {
            throw new Error('Failed to update token');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating token:', error);
        throw error;
    }
}