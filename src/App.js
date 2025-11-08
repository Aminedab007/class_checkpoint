// Importation des dépendances principales
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import
// Création d'une classe App qui étend React.Component
// 👉 Une classe permet d'utiliser un state et des méthodes de cycle de vie
class App extends Component {
  // Constructeur : c’est ici qu’on initialise le state de notre composant
  constructor() {
    super();

    // 🧠 Le state contient les données internes du composant
    this.state = {
      // Objet person : représente les informations du profil à afficher
      person: {
        fullName: "Amine Dab",
        bio: "Frontend Developer passionate about creating clean, modern and user-friendly interfaces.",
        imgSrc: moi, // 🖼️ mon image locale importé en haut
        profession: "Frontend Developer",
      },

      // shows : booléen qui détermine si le profil doit être affiché ou non
      shows: false,

      // timeSinceMount : compteur du temps écoulé depuis le montage du composant
      timeSinceMount: 0,
    };
  }

  // 🕒 Méthode du cycle de vie : componentDidMount()
  // Elle est exécutée automatiquement après que le composant est inséré dans le DOM
  componentDidMount() {
    // Utilisation de setInterval pour incrémenter le compteur chaque seconde
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1, // incrémente de 1 seconde
      }));
    }, 1000);
  }

  // 🧹 Méthode du cycle de vie : componentWillUnmount()
  // Elle s’exécute juste avant la suppression du composant du DOM
  // On y nettoie les intervalles ou événements pour éviter les fuites de mémoire
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 🟢 Méthode personnalisée pour inverser la valeur de "shows"
  // Chaque clic sur le bouton fera apparaître ou disparaître la carte du profil
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  // 🎨 Méthode obligatoire render() : décrit ce que le composant doit afficher
  render() {
    // Déstructuration pour accéder plus facilement aux données du state
    const { person, shows, timeSinceMount } = this.state;

    // Retour du JSX (interface utilisateur)
    return (
      // Conteneur principal : fond clair + centrage vertical et horizontal
      <div className="app-bg d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
        <div className="container">
          {/* 🔹 Titre principal */}
          <h1 className="mb-4 fw-semibold text-primary">
            👤 Class Component Checkpoint
          </h1>

          {/* 🔘 Bouton pour afficher ou masquer le profil */}
          <button
            className="btn btn-outline-primary px-4 py-2 mb-4"
            onClick={this.toggleShow} // au clic, on exécute toggleShow()
          >
            {shows ? "Hide Profile" : "Show Profile"}
          </button>

          {/* 🧍‍♂️ Affichage conditionnel du profil */}
          {shows && (
            <div
              className="card shadow-sm border-0 mx-auto"
              style={{ maxWidth: "22rem" }}
            >
              <div className="card-body">
                {/* Image de profil circulaire */}
                <img
                  src={person.imgSrc}
                  className="rounded-circle mb-3 shadow-sm"
                  alt="Profile"
                  style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                  }}
                />

                {/* Nom complet */}
                <h4 className="fw-bold text-dark">{person.fullName}</h4>

                {/* Profession */}
                <p className="text-muted mb-2">{person.profession}</p>

                {/* Biographie */}
                <p className="text-secondary small">{person.bio}</p>
              </div>
            </div>
          )}

          {/* 🕓 Chronomètre depuis le montage du composant */}
          <p className="mt-4 text-secondary">
            ⏱ Component mounted since{" "}
            <span className="fw-bold text-primary">{timeSinceMount}</span>{" "}
            seconds
          </p>
        </div>
      </div>
    );
  }
}

// Exportation du composant pour être utilisé dans index.js
export default App;
