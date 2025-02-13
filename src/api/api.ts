import axios from "axios";

// Configuration de l'API
const backendAxios = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Intercepteur de réponse pour gérer les erreurs sur le backend
backendAxios.interceptors.response.use(
    (response: any) => response,
    (error: { response: { status: any; data: any; }; }) => {
        console.error("Erreur API Backend :", error.response?.status, error.response?.data);
        return Promise.reject(error.response ?? error);
    }
);

// Fonction pour envoyer une requête POST à votre backend

export const postToBackend = (url: string, data: any, config = {}) => {
    return backendAxios.post(url, data, config)
        .then((response: { data: any; }) => response.data)
        .catch((error: any) => {
            console.error("Erreur dans l'envois des données  API Backend :", error);
            throw error;
        });
};

// Fonction pour envoyer une requette GET
export const getToBackend = (url: string, data: any, config = {}) => {
    return backendAxios.get(url, config)
    .then((response) => response.data)
    .catch((error) => {
        console.error("Erreur dans la récupération des données API Backend :", error.response?.status, error.response?.data);
    })
}

// Fonction pour envoyer une requette PUT
export const putToBackend = (url: string, data: any, config = {}) => {
    return backendAxios.put(url, data, config)
    .then((response: { data: any; }) => response.data)
    .catch((error: { response: { status: any; data: any; }; }) => {
        console.error("Erreur dans la mise a jour des données s API Backend :", error.response?.status, error.response?.data);
    })
}

// Fonction pour envoyer une requette DELETE
export const deleteToBackend = (url: string, data: any, config = {}) => {
    return backendAxios.delete(url, config)
    .then((response: { data: any; }) => response.data)
    .catch((error: { response: { status: any; data: any; }; }) => {
        console.error("Erreur dans la suppression des données  API Backend :", error.response?.status, error.response?.data);
    })
}modified