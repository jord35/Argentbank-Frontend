export const Api = {
    // login
    userlogin: async ({ email, password }) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Erreur lors du login :", error);
            throw error;
        }
    },

    // profile
    userprofile: async (token) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Erreur lors de la récupération du profil :", error);
            throw error;
        }
    },

    // signup
    usersignup: async ({ email, password, firstName, lastName, userName }) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/signup", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password, firstName, lastName, userName })
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Erreur lors de l’inscription :", error);
            throw error;
        }
    }
};