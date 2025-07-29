import { useState, useEffect } from "react";

export default function Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgot, setIsForgot] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const [step, setStep] = useState("code"); // "code" ou "reset"
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    return () => {
      localStorage.removeItem("resetCode");
      localStorage.removeItem("resetEmail");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      onLogin();
    } else {
      alert("Email ou mot de passe incorrect !");
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("Veuillez d'abord entrer votre adresse email.");
      return;
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("resetCode", code);
    localStorage.setItem("resetEmail", email);
    setIsForgot(true);
    setStep("code");
    alert(`Un code a été envoyé à ${email} : ${code}`);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    const storedCode = localStorage.getItem("resetCode");

    if (enteredCode === storedCode) {
      alert("✅ Code vérifié. Veuillez saisir un nouveau mot de passe.");
      setStep("reset");
    } else {
      alert("❌ Code incorrect. Réessaye.");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const emailToUpdate = localStorage.getItem("resetEmail");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) =>
      user.email === emailToUpdate ? { ...user, password: newPassword } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("🔑 Mot de passe mis à jour avec succès ! Vous pouvez vous connecter.");
    setIsForgot(false);
    setEnteredCode("");
    setNewPassword("");
    setEmail("");
    setPassword("");

    localStorage.removeItem("resetCode");
    localStorage.removeItem("resetEmail");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          {isForgot
            ? step === "code"
              ? "Vérification du code"
              : "Nouveau mot de passe"
            : "Se connecter"}
        </h2>

        {!isForgot ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Mot de passe</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-right mt-1">
                  <span
                    onClick={handleForgotPassword}
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                  >
                    Mot de passe oublié ?
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Connexion
              </button>
            </form>

            <div className="text-center mt-6 text-sm">
              <span>Pas encore de compte ? </span>
              <button
                onClick={onSwitchToRegister}
                className="text-blue-600 hover:underline"
              >
                Créer un compte
              </button>
            </div>
          </>
        ) : step === "code" ? (
          <>
            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <p className="text-sm text-gray-600">
                Un code a été envoyé à{" "}
                <strong>{localStorage.getItem("resetEmail")}</strong>. Entrez-le :
              </p>
              <input
                type="text"
                value={enteredCode}
                onChange={(e) => setEnteredCode(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez le code reçu"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Vérifier le code
              </button>
              <button
                type="button"
                onClick={() => setIsForgot(false)}
                className="w-full text-sm text-gray-600 hover:underline mt-2"
              >
                ⬅ Retour à la connexion
              </button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <p className="text-sm text-gray-600 mb-2">
                Entrez un nouveau mot de passe pour{" "}
                <strong>{localStorage.getItem("resetEmail")}</strong> :
              </p>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Nouveau mot de passe"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Réinitialiser le mot de passe
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsForgot(false);
                  setStep("code");
                }}
                className="w-full text-sm text-gray-600 hover:underline mt-2"
              >
                ⬅ Retour à la connexion
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
