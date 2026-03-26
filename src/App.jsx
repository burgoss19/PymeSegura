import { useState, useEffect, useRef, useCallback } from "react";
import { Shield, Building2, ShoppingCart, Scale, Heart, ChevronRight, Menu, X, Search, Clock, User, ArrowRight, CheckCircle, AlertTriangle, Lock, FileText, Mail, Phone, MapPin, ExternalLink, TrendingUp, Eye, BookOpen, ChevronDown, Globe, Zap, Award, Users } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   PYMESEGURA.COM — Authority Site for Cybersecurity & 
   Legal Compliance for SMBs
   
   Design Direction: "Editorial-Industrial"
   - Clean, newspaper-like typography with technical edge
   - Dark navy + warm amber accent palette
   - Generous whitespace, content-first layout
   - Strategic ad placeholder integration
   ═══════════════════════════════════════════════════════ */

// ─── ROUTING ─────────────────────────────────────────
function useRouter() {
  const [path, setPath] = useState(window.location.hash.slice(1) || "/");
  useEffect(() => {
    const handler = () => setPath(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  const navigate = useCallback((to) => { window.location.hash = to; }, []);
  return { path, navigate };
}

// ─── CONSTANTS ───────────────────────────────────────
const SITE = {
  name: "PymeSegura",
  tagline: "Ciberseguridad y Cumplimiento Digital para tu PYME",
  description: "Guías especializadas de protección de datos, normativa RGPD/LOPDGDD y ciberseguridad adaptadas a cada sector empresarial.",
  url: "https://pymesegura.com",
};

const CATEGORIES = [
  {
    id: "salud-y-clinicas",
    name: "Salud y Clínicas",
    shortName: "Salud",
    icon: Heart,
    color: "#dc2626",
    bgColor: "#fef2f2",
    description: "Protección de datos sanitarios, historia clínica electrónica y cumplimiento en el sector salud.",
    articles: 1,
    featured: "Guía RGPD para clínicas dentales en 2026",
  },
  {
    id: "sector-inmobiliario",
    name: "Sector Inmobiliario",
    shortName: "Inmobiliaria",
    icon: Building2,
    color: "#2563eb",
    bgColor: "#eff6ff",
    description: "Seguridad en transacciones, firma digital y protección de datos en operaciones inmobiliarias.",
    articles: 0,
    featured: "Firma digital en contratos de compraventa: lo que debes saber",
  },
  {
    id: "ecommerce-y-retail",
    name: "E-commerce y Retail",
    shortName: "E-commerce",
    icon: ShoppingCart,
    color: "#059669",
    bgColor: "#ecfdf5",
    description: "PCI DSS, pasarelas de pago seguras y protección del consumidor digital.",
    articles: 1,
    featured: "Cómo cumplir con la Directiva PSD3 en tu tienda online",
  },
  {
    id: "legal-y-asesorias",
    name: "Legal y Asesorías",
    shortName: "Legal",
    icon: Scale,
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    description: "Deontología digital, secreto profesional en la nube y cumplimiento del ENS.",
    articles: 1,
    featured: "IA generativa en despachos: riesgos legales que no puedes ignorar",
  },
];

const SAMPLE_ARTICLES = [
  {
    id: 1,
    slug: "salud-y-clinicas/guia-lopdgdd-ciberseguridad-clinicas",
    category: "salud-y-clinicas",
    title: "Guía Definitiva de Protección de Datos y Ciberseguridad para Clínicas y Centros Médicos",
    seoTitle: "Guía LOPDGDD y Ciberseguridad para Clínicas Médicas (2026)",
    metaDescription: "Descubre cómo adaptar tu clínica o centro médico a la LOPDGDD y evitar multas de la AEPD. Guía paso a paso de ciberseguridad para el sector salud.",
    excerpt: "El sector sanitario es el principal objetivo de los ciberataques en la actualidad. Descubre cómo blindar tu clínica a nivel legal y técnico para evitar multas de la AEPD que pueden superar los 60.000 euros.",
    author: "Equipo PymeSegura",
    date: "2026-03-26",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    slug: "ecommerce-y-retail/ciberseguridad-ecommerce-rgpd-pci-dss",
    category: "ecommerce-y-retail",
    title: "Ciberseguridad para Ecommerce: Protege tu Tienda Online de Ciberataques y Multas",
    seoTitle: "Ciberseguridad para Ecommerce: Cómo proteger tu tienda online y cumplir el RGPD (2026)",
    metaDescription: "Evita el robo de tarjetas, ataques DDoS y multas de la AEPD en tu tienda online. Guía de ciberseguridad y cumplimiento PCI-DSS para WooCommerce, Shopify y PrestaShop.",
    excerpt: "Una tienda online abierta las 24 horas es una máquina de generar ventas, pero también un escaparate constante para los ciberdelincuentes. Aprende a blindar tu ecommerce frente a ataques Magecart, Ransomware y DDoS, y cumple el RGPD y PCI-DSS sin complicaciones.",
    author: "Equipo PymeSegura",
    date: "2026-03-26",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 3,
    slug: "legal-y-asesorias/ciberseguridad-despachos-abogados-secreto-profesional",
    category: "legal-y-asesorias",
    title: "Ciberseguridad en el Sector Legal: Protegiendo el Secreto Profesional en la Era Digital",
    seoTitle: "Ciberseguridad para Despachos de Abogados y Asesorías: Guía de Cumplimiento (2026)",
    metaDescription: "Protege el secreto profesional y los datos de tus clientes. Guía de ciberseguridad para abogados, procuradores y asesorías fiscales bajo el RGPD.",
    excerpt: "En un despacho de abogados o asesoría, la información confidencial de los clientes es el activo más valioso. Aprende a proteger el secreto profesional frente a ransomware, filtraciones y el uso indebido de la IA.",
    author: "Equipo PymeSegura",
    date: "2026-03-26",
    readTime: "7 min",
    featured: false,
  },
];

// ─── SCHEMA MARKUP (JSON-LD) ─────────────────────────
function SchemaMarkup({ type, data }) {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      description: SITE.description,
      sameAs: [],
    },
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data?.title,
      datePublished: data?.date,
      author: { "@type": "Person", name: data?.author },
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data?.items?.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE.url}${item.path}`,
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }}
    />
  );
}

// ─── AD PLACEHOLDER COMPONENT ────────────────────────
function AdSlot({ position, className = "" }) {
  const sizes = {
    "below-h1": { w: "728px", h: "90px", label: "Leaderboard 728×90" },
    "in-content": { w: "336px", h: "280px", label: "Rectangle 336×280" },
    sidebar: { w: "300px", h: "250px", label: "MPU 300×250" },
    "sidebar-tall": { w: "300px", h: "600px", label: "Half Page 300×600" },
    "sticky-footer": { w: "100%", h: "50px", label: "Anchor Ad" },
  };
  const s = sizes[position] || sizes["in-content"];
  return (
    <div
      className={className}
      style={{
        maxWidth: s.w,
        minHeight: s.h,
        width: "100%",
        background: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.02) 8px, rgba(0,0,0,0.02) 16px)",
        border: "1px dashed rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        borderRadius: "2px",
        fontSize: "11px",
        color: "rgba(0,0,0,0.3)",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        fontFamily: "var(--font-mono)",
      }}
      data-ad-slot={position}
      aria-hidden="true"
    >
      {/* ADSENSE PLACEHOLDER: {position} — {s.label} */}
      Ad · {s.label}
    </div>
  );
}

// ─── BREADCRUMBS ─────────────────────────────────────
function Breadcrumbs({ items }) {
  const { navigate } = useRouter();
  return (
    <>
      <SchemaMarkup type="breadcrumb" data={{ items }} />
      <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)", marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "4px", alignItems: "center" }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {i > 0 && <ChevronRight size={10} />}
            {i < items.length - 1 ? (
              <a
                href={`#${item.path}`}
                onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                {item.name}
              </a>
            ) : (
              <span style={{ color: "var(--text-secondary)" }}>{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

// ─── NAVBAR ──────────────────────────────────────────
function Navbar() {
  const { navigate, path } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [path]);

  const navItems = [
    { label: "Inicio", path: "/" },
    ...CATEGORIES.map((c) => ({ label: c.shortName, path: `/${c.id}` })),
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "white",
        borderBottom: "1px solid var(--border)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      {/* Top bar */}
      <div style={{ background: "var(--navy)", color: "white", fontSize: "11px", padding: "6px 0", fontFamily: "var(--font-mono)", letterSpacing: "0.3px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ opacity: 0.8 }}>Normativa actualizada a 2026</span>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span style={{ opacity: 0.6 }}>RGPD · LOPDGDD · AI Act · ENS</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <a
            href="#/"
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
          >
            <div style={{
              width: "36px", height: "36px", background: "var(--navy)",
              borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center",
              transform: "rotate(-3deg)",
            }}>
              <Shield size={20} color="var(--amber)" strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "var(--navy)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Pyme<span style={{ color: "var(--amber)" }}>Segura</span>
              </div>
              <div style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                Ciberseguridad PYME
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                style={{
                  padding: "8px 14px",
                  fontSize: "13px",
                  fontWeight: path === item.path ? 700 : 500,
                  color: path === item.path ? "var(--navy)" : "var(--text-secondary)",
                  textDecoration: "none",
                  borderRadius: "4px",
                  background: path === item.path ? "var(--bg-warm)" : "transparent",
                  transition: "all 0.15s ease",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "-0.1px",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none", background: "none", border: "none", cursor: "pointer",
              padding: "8px", color: "var(--navy)",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            padding: "0 0 16px", borderTop: "1px solid var(--border)",
            display: "flex", flexDirection: "column", gap: "2px",
          }}>
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                style={{
                  padding: "12px 16px",
                  fontSize: "15px",
                  fontWeight: path === item.path ? 700 : 400,
                  color: "var(--navy)",
                  textDecoration: "none",
                  borderRadius: "4px",
                  background: path === item.path ? "var(--bg-warm)" : "transparent",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

// ─── FOOTER ──────────────────────────────────────────
function Footer() {
  const { navigate } = useRouter();
  return (
    <footer style={{ background: "var(--navy)", color: "white", marginTop: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px 30px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Shield size={24} color="var(--amber)" />
              <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px" }}>
                Pyme<span style={{ color: "var(--amber)" }}>Segura</span>
              </span>
            </div>
            <p style={{ fontSize: "13px", opacity: 0.7, lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
              Información especializada sobre ciberseguridad y cumplimiento legal digital para pequeñas y medianas empresas.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px", color: "var(--amber)" }}>Sectores</h4>
            {CATEGORIES.map((c) => (
              <a key={c.id} href={`#/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
                style={{ display: "block", fontSize: "13px", opacity: 0.7, textDecoration: "none", color: "white", padding: "4px 0", fontFamily: "var(--font-body)" }}>
                {c.name}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px", color: "var(--amber)" }}>Legal</h4>
            {[
              { label: "Política de Privacidad", path: "/privacidad" },
              { label: "Aviso Legal", path: "/aviso-legal" },
              { label: "Política de Cookies", path: "/cookies" },
              { label: "Contacto", path: "/contacto" },
            ].map((item) => (
              <a key={item.path} href={`#${item.path}`} onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                style={{ display: "block", fontSize: "13px", opacity: 0.7, textDecoration: "none", color: "white", padding: "4px 0", fontFamily: "var(--font-body)" }}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px", color: "var(--amber)" }}>Newsletter</h4>
            <p style={{ fontSize: "13px", opacity: 0.7, lineHeight: 1.6, marginBottom: "12px", fontFamily: "var(--font-body)" }}>
              Recibe alertas de normativa y guías prácticas cada semana.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="tu@email.com"
                style={{
                  flex: 1, padding: "10px 12px", background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px",
                  color: "white", fontSize: "13px", fontFamily: "var(--font-body)",
                  outline: "none",
                }}
              />
              <button style={{
                padding: "10px 16px", background: "var(--amber)", border: "none",
                borderRadius: "4px", fontWeight: 700, fontSize: "13px", cursor: "pointer",
                color: "var(--navy)", fontFamily: "var(--font-body)",
              }}>
                OK
              </button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px",
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px",
          fontSize: "11px", opacity: 0.5, fontFamily: "var(--font-mono)",
        }}>
          <span>© 2026 PymeSegura.com — Todos los derechos reservados</span>
          <span>Contenido informativo · No constituye asesoramiento legal</span>
        </div>
      </div>
    </footer>
  );
}

// ─── HOME PAGE ───────────────────────────────────────
function HomePage() {
  const { navigate } = useRouter();

  return (
    <main>
      <SchemaMarkup type="organization" data={{}} />

      {/* HERO */}
      <section style={{
        background: "var(--navy)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.05,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", top: "-50%", right: "-20%", width: "60%", height: "200%",
          background: "radial-gradient(ellipse, rgba(217,164,48,0.08) 0%, transparent 70%)",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px 60px", position: "relative" }}>
          <div style={{ maxWidth: "720px" }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", color: "var(--amber)", marginBottom: "20px",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <span style={{ width: "24px", height: "1px", background: "var(--amber)" }} />
              Actualizado a normativa 2026
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800, color: "white", lineHeight: 1.08, letterSpacing: "-1.5px",
              marginBottom: "24px",
            }}>
              Ciberseguridad y Cumplimiento Digital para tu{" "}
              <span style={{ color: "var(--amber)" }}>Pyme</span>
            </h1>

            <p style={{
              fontSize: "17px", lineHeight: 1.7, color: "rgba(255,255,255,0.7)",
              maxWidth: "560px", marginBottom: "36px", fontFamily: "var(--font-body)",
            }}>
              Guías prácticas de protección de datos, RGPD, LOPDGDD y seguridad informática. 
              Contenido verificado y adaptado a cada sector empresarial.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="#/salud-y-clinicas"
                onClick={(e) => { e.preventDefault(); navigate("/salud-y-clinicas"); }}
                style={{
                  padding: "14px 28px", background: "var(--amber)", color: "var(--navy)",
                  textDecoration: "none", fontWeight: 700, fontSize: "14px", borderRadius: "4px",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  fontFamily: "var(--font-body)", letterSpacing: "-0.2px",
                }}
              >
                Explorar guías <ArrowRight size={16} />
              </a>
              <a
                href="#/contacto"
                onClick={(e) => { e.preventDefault(); navigate("/contacto"); }}
                style={{
                  padding: "14px 28px", background: "transparent",
                  border: "1px solid rgba(255,255,255,0.25)", color: "white",
                  textDecoration: "none", fontWeight: 500, fontSize: "14px", borderRadius: "4px",
                  fontFamily: "var(--font-body)",
                }}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AD: Below Hero */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 20px 0" }}>
        <AdSlot position="below-h1" />
      </div>

      {/* CATEGORY GRID */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800,
            color: "var(--navy)", letterSpacing: "-0.5px", marginBottom: "8px",
          }}>
            Guías por sector
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", fontFamily: "var(--font-body)" }}>
            Cada industria tiene sus propios riesgos y obligaciones. Encuentra la tuya.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}>
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href={`#/${cat.id}`}
                onClick={(e) => { e.preventDefault(); navigate(`/${cat.id}`); }}
                style={{
                  display: "block", textDecoration: "none",
                  padding: "28px 24px", border: "1px solid var(--border)",
                  borderRadius: "6px", background: "white",
                  transition: "all 0.2s ease", position: "relative", overflow: "hidden",
                  animationDelay: `${i * 80}ms`,
                }}
                className="category-card"
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: cat.color,
                }} />
                <div style={{
                  width: "44px", height: "44px", borderRadius: "8px",
                  background: cat.bgColor, display: "flex",
                  alignItems: "center", justifyContent: "center", marginBottom: "16px",
                }}>
                  <Icon size={22} color={cat.color} strokeWidth={2} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700,
                  color: "var(--navy)", marginBottom: "8px", letterSpacing: "-0.3px",
                }}>
                  {cat.name}
                </h3>
                <p style={{
                  fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6,
                  marginBottom: "16px", fontFamily: "var(--font-body)",
                }}>
                  {cat.description}
                </p>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontSize: "12px", fontFamily: "var(--font-mono)",
                }}>
                  <span style={{ color: "var(--text-muted)" }}>{cat.articles} artículos</span>
                  <span style={{ color: cat.color, fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                    Ver guías <ChevronRight size={12} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section style={{ background: "var(--bg-warm)", padding: "64px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "36px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800,
                color: "var(--navy)", letterSpacing: "-0.5px", marginBottom: "8px",
              }}>
                Artículos destacados
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", fontFamily: "var(--font-body)" }}>
                Lo más reciente en normativa, amenazas y buenas prácticas.
              </p>
            </div>
          </div>

          {/* Empty state — articles will appear here as they are published */}
          {SAMPLE_ARTICLES.length > 0 ? (
            <>
              {/* Featured article large */}
              {SAMPLE_ARTICLES.filter((a) => a.featured).slice(0, 1).map((article) => {
                const cat = CATEGORIES.find((c) => c.id === article.category);
                return (
                  <a
                    key={article.id}
                    href={`#/${article.slug}`}
                    onClick={(e) => { e.preventDefault(); navigate(`/${article.slug}`); }}
                    style={{ textDecoration: "none", display: "block", marginBottom: "20px" }}
                  >
                    <div style={{
                      background: "white", borderRadius: "6px", border: "1px solid var(--border)",
                      padding: "32px", transition: "box-shadow 0.2s ease",
                    }}
                      className="category-card"
                    >
                      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
                        <span style={{
                          padding: "4px 10px", background: cat?.bgColor, color: cat?.color,
                          fontSize: "11px", fontWeight: 700, borderRadius: "3px",
                          fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.5px",
                        }}>
                          {cat?.shortName}
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                          <Clock size={11} /> {article.readTime}
                        </span>
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800,
                        color: "var(--navy)", lineHeight: 1.3, letterSpacing: "-0.3px", marginBottom: "12px",
                      }}>
                        {article.title}
                      </h3>
                      <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: "16px" }}>
                        {article.excerpt}
                      </p>
                      <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600, fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                        Leer artículo <ChevronRight size={13} />
                      </span>
                    </div>
                  </a>
                );
              })}

              {/* Article grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                {SAMPLE_ARTICLES.filter((a) => !a.featured).map((article) => {
                  const cat = CATEGORIES.find((c) => c.id === article.category);
                  return (
                    <a
                      key={article.id}
                      href={`#/${article.slug}`}
                      onClick={(e) => { e.preventDefault(); navigate(`/${article.slug}`); }}
                      style={{ textDecoration: "none" }}
                    >
                      <article style={{
                        background: "white", borderRadius: "6px", border: "1px solid var(--border)",
                        padding: "24px", display: "flex", flexDirection: "column",
                      }}
                        className="category-card"
                      >
                        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "12px" }}>
                          <span style={{
                            padding: "3px 8px", background: cat?.bgColor, color: cat?.color,
                            fontSize: "10px", fontWeight: 700, borderRadius: "3px",
                            fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.5px",
                          }}>
                            {cat?.shortName}
                          </span>
                          <span style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                            {article.readTime}
                          </span>
                        </div>
                        <h3 style={{
                          fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700,
                          color: "var(--navy)", lineHeight: 1.35, letterSpacing: "-0.2px", marginBottom: "8px", flex: 1,
                        }}>
                          {article.title}
                        </h3>
                        <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, fontFamily: "var(--font-body)", marginBottom: "12px" }}>
                          {article.excerpt.slice(0, 120)}...
                        </p>
                        <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                          Leer artículo <ChevronRight size={12} />
                        </span>
                      </article>
                    </a>
                  );
                })}
              </div>
            </>
          ) : (
            <div style={{
              padding: "48px 32px", background: "white", borderRadius: "6px",
              border: "1px dashed var(--border)", textAlign: "center",
            }}>
              <BookOpen size={36} color="var(--text-muted)" style={{ margin: "0 auto 16px", opacity: 0.3 }} />
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700,
                color: "var(--navy)", marginBottom: "8px",
              }}>
                Próximamente
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", fontFamily: "var(--font-body)", maxWidth: "400px", margin: "0 auto" }}>
                Estamos preparando guías especializadas para cada sector. Las primeras publicaciones llegarán muy pronto.
              </p>
            </div>
          )}

          {/* AD: In content */}
          <div style={{ marginTop: "32px" }}>
            <AdSlot position="in-content" />
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 20px" }}>
        <div style={{
          background: "linear-gradient(135deg, var(--navy) 0%, #1a2744 100%)",
          borderRadius: "8px", padding: "48px 36px", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0, width: "40%", height: "100%",
            background: "radial-gradient(ellipse at right, rgba(217,164,48,0.1) 0%, transparent 70%)",
          }} />
          <div style={{ position: "relative", maxWidth: "640px" }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", color: "var(--amber)", marginBottom: "16px",
            }}>
              Nuestro compromiso
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 800,
              color: "white", lineHeight: 1.3, letterSpacing: "-0.3px", marginBottom: "20px",
            }}>
              Contenido verificado y actualizado a la normativa vigente
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Revisión trimestral por especialistas en derecho digital",
                "Fuentes oficiales: BOE, DOUE, AEPD y ENISA",
                "Fecha de última actualización visible en cada artículo",
                "Sin conflictos de interés con proveedores de software",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <CheckCircle size={16} color="var(--amber)" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "40px 0" }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "0 20px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px",
          textAlign: "center",
        }}>
          {[
            { value: "0", label: "Guías publicadas", icon: BookOpen },
            { value: "4", label: "Sectores cubiertos", icon: Globe },
            { value: "2026", label: "Normativa actual", icon: Zap },
            { value: "—", label: "Lectores mensuales", icon: Users },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i}>
                <Icon size={20} color="var(--amber)" style={{ marginBottom: "8px" }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: "var(--navy)", letterSpacing: "-1px" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

// ─── CATEGORY PAGE ───────────────────────────────────
function CategoryPage({ categoryId }) {
  const { navigate } = useRouter();
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return <NotFoundPage />;
  const Icon = cat.icon;
  const articles = SAMPLE_ARTICLES.filter((a) => a.category === categoryId);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 20px" }}>
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: cat.name, path: `/${cat.id}` },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px" }} className="content-grid">
        {/* Main content */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "10px", background: cat.bgColor,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={26} color={cat.color} strokeWidth={2} />
            </div>
            <div>
              <h1 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)",
                fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.5px", lineHeight: 1.2,
              }}>
                {cat.name}
              </h1>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                {cat.articles} artículos · Actualizado 2026
              </p>
            </div>
          </div>

          <p style={{
            fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.7,
            marginBottom: "24px", fontFamily: "var(--font-body)", maxWidth: "600px",
          }}>
            {cat.description}
          </p>

          {/* AD: Below H1 */}
          <AdSlot position="below-h1" className="" />

          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {articles.length > 0 ? articles.map((article) => (
              <a
                key={article.id}
                href={`#/${article.slug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/${article.slug}`); }}
                style={{ textDecoration: "none" }}
              >
                <article style={{
                  padding: "24px", border: "1px solid var(--border)", borderRadius: "6px",
                  background: "white", transition: "box-shadow 0.2s ease",
                }}
                  className="category-card"
                >
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={11} /> {article.readTime}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700,
                    color: "var(--navy)", lineHeight: 1.35, letterSpacing: "-0.2px", marginBottom: "8px",
                  }}>
                    {article.title}
                  </h2>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65, fontFamily: "var(--font-body)", marginBottom: "12px" }}>
                    {article.excerpt}
                  </p>
                  <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                    Leer artículo <ChevronRight size={12} />
                  </span>
                </article>
              </a>
            )) : (
              <div style={{ padding: "48px", textAlign: "center", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                <BookOpen size={32} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
                <p>Próximamente: nuevas guías especializadas para este sector.</p>
              </div>
            )}

            {/* AD: In content */}
            <AdSlot position="in-content" />
          </div>
        </div>

        {/* Sidebar (desktop) */}
        <aside className="sidebar-aside" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* AD: Sidebar */}
            <AdSlot position="sidebar" />

            {/* Other categories */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px" }}>
                Otros sectores
              </h3>
              {CATEGORIES.filter((c) => c.id !== categoryId).map((c) => {
                const CIcon = c.icon;
                return (
                  <a key={c.id} href={`#/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px", padding: "10px 0",
                      borderBottom: "1px solid var(--border)", textDecoration: "none",
                    }}>
                    <CIcon size={16} color={c.color} />
                    <span style={{ fontSize: "13px", color: "var(--navy)", fontWeight: 500, fontFamily: "var(--font-body)" }}>
                      {c.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* AD: Sidebar tall */}
            <AdSlot position="sidebar-tall" />
          </div>
        </aside>
      </div>
    </main>
  );
}

// ─── ARTICLE PAGE TEMPLATE ───────────────────────────
function ArticlePage({ articleId }) {
  const article = SAMPLE_ARTICLES.find((a) => a.id === parseInt(articleId));
  if (!article) return <NotFoundPage />;
  const cat = CATEGORIES.find((c) => c.id === article.category);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 20px" }}>
      <SchemaMarkup type="article" data={article} />
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: cat?.name || "", path: `/${cat?.id}` },
        { name: article.title.slice(0, 50) + "...", path: `/articulo/${article.id}` },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px" }} className="content-grid">
        <article>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 800, color: "var(--navy)", lineHeight: 1.2, letterSpacing: "-0.5px",
            marginBottom: "16px",
          }}>
            {article.title}
          </h1>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
            <span style={{ padding: "4px 10px", background: cat?.bgColor, color: cat?.color, fontSize: "11px", fontWeight: 700, borderRadius: "3px", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
              {cat?.shortName}
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article.author}
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article.readTime}
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          {/* AD: Below H1 */}
          <AdSlot position="below-h1" />

          {/* Article body placeholder */}
          <div style={{ marginTop: "32px", fontSize: "16px", lineHeight: 1.8, color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
            <p style={{ marginBottom: "24px", fontSize: "18px", fontWeight: 500, color: "var(--navy)" }}>
              {article.excerpt}
            </p>

            <p style={{ marginBottom: "24px" }}>
              Este es un artículo de ejemplo que muestra la estructura y el diseño del template de artículos de PymeSegura. 
              En producción, aquí irá el contenido completo optimizado para SEO con encabezados H2 y H3, 
              listas, tablas comparativas y llamadas a la acción.
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "var(--navy)", marginBottom: "16px", marginTop: "40px", letterSpacing: "-0.3px" }}>
              Puntos clave de la normativa
            </h2>

            <p style={{ marginBottom: "24px" }}>
              La regulación establece diferentes niveles de obligaciones según el tipo de actividad 
              y el volumen de datos personales que se traten. Es fundamental realizar una evaluación 
              inicial de riesgos antes de implementar cualquier sistema.
            </p>

            {/* AD: In-content */}
            <AdSlot position="in-content" className="" />

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "var(--navy)", marginBottom: "16px", marginTop: "40px", letterSpacing: "-0.3px" }}>
              Pasos de implementación
            </h2>

            <p style={{ marginBottom: "24px" }}>
              A continuación detallamos las fases recomendadas para la adaptación progresiva 
              de tu empresa a los nuevos requisitos normativos.
            </p>

            <div style={{
              background: "var(--bg-warm)", border: "1px solid var(--border)",
              borderLeft: "3px solid var(--amber)", padding: "20px 24px",
              borderRadius: "0 6px 6px 0", marginBottom: "24px",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--amber)", marginBottom: "8px", fontWeight: 700 }}>
                Nota importante
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                Este contenido es informativo y no constituye asesoramiento legal. 
                Consulta con un profesional cualificado para tu caso particular.
              </p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="sidebar-aside" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <AdSlot position="sidebar" />
            <AdSlot position="sidebar-tall" />
          </div>
        </aside>
      </div>
    </main>
  );
}

// ─── ARTICLE: GUÍA LOPDGDD CLÍNICAS ─────────────────
function ArticleGuiaLopdgddClinicas() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "salud-y-clinicas/guia-lopdgdd-ciberseguridad-clinicas");
  const cat = CATEGORIES.find((c) => c.id === "salud-y-clinicas");

  const h2Style = {
    fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700,
    color: "var(--navy)", marginBottom: "16px", marginTop: "40px", letterSpacing: "-0.3px",
    paddingBottom: "10px", borderBottom: "2px solid var(--border)",
  };
  const h3Style = {
    fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700,
    color: "var(--navy)", marginBottom: "12px", marginTop: "24px", letterSpacing: "-0.2px",
  };
  const pStyle = {
    marginBottom: "20px", fontSize: "16px", lineHeight: 1.8,
    color: "var(--text-secondary)", fontFamily: "var(--font-body)",
  };
  const liStyle = {
    fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)",
    fontFamily: "var(--font-body)", marginBottom: "10px", paddingLeft: "8px",
  };

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 20px" }}>
      <SchemaMarkup type="article" data={article} />
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: cat.name, path: "/salud-y-clinicas" },
        { name: "Guía LOPDGDD y Ciberseguridad para Clínicas", path: `/${article.slug}` },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px" }} className="content-grid">
        {/* ── ARTÍCULO PRINCIPAL ── */}
        <article>
          {/* Cabecera */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "4px 10px", background: cat.bgColor, color: cat.color,
            fontSize: "11px", fontWeight: 700, borderRadius: "3px",
            fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.5px",
            marginBottom: "16px",
          }}>
            <Heart size={11} /> {cat.shortName}
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 800, color: "var(--navy)", lineHeight: 1.15, letterSpacing: "-0.8px",
            marginBottom: "20px",
          }}>
            Guía Definitiva de Protección de Datos y Ciberseguridad para Clínicas y Centros Médicos
          </h1>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "28px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article.author}
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          {/* Intro */}
          <p style={{ ...pStyle, fontSize: "18px", fontWeight: 500, color: "var(--navy)", lineHeight: 1.7 }}>
            El sector sanitario es el principal objetivo de los ciberataques en la actualidad. Si gestionas una clínica dental,
            un centro de fisioterapia o una consulta médica, no solo te enfrentas al reto de cuidar de tus pacientes,
            sino también de proteger sus datos más íntimos.
          </p>
          <p style={pStyle}>
            En España, el historial clínico se considera un <strong>"dato de categoría especial"</strong> bajo el Reglamento
            General de Protección de Datos (RGPD) y la LOPDGDD. Un solo descuido no solo arruina la reputación de tu clínica,
            sino que puede acarrear <strong>multas de la AEPD que superan los 60.000 euros</strong>.
          </p>
          <p style={pStyle}>
            En esta guía, te explicamos paso a paso cómo blindar tu centro médico a nivel legal y técnico.
          </p>

          {/* AD: Debajo del H1 (Leaderboard) */}
          <div style={{ margin: "28px 0" }}>
            <AdSlot position="below-h1" />
          </div>

          {/* ── SECCIÓN 1 ── */}
          <h2 style={h2Style}>
            1. ¿Por qué las clínicas son el blanco perfecto para los hackers?
          </h2>
          <p style={pStyle}>
            Los ciberdelincuentes saben que los datos médicos valen <strong>hasta 10 veces más en el mercado negro</strong> que
            los datos de una tarjeta de crédito. ¿El motivo? Un historial médico incluye nombre, DNI, dirección, patologías e
            historial familiar; información perfecta para el robo de identidad y el chantaje (Ransomware).
          </p>

          <div style={{
            background: "var(--bg-warm)", border: "1px solid var(--border)",
            borderLeft: "3px solid #dc2626", padding: "24px 28px",
            borderRadius: "0 6px 6px 0", marginBottom: "28px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase",
              letterSpacing: "1px", color: "#dc2626", marginBottom: "14px", fontWeight: 700,
            }}>
              Los 3 errores más comunes en los centros médicos españoles
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Compartir contraseñas entre el personal de recepción y los especialistas.",
                "Enviar informes médicos o resultados de pruebas a través de WhatsApp convencional (no corporativo).",
                "Dejar las pantallas de los ordenadores encendidas y a la vista en los mostradores de atención al paciente.",
              ].map((item, i) => (
                <li key={i} style={{ ...liStyle, display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <AlertTriangle size={15} color="#dc2626" style={{ marginTop: "3px", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── SECCIÓN 2 ── */}
          <h2 style={h2Style}>
            2. Requisitos Legales (LOPDGDD) Obligatorios para tu Clínica
          </h2>
          <p style={pStyle}>
            Para evitar sanciones de la Agencia Española de Protección de Datos, tu clínica debe cumplir
            obligatoriamente con estos puntos:
          </p>

          <h3 style={h3Style}>A. El Consentimiento Informado (y explícito)</h3>
          <p style={pStyle}>
            No basta con que el paciente firme un papel general. Debes tener un documento donde acepte explícitamente el
            tratamiento de sus datos de salud, especificando <strong>quién tiene acceso a ellos y con qué finalidad</strong>.
          </p>

          <h3 style={h3Style}>B. Nombramiento de un DPO (Delegado de Protección de Datos)</h3>
          <p style={pStyle}>
            Por ley, todos los centros sanitarios que mantengan historias clínicas de pacientes están obligados a nombrar
            un DPO. Esta figura (que puede ser externa) es la encargada de supervisar que la clínica cumple la normativa.
          </p>

          <h3 style={h3Style}>C. Registro de Actividades de Tratamiento (RAT)</h3>
          <p style={pStyle}>
            Debes tener documentado exactamente qué datos recoges, dónde los guardas (servidores locales o en la nube),
            durante cuánto tiempo y a quién se los cedes (por ejemplo, a laboratorios externos o mutuas).
          </p>

          {/* AD: In-Article (Dentro del contenido) */}
          <div style={{ margin: "36px 0", display: "flex", justifyContent: "center" }}>
            <AdSlot position="in-content" />
          </div>

          {/* ── SECCIÓN 3 ── */}
          <h2 style={h2Style}>
            3. Ciberseguridad Básica: Cómo proteger los equipos de tu consulta
          </h2>
          <p style={pStyle}>
            El cumplimiento legal no sirve de nada si tu sistema informático es vulnerable. Aplica estas medidas técnicas de inmediato:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
            {[
              {
                icon: Lock,
                title: "Cifrado de Dispositivos",
                text: "Cualquier ordenador, tablet o disco duro externo que contenga datos de pacientes debe estar cifrado. Si roban un portátil de la clínica, los datos serán ilegibles.",
              },
              {
                icon: Shield,
                title: "Copias de Seguridad Aisladas (Regla 3-2-1)",
                text: "Implementa la regla 3-2-1: tres copias de tus datos, en dos soportes distintos, y al menos una copia fuera de la clínica (en la nube cifrada). Si sufres un ataque de Ransomware, podrás recuperar el software de gestión en horas.",
              },
              {
                icon: Eye,
                title: "Control de Accesos (Principio de mínimo privilegio)",
                text: "El personal de recepción no debe tener acceso al historial clínico completo del paciente, solo a su agenda y datos de facturación. Los médicos no deben tener acceso a la facturación global. Configura perfiles de usuario separados.",
              },
              {
                icon: Zap,
                title: "Actualización del Software Médico",
                text: "Utiliza siempre programas de gestión de clínicas en la nube (SaaS) reconocidos que incluyan medidas de seguridad y certificaciones ISO 27001 por defecto.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  display: "flex", gap: "16px", padding: "20px 24px",
                  background: "white", border: "1px solid var(--border)", borderRadius: "6px",
                }}>
                  <div style={{
                    width: "40px", height: "40px", background: "#fef2f2",
                    borderRadius: "8px", display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={20} color="#dc2626" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700,
                      color: "var(--navy)", marginBottom: "6px",
                    }}>
                      {item.title}
                    </div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── SECCIÓN 4 ── */}
          <h2 style={h2Style}>
            4. El peligro de WhatsApp en el entorno médico
          </h2>
          <p style={pStyle}>
            Una de las multas más frecuentes de la AEPD a pequeños consultorios viene del uso de WhatsApp para enviar
            radiografías, analíticas o diagnósticos a los pacientes.
          </p>

          <div style={{
            background: "var(--bg-warm)", border: "1px solid var(--border)",
            borderLeft: "3px solid var(--amber)", padding: "20px 24px",
            borderRadius: "0 6px 6px 0", marginBottom: "28px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase",
              letterSpacing: "1px", color: "var(--amber)", marginBottom: "10px", fontWeight: 700,
            }}>
              La solución recomendada
            </div>
            <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>
              Utiliza portales del paciente integrados en tu software médico o, en su defecto, envía la información por
              <strong> correo electrónico cifrado y protegido con contraseña</strong> (donde la contraseña se envíe por un
              canal alternativo, como un SMS).
            </p>
          </div>

          {/* ── CONCLUSIÓN ── */}
          <div style={{
            background: "linear-gradient(135deg, var(--navy) 0%, #1a2d4d 100%)",
            borderRadius: "8px", padding: "32px 28px", marginTop: "40px", marginBottom: "40px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px",
            }}>
              Conclusión
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800,
              color: "white", lineHeight: 1.3, letterSpacing: "-0.3px", marginBottom: "16px",
            }}>
              La Prevención es la Mejor Inversión
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: "16px" }}>
              Adaptar tu clínica a la LOPDGDD y aplicar medidas de ciberseguridad puede parecer un gasto, pero en realidad
              es un seguro de vida para tu negocio. Una brecha de seguridad no solo conlleva multas económicas devastadoras,
              sino la pérdida de confianza de tus pacientes, un daño casi imposible de reparar.
            </p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
              Si tienes dudas sobre el cumplimiento de tu centro médico, te recomendamos contactar con una consultora
              especializada en protección de datos para el sector salud que realice una auditoría de tus instalaciones.
            </p>
          </div>

          {/* Nota legal */}
          <div style={{
            padding: "16px 20px", background: "var(--bg-warm)",
            border: "1px solid var(--border)", borderRadius: "6px",
            fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)",
            marginBottom: "32px",
          }}>
            Este contenido es informativo y no constituye asesoramiento legal. Consulta con un profesional cualificado para tu caso particular. Última revisión: 26 de marzo de 2026.
          </div>

          {/* AD: Inferior (Bloque de enlaces o Display Inferior) */}
          <div style={{ margin: "0 0 24px" }}>
            <AdSlot position="below-h1" />
          </div>

          {/* Volver a la categoría */}
          <a
            href="#/salud-y-clinicas"
            onClick={(e) => { e.preventDefault(); navigate("/salud-y-clinicas"); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "var(--accent)", fontWeight: 600, fontSize: "14px",
              textDecoration: "none", fontFamily: "var(--font-body)",
            }}
          >
            ← Ver más guías de Salud y Clínicas
          </a>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="sidebar-aside" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <AdSlot position="sidebar" />

            {/* Tabla de contenidos */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                En este artículo
              </h3>
              {[
                "¿Por qué las clínicas son el blanco perfecto?",
                "Requisitos legales LOPDGDD obligatorios",
                "Ciberseguridad básica para tu consulta",
                "El peligro de WhatsApp en el entorno médico",
                "Conclusión",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: "8px", padding: "8px 0",
                  borderBottom: "1px solid var(--border)", alignItems: "flex-start",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--amber)",
                    fontWeight: 700, minWidth: "16px", marginTop: "1px",
                  }}>
                    {i + 1}.
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--navy)", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <AdSlot position="sidebar-tall" />

            {/* Otros sectores */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                Otros sectores
              </h3>
              {CATEGORIES.filter((c) => c.id !== "salud-y-clinicas").map((c) => {
                const CIcon = c.icon;
                return (
                  <a key={c.id} href={`#/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px", padding: "10px 0",
                      borderBottom: "1px solid var(--border)", textDecoration: "none",
                    }}>
                    <CIcon size={15} color={c.color} />
                    <span style={{ fontSize: "13px", color: "var(--navy)", fontWeight: 500, fontFamily: "var(--font-body)" }}>
                      {c.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

// ─── LEGAL PAGES ─────────────────────────────────────
function LegalPage({ type }) {
  const pages = {
    privacidad: {
      title: "Política de Privacidad",
      content: [
        { heading: "1. Responsable del tratamiento", text: "Identidad: [NOMBRE/RAZÓN SOCIAL] — NIF: [TU NIF] — Dirección: [TU DIRECCIÓN] — Email: privacidad@pymesegura.com" },
        { heading: "2. Finalidad del tratamiento", text: "Los datos personales que nos proporciones a través del formulario de contacto serán tratados con la finalidad de atender tu consulta. Los datos de navegación se recopilan para análisis estadístico y optimización del sitio web." },
        { heading: "3. Base legal", text: "El tratamiento de datos se basa en tu consentimiento expreso (art. 6.1.a RGPD) al completar los formularios del sitio, y en nuestro interés legítimo (art. 6.1.f RGPD) para el análisis de tráfico web." },
        { heading: "4. Destinatarios", text: "Tus datos no serán cedidos a terceros salvo obligación legal. Utilizamos Google Analytics y Google AdSense, cuyos servidores pueden estar fuera del EEE. Estas transferencias están amparadas por las Cláusulas Contractuales Tipo de la Comisión Europea." },
        { heading: "5. Derechos del interesado", text: "Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición dirigiéndote a privacidad@pymesegura.com. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es)." },
        { heading: "6. Conservación de datos", text: "Los datos de contacto se conservarán mientras dure la relación y durante los plazos legales aplicables. Los datos de navegación se conservan durante un máximo de 26 meses." },
      ],
    },
    "aviso-legal": {
      title: "Aviso Legal",
      content: [
        { heading: "1. Datos identificativos", text: "En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI), se informa: Titular: [NOMBRE/RAZÓN SOCIAL] — NIF: [TU NIF] — Domicilio: [TU DIRECCIÓN] — Email: info@pymesegura.com" },
        { heading: "2. Objeto", text: "Este sitio web tiene carácter informativo. Su contenido versa sobre ciberseguridad y cumplimiento normativo para PYMES. La información publicada no constituye asesoramiento legal ni sustituye la consulta con un profesional cualificado." },
        { heading: "3. Propiedad intelectual", text: "Todos los contenidos de este sitio web (textos, imágenes, diseño, código fuente, logotipos) son propiedad de PymeSegura o de sus legítimos titulares y están protegidos por la legislación de propiedad intelectual e industrial." },
        { heading: "4. Limitación de responsabilidad", text: "PymeSegura no garantiza la ausencia de errores en el contenido ni se hace responsable de las decisiones tomadas a partir de la información publicada. Los enlaces a terceros son meramente informativos." },
        { heading: "5. Legislación aplicable", text: "Las presentes condiciones se rigen por la legislación española. Para la resolución de conflictos serán competentes los Juzgados y Tribunales del domicilio del titular." },
      ],
    },
    cookies: {
      title: "Política de Cookies",
      content: [
        { heading: "1. ¿Qué son las cookies?", text: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y analizar el uso del sitio." },
        { heading: "2. Cookies que utilizamos", text: "Cookies técnicas (necesarias): Permiten la navegación y el uso de funciones básicas. No requieren consentimiento. — Cookies analíticas (Google Analytics): Recopilan información anónima sobre el uso del sitio. Duración: hasta 26 meses. — Cookies publicitarias (Google AdSense): Permiten mostrar anuncios personalizados según tus intereses de navegación. Son gestionadas por Google." },
        { heading: "3. Gestión de cookies", text: "Puedes configurar tu navegador para bloquear o eliminar cookies. También puedes gestionar las preferencias de cookies publicitarias en la configuración de anuncios de Google (adssettings.google.com)." },
        { heading: "4. Cookies de terceros", text: "Google (Analytics y AdSense): Política de privacidad en policies.google.com/privacy. Estos servicios pueden recopilar datos y utilizar cookies propias." },
        { heading: "5. Actualización", text: "Esta política de cookies puede actualizarse, por lo que te recomendamos revisarla periódicamente. Última actualización: marzo de 2026." },
      ],
    },
  };

  const page = pages[type];
  if (!page) return <NotFoundPage />;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "32px 20px 80px" }}>
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: page.title, path: `/${type}` },
      ]} />

      <h1 style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)",
        fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.5px", marginBottom: "32px",
      }}>
        {page.title}
      </h1>

      <div style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
        {page.content.map((section, i) => (
          <div key={i} style={{ marginBottom: "32px" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700,
              color: "var(--navy)", marginBottom: "12px", letterSpacing: "-0.2px",
            }}>
              {section.heading}
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>{section.text}</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "40px", padding: "20px", background: "var(--bg-warm)",
        border: "1px solid var(--border)", borderRadius: "6px",
        fontSize: "13px", color: "var(--text-muted)", fontFamily: "var(--font-mono)",
      }}>
        Última actualización: 25 de marzo de 2026
      </div>
    </main>
  );
}

// ─── CONTACT PAGE ────────────────────────────────────
function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && formData.consent) {
      setSubmitted(true);
    }
  };

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "32px 20px 80px" }}>
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: "Contacto", path: "/contacto" },
      ]} />

      <h1 style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)",
        fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.5px", marginBottom: "12px",
      }}>
        Contacto
      </h1>
      <p style={{
        fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.7,
        marginBottom: "40px", fontFamily: "var(--font-body)", maxWidth: "560px",
      }}>
        ¿Tienes una consulta sobre el contenido o quieres colaborar? Escríbenos y te responderemos lo antes posible.
      </p>

      {submitted ? (
        <div style={{
          padding: "40px", background: "#ecfdf5", border: "1px solid #bbf7d0",
          borderRadius: "6px", textAlign: "center",
        }}>
          <CheckCircle size={40} color="#059669" style={{ margin: "0 auto 16px" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
            Mensaje enviado
          </h2>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}>
            Te responderemos en un plazo máximo de 48 horas laborables.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "48px" }} className="content-grid">
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                    Nombre *
                  </label>
                  <input
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 14px", border: "1px solid var(--border)",
                      borderRadius: "4px", fontSize: "14px", fontFamily: "var(--font-body)",
                      outline: "none", boxSizing: "border-box", background: "white",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                    Email *
                  </label>
                  <input
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 14px", border: "1px solid var(--border)",
                      borderRadius: "4px", fontSize: "14px", fontFamily: "var(--font-body)",
                      outline: "none", boxSizing: "border-box", background: "white",
                    }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                  Asunto
                </label>
                <input
                  type="text" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 14px", border: "1px solid var(--border)",
                    borderRadius: "4px", fontSize: "14px", fontFamily: "var(--font-body)",
                    outline: "none", boxSizing: "border-box", background: "white",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                  Mensaje *
                </label>
                <textarea
                  required rows={6} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 14px", border: "1px solid var(--border)",
                    borderRadius: "4px", fontSize: "14px", fontFamily: "var(--font-body)",
                    outline: "none", resize: "vertical", boxSizing: "border-box", background: "white",
                  }}
                />
              </div>
              <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer" }}>
                <input
                  type="checkbox" checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  style={{ marginTop: "3px" }}
                />
                <span style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                  He leído y acepto la <a href="#/privacidad" style={{ color: "var(--accent)" }}>Política de Privacidad</a>. 
                  Autorizo el tratamiento de mis datos para atender mi consulta. *
                </span>
              </label>
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.message || !formData.consent}
                style={{
                  padding: "14px 32px", background: "var(--navy)", color: "white",
                  border: "none", borderRadius: "4px", fontWeight: 700, fontSize: "14px",
                  cursor: "pointer", fontFamily: "var(--font-body)", alignSelf: "flex-start",
                  opacity: (!formData.name || !formData.email || !formData.message || !formData.consent) ? 0.5 : 1,
                }}
              >
                Enviar mensaje
              </button>
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="sidebar-aside" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ padding: "20px", background: "var(--bg-warm)", borderRadius: "6px", border: "1px solid var(--border)" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px" }}>
                Información
              </h3>
              {[
                { icon: Mail, label: "info@pymesegura.com" },
                { icon: MapPin, label: "España" },
                { icon: Clock, label: "Respuesta en 48h" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", padding: "8px 0" }}>
                  <item.icon size={14} color="var(--text-muted)" />
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// ─── 404 PAGE ────────────────────────────────────────
function NotFoundPage() {
  const { navigate } = useRouter();
  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "72px", fontWeight: 800, color: "var(--navy)", opacity: 0.15, marginBottom: "16px" }}>404</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
        Página no encontrada
      </h1>
      <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "32px", fontFamily: "var(--font-body)" }}>
        La página que buscas no existe o ha sido movida.
      </p>
      <a
        href="#/"
        onClick={(e) => { e.preventDefault(); navigate("/"); }}
        style={{
          padding: "12px 24px", background: "var(--navy)", color: "white",
          textDecoration: "none", borderRadius: "4px", fontWeight: 600, fontSize: "14px",
          fontFamily: "var(--font-body)",
        }}
      >
        Volver al inicio
      </a>
    </main>
  );
}

// ─── ARTICLE: CIBERSEGURIDAD ECOMMERCE ───────────────
function ArticleCiberseguridadEcommerce() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "ecommerce-y-retail/ciberseguridad-ecommerce-rgpd-pci-dss");
  const cat = CATEGORIES.find((c) => c.id === "ecommerce-y-retail");

  const h2Style = {
    fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700,
    color: "var(--navy)", marginBottom: "16px", marginTop: "40px", letterSpacing: "-0.3px",
    paddingBottom: "10px", borderBottom: "2px solid var(--border)",
  };
  const h3Style = {
    fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700,
    color: "var(--navy)", marginBottom: "12px", marginTop: "24px", letterSpacing: "-0.2px",
  };
  const pStyle = {
    marginBottom: "20px", fontSize: "16px", lineHeight: 1.8,
    color: "var(--text-secondary)", fontFamily: "var(--font-body)",
  };
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 20px" }}>
      <SchemaMarkup type="article" data={article} />
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: cat.name, path: "/ecommerce-y-retail" },
        { name: "Ciberseguridad para Ecommerce: RGPD y PCI-DSS", path: `/${article.slug}` },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px" }} className="content-grid">
        {/* ── ARTÍCULO PRINCIPAL ── */}
        <article>
          {/* Cabecera */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "4px 10px", background: cat.bgColor, color: cat.color,
            fontSize: "11px", fontWeight: 700, borderRadius: "3px",
            fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.5px",
            marginBottom: "16px",
          }}>
            <ShoppingCart size={11} /> {cat.shortName}
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 800, color: "var(--navy)", lineHeight: 1.15, letterSpacing: "-0.8px",
            marginBottom: "20px",
          }}>
            Ciberseguridad para Ecommerce: Protege tu Tienda Online de Ciberataques y Multas
          </h1>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "28px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article.author}
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          {/* Intro */}
          <p style={{ ...pStyle, fontSize: "18px", fontWeight: 500, color: "var(--navy)", lineHeight: 1.7 }}>
            Una tienda online abierta las 24 horas es una máquina de generar ventas, pero también es un escaparate
            constante para los ciberdelincuentes. Si tienes un ecommerce, no solo vendes productos: procesas nombres,
            direcciones y, lo más crítico, <strong>datos bancarios</strong>.
          </p>
          <p style={pStyle}>
            Un fallo de seguridad en tu pasarela de pago o un robo de base de datos no solo destruye la reputación de
            tu marca en cuestión de minutos, sino que te expone a <strong>demandas de clientes y sanciones fulminantes</strong> por
            incumplimiento del RGPD y normativas de pago.
          </p>
          <p style={pStyle}>
            En esta guía te enseñamos a blindar tu comercio electrónico, ya uses <strong>WooCommerce, Shopify, Magento o
            desarrollo a medida</strong>.
          </p>

          {/* AD: Debajo del H1 (Leaderboard) */}
          <div style={{ margin: "28px 0" }}>
            <AdSlot position="below-h1" />
          </div>

          {/* ── SECCIÓN 1 ── */}
          <h2 style={h2Style}>
            1. Los 3 Ciberataques más letales contra tiendas online
          </h2>
          <p style={pStyle}>
            Los hackers no atacan tu tienda por ser tú; utilizan <strong>bots automatizados</strong> que rastrean millones
            de webs al día buscando vulnerabilidades. Estos son sus métodos favoritos:
          </p>

          {[
            {
              label: "A. Ataques «Magecart» (Skimming Digital)",
              text: "Es el carterista del siglo XXI. Los atacantes inyectan un código malicioso invisible en tu página de «Checkout» (donde el cliente pone la tarjeta). Mientras tú recibes el pago normalmente, el hacker recibe una copia exacta de los datos de la tarjeta de crédito de tu cliente.",
            },
            {
              label: "B. Ransomware en el ERP o Sistema de Stock",
              text: "Bloquean tu base de datos de clientes y tu inventario, paralizando por completo la preparación de pedidos y envíos. Luego, exigen un rescate en criptomonedas para devolverte el acceso.",
            },
            {
              label: "C. Ataques DDoS (Denegación de Servicio)",
              text: "Imagina que un millón de personas falsas intentan entrar a tu tienda a la vez durante el Black Friday. Tu servidor colapsa y la web se cae, perdiendo miles de euros en ventas en tu día más importante.",
            },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "20px 24px", background: "white",
              border: "1px solid var(--border)", borderRadius: "6px",
              marginBottom: "12px", borderLeft: "3px solid #059669",
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700,
                color: "var(--navy)", marginBottom: "8px",
              }}>
                {item.label}
              </div>
              <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>{item.text}</p>
            </div>
          ))}

          {/* ── SECCIÓN 2 ── */}
          <h2 style={h2Style}>
            2. Normativa Obligatoria: Más allá del RGPD
          </h2>
          <p style={pStyle}>
            Si vendes por internet, tienes dos grandes "policías" vigilando cómo haces las cosas:
          </p>

          <h3 style={h3Style}>El RGPD y la AEPD</h3>
          <p style={pStyle}>
            Debes tener el <strong>consentimiento explícito</strong> para usar cookies de rastreo (como el píxel de
            Facebook o Google Analytics). Además, tu Política de Privacidad debe explicar claramente qué haces con los
            correos electrónicos de los clientes: ¿los usas para newsletter? Necesitan marcar una casilla <strong>no
            pre-marcada</strong> para aceptarlo.
          </p>

          <h3 style={h3Style}>La Normativa PCI-DSS (Tarjetas de Crédito)</h3>
          <p style={pStyle}>
            Es el estándar de seguridad de la industria de tarjetas de pago. La regla de oro para una PYME:
            <strong> NUNCA almacenes los números de las tarjetas de crédito</strong> de tus clientes en tu propio
            servidor. Utiliza siempre pasarelas de pago externas tokenizadas (como Stripe, PayPal o el TPV virtual de
            tu banco). Así, el riesgo lo asumen ellos, no tú.
          </p>

          <div style={{
            background: "var(--bg-warm)", border: "1px solid var(--border)",
            borderLeft: "3px solid var(--amber)", padding: "20px 24px",
            borderRadius: "0 6px 6px 0", marginBottom: "28px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase",
              letterSpacing: "1px", color: "var(--amber)", marginBottom: "10px", fontWeight: 700,
            }}>
              Regla de oro PCI-DSS para PYMES
            </div>
            <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>
              Delega el procesamiento de pagos en proveedores certificados (Stripe, PayPal, Redsys). Nunca guardes
              números de tarjeta en tu base de datos. Si no los tienes, no te los pueden robar.
            </p>
          </div>

          {/* AD: In-Article */}
          <div style={{ margin: "36px 0", display: "flex", justifyContent: "center" }}>
            <AdSlot position="in-content" />
          </div>

          {/* ── SECCIÓN 3 ── */}
          <h2 style={h2Style}>
            3. Checklist Técnico: Cómo blindar tu Ecommerce hoy mismo
          </h2>
          <p style={pStyle}>
            No necesitas ser un ingeniero informático para aplicar estas barreras de seguridad. Revisa estos puntos
            con tu desarrollador o agencia:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              {
                icon: Lock,
                title: "Certificado SSL/TLS Impecable",
                text: "Ya no basta con tener el candado verde («https»). Asegúrate de que tu certificado utiliza encriptación de 256 bits para que los datos viajen cifrados de extremo a extremo.",
              },
              {
                icon: AlertTriangle,
                title: "Actualización Fanática (El talón de Aquiles de WooCommerce)",
                text: "El 90% de los hackeos en tiendas basadas en WordPress ocurren por plugins obsoletos. Mantén el núcleo, el tema y los plugins actualizados. Si un plugin lleva más de un año sin actualizarse, bórralo y busca una alternativa.",
              },
              {
                icon: Shield,
                title: "WAF (Web Application Firewall)",
                text: "Contrata un firewall de aplicaciones web (como Cloudflare o Sucuri). Actúa como un «guardián inteligente» que bloquea el tráfico malicioso antes de que llegue a tu servidor.",
              },
              {
                icon: Eye,
                title: "Doble Factor de Autenticación (2FA) para Administradores",
                text: "Nadie debería poder entrar al panel de control de tu tienda solo con una contraseña. Exige siempre un código en el móvil para acceder al panel de administración.",
              },
              {
                icon: FileText,
                title: "Copias de Seguridad Diarias Automáticas",
                text: "Programa copias de seguridad de tu base de datos y archivos cada 24 horas, y guárdalas en un servidor externo (no en el mismo hosting donde tienes la tienda).",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  display: "flex", gap: "16px", padding: "20px 24px",
                  background: "white", border: "1px solid var(--border)", borderRadius: "6px",
                }}>
                  <div style={{
                    width: "40px", height: "40px", background: "#ecfdf5",
                    borderRadius: "8px", display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={20} color="#059669" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700,
                      color: "var(--navy)", marginBottom: "6px",
                    }}>
                      {item.title}
                    </div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── CONCLUSIÓN ── */}
          <div style={{
            background: "linear-gradient(135deg, var(--navy) 0%, #1a2d4d 100%)",
            borderRadius: "8px", padding: "32px 28px", marginTop: "40px", marginBottom: "40px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px",
            }}>
              Conclusión
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800,
              color: "white", lineHeight: 1.3, letterSpacing: "-0.3px", marginBottom: "16px",
            }}>
              La Confianza es tu Mayor Activo
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: "16px" }}>
              En el mundo del retail online, la desconfianza frena las ventas (los famosos "carritos abandonados").
              Mostrar sellos de pago seguro, tener los textos legales al día y garantizar una conexión cifrada no solo
              evita multas, sino que <strong style={{ color: "var(--amber)" }}>aumenta directamente tu tasa de conversión</strong>.
            </p>
          </div>

          {/* Nota legal */}
          <div style={{
            padding: "16px 20px", background: "var(--bg-warm)",
            border: "1px solid var(--border)", borderRadius: "6px",
            fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)",
            marginBottom: "32px",
          }}>
            Este contenido es informativo y no constituye asesoramiento legal. Consulta con un profesional cualificado para tu caso particular. Última revisión: 26 de marzo de 2026.
          </div>

          {/* AD: Inferior */}
          <div style={{ margin: "0 0 24px" }}>
            <AdSlot position="below-h1" />
          </div>

          {/* Volver a la categoría */}
          <a
            href="#/ecommerce-y-retail"
            onClick={(e) => { e.preventDefault(); navigate("/ecommerce-y-retail"); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "var(--accent)", fontWeight: 600, fontSize: "14px",
              textDecoration: "none", fontFamily: "var(--font-body)",
            }}
          >
            ← Ver más guías de E-commerce y Retail
          </a>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="sidebar-aside" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <AdSlot position="sidebar" />

            {/* Tabla de contenidos */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                En este artículo
              </h3>
              {[
                "Los 3 ciberataques más letales",
                "Normativa obligatoria: RGPD y PCI-DSS",
                "Checklist técnico para blindar tu tienda",
                "Conclusión",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: "8px", padding: "8px 0",
                  borderBottom: "1px solid var(--border)", alignItems: "flex-start",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--amber)",
                    fontWeight: 700, minWidth: "16px", marginTop: "1px",
                  }}>
                    {i + 1}.
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--navy)", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <AdSlot position="sidebar-tall" />

            {/* Otros sectores */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                Otros sectores
              </h3>
              {CATEGORIES.filter((c) => c.id !== "ecommerce-y-retail").map((c) => {
                const CIcon = c.icon;
                return (
                  <a key={c.id} href={`#/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px", padding: "10px 0",
                      borderBottom: "1px solid var(--border)", textDecoration: "none",
                    }}>
                    <CIcon size={15} color={c.color} />
                    <span style={{ fontSize: "13px", color: "var(--navy)", fontWeight: 500, fontFamily: "var(--font-body)" }}>
                      {c.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

// ─── ARTICLE: CIBERSEGURIDAD DESPACHOS ABOGADOS ──────
function ArticleCiberseguridadDespachos() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "legal-y-asesorias/ciberseguridad-despachos-abogados-secreto-profesional");
  const cat = CATEGORIES.find((c) => c.id === "legal-y-asesorias");

  const h2Style = {
    fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700,
    color: "var(--navy)", marginBottom: "16px", marginTop: "40px", letterSpacing: "-0.3px",
    paddingBottom: "10px", borderBottom: "2px solid var(--border)",
  };
  const pStyle = {
    marginBottom: "20px", fontSize: "16px", lineHeight: 1.8,
    color: "var(--text-secondary)", fontFamily: "var(--font-body)",
  };

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 20px" }}>
      <SchemaMarkup type="article" data={article} />
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: cat.name, path: "/legal-y-asesorias" },
        { name: "Ciberseguridad para Despachos y Asesorías", path: `/${article.slug}` },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px" }} className="content-grid">
        {/* ── ARTÍCULO PRINCIPAL ── */}
        <article>
          {/* Cabecera */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "4px 10px", background: cat.bgColor, color: cat.color,
            fontSize: "11px", fontWeight: 700, borderRadius: "3px",
            fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.5px",
            marginBottom: "16px",
          }}>
            <Scale size={11} /> {cat.shortName}
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 800, color: "var(--navy)", lineHeight: 1.15, letterSpacing: "-0.8px",
            marginBottom: "20px",
          }}>
            Ciberseguridad en el Sector Legal: Protegiendo el Secreto Profesional en la Era Digital
          </h1>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "28px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article.author}
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          {/* Intro */}
          <p style={{ ...pStyle, fontSize: "18px", fontWeight: 500, color: "var(--navy)", lineHeight: 1.7 }}>
            En un despacho de abogados o una asesoría, el activo más valioso no es el mobiliario ni la ubicación de
            la oficina: es la <strong>información confidencial de los clientes</strong>. Un expediente judicial, una
            estrategia de defensa o los datos fiscales de una empresa son documentos que, en manos equivocadas, pueden
            destruir carreras y empresas enteras.
          </p>
          <p style={pStyle}>
            La digitalización ha traído eficiencia, pero también ha abierto la puerta a que el secreto profesional
            sea vulnerable a ciberataques. No cumplir con las medidas de seguridad adecuadas no es solo una negligencia
            ética; es una <strong>infracción grave del RGPD</strong> que puede acarrear la inhabilitación o multas millonarias.
          </p>

          {/* AD: Debajo del H1 (Leaderboard) */}
          <div style={{ margin: "28px 0" }}>
            <AdSlot position="below-h1" />
          </div>

          {/* ── SECCIÓN 1 ── */}
          <h2 style={h2Style}>
            1. El Secreto Profesional ante el Ransomware
          </h2>
          <p style={pStyle}>
            El ataque más temido por los abogados hoy es el <strong>secuestro de datos</strong>. Los ciberdelincuentes
            cifran todos los expedientes del servidor y exigen un rescate. Sin embargo, en el sector legal hay un
            agravante: aunque pagues el rescate, los hackers suelen amenazar con <strong>filtrar los documentos en la
            Dark Web</strong> si no se realiza un segundo pago.
          </p>

          <div style={{
            background: "var(--bg-warm)", border: "1px solid var(--border)",
            borderLeft: "3px solid #7c3aed", padding: "20px 24px",
            borderRadius: "0 6px 6px 0", marginBottom: "28px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase",
              letterSpacing: "1px", color: "#7c3aed", marginBottom: "10px", fontWeight: 700,
            }}>
              El riesgo específico del sector legal
            </div>
            <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>
              Para un abogado, que la estrategia de un juicio o un acuerdo de fusión confidencial se haga público
              es el fin de su reputación profesional. El daño reputacional supera con creces la multa económica.
            </p>
          </div>

          {/* ── SECCIÓN 2 ── */}
          <h2 style={h2Style}>
            2. Puntos Críticos de Fuga de Información en Despachos
          </h2>
          <p style={pStyle}>
            Para blindar tu asesoría, primero debes identificar por dónde "sangra" la información:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              {
                icon: FileText,
                title: "Firma Electrónica y Certificados",
                text: "El uso descuidado de certificados digitales (instalados en ordenadores sin contraseña) permite que cualquier intruso firme documentos en nombre del titular.",
              },
              {
                icon: Mail,
                title: "Correos Electrónicos sin Cifrar",
                text: "Enviar convenios reguladores o nóminas por email convencional es como enviar una postal: cualquiera en el camino puede leerla.",
              },
              {
                icon: Eye,
                title: "Dispositivos Móviles en Redes Públicas",
                text: "Consultar expedientes desde el móvil en redes Wi-Fi públicas (aeropuertos, cafeterías o juzgados) es la forma más fácil de ser interceptado.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  display: "flex", gap: "16px", padding: "20px 24px",
                  background: "white", border: "1px solid var(--border)", borderRadius: "6px",
                  borderLeft: "3px solid #7c3aed",
                }}>
                  <div style={{
                    width: "40px", height: "40px", background: "#f5f3ff",
                    borderRadius: "8px", display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={20} color="#7c3aed" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700,
                      color: "var(--navy)", marginBottom: "6px",
                    }}>
                      {item.title}
                    </div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AD: In-Article */}
          <div style={{ margin: "36px 0", display: "flex", justifyContent: "center" }}>
            <AdSlot position="in-content" />
          </div>

          {/* ── SECCIÓN 3 ── */}
          <h2 style={h2Style}>
            3. Protocolo de «Despacho Seguro»: 5 Medidas Imprescindibles
          </h2>
          <p style={pStyle}>
            Si diriges un despacho o una asesoría, estos puntos deben ser tu prioridad este trimestre:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              {
                num: "01",
                title: "Uso de VPN Obligatorio",
                text: "Todo el personal que trabaje fuera de la oficina (teletrabajo o juzgados) debe conectarse a través de una Red Privada Virtual (VPN) cifrada.",
              },
              {
                num: "02",
                title: "Gestión de Documentos en la Nube con Cifrado en Reposo",
                text: "No utilices nubes gratuitas de consumo. Opta por soluciones profesionales (Microsoft 365 Business o software jurídico específico) que garanticen que los archivos están cifrados incluso cuando no se están usando.",
              },
              {
                num: "03",
                title: "Destrucción Certificada del Papel",
                text: "El papel sigue siendo un peligro. Asegúrate de tener destructoras de papel de corte cruzado o contrata una empresa de destrucción certificada para evitar el «trashing» (robo de datos de la basura).",
              },
              {
                num: "04",
                title: "Autenticación de Doble Factor (MFA)",
                text: "Es innegociable. El acceso al correo electrónico y al software de gestión debe requerir una clave que llegue al móvil del abogado.",
              },
              {
                num: "05",
                title: "Formación al Personal",
                text: "El eslabón más débil suele ser el administrativo o el pasante que abre un adjunto sospechoso creyendo que es una notificación de LexNET o de la Seguridad Social.",
              },
            ].map((item) => (
              <div key={item.num} style={{
                display: "flex", gap: "16px", padding: "20px 24px",
                background: "white", border: "1px solid var(--border)", borderRadius: "6px",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 700,
                  color: "#7c3aed", opacity: 0.4, minWidth: "32px", lineHeight: 1,
                  paddingTop: "2px",
                }}>
                  {item.num}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700,
                    color: "var(--navy)", marginBottom: "6px",
                  }}>
                    {item.title}
                  </div>
                  <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── SECCIÓN 4 ── */}
          <h2 style={h2Style}>
            4. El Impacto de la IA en la Ciberseguridad Legal
          </h2>
          <p style={pStyle}>
            La Inteligencia Artificial está ayudando a los despachos a redactar demandas, pero <strong>¡cuidado!</strong>{" "}
            Nunca introduzcas datos reales de clientes en IAs públicas (como la versión gratuita de ChatGPT). Esos datos
            pasan a formar parte del entrenamiento del modelo y <strong>dejas de tener el control sobre ellos</strong>,
            violando el deber de custodia.
          </p>

          <div style={{
            background: "#faf5ff", border: "1px solid #e9d5ff",
            borderLeft: "3px solid #7c3aed", padding: "20px 24px",
            borderRadius: "0 6px 6px 0", marginBottom: "28px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase",
              letterSpacing: "1px", color: "#7c3aed", marginBottom: "10px", fontWeight: 700,
            }}>
              Regla de oro con IA generativa
            </div>
            <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px" }}>
              Si usas herramientas de IA en tu despacho, opta por versiones empresariales con acuerdo de procesamiento
              de datos (DPA) firmado. Microsoft Copilot for M365 o ChatGPT Enterprise garantizan que tus datos no se
              usan para reentrenar el modelo.
            </p>
          </div>

          {/* ── CONCLUSIÓN ── */}
          <div style={{
            background: "linear-gradient(135deg, var(--navy) 0%, #1a2d4d 100%)",
            borderRadius: "8px", padding: "32px 28px", marginTop: "40px", marginBottom: "40px",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px",
            }}>
              Conclusión
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800,
              color: "white", lineHeight: 1.3, letterSpacing: "-0.3px", marginBottom: "16px",
            }}>
              Cumplir la Ley para Defender la Ley
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
              Un abogado que no protege sus propios archivos difícilmente puede proyectar la confianza necesaria para
              defender los intereses de terceros. La ciberseguridad no es un lujo técnico, es una extensión moderna
              del <strong style={{ color: "var(--amber)" }}>deber de diligencia</strong> que todo profesional del
              derecho debe observar.
            </p>
          </div>

          {/* Nota legal */}
          <div style={{
            padding: "16px 20px", background: "var(--bg-warm)",
            border: "1px solid var(--border)", borderRadius: "6px",
            fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)",
            marginBottom: "32px",
          }}>
            Este contenido es informativo y no constituye asesoramiento legal. Consulta con un profesional cualificado para tu caso particular. Última revisión: 26 de marzo de 2026.
          </div>

          {/* AD: Inferior */}
          <div style={{ margin: "0 0 24px" }}>
            <AdSlot position="below-h1" />
          </div>

          {/* Volver a la categoría */}
          <a
            href="#/legal-y-asesorias"
            onClick={(e) => { e.preventDefault(); navigate("/legal-y-asesorias"); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "var(--accent)", fontWeight: 600, fontSize: "14px",
              textDecoration: "none", fontFamily: "var(--font-body)",
            }}
          >
            ← Ver más guías de Legal y Asesorías
          </a>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="sidebar-aside" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <AdSlot position="sidebar" />

            {/* Tabla de contenidos */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                En este artículo
              </h3>
              {[
                "Secreto profesional ante el Ransomware",
                "Puntos críticos de fuga de información",
                "Protocolo «Despacho Seguro»: 5 medidas",
                "El impacto de la IA en el sector legal",
                "Conclusión",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: "8px", padding: "8px 0",
                  borderBottom: "1px solid var(--border)", alignItems: "flex-start",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--amber)",
                    fontWeight: 700, minWidth: "16px", marginTop: "1px",
                  }}>
                    {i + 1}.
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--navy)", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <AdSlot position="sidebar-tall" />

            {/* Otros sectores */}
            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                Otros sectores
              </h3>
              {CATEGORIES.filter((c) => c.id !== "legal-y-asesorias").map((c) => {
                const CIcon = c.icon;
                return (
                  <a key={c.id} href={`#/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px", padding: "10px 0",
                      borderBottom: "1px solid var(--border)", textDecoration: "none",
                    }}>
                    <CIcon size={15} color={c.color} />
                    <span style={{ fontSize: "13px", color: "var(--navy)", fontWeight: 500, fontFamily: "var(--font-body)" }}>
                      {c.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

// ─── ROUTER ──────────────────────────────────────────
function Router() {
  const { path } = useRouter();

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [path]);

  if (path === "/") return <HomePage />;
  if (path === "/contacto") return <ContactPage />;
  if (path === "/privacidad") return <LegalPage type="privacidad" />;
  if (path === "/aviso-legal") return <LegalPage type="aviso-legal" />;
  if (path === "/cookies") return <LegalPage type="cookies" />;
  if (path.startsWith("/articulo/")) return <ArticlePage articleId={path.split("/")[2]} />;
  if (path === "/salud-y-clinicas/guia-lopdgdd-ciberseguridad-clinicas") return <ArticleGuiaLopdgddClinicas />;
  if (path === "/ecommerce-y-retail/ciberseguridad-ecommerce-rgpd-pci-dss") return <ArticleCiberseguridadEcommerce />;
  if (path === "/legal-y-asesorias/ciberseguridad-despachos-abogados-secreto-profesional") return <ArticleCiberseguridadDespachos />;

  const categoryMatch = CATEGORIES.find((c) => path === `/${c.id}`);
  if (categoryMatch) return <CategoryPage categoryId={categoryMatch.id} />;

  return <NotFoundPage />;
}

// ─── APP ─────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Plus+Jakarta+Sans:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --navy: #0f1d35;
          --navy-light: #1a2d4d;
          --amber: #d9a430;
          --amber-light: #f0c960;
          --accent: #2563eb;
          --text-primary: #1a1a2e;
          --text-secondary: #4a5568;
          --text-muted: #8896a6;
          --bg-warm: #faf8f5;
          --bg-page: #ffffff;
          --border: #e8e5e0;
          --font-display: 'Plus Jakarta Sans', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --font-mono: 'DM Mono', monospace;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: var(--font-body);
          background: var(--bg-page);
          color: var(--text-primary);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a { transition: opacity 0.15s ease; }
        a:hover { opacity: 0.85; }

        .category-card:hover {
          border-color: transparent;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04);
          transform: translateY(-2px);
        }

        input:focus, textarea:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr !important;
          }
          .sidebar-aside {
            display: none !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }

        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg-warm); }
        ::-webkit-scrollbar-thumb { background: #c8c3bc; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #a8a3a0; }
      `}</style>

      <Navbar />
      <Router />
      <Footer />
    </>
  );
}