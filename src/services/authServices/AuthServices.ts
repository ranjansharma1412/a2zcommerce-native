//auth service

import apiClient from "@httpHelper/apiClient";

export const login = async (credentials: { email: string, password: string }) => {
    try {
        const response = await apiClient.post('/login', credentials);
        // You can add logic here to save the token on success
        return response.data;
    } catch (error) {
        throw error;
    }
}
