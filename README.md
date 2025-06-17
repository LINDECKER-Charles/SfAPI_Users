# 🧩 Consommation API Membres

Interface web simple utilisant HTML, JS et Tailwind CSS pour consommer une API Symfony exposant des données de membres via API Platform.

---

## ✨ Aperçu

Affichage des membres sous forme de cartes contenant leurs informations personnelles (photo, nom, email, téléphone, adresse…). Interface responsive stylée avec Tailwind.

---

## ⚙️ Technologies

* **HTML5**
* **JavaScript (fetch API)**
* **Tailwind CSS** (CDN)
* **Symfony 6 + API Platform** (backend)

---

## 📦 Fonctionnalités

* Requête automatique `GET /api/membres`
* Parsing des données retournées (`member[]`)
* Génération dynamique du DOM (cartes stylisées)
* Responsive design (grid adaptative)

---

## 🚀 Lancement local

```bash
symfony serve # ou utiliser Laragon/XAMPP
```

Ensuite ouvrir `index.html` depuis un serveur local (ex: via  dossier www de Laragon).

L’API doit être disponible ici : `http://localhost:8000/api/membres`

---

## 📁 Structure

```
.
├── index.html
└── js/
    └── script.js
```

---

## 🧑‍💻 Auteur

Développé avec ❤️ par [Charles LINDECKER](https://github.com/LINDECKER-Charles)

---
