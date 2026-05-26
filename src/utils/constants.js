export const MESSAGES = {
    SUCCESS: {
        UPDATE: {
            COMPETITIONS: "La liste des compétitions a été mise à jour.",
            CHANGE_PASSWORD: "Le mot de passe a été changé avec succès.",
            COMPETITION: "La compétition a été mise à jour.",
            TOKEN: "Le token a été changé avec succès.",
            MATCHES: "Les matchs ont été mis à jour.",
            RESULT: "Le résultat a été mis à jour.",
            ROLES: "Les rôles ont été mis à jour.",
            ROLE: "Le rôle a été modifié."
        },
        ADMIN_CONNECTION: "Connexion admin réussie.",
        CONNECTION: "Connexion réussie."
    },
    ERROR: {
        GET: {
            USERS: "Une erreur est survenue lors de la récupération des utilisateurs.",
            DATA: "Une erreur est survenue lors de la récupération des données."
        },
        UPDATE: {
            COMPETITIONS: "Une erreur est survenue lors de la mise à jour de la liste des compétitions.",
            COMPETITION: "Une erreur est survenue lors de la mise à jour de la compétition.",
            RESULT: "Une erreur est survenue lors de la mise à jour du résultat.",
            MATCHES: "Une erreur est survenue lors de la mise à jour des matchs.",
            ROLE: "Une erreur est survenue lors de la modification du rôle."
        },
        SAME_PASSWORD: "Le mot de passe actuel et le nouveau mot de passe sont identiques.",
        MIN_PASSWORD: "Le mot de passe doit contenir au moins 6 caractères.",
        CHANGE_TOKEN: "Une erreur est survenue lors du changement du token.",
        INVALID: "Le nom d'utilisateur ou le mot de passe est incorrect.",
        USERNAME_ALREADY_EXISTS: "Le nom d'utilisateur est déjà utilisé.",
        NO_ACTUAL_PASSWORD: "Merci de rentrer votre mot de passe actuel.",
        NO_PASSWORD2: "Merci de confirmer votre nouveau mot de passe.",
        PASSWORD_NOT_MATCH: "Les mots de passe ne correspondent pas.",
        NO_PASSWORD: "Merci de rentrer votre nouveau mot de passe.",
        NO_ADMIN_PASSWORD: "Merci de rentrer un mot de passe admin.",
        CONNECTION: "Une erreur est survenue lors de la connexion.",
        ACTUAL_PASSWORD: "Le mot de passe actuel est incorrect.",
        PUT_USERNAME: "Veuillez rentrer un nom d'utilisateur.",
        ADMIN_PASSWORD: "Le mot de passe admin est incorrect.",
        PUT_PASSWORD: "Veuillez rentrer un mot de passe.",
        BAD: "Désolé, quelque chose s'est mal passé.",
        TOKEN: "Merci de rentrer votre nouveau token.",
        NOT_FOUND: "Désolé, cette page n'existe pas.",
        GLOBAL: "Une erreur est survenue.",
        INVALID_FORMAT: "Format incorrect",
        INVALID_SCORE: "Score incohérent"
    }
}

export const CONSOLE = {
    FETCH: {
        USERS: "Error fetching users data:",
        MATCHES: "Error fetching matches:",
        DATA: "Error fetching data:"
    },
    UPDATE: {
        COMPETITION: "Error updating competition:",
        ROLE: "Error updating roles:"
    },
    CONNECTION: "Failed to connect user",
}

export const DATA = {
    ADMIN_ONLY: "Seuls les administrateurs ont accès à cet onglet",
    ALREADY_HAVE_AN_ACCOUNT: "Vous avez déjà un compte ?",
    COMPETITION_SELECTION: "Sélection de la compétition",
    DESACTIVATED: "Cette fonctionnalité est désactivée",
    SELECT_COMPETITION: "Sélectionnez une compétition",
    SELECT_WINNER: "Sélectionnez un vainqueur",
    ACTIVATION_BATCH: "Activation des batchs",
    NO_MATCHES: "Aucun match programmé le",
    NO_USERS: "Aucun utilisateur recensé",
    CREATE_YOUR_ACCOUNT: "Créez votre compte",
    CREATE_ACCOUNT: "Créez-en un.",
    PLANNING: "Planning du --/--",
    USERNAME: "Nom d'utilisateur",
    NO_ACCOUNT: "Pas de compte ?",
    LOGIN: "Connectez-vous.",
    TO_LOGIN: "Se connecter",
    PASSWORD: "Mot de passe",
    SETTING: "Paramétrage",
    CATEGORY: "Catégorie",
    PLAYER_1: "Joueur 1",
    PLAYER_2: "Joueur 2",
    RESULT: "Résultat",
    VOID_DATE: "--/--",
    HOURS: "Horaire",
    VS: "VS",
    NC: "NC"
}

export const MODAL = {
    CONFIRM: {
        TITLE: "Confirmation",
        DISCONNECTION_TITLE: "Confirmation de déconnexion",
        SETTINGS_1: "Êtes-vous sûr de vouloir mettre à jour les paramètres ?",
        SETTINGS_2: "Toutes les données propre à la compétition active seront perdues.",
        DISCONNECTION: "Êtes-vous sûr de vouloir vous déconnecter ?"
    },
    RESULT: {
        TITLE: "Renseigner un résultat",
        PLACEHOLDER: "Entrez le score",
    },
    ADMIN_CONNECTION: {
        TITLE: "Connexion admin",
        PLACEHOLDER: "Mot de passe admin",
        BUTTON: "Connexion"
    },
    CHANGE_PASSWORD: {
        TITLE: "Changer le mot de passe",
        PLACEHOLDER: "Mot de passe actuel",
        PLACEHOLDER2: "Nouveau mot de passe",
        PLACEHOLDER3: "Confirmer le nouveau mot de passe",
        BUTTON: "Changer le mot de passe"
    },
    TOKEN: {
        TITLE: "Changer le token",
        PLACEHOLDER: "Token",
        BUTTON: "Changer le token"
    },
    USERS: {
        TITLE: "Gestion des utilisateurs",
        CANCEL_BUTTON: "Annuler",
        SAVE_BUTTON:"Sauvegarder"
    },
}

export const LOADER = {
    MATCHES: "La mise à jour des matchs a démarrée (cette opération peut prendre plusieurs minutes).",
    COMPETITIONS: "La mise à jour des compétitions a démarrée.",
    CHANGE_PASSWORD: "Changement de mot de passe en cours...",
    SETTINGS_UPDATE: "Sauvegarde des paramètres...",
    ADMIN_CONNECTION: "Connexion admin en cours...",
    CHANGE_TOKEN: "Changement du token en cours...",
    ACCESS_REQUEST: "Demande d’accès en cours...",
    SETTINGS: "Chargement des paramètres...",
    USERS: "Chargement des utilisateurs...",
    PLANNING: "Chargement du planning du",
    PROFIL: "Chargement du profil...",
    ROLE: "Sauvegarde du rôle..."
}

export const TABLE = {
    ROLE_TITLE: "Rôle",
    NAME_TITLE: "Nom"
}


export const COMPETITION = {
    COMPETITON_ACTIVE: "Activation de la compétition (1/8)...",
    DELETE_DATA: "Suppression de toutes les données (2/8)...",
    UPDATE_COURTS: "Mise à jour des courts (3/8)...",
    UPDATE_CATEGORIES: "Mise à jour des catégories (4/8)...",
    UPDATE_RANKINGS: "Mise à jour des classements (5/8)...",
    UPDATE_GRIDS: "Mise à jour des découpages (6/8)...",
    UPDATE_PLAYERS: "Mise à jour des joueurs et des équipes (7/8)...",
    UPDATE_MATCHES: "Mise à jour des matchs (8/8)..."
}

export const BUTTON = {
    UPDATE_COMPETITIONS: "Mettre à jour la liste des compétitions",
    UPDATE_COMPETITION: "Mettre à jour la compétition",
    CHANGE_TOKEN: "Changer le token de connexion",
    REQUEST_ACCESS: "Faire une demande d'accès",
    UPDATE_MATCHES: "Mettre à jour les matchs",
    CHANGE_PASSWORD: "Changer le mot de passe",
    MANAGE_USERS: "Gérer les utilisateurs",
    BACK: "Retour à la page d'accueil",
    DISCONNECTION: "Déconnexion",
    SAVE: "Enregistrer",
    RETRY: "Réessayer",
    CANCEL: "Annuler",
}

export const ADMIN = 2;
export const STAFF = 1;
export const VISITOR = 0;