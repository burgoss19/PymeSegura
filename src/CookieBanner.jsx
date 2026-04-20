import { useEffect, useState } from "react";

const COOKIE_KEY = "pymesegura_cookies_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#1e293b",
        color: "#f1f5f9",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.3)",
        fontSize: "14px",
        lineHeight: "1.5",
      }}
    >
      <p style={{ margin: 0, flex: 1, minWidth: "220px" }}>
        Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegacion y
        mostrarte contenido relevante. Al continuar navegando, aceptas nuestra{" "}
        <a
          href="/politica-de-cookies"
          style={{ color: "#60a5fa", textDecoration: "underline" }}
        >
          Politica de Cookies
        </a>{" "}
        y nuestra{" "}
        <a
          href="/politica-de-privacidad"
          style={{ color: "#60a5fa", textDecoration: "underline" }}
        >
          Politica de Privacidad
        </a>
        .
      </p>
      <button
        onClick={accept}
        style={{
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 24px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
        onMouseOver={(event) => (event.currentTarget.style.background = "#1d4ed8")}
        onMouseOut={(event) => (event.currentTarget.style.background = "#2563eb")}
      >
        Aceptar
      </button>
    </div>
  );
}
