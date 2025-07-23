import { useState } from "react";

export default function Register({ onRegister, onSwitchToLogin }) {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    confirmEmail: "",
    password: "",
    dateNaissance: "",
    lieuNaissance: "",
    sexe: "Homme",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email !== form.confirmEmail) {
      alert("Les adresses email ne correspondent pas !");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = existingUsers.some((user) => user.email === form.email);

    if (alreadyExists) {
      alert("Un compte avec cet email existe déjà !");
      return;
    }

    const newUser = { ...form };
    delete newUser.confirmEmail;

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Inscription réussie !");
    onRegister();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md w-full mx-4 p-6 bg-white shadow-lg rounded-2xl"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-700">Créer un compte</h2>

        <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} required className="border p-2 rounded" />
        <input name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} required className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="border p-2 rounded" />
        <input type="email" name="confirmEmail" placeholder="Confirmez Email" value={form.confirmEmail} onChange={handleChange} required className="border p-2 rounded" />
        <input type="password" name="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} required className="border p-2 rounded" />
        <input type="date" name="dateNaissance" value={form.dateNaissance} onChange={handleChange} required className="border p-2 rounded" />
        <input name="lieuNaissance" placeholder="Lieu de naissance" value={form.lieuNaissance} onChange={handleChange} required className="border p-2 rounded" />

        <select name="sexe" value={form.sexe} onChange={handleChange} className="border p-2 rounded">
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          S'inscrire
        </button>

        <p className="text-center text-sm">
          Déjà inscrit ?{" "}
          <button type="button" onClick={onSwitchToLogin} className="text-blue-600 hover:underline">
            Se connecter
          </button>
        </p>
      </form>
    </div>
  );
}
