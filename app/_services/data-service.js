
const API_URL = process.env.API_URL;

export async function getJobs() {
    const response = await fetch(`${API_URL}/jobs`);
    const data = await response.json();

    if (!data) {
        console.error(error);
        throw new Error("Jobs could not be loaded");
    }

    return data;
}