import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      <style>{css}</style>

      <div className="card">
        <h2>Contactez-nous</h2>
        <hr />

        <label>Votre Prénom</label>
        <input type="text" placeholder=" " />

        <label>Votre adresse e-mail</label>
        <input type="email" placeholder="about@gmail.com" />

        <label>Votre téléphone</label>
        <input type="text" placeholder=" " />

        <label>Message</label>
        <textarea placeholder="Saisissez ici..."></textarea>

        <button>Envoyer le message</button>
      </div>
    </div>
  );
}

// ---- Styles Inline ----
const styles = {
  page: {
    backgroundColor: "#faecd8",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
};

// ---- CSS intégré ----
const css = `
.card {
  background: white;
  padding: 30px;
  width: 380px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h2 {
  margin-top: 0;
}

hr {
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 12px 0 5px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #d6d6ff;
  border-radius: 6px;
  font-size: 14px;
}

textarea {
  height: 120px;
  resize: none;
}

button {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #7a6cf0;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #6a5be0;
}
`;

