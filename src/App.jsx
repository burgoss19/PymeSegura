import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { Shield, Building2, ShoppingCart, Scale, Heart, ChevronRight, Menu, X, Search, Clock, User, ArrowRight, CheckCircle, AlertTriangle, Lock, FileText, Mail, Phone, MapPin, ExternalLink, TrendingUp, Eye, BookOpen, ChevronDown, Globe, Zap, Award, Users, Truck, Package, ShieldCheck, Hotel, Wifi, CreditCard, UserCheck, ShieldAlert, GraduationCap, Video, FileLock, Stethoscope, Activity, Trash2, Download, Gavel, FileKey, FileX, Cloud, RefreshCw, BadgeAlert, MousePointerClick, Receipt, Target } from "lucide-react";

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
  const location = useLocation();
  const nav = useNavigate();
  const navigate = useCallback((to) => nav(to), [nav]);
  return { path: location.pathname, navigate };
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
    articles: 1,
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
  {
    id: "transporte-y-logistica",
    name: "Transporte y Logística",
    shortName: "Logística",
    icon: Truck,
    color: "#ea580c",
    bgColor: "#fff7ed",
    description: "Protección de flotas GPS, cadena de suministro segura y continuidad ante ransomware.",
    articles: 1,
    featured: "Cómo evitar que el Ransomware detenga tu flota",
  },
  {
    id: "hosteleria-y-turismo",
    name: "Hostelería y Turismo",
    shortName: "Hostelería",
    icon: Hotel,
    color: "#0891b2",
    bgColor: "#ecfeff",
    description: "Seguridad WiFi para huéspedes, cumplimiento PCI-DSS y protección del PMS hotelero.",
    articles: 1,
    featured: "Ciberseguridad en Hostelería: Blindando la Confianza del Huésped",
  },
  {
    id: "educacion-digital",
    name: "Educación Digital",
    shortName: "Educación",
    icon: GraduationCap,
    color: "#2563eb",
    bgColor: "#eff6ff",
    description: "Protección de datos de estudiantes, seguridad en LMS y privacidad en clases online.",
    articles: 1,
    featured: "Ciberseguridad en Academias y Colegios: Blindando el futuro de la Educación Online",
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
  {
    id: 4,
    slug: "sector-inmobiliario/ciberseguridad-inmobiliarias-fraude-transferencias",
    category: "sector-inmobiliario",
    title: "Ciberseguridad en Inmobiliarias: Blindando el Cierre de Operaciones",
    seoTitle: "Ciberseguridad en Inmobiliarias: Cómo evitar el fraude en transferencias de depósitos",
    metaDescription: "Descubre cómo proteger tu agencia inmobiliaria del fraude BEC y el cambio de cuenta bancaria. Guía práctica con checklist de cumplimiento AEPD para el sector.",
    excerpt: "No permitas que un ciberdelincuente se lleve la comisión de tu vida o el ahorro de tus clientes. El momento del pago de la reserva o señal es el punto de mayor vulnerabilidad en toda operación inmobiliaria.",
    author: "Equipo PymeSegura",
    date: "2026-03-29",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 5,
    slug: "sector-logistica/ciberseguridad-logistica-ransomware-flota",
    category: "transporte-y-logistica",
    title: "Ciberseguridad en Logística: Blindando la Cadena de Suministro",
    seoTitle: "Ciberseguridad en Logística: Cómo evitar que el Ransomware detenga tu flota (2026)",
    metaDescription: "El coste de un camión parado por ransomware supera los 5.000€/hora. Aprende a proteger tu flota GPS, cifrar albaranes y crear un plan de contingencia para PYMEs de transporte.",
    excerpt: "En un mundo de entregas en 24h, un sistema bloqueado por Ransomware es una sentencia de muerte para tu rentabilidad. Descubre cómo blindar tu flota y cadena de suministro.",
    author: "Equipo PymeSegura",
    date: "2026-03-29",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 6,
    slug: "hosteleria-y-turismo/ciberseguridad-hoteles-proteccion-huespedes",
    category: "hosteleria-y-turismo",
    title: "Ciberseguridad en Hostelería: Blindando la Confianza del Huésped",
    seoTitle: "Ciberseguridad en Hoteles y Hostelería: Cómo proteger los datos de tus huéspedes (2026)",
    metaDescription: "Protege tu hotel de estafas en Booking, ransomware en el PMS y ataques WiFi. Guía completa de ciberseguridad y cumplimiento PCI-DSS para el sector HORECA.",
    excerpt: "En 2026, la seguridad digital es la quinta estrella de cualquier establecimiento. Protege tus reservas, los datos de tus huéspedes y el prestigio de tu marca ante el auge de las estafas digitales en hostelería.",
    author: "Equipo PymeSegura",
    date: "2026-03-29",
    readTime: "10 min",
    featured: false,
  },
  {
    id: 7,
    slug: "educacion-digital/ciberseguridad-academias-colegios-elearning",
    category: "educacion-digital",
    title: "Ciberseguridad en la Era del E-learning: Protegiendo el Conocimiento",
    seoTitle: "Ciberseguridad en Academias y Colegios: Blindando el futuro de la Educación Online (2026)",
    metaDescription: "Protege los datos de tus alumnos, tu LMS y tus clases online. Guía de ciberseguridad y cumplimiento LOPD/RGPD para academias, colegios y plataformas de e-learning.",
    excerpt: "En 2026, una brecha de datos en tu academia no solo expone nombres, sino el futuro y la privacidad de tus alumnos. Descubre cómo blindar tu plataforma educativa frente a ransomware, Zoombombing y robo de contenidos.",
    author: "Equipo PymeSegura",
    date: "2026-03-29",
    readTime: "9 min",
    featured: false,
  },
  {
    id: 8,
    slug: "salud-y-clinicas/auditoria-seguridad-clinicas-ens-historial-clinico",
    category: "salud-y-clinicas",
    title: "La Auditoría de Ciberseguridad en Centros de Salud: Más allá del Antivirus",
    seoTitle: "Auditoría de Seguridad en Clínicas: Guía ENS y protección del Historial Clínico (2026)",
    metaDescription: "Cumple con el ENS y el RGPD en tu clínica. Guía de auditoría de ciberseguridad para el historial clínico digital: control de accesos, cifrado, cloud seguro y borrado certificado.",
    excerpt: "En 2026, la historia clínica electrónica es el activo más valioso y vulnerable de tu consulta. Descubre cómo superar una inspección de la AEPD y cumplir el Esquema Nacional de Seguridad.",
    author: "Equipo PymeSegura",
    date: "2026-03-29",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 9,
    slug: "legal-y-asesorias/secreto-profesional-ciberseguridad-despachos",
    category: "legal-y-asesorias",
    title: "El Secreto Profesional en 2026: Ciberseguridad para el Sector Legal",
    seoTitle: "Ciberseguridad para Abogados: El Secreto Profesional en la Era de la Nube (2026)",
    metaDescription: "Protege el secreto profesional de tu despacho con cifrado de expedientes, cloud jurídico certificado y borrado seguro. Guía para abogados, gestorías y asesorías.",
    excerpt: "Un despacho hackeado no solo pierde datos; pierde la licencia para ejercer la confianza de sus clientes. Descubre cómo blindar tu despacho frente a fugas de expedientes, responsabilidad civil y ataques dirigidos.",
    author: "Equipo PymeSegura",
    date: "2026-03-29",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 10,
    slug: "ecommerce-y-retail/seguridad-pagos-tpv-virtual-fraude",
    category: "ecommerce-y-retail",
    title: "Seguridad en el Checkout: El Corazón de tu Ecommerce en 2026",
    seoTitle: "Seguridad en Pagos Online: Cómo proteger tu TPV Virtual contra el Fraude (2026)",
    metaDescription: "Tokenización, SCA/PSD3, detección de fraude y protocolo anti-chargeback. Guía técnica de seguridad en pasarelas de pago para tiendas online en 2026.",
    excerpt: "Una tienda rápida vende, pero una tienda segura es la única que sobrevive a las reclamaciones bancarias. Descubre cómo blindar tu checkout frente al robo de sesión, carding y chargebacks fraudulentos.",
    author: "Equipo PymeSegura",
    date: "2026-03-29",
    readTime: "8 min",
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
                href={`${item.path}`}
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
    ...CATEGORIES.map((c) => ({ label: c.shortName, path: `/${c.id}`, type: "sector" })),
    { type: "divider" },
    { label: "Nosotros", path: "/nosotros", type: "page" },
    { label: "Contacto", path: "/contacto", type: "cta" },
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
            href="/"
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
            {navItems.map((item, i) => {
              if (item.type === "divider") {
                return <div key="divider" style={{ width: "1px", height: "18px", background: "var(--border)", margin: "0 8px", flexShrink: 0 }} />;
              }
              if (item.type === "cta") {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                    style={{
                      padding: "8px 16px",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: path === item.path ? "var(--amber)" : "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      background: "var(--navy)",
                      transition: "all 0.15s ease",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </a>
                );
              }
              if (item.type === "page") {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                    style={{
                      padding: "7px 14px",
                      fontSize: "13px",
                      fontWeight: path === item.path ? 700 : 500,
                      color: path === item.path ? "var(--navy)" : "var(--text-secondary)",
                      textDecoration: "none",
                      borderRadius: "4px",
                      background: path === item.path ? "var(--bg-warm)" : "transparent",
                      border: `1px solid ${path === item.path ? "var(--border)" : "var(--border)"}`,
                      transition: "all 0.15s ease",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </a>
                );
              }
              // type: "sector" or "Inicio"
              return (
                <a
                  key={item.path}
                  href={item.path}
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
              );
            })}
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
            padding: "8px 0 16px", borderTop: "1px solid var(--border)",
            display: "flex", flexDirection: "column", gap: "2px",
          }}>
            {navItems.map((item, i) => {
              if (item.type === "divider") {
                return (
                  <div key="mob-divider" style={{ padding: "10px 16px 2px" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "1.5px",
                      textTransform: "uppercase", color: "var(--text-muted)",
                    }}>
                      Páginas
                    </span>
                  </div>
                );
              }
              if (i === 1) {
                return (
                  <div key={`group-${item.path}`} style={{ display: "contents" }}>
                    <div style={{ padding: "10px 16px 2px" }}>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "1.5px",
                        textTransform: "uppercase", color: "var(--text-muted)",
                      }}>
                        Sectores
                      </span>
                    </div>
                    <a
                      href={item.path}
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
                  </div>
                );
              }
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                  style={{
                    padding: "12px 16px",
                    fontSize: "15px",
                    fontWeight: path === item.path ? 700 : 400,
                    color: item.type === "cta" ? "white" : "var(--navy)",
                    textDecoration: "none",
                    borderRadius: "4px",
                    background: item.type === "cta"
                      ? "var(--navy)"
                      : path === item.path ? "var(--bg-warm)" : "transparent",
                    marginLeft: item.type === "cta" || item.type === "page" ? "0" : "0",
                    fontWeight: item.type === "cta" ? 700 : path === item.path ? 700 : 400,
                  }}
                >
                  {item.label}
                </a>
              );
            })}
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
              <a key={c.id} href={`/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
                style={{ display: "block", fontSize: "13px", opacity: 0.7, textDecoration: "none", color: "white", padding: "4px 0", fontFamily: "var(--font-body)" }}>
                {c.name}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px", color: "var(--amber)" }}>Legal</h4>
            {[
              { label: "Quiénes Somos", path: "/nosotros" },
              { label: "Política de Privacidad", path: "/privacidad" },
              { label: "Aviso Legal", path: "/aviso-legal" },
              { label: "Política de Cookies", path: "/cookies" },
              { label: "Contacto", path: "/contacto" },
            ].map((item) => (
              <a key={item.path} href={`${item.path}`} onClick={(e) => { e.preventDefault(); navigate(item.path); }}
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
                href="/salud-y-clinicas"
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
                href="/contacto"
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
                href={`/${cat.id}`}
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
                    href={`/${article.slug}`}
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
                      href={`/${article.slug}`}
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
            { value: "10", label: "Guías publicadas", icon: BookOpen },
            { value: "7", label: "Sectores cubiertos", icon: Globe },
            { value: "2026", label: "Normativa actual", icon: Zap },
            { value: "50K", label: "Lectores mensuales", icon: Users },
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
                href={`/${article.slug}`}
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
                  <a key={c.id} href={`/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
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
            href="/salud-y-clinicas"
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
                  <a key={c.id} href={`/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
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
        { heading: "1. Responsable del tratamiento", text: "Identidad: Sergio Burgos — Dirección: C / Isabel Villena, Valencia — Email: privacidad@pymesegura.com" },
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
                  He leído y acepto la <a href="/privacidad" style={{ color: "var(--accent)" }}>Política de Privacidad</a>. 
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
        href="/"
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
            href="/ecommerce-y-retail"
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
                  <a key={c.id} href={`/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
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
            href="/legal-y-asesorias"
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
                  <a key={c.id} href={`/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
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

// ─── ARTICLE: CIBERSEGURIDAD INMOBILIARIAS ───────────
function ArticleCiberseguridadInmobiliarias() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "sector-inmobiliario/ciberseguridad-inmobiliarias-fraude-transferencias");
  const cat = CATEGORIES.find((c) => c.id === "sector-inmobiliario");

  const pStyle = {
    marginBottom: "20px", fontSize: "16px", lineHeight: 1.8,
    color: "var(--text-secondary)", fontFamily: "var(--font-body)",
  };
  const h2Style = {
    fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700,
    color: "var(--navy)", marginBottom: "16px", marginTop: "40px", letterSpacing: "-0.3px",
    paddingBottom: "10px", borderBottom: "2px solid var(--border)",
  };

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 20px" }}>
      <SchemaMarkup type="article" data={article} />
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: cat.name, path: "/sector-inmobiliario" },
        { name: "Ciberseguridad en Inmobiliarias: Fraude en Transferencias", path: `/${article.slug}` },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px" }} className="content-grid">
        <article>

          {/* ── HERO SECTION ── */}
          <div style={{
            background: "linear-gradient(135deg, #0f1d35 0%, #1a2d4d 60%, #1e3a5f 100%)",
            borderRadius: "10px", padding: "48px 40px", marginBottom: "36px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: "-40%", right: "-10%", width: "50%", height: "200%",
              background: "radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }} />
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "4px 10px", background: cat.bgColor, color: cat.color,
              fontSize: "11px", fontWeight: 700, borderRadius: "3px",
              fontFamily: "var(--font-mono)", textTransform: "uppercase",
              letterSpacing: "0.5px", marginBottom: "20px",
            }}>
              <Building2 size={11} /> {cat.shortName}
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-1px",
              marginBottom: "16px",
            }}>
              Ciberseguridad en Inmobiliarias:{" "}
              <span style={{ color: "var(--amber)" }}>Blindando el Cierre de Operaciones</span>
            </h1>
            <p style={{
              fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: 1.65,
              fontFamily: "var(--font-body)", marginBottom: "20px", maxWidth: "600px",
            }}>
              No permitas que un ciberdelincuente se lleve la comisión de tu vida o el ahorro de tus clientes.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                <User size={11} /> {article.author}
              </span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
                <Clock size={11} /> {article.readTime} de lectura
              </span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
                {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
          </div>

          {/* AD: Leaderboard */}
          <div style={{ margin: "0 0 36px" }}>
            <AdSlot position="below-h1" />
          </div>

          {/* ── ALERTA BEC ── */}
          <div style={{
            background: "#fff7ed", border: "1px solid #fed7aa",
            borderLeft: "4px solid #ea580c", borderRadius: "0 8px 8px 0",
            padding: "24px 28px", marginBottom: "36px",
          }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <AlertTriangle size={22} color="#ea580c" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase",
                  letterSpacing: "1px", color: "#ea580c", marginBottom: "8px", fontWeight: 700,
                }}>
                  Alerta 2026 — Fraude BEC en auge
                </div>
                <p style={{ ...pStyle, marginBottom: "6px", fontSize: "15px", color: "#7c2d12" }}>
                  Los ataques <strong>Business Email Compromise (BEC)</strong> dirigidos al sector inmobiliario se han
                  incrementado un <strong>+340% en los últimos dos años</strong> en España. La pérdida media por
                  operación fraudulenta supera los <strong>28.000 €</strong>.
                </p>
                <p style={{ ...pStyle, marginBottom: 0, fontSize: "13px", color: "#9a3412" }}>
                  Fuente: Informe de Cibercrimen 2025 — Europol / AEPD
                </p>
              </div>
            </div>
          </div>

          {/* ── SECCIÓN 1 ── */}
          <h2 style={h2Style}>El Fraude del «Cambio de Cuenta»</h2>
          <p style={pStyle}>
            En el sector inmobiliario, el momento de mayor vulnerabilidad es el <strong>pago de la reserva o señal</strong>.
            Los atacantes utilizan técnicas de <strong>Business Email Compromise (BEC)</strong>: interceptan los correos
            entre el agente y el comprador, suplantan la identidad de la inmobiliaria y envían un número de cuenta
            bancaria modificado justo antes de que el cliente realice el depósito.
          </p>
          <p style={pStyle}>
            El cliente transfiere el dinero convencido de que está pagando a tu agencia. Cuando se descubre el fraude,
            el dinero ya ha desaparecido y la responsabilidad —tanto legal como reputacional— recae sobre la inmobiliaria
            que no aplicó las medidas de seguridad adecuadas.
          </p>

          {/* ── CARDS PREVENCIÓN ── */}
          <h2 style={h2Style}>Medidas de Prevención Esenciales</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "36px" }}>
            {[
              {
                icon: Phone,
                color: "#2563eb",
                bg: "#eff6ff",
                title: "Verificación Telefónica Obligatoria",
                text: "Nunca realices una transferencia basada solo en un email. Llama siempre al cliente o al agente para confirmar el IBAN antes de cualquier movimiento bancario.",
              },
              {
                icon: FileText,
                color: "#059669",
                bg: "#ecfdf5",
                title: "Firmas Digitales Encriptadas",
                text: "Utiliza plataformas que certifiquen que el documento no ha sido alterado tras su envío. La firma cualificada garantiza la integridad del contenido.",
              },
              {
                icon: Lock,
                color: "#ea580c",
                bg: "#fff7ed",
                title: "MFA en el Correo Corporativo",
                text: "El 90% de estos robos ocurren porque el email del agente no tenía doble factor de autenticación. Es la medida de mayor impacto y la más fácil de activar.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  padding: "24px", background: "white", border: "1px solid var(--border)",
                  borderRadius: "8px", borderTop: `3px solid ${item.color}`,
                }}>
                  <div style={{
                    width: "44px", height: "44px", background: item.bg, borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px",
                  }}>
                    <Icon size={22} color={item.color} strokeWidth={2} />
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700,
                    color: "var(--navy)", marginBottom: "8px",
                  }}>
                    {item.title}
                  </div>
                  <p style={{ ...pStyle, marginBottom: 0, fontSize: "13px", lineHeight: 1.65 }}>{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* AD: In-Article */}
          <div style={{ margin: "36px 0", display: "flex", justifyContent: "center" }}>
            <AdSlot position="in-content" />
          </div>

          {/* ── CHECKLIST ── */}
          <h2 style={h2Style}>Checklist de Cumplimiento para Agencias Inmobiliarias</h2>
          <p style={pStyle}>
            Revisa punto por punto con tu equipo de IT o tu proveedor tecnológico:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
            {[
              "Auditoría periódica de los accesos al CRM inmobiliario.",
              "Cifrado de extremo a extremo en el envío de contratos de arras.",
              "Formación del personal en detección de Phishing avanzado.",
              "Cumplimiento estricto de la normativa AEPD en el manejo de datos de clientes.",
              "Política de verificación de IBAN por doble canal (teléfono + email) antes de cualquier transferencia.",
              "Contrato de encargo con el DPO (Delegado de Protección de Datos) actualizado.",
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: "12px", alignItems: "flex-start",
                padding: "14px 18px", background: "#f0fdf4",
                border: "1px solid #bbf7d0", borderRadius: "6px",
              }}>
                <CheckCircle size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "14px", color: "#14532d", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{
            background: "linear-gradient(135deg, #1e3a5f 0%, #0f1d35 100%)",
            borderRadius: "10px", padding: "36px 32px", marginBottom: "40px",
            border: "1px solid rgba(37,99,235,0.2)",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", color: "#60a5fa", marginBottom: "12px",
            }}>
              ¿Es tu agencia un objetivo fácil?
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800,
              color: "white", lineHeight: 1.3, letterSpacing: "-0.3px", marginBottom: "16px",
            }}>
              Realizamos auditorías de seguridad específicas para oficinas inmobiliarias
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: "24px" }}>
              Asegura tus operaciones, protege a tus inversores y mantén la confianza de tus clientes.
              Una sola operación fraudulenta puede suponer el fin de tu reputación en el sector.
            </p>
            <a
              href="/contacto"
              onClick={(e) => { e.preventDefault(); navigate("/contacto"); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px", background: "var(--amber)", color: "var(--navy)",
                textDecoration: "none", fontWeight: 700, fontSize: "14px", borderRadius: "6px",
                fontFamily: "var(--font-body)", letterSpacing: "-0.2px",
              }}
            >
              Solicitar auditoría gratuita <ArrowRight size={16} />
            </a>
          </div>

          {/* Nota legal */}
          <div style={{
            padding: "16px 20px", background: "var(--bg-warm)", border: "1px solid var(--border)",
            borderRadius: "6px", fontSize: "12px", color: "var(--text-muted)",
            fontFamily: "var(--font-mono)", marginBottom: "32px",
          }}>
            Este contenido es informativo y no constituye asesoramiento legal. Consulta con un profesional cualificado para tu caso particular. Última revisión: 29 de marzo de 2026.
          </div>

          {/* AD: Inferior */}
          <div style={{ margin: "0 0 24px" }}>
            <AdSlot position="below-h1" />
          </div>

          <a
            href="/sector-inmobiliario"
            onClick={(e) => { e.preventDefault(); navigate("/sector-inmobiliario"); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "var(--accent)", fontWeight: 600, fontSize: "14px",
              textDecoration: "none", fontFamily: "var(--font-body)",
            }}
          >
            ← Ver más guías del Sector Inmobiliario
          </a>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="sidebar-aside" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <AdSlot position="sidebar" />

            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                En este artículo
              </h3>
              {[
                "El fraude del «cambio de cuenta»",
                "Medidas de prevención esenciales",
                "Checklist de cumplimiento",
                "Auditoría para tu agencia",
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

            <div style={{ border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", background: "white" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
              }}>
                Otros sectores
              </h3>
              {CATEGORIES.filter((c) => c.id !== "sector-inmobiliario").map((c) => {
                const CIcon = c.icon;
                return (
                  <a key={c.id} href={`/${c.id}`} onClick={(e) => { e.preventDefault(); navigate(`/${c.id}`); }}
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

// ─── ARTICLE: CIBERSEGURIDAD LOGÍSTICA ───────────────
function ArticleCiberseguridadLogistica() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "sector-logistica/ciberseguridad-logistica-ransomware-flota");

  const pStyle = { fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "var(--text-secondary)", marginBottom: "20px" };
  const h2Style = { fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", marginTop: "40px", paddingTop: "16px", borderTop: "1px solid var(--border)" };

  return (
    <main style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SchemaMarkup type="article" data={article} />
      <SchemaMarkup type="breadcrumb" data={{ items: [
        { name: "Inicio", path: "/" },
        { name: "Transporte y Logística", path: "/transporte-y-logistica" },
        { name: "Ciberseguridad en Logística", path: "/sector-logistica/ciberseguridad-logistica-ransomware-flota" },
      ]}} />

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #431407 100%)", padding: "64px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(234,88,12,0.15) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span onClick={() => navigate("/")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Inicio</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span onClick={() => navigate("/transporte-y-logistica")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Transporte y Logística</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>Ciberseguridad en Logística</span>
          </div>

          {/* Category badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(234,88,12,0.2)", border: "1px solid rgba(234,88,12,0.4)", borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
            <Truck size={13} color="#fb923c" />
            <span style={{ fontSize: "12px", color: "#fb923c", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.5px" }}>TRANSPORTE Y LOGÍSTICA</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,4.5vw,42px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Ciberseguridad en Logística:<br />
            <span style={{ color: "#fb923c" }}>Blindando la Cadena de Suministro</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: "28px", maxWidth: "660px" }}>
            En un mundo de entregas en 24h, un sistema bloqueado por Ransomware es una sentencia de muerte para tu rentabilidad.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article?.author}
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article?.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
              {article && new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* AD: Below H1 */}
        <div style={{ margin: "0 0 36px" }}>
          <AdSlot position="below-h1" />
        </div>

        {/* CIFRA DE IMPACTO */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1c1917 100%)", borderRadius: "12px", padding: "36px 40px", marginBottom: "40px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: "radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)" }} />
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", position: "relative" }}>
            <div style={{ background: "rgba(234,88,12,0.15)", border: "1px solid rgba(234,88,12,0.3)", borderRadius: "12px", padding: "14px", flexShrink: 0 }}>
              <Truck size={32} color="#fb923c" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#fb923c", marginBottom: "10px", fontWeight: 700 }}>
                Dato Clave 2026 — Coste de Inactividad
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,6vw,56px)", fontWeight: 800, color: "#ffffff", lineHeight: 1, marginBottom: "12px" }}>
                +5.000 €<span style={{ fontSize: "20px", color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>/hora</span>
              </div>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, margin: 0 }}>
                Coste medio de inactividad para una PYME logística española cuando un ransomware bloquea su software de gestión de rutas o seguimiento GPS.
              </p>
            </div>
          </div>
        </div>

        {/* SECCIÓN 1 */}
        <h2 style={h2Style}>El Ransomware: El Nuevo «Pirata» de la Carretera</h2>
        <p style={pStyle}>
          Hoy en día, los ciberdelincuentes no roban camiones en las áreas de servicio; <strong>roban el acceso a tus servidores</strong>. Si tu software de gestión de rutas o tu sistema de seguimiento GPS cae, tu flota se detiene. El coste medio de inactividad para una PYME logística en España ha superado ya los <strong>5.000 € por hora en 2026</strong>.
        </p>
        <p style={pStyle}>
          A diferencia de otros sectores, en logística el impacto es inmediato y visible: pedidos sin entregar, contratos incumplidos y clientes que nunca vuelven. Los atacantes lo saben y apuntan específicamente a empresas de transporte porque el dolor económico de pararse es tan alto que muchas terminan pagando el rescate.
        </p>

        {/* AD: In-content */}
        <div style={{ margin: "8px 0 32px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* SECCIÓN 2: VULNERABILIDADES */}
        <h2 style={h2Style}>Vulnerabilidades en la Cadena de Suministro</h2>
        <p style={pStyle}>
          La cadena de suministro moderna es un ecosistema digital interconectado: sistemas ERP, plataformas de gestión de pedidos, dispositivos IoT en almacén y GPS en vehículos. Cada punto de conexión es una puerta potencial. Los tres vectores de ataque más frecuentes en el sector son:
        </p>
        <ul style={{ ...pStyle, paddingLeft: "24px", marginBottom: "36px" }}>
          <li style={{ marginBottom: "12px" }}><strong>Dispositivos IoT sin actualizar:</strong> Sensores de temperatura, GPS y sistemas de telemetría suelen correr firmware desactualizado, sin cifrado y con contraseñas de fábrica.</li>
          <li style={{ marginBottom: "12px" }}><strong>Correo electrónico de operaciones:</strong> Las órdenes de carga, albaranes y confirmaciones de entrega son el vector preferido para el phishing y la suplantación de proveedores.</li>
          <li style={{ marginBottom: "12px" }}><strong>Accesos remotos de terceros:</strong> Talleres, transportistas subcontratados o clientes con acceso a tu TMS (Transportation Management System) pueden ser el eslabón débil.</li>
        </ul>

        {/* CARDS DE PROTECCIÓN */}
        <h2 style={h2Style}>Soluciones de Protección Logística</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "36px" }}>
          {[
            {
              icon: Truck,
              color: "#ea580c",
              bg: "#fff7ed",
              title: "Seguridad en Dispositivos IoT",
              text: "Cada sensor de temperatura y cada GPS en tus camiones es una puerta de entrada. Usa redes segmentadas (VLAN) para aislar estos dispositivos del resto de tu infraestructura.",
            },
            {
              icon: Package,
              color: "#2563eb",
              bg: "#eff6ff",
              title: "Cifrado de Albaranes Digitales",
              text: "Evita la manipulación de destinos y facturas mediante firmas digitales seguras en cada envío. Un albarán alterado puede costarte una entrega completa y una demanda.",
            },
            {
              icon: ShieldCheck,
              color: "#059669",
              bg: "#ecfdf5",
              title: "Backups Offline (Fuera de Línea)",
              text: "La única forma de no pagar un rescate es tener una copia de tus rutas y clientes fuera del alcance de la red principal. Regla 3-2-1: 3 copias, 2 soportes, 1 offline.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ padding: "24px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderTop: `3px solid ${item.color}` }}>
                <div style={{ width: "44px", height: "44px", background: item.bg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                  <Icon size={22} color={item.color} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</div>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* PLAN DE CONTINGENCIA */}
        <h2 style={h2Style}>Plan de Contingencia 24h Tras un Ataque</h2>
        <div style={{ border: "2px dashed #ea580c", borderRadius: "12px", padding: "28px 32px", marginBottom: "36px", background: "#fff7ed" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <AlertTriangle size={20} color="#ea580c" />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 800, color: "#9a3412" }}>
              Protocolo de Respuesta Inmediata
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { n: "01", text: "Aislamiento inmediato de los equipos infectados de la red.", sub: "Desconecta físicamente los equipos afectados. No los apagues — preservas evidencias." },
              { n: "02", text: "Activación del protocolo de comunicación manual con conductores.", sub: "Usa teléfono y radio como canal alternativo. Ten preparadas las rutas del día en papel." },
              { n: "03", text: "Notificación a la AEPD, clientes afectados y tu aseguradora.", sub: "Tienes 72 horas para notificar a la autoridad si hay datos personales comprometidos." },
              { n: "04", text: "Restauración de sistemas críticos desde copias de seguridad verificadas.", sub: "Solo restaura desde backups que confirmes limpios y anteriores al ataque." },
            ].map((step) => (
              <div key={step.n} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "32px", height: "32px", background: "#ea580c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, color: "white" }}>{step.n}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "#7c2d12", marginBottom: "4px" }}>{step.text}</div>
                  <div style={{ fontSize: "13px", color: "#9a3412", lineHeight: "1.6" }}>{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AD: In-content 2 */}
        <div style={{ margin: "8px 0 32px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* CTA FINAL */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderRadius: "12px", padding: "40px", textAlign: "center", marginBottom: "40px" }}>
          <div style={{ width: "56px", height: "56px", background: "rgba(234,88,12,0.15)", border: "1px solid rgba(234,88,12,0.3)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Truck size={28} color="#fb923c" />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 800, color: "#ffffff", marginBottom: "12px" }}>
            ¿Tu flota está preparada para un ataque sorpresa?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "28px", maxWidth: "520px", margin: "0 auto 28px" }}>
            No esperes a que un camión se detenga. Analizamos las vulnerabilidades de tu cadena de suministro y creamos protocolos de respuesta rápida ante Ransomware.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            style={{ background: "#ea580c", color: "white", border: "none", borderRadius: "8px", padding: "14px 32px", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Consultoría de Continuidad de Negocio
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/transporte-y-logistica")}
            style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontSize: "14px", fontFamily: "var(--font-body)", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <ChevronRight size={14} style={{ transform: "rotate(180deg)" }} />
            Ver todos los artículos de Transporte y Logística
          </button>
        </div>

      </div>
    </main>
  );
}

// ─── ARTICLE: CIBERSEGURIDAD HOSTELERÍA ──────────────
function ArticleCiberseguridadHosteleria() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "hosteleria-y-turismo/ciberseguridad-hoteles-proteccion-huespedes");

  const pStyle = { fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "var(--text-secondary)", marginBottom: "20px" };
  const h2Style = { fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", marginTop: "40px", paddingTop: "16px", borderTop: "1px solid var(--border)" };
  const h3Style = { fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", marginTop: "28px" };

  return (
    <main style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SchemaMarkup type="article" data={article} />
      <SchemaMarkup type="breadcrumb" data={{ items: [
        { name: "Inicio", path: "/" },
        { name: "Hostelería y Turismo", path: "/hosteleria-y-turismo" },
        { name: "Ciberseguridad en Hostelería", path: "/hosteleria" },
      ]}} />

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #164e63 60%, #0e7490 100%)", padding: "64px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 65% 40%, rgba(8,145,178,0.25) 0%, transparent 55%)" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span onClick={() => navigate("/")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Inicio</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span onClick={() => navigate("/hosteleria-y-turismo")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Hostelería y Turismo</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>Ciberseguridad en Hostelería</span>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(8,145,178,0.2)", border: "1px solid rgba(8,145,178,0.45)", borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
            <Hotel size={13} color="#22d3ee" />
            <span style={{ fontSize: "12px", color: "#22d3ee", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.5px" }}>HOSTELERÍA Y TURISMO</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,4.5vw,44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Ciberseguridad en Hostelería:<br />
            <span style={{ color: "#22d3ee" }}>Blindando la Confianza del Huésped</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: "28px", maxWidth: "680px" }}>
            En 2026, la seguridad digital es la quinta estrella de cualquier establecimiento. Protege tus reservas y el prestigio de tu marca.
          </p>

          {/* Meta row */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article?.author}
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article?.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
              {article && new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* AD: Below H1 */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="below-h1" />
        </div>

        {/* ── SECCIÓN 1: ESCENARIO ACTUAL ── */}
        <h2 style={h2Style}>¿Por qué tu hotel está en el punto de mira?</h2>
        <p style={pStyle}>
          Un hotel no solo vende habitaciones; <strong>gestiona identidades y activos financieros</strong>. Con la digitalización total de los procesos de check-in y la integración de canales de venta globales (Booking, Expedia, Airbnb), las brechas de seguridad se han multiplicado exponencialmente. Un solo ataque de <strong>Phishing a un recepcionista</strong> puede comprometer la base de datos de miles de turistas internacionales, incluyendo sus documentos de identidad, tarjetas de crédito y preferencias de estancia.
        </p>
        <p style={pStyle}>
          El sector HORECA es especialmente atractivo para los ciberdelincuentes por tres razones: maneja grandes volúmenes de datos financieros, opera con personal rotativo difícil de formar y depende de sistemas de terceros (PMS, channel managers, OTAs) que amplían la superficie de ataque.
        </p>

        {/* Stat strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            { value: "85%", label: "de incidentes por error humano" },
            { value: "+340%", label: "aumento de estafas en OTAs desde 2023" },
            { value: "72h", label: "plazo máximo de notificación AEPD" },
          ].map((s, i) => (
            <div key={i} style={{ background: "linear-gradient(135deg, #0f172a, #164e63)", borderRadius: "10px", padding: "20px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: "#22d3ee", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── SECCIÓN 2: AMENAZAS CRÍTICAS ── */}
        <h2 style={h2Style}>Amenazas Críticas en 2026</h2>
        <p style={pStyle}>Las tres grandes amenazas que afectan al sector en este momento son cualitativamente distintas y requieren respuestas específicas:</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "36px" }}>
          {[
            {
              icon: ShieldAlert,
              color: "#dc2626",
              bg: "#fef2f2",
              title: "Suplantación en Portales de Reserva",
              text: "Ciberdelincuentes que hackean la extranet de Booking o Expedia para contactar directamente a los clientes con links fraudulentos solicitando pagos adicionales o «confirmación de tarjeta». El hotel paga la indemnización aunque no sea el culpable directo.",
            },
            {
              icon: Lock,
              color: "#7c3aed",
              bg: "#f5f3ff",
              title: "Ransomware en el PMS",
              text: "Bloqueo del software de gestión de habitaciones (Property Management System) para exigir un rescate. Resultado: imposibilidad de hacer check-in o check-out, pérdida de reservas y colapso total de operaciones mientras dure el ataque.",
            },
            {
              icon: Wifi,
              color: "#ea580c",
              bg: "#fff7ed",
              title: "Ataques 'Evil Twin' en el WiFi",
              text: "Creación de redes WiFi falsas con el nombre del hotel («Hotel_Wifi_Free») para interceptar los datos bancarios de los clientes mientras navegan desde su habitación. Un ataque invisible para el huésped y devastador para la reputación del establecimiento.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ padding: "24px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderTop: `3px solid ${item.color}` }}>
                <div style={{ width: "44px", height: "44px", background: item.bg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                  <Icon size={22} color={item.color} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</div>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── SECCIÓN 3: WIFI ── */}
        <h2 style={h2Style}>La Guía Definitiva de Seguridad WiFi para Hoteles</h2>
        <p style={pStyle}>
          Es imperativo que la red que utilizan los huéspedes esté <strong>totalmente aislada (VLAN)</strong> de la red donde se gestionan los pagos y los datos de la empresa. Mezclar ambas redes es una infracción directa de las mejores prácticas de PCI-DSS y un riesgo inaceptable.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "36px" }}>
          {[
            {
              icon: Wifi,
              color: "#0891b2",
              title: "Client Isolation",
              text: "Activa el aislamiento entre clientes para que ningún dispositivo conectado a la red de huéspedes pueda comunicarse con otro. Evita que un dispositivo infectado propague malware por la red.",
            },
            {
              icon: Lock,
              color: "#059669",
              title: "Rotación de Contraseñas",
              text: "Renueva automáticamente las contraseñas de la red WiFi cada temporada o cada mes. Las contraseñas permanentes son una puerta abierta para atacantes que regresan.",
            },
            {
              icon: Shield,
              color: "#7c3aed",
              title: "Portal Cautivo Seguro",
              text: "Usa portales de acceso que requieran aceptar términos de privacidad actualizados. Además de ser un requisito legal (RGPD), registra y protege el acceso desde el primer momento.",
            },
            {
              icon: ShieldCheck,
              color: "#ea580c",
              title: "Segmentación de VLANs",
              text: "Red de huéspedes, red de administración y red de TPV deben ser tres redes completamente separadas. Una brecha en la WiFi de un huésped no debe poder afectar nunca al sistema de cobros.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ padding: "22px", background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: "8px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", background: "white", border: "1px solid var(--border)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20} color={item.color} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>{item.title}</div>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.65", margin: 0 }}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── SECCIÓN 4: PCI-DSS ── */}
        <h2 style={h2Style}>Protocolo PCI-DSS: El Estándar de Seguridad para Tarjetas</h2>
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderLeft: "4px solid #ea580c", borderRadius: "0 8px 8px 0", padding: "20px 24px", marginBottom: "24px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <AlertTriangle size={20} color="#ea580c" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#ea580c", marginBottom: "6px", fontWeight: 700 }}>Obligatorio — No es opcional</div>
              <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px", color: "#7c2d12" }}>El incumplimiento de PCI-DSS puede suponer multas de entre <strong>5.000 y 100.000 €/mes</strong> y la retirada de la capacidad de procesar pagos con tarjeta. En un hotel, esto equivale al cierre efectivo del negocio.</p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "36px" }}>
          {[
            { icon: CreditCard, color: "#dc2626", title: "Nunca almacenes el CVV", text: "El código de verificación de la tarjeta no puede guardarse en ningún sistema, ni en papel ni en Excel. Es la regla más básica y más incumplida del sector." },
            { icon: Lock, color: "#2563eb", title: "TPV encriptados y actualizados", text: "Usa terminales de pago certificados PCI. Actualiza el firmware regularmente y nunca conectes un TPV a la red de administración general." },
            { icon: UserCheck, color: "#059669", title: "Acceso de mínimo privilegio", text: "Solo el personal estrictamente necesario debe tener acceso a los datos de tarjeta. Audita los permisos trimestralmente y revoca accesos al cambiar de empleado." },
            { icon: Eye, color: "#7c3aed", title: "Monitorización continua", text: "Activa alertas en tiempo real para transacciones inusuales. Un cargo múltiple desde la misma habitación en minutos es una señal de alarma clara." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ padding: "22px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderLeft: `3px solid ${item.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <Icon size={18} color={item.color} />
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>{item.title}</div>
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.65", margin: 0 }}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── SECCIÓN 5: FACTOR HUMANO ── */}
        <h2 style={h2Style}>El Factor Humano: La Primera Línea de Defensa</h2>
        <p style={pStyle}>
          El <strong>85% de los incidentes de ciberseguridad en hostelería comienzan por un error humano</strong>. No se trata de negligencia: el personal de recepción gestiona cientos de interacciones diarias bajo presión, lo que lo convierte en el objetivo preferido de los atacantes mediante técnicas de ingeniería social.
        </p>

        <h3 style={h3Style}>Protocolo de Mesa Limpia</h3>
        <p style={pStyle}>
          Ninguna contraseña puede estar escrita en post-its visibles desde el mostrador de recepción. Parece obvio, pero sigue siendo la vulnerabilidad más frecuente detectada en auditorías de hoteles de hasta 4 estrellas. Establece una política formal por escrito y realiza revisiones periódicas.
        </p>

        <h3 style={h3Style}>Formación en Detección de Phishing</h3>
        <p style={pStyle}>
          Forma a tu equipo para identificar correos que simulan ser facturas de proveedores, quejas urgentes de clientes o comunicaciones de plataformas de reserva. Las señales más comunes: remitentes con dominios ligeramente alterados (<em>bookking.com</em> en lugar de <em>booking.com</em>), solicitudes de transferencias urgentes y archivos adjuntos inesperados.
        </p>

        {/* ── CHECKLIST ── */}
        <h2 style={h2Style}>Checklist de Auditoría Anual para PYMEs Turísticas</h2>
        <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px 32px", marginBottom: "36px" }}>
          {[
            { ok: true,  text: "¿Tienes backups diarios fuera del servidor principal (regla 3-2-1)?" },
            { ok: true,  text: "¿El WiFi de clientes tiene un firewall independiente y VLAN separada del sistema de cobros?" },
            { ok: false, text: "¿Utilizas autenticación de dos factores (MFA) para acceder a Booking, Expedia y tu extranet?" },
            { ok: false, text: "¿Has destruido de forma segura los registros físicos antiguos de huéspedes (trituradora certificada)?" },
            { ok: true,  text: "¿Tu personal sabe qué hacer ante una caída total del sistema PMS?" },
            { ok: false, text: "¿Tu contrato con el proveedor de PMS incluye cláusulas de responsabilidad en caso de brecha?" },
            { ok: true,  text: "¿Tienes un registro de actividad (log) de todos los accesos al sistema de reservas?" },
            { ok: false, text: "¿Has realizado un análisis de vulnerabilidades de tu red en los últimos 12 meses?" },
            { ok: true,  text: "¿Tus TPV están actualizados y certificados PCI-DSS por tu proveedor bancario?" },
            { ok: false, text: "¿Dispones de un protocolo escrito de respuesta ante incidentes visible para todo el equipo?" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderBottom: i < 9 ? "1px solid var(--border)" : "none" }}>
              <div style={{ width: "22px", height: "22px", border: `2px solid ${item.ok ? "#059669" : "#d1d5db"}`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px", background: item.ok ? "#ecfdf5" : "white" }}>
                {item.ok && <CheckCircle size={14} color="#059669" />}
              </div>
              <span style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.65" }}>{item.text}</span>
            </div>
          ))}
          <p style={{ fontSize: "13px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "16px", marginBottom: 0 }}>
            Los ítems sin marcar representan las carencias más habituales detectadas en auditorías del sector. ¿Cuántos tienes pendientes?
          </p>
        </div>

        {/* CTA FINAL */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #164e63 100%)", borderRadius: "12px", padding: "44px 40px", textAlign: "center", marginBottom: "40px" }}>
          <div style={{ width: "60px", height: "60px", background: "rgba(8,145,178,0.15)", border: "1px solid rgba(8,145,178,0.35)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Hotel size={30} color="#22d3ee" />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>
            Haz de la seguridad tu mejor ventaja competitiva
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", maxWidth: "540px", margin: "0 auto 28px" }}>
            Un hotel seguro es un hotel que recibe mejores reseñas. Ofrecemos consultoría especializada para el sector HORECA. Asegura tu negocio hoy para dormir tranquilo mañana.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            style={{ background: "#0891b2", color: "white", border: "none", borderRadius: "8px", padding: "14px 32px", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Consultoría para el Sector HORECA
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/hosteleria-y-turismo")}
            style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontSize: "14px", fontFamily: "var(--font-body)", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <ChevronRight size={14} style={{ transform: "rotate(180deg)" }} />
            Ver todos los artículos de Hostelería y Turismo
          </button>
        </div>

      </div>
    </main>
  );
}

// ─── ARTICLE: CIBERSEGURIDAD EDUCACIÓN ───────────────
function ArticleCiberseguridadEducacion() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "educacion-digital/ciberseguridad-academias-colegios-elearning");

  const pStyle = { fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "var(--text-secondary)", marginBottom: "20px" };
  const h2Style = { fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", marginTop: "40px", paddingTop: "16px", borderTop: "1px solid var(--border)" };
  const h3Style = { fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", marginTop: "28px" };

  return (
    <main style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SchemaMarkup type="article" data={article} />
      <SchemaMarkup type="breadcrumb" data={{ items: [
        { name: "Inicio", path: "/" },
        { name: "Educación Digital", path: "/educacion-digital" },
        { name: "Ciberseguridad en Academias", path: "/educacion" },
      ]}} />

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1d4ed8 100%)", padding: "64px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 60% 30%, rgba(59,130,246,0.3) 0%, transparent 55%)" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span onClick={() => navigate("/")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Inicio</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span onClick={() => navigate("/educacion-digital")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Educación Digital</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>Ciberseguridad en Academias</span>
          </div>

          {/* Category badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.45)", borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
            <GraduationCap size={13} color="#93c5fd" />
            <span style={{ fontSize: "12px", color: "#93c5fd", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.5px" }}>EDUCACIÓN DIGITAL</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,4.5vw,44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Ciberseguridad en la Era del E-learning:<br />
            <span style={{ color: "#93c5fd" }}>Protegiendo el Conocimiento</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: "28px", maxWidth: "680px" }}>
            En 2026, una brecha de datos en tu academia no solo expone nombres, sino el futuro y la privacidad de tus alumnos.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article?.author}
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article?.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
              {article && new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* AD: Below H1 */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="below-h1" />
        </div>

        {/* ── SECCIÓN 1: ESCENARIO ── */}
        <h2 style={h2Style}>¿Por qué las academias online están bajo ataque?</h2>
        <p style={pStyle}>
          Las instituciones educativas manejan una combinación explosiva para un ciberdelincuente: <strong>datos personales sensibles</strong> (incluyendo datos de menores), información de pago recurrente y una infraestructura técnica a menudo desactualizada. Un ataque de <strong>Ransomware a una academia online</strong> puede paralizar el aprendizaje de miles de alumnos y destruir años de material lectivo en segundos.
        </p>
        <p style={pStyle}>
          El sector educativo registró en 2025 un incremento del <strong>+238% en ataques dirigidos a plataformas LMS</strong>, convirtiéndose en el tercer sector más atacado a nivel global, por detrás de la sanidad y las finanzas. La razón es sencilla: los sistemas educativos digitales suelen estar gestionados por equipos pequeños, sin departamento de IT dedicado y con presupuestos de seguridad mínimos.
        </p>

        {/* Stat strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            { value: "+238%", label: "aumento de ataques a LMS en 2025" },
            { value: "3er", label: "sector más atacado a nivel global" },
            { value: "14 años", label: "edad mínima para consentimiento LOPD sin tutor" },
          ].map((s, i) => (
            <div key={i} style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)", borderRadius: "10px", padding: "20px 22px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, color: "#93c5fd", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── SECCIÓN 2: 4 COLUMNAS ── */}
        <h2 style={h2Style}>Las 4 Columnas de la Academia Segura</h2>
        <p style={pStyle}>Una academia digital robusta se apoya en cuatro pilares que deben trabajar de forma coordinada:</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(195px, 1fr))", gap: "16px", marginBottom: "36px" }}>
          {[
            {
              icon: Shield,
              color: "#2563eb",
              bg: "#eff6ff",
              n: "01",
              title: "Integridad del LMS",
              text: "Moodle, Canvas o plataforma propia: actualiza plugins y base de datos. Los plugins obsoletos son el vector de ataque #1 en plataformas educativas.",
            },
            {
              icon: Users,
              color: "#7c3aed",
              bg: "#f5f3ff",
              n: "02",
              title: "Privacidad de Menores",
              text: "El consentimiento para grabaciones y almacenamiento de fotos de alumnos menores debe estar digitalmente certificado por sus tutores legales.",
            },
            {
              icon: Video,
              color: "#0891b2",
              bg: "#ecfeff",
              n: "03",
              title: "Seguridad en Videoconferencias",
              text: "Salas de espera activadas, acceso bloqueado tras inicio de clase y cifrado extremo a extremo. El Zoombombing sigue siendo una amenaza real.",
            },
            {
              icon: FileLock,
              color: "#059669",
              bg: "#ecfdf5",
              n: "04",
              title: "Protección de Contenido",
              text: "Tus cursos son tu activo más valioso. Marcas de agua dinámicas y sistemas de acceso único frenan la piratería y el acceso compartido de cuentas.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ padding: "24px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderTop: `3px solid ${item.color}`, position: "relative" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: item.color, fontWeight: 700, marginBottom: "12px", letterSpacing: "1px" }}>{item.n}</div>
                <div style={{ width: "42px", height: "42px", background: item.bg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                  <Icon size={21} color={item.color} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── SECCIÓN 3: VIDEOCONFERENCIAS ── */}
        <h2 style={h2Style}>Guía de Clases por Videoconferencia: Cómo Evitar el Zoombombing</h2>
        <div style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "28px 32px", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <Video size={22} color="#2563eb" />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 800, color: "#1e3a8a" }}>Protocolo de Clase Segura</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { step: "Sala de Espera", desc: "Activa siempre la sala de espera en Zoom, Teams o Google Meet. Valida manualmente quién entra antes de iniciar la clase." },
              { step: "Bloqueo post-inicio", desc: "Una vez que todos los alumnos han entrado, bloquea la sala. Nadie más puede acceder aunque tenga el enlace." },
              { step: "No compartas el enlace públicamente", desc: "Envía el link solo por canales internos (LMS, email corporativo). Nunca lo publiques en redes sociales ni grupos abiertos." },
              { step: "Cifrado extremo a extremo", desc: "Usa plataformas que garanticen E2E encryption para las clases. Google Meet, Zoom Pro y Teams cumplen este requisito cuando se configura correctamente." },
              { step: "Gestión de grabaciones", desc: "Las grabaciones deben almacenarse en ubicación segura, con acceso restringido y borradas automáticamente al finalizar el curso." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <CheckCircle size={18} color="#2563eb" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "#1e3a8a" }}>{item.step}: </span>
                  <span style={{ fontSize: "14px", color: "#374151", lineHeight: "1.65" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECCIÓN 4: LMS ── */}
        <h2 style={h2Style}>Seguridad en el LMS: De Moodle a las Plataformas Personalizadas</h2>
        <p style={pStyle}>
          Independientemente de si usas Moodle, Canvas, Teachable, o una plataforma desarrollada a medida, los vectores de ataque son los mismos. La diferencia está en cómo los gestionas.
        </p>

        <h3 style={h3Style}>Control de Acceso y Permisos</h3>
        <p style={pStyle}>
          <strong>Segmenta los permisos de forma estricta</strong>: un profesor no debe tener acceso a la base de datos de pagos, y un alumno solo debe ver su propio progreso. El principio de mínimo privilegio no es burocracia, es la diferencia entre una brecha contenida y una catástrofe de datos.
        </p>

        <h3 style={h3Style}>Integridad de Exámenes y Anti-fraude</h3>
        <p style={pStyle}>
          El fraude académico digital ha evolucionado significativamente. Para mantener el prestigio de tu certificación, implementa <strong>autenticación 2FA para el acceso a evaluaciones críticas</strong>. Considera herramientas de proctoring que detecten comportamientos sospechosos durante los exámenes online sin invadir la privacidad del alumno más allá de lo necesario.
        </p>

        <h3 style={h3Style}>Plan ante Caída del Sistema</h3>
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderLeft: "4px solid #ea580c", borderRadius: "0 8px 8px 0", padding: "20px 24px", marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <AlertTriangle size={20} color="#ea580c" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#ea580c", marginBottom: "6px", fontWeight: 700 }}>Continuidad del Servicio</div>
              <p style={{ ...pStyle, marginBottom: "8px", fontSize: "14px", color: "#7c2d12" }}>
                <strong>Backups incrementales cada hora:</strong> Para que ningún alumno pierda su progreso en un curso, especialmente cerca de las fechas de examen.
              </p>
              <p style={{ ...pStyle, marginBottom: 0, fontSize: "14px", color: "#7c2d12" }}>
                <strong>Servidores espejo (Mirroring):</strong> Para que la academia siga online mientras reparas el servidor principal. El tiempo de inactividad percibido por el alumno es cero.
              </p>
            </div>
          </div>
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── CHECKLIST LOPD ── */}
        <h2 style={h2Style}>Checklist de Privacidad LOPD/RGPD para el Sector Educativo</h2>
        <p style={pStyle}>
          El sector educativo tiene obligaciones específicas bajo la LOPDGDD, especialmente cuando se tratan datos de menores. Esta lista cubre los puntos críticos que más frecuentemente faltan en las auditorías:
        </p>
        <div style={{ background: "var(--bg-warm)", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px 32px", marginBottom: "36px" }}>
          {[
            { ok: true,  text: "¿Están todos los plugins de tu LMS (Moodle/WordPress) actualizados a su última versión estable?" },
            { ok: false, text: "¿Las grabaciones de las clases se borran automáticamente tras la finalización del curso?" },
            { ok: true,  text: "¿Usas una pasarela de pago externa certificada para no almacenar datos bancarios en tu servidor?" },
            { ok: false, text: "¿Tienes un aviso legal específico y adaptado para menores de 14 años con consentimiento de tutor?" },
            { ok: false, text: "¿Has formado a tus profesores en la detección de correos de Phishing dirigidos al sector educativo?" },
            { ok: true,  text: "¿Los contratos con proveedores de cloud (AWS, Google, Microsoft) incluyen cláusulas de tratamiento de datos RGPD?" },
            { ok: false, text: "¿Dispones de un Registro de Actividades de Tratamiento (RAT) actualizado conforme al Artículo 30 RGPD?" },
            { ok: true,  text: "¿El acceso al LMS requiere autenticación de doble factor (2FA) para administradores y profesores?" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderBottom: i < 7 ? "1px solid var(--border)" : "none" }}>
              <div style={{ width: "22px", height: "22px", border: `2px solid ${item.ok ? "#059669" : "#d1d5db"}`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px", background: item.ok ? "#ecfdf5" : "white" }}>
                {item.ok && <CheckCircle size={14} color="#059669" />}
              </div>
              <span style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.65" }}>{item.text}</span>
            </div>
          ))}
          <p style={{ fontSize: "13px", color: "var(--text-muted)", fontStyle: "italic", marginTop: "16px", marginBottom: 0 }}>
            Cada ítem sin marcar es una vulnerabilidad legal o técnica activa. ¿Cuántos tienes pendientes en tu academia?
          </p>
        </div>

        {/* CTA FINAL */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)", borderRadius: "12px", padding: "44px 40px", textAlign: "center", marginBottom: "40px" }}>
          <div style={{ width: "60px", height: "60px", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.35)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <GraduationCap size={30} color="#93c5fd" />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>
            Convierte la seguridad en un valor añadido para tus alumnos
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", maxWidth: "540px", margin: "0 auto 28px" }}>
            Una academia segura es una academia con prestigio. Te ayudamos a cumplir con la normativa y a blindar tu plataforma contra ataques externos. Haz que el aprendizaje sea tu única preocupación.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            style={{ background: "#2563eb", color: "white", border: "none", borderRadius: "8px", padding: "14px 32px", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Auditoría para Centros Educativos
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/educacion-digital")}
            style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontSize: "14px", fontFamily: "var(--font-body)", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <ChevronRight size={14} style={{ transform: "rotate(180deg)" }} />
            Ver todos los artículos de Educación Digital
          </button>
        </div>

      </div>
    </main>
  );
}

// ─── ARTICLE: AUDITORÍA SEGURIDAD CLÍNICAS ───────────
function ArticleAuditoriaSaludClinicas() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "salud-y-clinicas/auditoria-seguridad-clinicas-ens-historial-clinico");

  const pStyle = { fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "var(--text-secondary)", marginBottom: "20px" };
  const h2Style = { fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", marginTop: "40px", paddingTop: "16px", borderTop: "1px solid var(--border)" };
  const h3Style = { fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", marginTop: "28px" };

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <SchemaMarkup type="article" data={article} />
      <SchemaMarkup type="breadcrumb" data={{ items: [
        { name: "Inicio", path: "/" },
        { name: "Salud y Clínicas", path: "/salud-y-clinicas" },
        { name: "Auditoría de Seguridad en Clínicas", path: "/auditoria-salud" },
      ]}} />

      {/* HERO — estilo limpio, casi clínico */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 60%, #0369a1 100%)", padding: "64px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(14,165,233,0.2) 0%, transparent 55%)" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span onClick={() => navigate("/")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Inicio</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span onClick={() => navigate("/salud-y-clinicas")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Salud y Clínicas</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>Auditoría de Seguridad</span>
          </div>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(14,165,233,0.2)", border: "1px solid rgba(14,165,233,0.4)", borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
            <Stethoscope size={13} color="#7dd3fc" />
            <span style={{ fontSize: "12px", color: "#7dd3fc", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.5px" }}>SALUD Y CLÍNICAS</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,4.5vw,44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            La Auditoría de Ciberseguridad<br />en Centros de Salud:<br />
            <span style={{ color: "#7dd3fc" }}>Más allá del Antivirus</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: "28px", maxWidth: "680px" }}>
            En 2026, la historia clínica electrónica es el activo más valioso y vulnerable de tu consulta.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article?.author}
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article?.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
              {article && new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* AD: Below H1 */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="below-h1" />
        </div>

        {/* ── SECCIÓN 1: EL PESO DE LA LEY ── */}
        <h2 style={h2Style}>La Protección de Datos de Salud: Categoría Especial</h2>
        <p style={pStyle}>
          Los datos de salud están catalogados como <strong>«Categoría Especial»</strong> por el RGPD (Art. 9), lo que implica el nivel más alto de obligaciones de protección. Una simple pérdida de una tablet con acceso al software de gestión puede acarrear <strong>sanciones de hasta el 4% de la facturación anual</strong> de la clínica, con un máximo de 20 millones de euros.
        </p>
        <p style={pStyle}>
          No es solo software; es la custodia de la intimidad del paciente. En 2026, la AEPD ha reforzado sus campañas de inspección proactiva al sector sanitario, enfocándose especialmente en clínicas dentales, centros de estética médica y consultas de fisioterapia, que habitualmente presentan las mayores brechas de cumplimiento.
        </p>

        {/* Multas strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            { value: "4%", label: "de facturación anual — multa máxima RGPD" },
            { value: "20M€", label: "tope absoluto por infracción grave" },
            { value: "72h", label: "plazo de notificación a la AEPD tras brecha" },
          ].map((s, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #e0f2fe", borderTop: "3px solid #0284c7", borderRadius: "8px", padding: "20px 22px", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: "#0284c7", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── SECCIÓN 2: PUNTOS CRÍTICOS AUDITORÍA ── */}
        <h2 style={h2Style}>Puntos Críticos de la Auditoría de Seguridad</h2>
        <p style={pStyle}>Una auditoría técnica de ciberseguridad en un centro médico evalúa al menos estos tres vectores críticos:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
          {[
            {
              icon: Eye,
              color: "#0284c7",
              bg: "#e0f2fe",
              title: "Control de Accesos y Registro de Logs",
              text: "¿Quién entra en qué ficha? Implementa el registro de logs que documente quién, cuándo y desde dónde se consultó un historial clínico. Sin esto, es imposible detectar accesos indebidos o exfiltración de datos por personal interno.",
            },
            {
              icon: Lock,
              color: "#7c3aed",
              bg: "#f5f3ff",
              title: "Cifrado en Reposo (At-Rest Encryption)",
              text: "Los datos en tu servidor deben ser ilegibles si alguien roba el disco duro físico. El cifrado AES-256 garantiza que aunque el hardware sea sustraído, los historiales clínicos sean inutilizables sin la clave de descifrado.",
            },
            {
              icon: Mail,
              color: "#dc2626",
              bg: "#fef2f2",
              title: "La Trampa del Correo Electrónico",
              text: "Enviar informes de laboratorio o diagnósticos por email convencional (Gmail, Outlook estándar) es una infracción directa del RGPD. Usa plataformas de mensajería cifrada certificadas o portales de paciente con autenticación.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ display: "flex", gap: "20px", padding: "24px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderLeft: `4px solid ${item.color}`, alignItems: "flex-start" }}>
                <div style={{ width: "46px", height: "46px", background: item.bg, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={22} color={item.color} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── ENS BLOCK ── */}
        <div style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "28px 32px", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
            <div style={{ width: "48px", height: "48px", background: "#2563eb", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Shield size={24} color="white" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#2563eb", marginBottom: "8px", fontWeight: 700 }}>Marco Legal — ENS</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 800, color: "#1e3a8a", marginBottom: "10px" }}>El Esquema Nacional de Seguridad (ENS)</div>
              <p style={{ fontSize: "14px", color: "#1e40af", lineHeight: "1.7", marginBottom: "10px" }}>
                El ENS es de <strong>aplicación obligatoria para centros sanitarios que intercambien datos con la Administración Pública</strong> (Seguridad Social, mutuas, informes para juzgados). Desde 2022, las clínicas privadas con receta electrónica o acceso a la historia clínica compartida del SNS deben tener <strong>certificación ENS de nivel medio</strong> como mínimo.
              </p>
              <p style={{ fontSize: "14px", color: "#1e40af", lineHeight: "1.7", margin: 0 }}>
                Esto implica controles específicos de gestión de incidentes, continuidad del negocio y una política de seguridad documentada y revisada anualmente.
              </p>
            </div>
          </div>
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── SECCIÓN 3: LOCAL VS CLOUD ── */}
        <h2 style={h2Style}>Local vs. Cloud Encriptado: La Gran Decisión de 2026</h2>
        <p style={pStyle}>
          El debate ya está resuelto en la mayoría de sectores, pero en sanidad las reticencias al cloud persisten. Estos son los datos objetivos:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginBottom: "36px", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
          {/* Header */}
          <div style={{ background: "#f1f5f9", padding: "14px 20px", borderBottom: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 800, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
              <Activity size={16} color="#64748b" /> Servidor Local
            </div>
          </div>
          <div style={{ background: "#eff6ff", padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 800, color: "#1e40af", display: "flex", alignItems: "center", gap: "8px" }}>
              <Shield size={16} color="#2563eb" /> Cloud Certificado
            </div>
          </div>
          {/* Rows */}
          {[
            ["Control total del hardware", "Alta disponibilidad 99.99% SLA"],
            ["Riesgo por incendio o robo físico", "Parches de seguridad automáticos"],
            ["Depende del mantenimiento local", "Cifrado de grado militar AES-256"],
            ["Sin redundancia geográfica", "Redundancia multi-región automática"],
            ["Coste elevado de hardware inicial", "Coste predecible mensual (OpEx)"],
            ["85% de clínicas ya ha migrado al cloud en 2026", "✓ Recomendado por la AEPD y el CCN-CERT"],
          ].map((row, i) => (
            <>
              <div key={`a${i}`} style={{ padding: "12px 20px", background: i % 2 === 0 ? "white" : "#f8fafc", borderBottom: i < 5 ? "1px solid var(--border)" : "none", borderRight: "1px solid var(--border)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", display: "flex", alignItems: "center", gap: "8px" }}>
                {i === 0 ? <CheckCircle size={14} color="#059669" /> : <AlertTriangle size={14} color="#f59e0b" />}
                {row[0]}
              </div>
              <div key={`b${i}`} style={{ padding: "12px 20px", background: i % 2 === 0 ? "#fafbff" : "#f0f6ff", borderBottom: i < 5 ? "1px solid var(--border)" : "none", fontSize: "14px", color: "#1e40af", lineHeight: "1.5", display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle size={14} color="#2563eb" />
                {row[1]}
              </div>
            </>
          ))}
        </div>

        {/* ── SECCIÓN 4: BORRADO SEGURO ── */}
        <h2 style={h2Style}>El Protocolo de Borrado Seguro de Datos Médicos</h2>
        <p style={pStyle}>
          Cuando un paciente ejerce su <strong>Derecho al Olvido</strong> (Art. 17 RGPD) o la clínica cierra sus puertas, no basta con pulsar «Eliminar». Borrar un archivo en Windows solo elimina su referencia en el índice del sistema de archivos; los datos siguen físicamente en el disco y son recuperables con software forense básico.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
          {[
            {
              n: "01", icon: FileText, color: "#0284c7",
              title: "Sobrescritura certificada",
              text: "Usa software certificado (Eraser, DBAN o equivalente) que sobreescriba el espacio del disco con patrones aleatorios múltiples veces. El estándar DoD 5220.22-M requiere 7 pasadas.",
            },
            {
              n: "02", icon: Trash2, color: "#dc2626",
              title: "Destrucción física de soportes magnéticos",
              text: "Para discos duros HDD o cintas de backup antiguas, la destrucción física (desmagnetización o trituración certificada) es el único método que garantiza la irreversibilidad.",
            },
            {
              n: "03", icon: CheckCircle, color: "#059669",
              title: "Acta de destrucción documentada",
              text: "Genera y conserva un acta de destrucción de datos que puedas presentar ante la AEPD en caso de inspección. Incluye: fecha, tipo de soporte, método empleado y persona responsable.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.n} style={{ display: "flex", gap: "16px", padding: "20px 24px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                  <div style={{ width: "32px", height: "32px", background: item.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, color: "white" }}>{item.n}</span>
                  </div>
                  <Icon size={16} color={item.color} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>{item.title}</div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* CTA FINAL */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)", borderRadius: "12px", padding: "44px 40px", textAlign: "center", marginBottom: "36px" }}>
          <div style={{ width: "60px", height: "60px", background: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.35)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Stethoscope size={30} color="#7dd3fc" />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>
            ¿Tu clínica pasaría hoy una inspección técnica?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", maxWidth: "520px", margin: "0 auto 28px" }}>
            Realizamos pre-auditorías de seguridad para centros médicos y clínicas dentales. Asegura el cumplimiento normativo antes de que llegue el problema.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/contacto")}
              style={{ background: "#0284c7", color: "white", border: "none", borderRadius: "8px", padding: "14px 28px", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              Solicitar Pre-auditoría
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate("/contacto")}
              style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "8px", padding: "14px 28px", fontSize: "15px", fontWeight: 600, fontFamily: "var(--font-display)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <Download size={16} />
              Descargar Checklist de Auditoría
            </button>
          </div>
        </div>

        {/* INTERLINKING */}
        <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: "10px", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ width: "40px", height: "40px", background: "#0284c7", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <BookOpen size={20} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#0284c7", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>¿Eres nuevo aquí?</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>Lee nuestra Guía Básica de Ciberseguridad para Clínicas</div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>El punto de partida imprescindible antes de abordar una auditoría completa: LOPDGDD, RGPD y las medidas técnicas básicas.</p>
          </div>
          <button
            onClick={() => navigate("/salud-y-clinicas")}
            style={{ background: "#0284c7", color: "white", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }}
          >
            Ver guía <ChevronRight size={14} />
          </button>
        </div>

      </div>
    </main>
  );
}

// ─── ARTICLE: SECRETO PROFESIONAL LEGAL ──────────────
function ArticleSecretoProfesionalLegal() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "legal-y-asesorias/secreto-profesional-ciberseguridad-despachos");

  const pStyle = { fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "var(--text-secondary)", marginBottom: "20px" };
  const h2Style = { fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", marginTop: "40px", paddingTop: "16px", borderTop: "1px solid var(--border)" };
  const h3Style = { fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", marginTop: "28px" };

  return (
    <main style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SchemaMarkup type="article" data={article} />
      <SchemaMarkup type="breadcrumb" data={{ items: [
        { name: "Inicio", path: "/" },
        { name: "Legal y Asesorías", path: "/legal-y-asesorias" },
        { name: "Secreto Profesional Digital", path: "/legal-y-asesorias/secreto-profesional" },
      ]}} />

      {/* HERO — Gabinete Jurídico: slate + amber */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #292524 100%)", padding: "64px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 65% 35%, rgba(217,164,48,0.15) 0%, transparent 55%)" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span onClick={() => navigate("/")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Inicio</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span onClick={() => navigate("/legal-y-asesorias")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Legal y Asesorías</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>Secreto Profesional Digital</span>
          </div>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(217,164,48,0.15)", border: "1px solid rgba(217,164,48,0.4)", borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
            <Gavel size={13} color="#fbbf24" />
            <span style={{ fontSize: "12px", color: "#fbbf24", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.5px" }}>LEGAL Y ASESORÍAS</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,4.5vw,44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            El Secreto Profesional en 2026:<br />
            <span style={{ color: "#fbbf24" }}>Ciberseguridad para el Sector Legal</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: "28px", maxWidth: "680px" }}>
            Un despacho hackeado no solo pierde datos; pierde la licencia para ejercer la confianza de sus clientes.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article?.author}
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article?.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
              {article && new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* AD: Below H1 */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="below-h1" />
        </div>

        {/* ── SECCIÓN 1: RESPONSABILIDAD CIVIL ── */}
        <h2 style={h2Style}>Más allá de la LOPD: La Responsabilidad Civil del Abogado</h2>
        <p style={pStyle}>
          En 2026, los tribunales españoles están empezando a exigir <strong>responsabilidades civiles directas a los abogados</strong> cuyos expedientes han sido filtrados por falta de medidas básicas de seguridad. Si un hacker accede a una estrategia de defensa o a un acuerdo de fusión confidencial, el daño patrimonial para el cliente puede ser incalculable y la responsabilidad profesional, inevitable.
        </p>
        <p style={pStyle}>
          El Estatuto General de la Abogacía Española establece que la protección del secreto profesional es una obligación deontológica de primer orden. En el entorno digital, esto se traduce en la obligación de adoptar medidas técnicas equivalentes al nivel de sensibilidad de la información gestionada.
        </p>

        {/* Alerta de riesgo */}
        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderLeft: "4px solid #d97706", borderRadius: "0 8px 8px 0", padding: "20px 24px", marginBottom: "36px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <ShieldAlert size={22} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#d97706", marginBottom: "8px", fontWeight: 700 }}>Jurisprudencia 2025-2026</div>
              <p style={{ ...pStyle, marginBottom: "6px", fontSize: "14px", color: "#92400e" }}>
                El Tribunal Supremo ha establecido en sentencias recientes que la negligencia en la custodia digital de información confidencial puede constituir <strong>mala praxis profesional sancionable</strong>, independientemente de si la brecha fue causada por un tercero (ciberataque), si el abogado no adoptó las medidas preventivas exigibles al estado actual de la tecnología.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECCIÓN 2: PUNTOS CRÍTICOS ── */}
        <h2 style={h2Style}>Puntos Críticos del Despacho Digital</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
          {[
            {
              icon: Mail,
              color: "#dc2626",
              bg: "#fef2f2",
              title: "Comunicaciones Cifradas: El Email Convencional No Basta",
              text: "El envío de pruebas, sentencias y datos personales por email sin cifrar (Gmail, Outlook estándar) es una práctica de alto riesgo que incumple el RGPD. Implementar portales de cliente seguros con autenticación es hoy una necesidad competitiva, no un lujo.",
            },
            {
              icon: Lock,
              color: "#7c3aed",
              bg: "#f5f3ff",
              title: "Gestión de Contraseñas y MFA Obligatorio",
              text: "El acceso al software de gestión procesal debe estar protegido por doble factor de autenticación. Una contraseña apuntada en un expediente físico o en un post-it es un fallo de seguridad crítico que invalida todas las demás medidas tomadas.",
            },
            {
              icon: FileKey,
              color: "#d97706",
              bg: "#fffbeb",
              title: "El Problema Invisible: Los Metadatos",
              text: "Un archivo Word puede revelar quién lo editó, cuánto tiempo se trabajó en él y los comentarios eliminados. La limpieza de metadatos antes del envío judicial (o a la parte contraria) es parte de la higiene digital básica de cualquier despacho.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ display: "flex", gap: "20px", padding: "24px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderLeft: `4px solid ${item.color}`, alignItems: "flex-start" }}>
                <div style={{ width: "46px", height: "46px", background: item.bg, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={22} color={item.color} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── SECCIÓN 3: CLOUD JURÍDICA ── */}
        <h2 style={h2Style}>La Nube Jurídica: Seguridad vs. Comodidad</h2>
        <p style={pStyle}>
          No todas las nubes son iguales. Dropbox y Google Drive son herramientas excelentes para uso personal, pero presentan brechas significativas para un despacho profesional que maneja información privilegiada. Un despacho jurídico requiere una solución de cloud que garantice:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginBottom: "36px", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
          {/* Headers */}
          <div style={{ background: "#fef9c3", padding: "14px 20px", borderBottom: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 800, color: "#713f12", display: "flex", alignItems: "center", gap: "8px" }}>
              <Cloud size={16} color="#a16207" /> Nube Pública (Dropbox/Drive)
            </div>
          </div>
          <div style={{ background: "#f5f3ff", padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 800, color: "#4c1d95", display: "flex", alignItems: "center", gap: "8px" }}>
              <Shield size={16} color="#7c3aed" /> Nube Privada Cifrada
            </div>
          </div>
          {/* Rows */}
          {[
            ["Servidores fuera de la UE (EE.UU.)", "Servidores en territorio UE — RGPD compliant"],
            ["El proveedor puede acceder a tus archivos", "Cifrado punto a punto — ni el proveedor puede leer tus docs"],
            ["Sin versiones históricas garantizadas", "Backups con versiones históricas — anti-ransomware"],
            ["Sin control de acceso granular", "Permisos por expediente y por usuario"],
            ["No apto para datos de Categoría Especial", "✓ Certificado para datos legales y de alta sensibilidad"],
          ].map((row, i) => (
            <>
              <div key={`a${i}`} style={{ padding: "12px 20px", background: i % 2 === 0 ? "white" : "#fffdf0", borderBottom: i < 4 ? "1px solid var(--border)" : "none", borderRight: "1px solid var(--border)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", display: "flex", alignItems: "center", gap: "8px" }}>
                <AlertTriangle size={14} color="#f59e0b" style={{ flexShrink: 0 }} />
                {row[0]}
              </div>
              <div key={`b${i}`} style={{ padding: "12px 20px", background: i % 2 === 0 ? "#faf8ff" : "#f5f3ff", borderBottom: i < 4 ? "1px solid var(--border)" : "none", fontSize: "14px", color: "#4c1d95", lineHeight: "1.5", display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle size={14} color="#7c3aed" style={{ flexShrink: 0 }} />
                {row[1]}
              </div>
            </>
          ))}
        </div>

        {/* ── SECCIÓN 4: DESPACHO SIN PAPELES ── */}
        <h2 style={h2Style}>Protocolo de Despacho Sin Papeles Seguro</h2>
        <p style={pStyle}>
          La transición al despacho digital no termina en escanear los documentos. El proceso completo exige un protocolo que garantice la cadena de custodia digital y la destrucción certificada del soporte original:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px", marginBottom: "36px" }}>
          {[
            { n: "01", icon: FileText, color: "#7c3aed", title: "Escaneo con metadatos limpios", text: "Escanea los documentos físicos en formato PDF/A (archivístico). Verifica que el escáner no incruste metadatos de ubicación o dispositivo." },
            { n: "02", icon: Lock, color: "#0284c7", title: "Almacenamiento cifrado inmediato", text: "El archivo digitalizado debe cifrarse y almacenarse en el repositorio seguro antes de ser enviado o compartido con cualquier parte." },
            { n: "03", icon: Trash2, color: "#dc2626", title: "Destrucción certificada del original", text: "Los documentos físicos con datos personales deben destruirse mediante trituradora de nivel P-4 o superior (norma DIN 66399). Genera acta de destrucción." },
            { n: "04", icon: CheckCircle, color: "#059669", title: "Registro en el log de custodia", text: "Cada acción sobre un expediente (creación, consulta, modificación, destrucción) debe quedar registrada con marca de tiempo para demostrar la cadena de custodia ante el tribunal." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.n} style={{ padding: "22px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderTop: `3px solid ${item.color}` }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: item.color, fontWeight: 700, marginBottom: "10px", letterSpacing: "1px" }}>{item.n}</div>
                <div style={{ width: "40px", height: "40px", background: item.color + "15", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  <Icon size={20} color={item.color} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* ── SECCIÓN 5: DESTRUCCIÓN DE EVIDENCIAS ── */}
        <h2 style={h2Style}>El Protocolo de Destrucción de Evidencias Digitales</h2>
        <p style={pStyle}>
          El fin de un caso no termina con la sentencia. La custodia de documentos digitales tras el cierre del expediente debe seguir un protocolo de <strong>«Congelación»</strong> (si hay posibilidad de recurso o apelación) o <strong>«Borrado Seguro Certificado»</strong> (una vez transcurridos los plazos de prescripción), evitando que discos duros antiguos terminen en el mercado de segunda mano con información privilegiada de clientes.
        </p>
        <div style={{ background: "#fffbeb", border: "2px dashed #d97706", borderRadius: "12px", padding: "24px 28px", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <Gavel size={20} color="#d97706" />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 800, color: "#92400e" }}>Regla de Oro: Plazos de Conservación</span>
          </div>
          <ul style={{ ...pStyle, paddingLeft: "20px", marginBottom: 0, fontSize: "14px", color: "#78350f" }}>
            <li style={{ marginBottom: "10px" }}><strong>Expedientes civiles y mercantiles:</strong> Mínimo 6 años desde el cierre (Código de Comercio).</li>
            <li style={{ marginBottom: "10px" }}><strong>Expedientes penales:</strong> Hasta la prescripción del delito o 15 años como máximo.</li>
            <li style={{ marginBottom: "10px" }}><strong>Documentación fiscal del despacho:</strong> 4 años (período de prescripción tributaria).</li>
            <li style={{ marginBottom: 0 }}><strong>Datos de contacto de clientes:</strong> Mientras exista relación comercial + 3 años para reclamaciones.</li>
          </ul>
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* CTA FINAL */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1c1917 60%, #292524 100%)", borderRadius: "12px", padding: "44px 40px", textAlign: "center", marginBottom: "36px" }}>
          <div style={{ width: "60px", height: "60px", background: "rgba(217,164,48,0.15)", border: "1px solid rgba(217,164,48,0.35)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Gavel size={30} color="#fbbf24" />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>
            ¿Es tu despacho una fortaleza o un colador digital?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", maxWidth: "520px", margin: "0 auto 28px" }}>
            Especialistas en seguridad para el sector legal. Protegemos tu activo más valioso: la información de tus clientes. Solicita una auditoría de confidencialidad hoy mismo.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            style={{ background: "#d97706", color: "white", border: "none", borderRadius: "8px", padding: "14px 32px", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Consultoría para Firmas Legales
            <ArrowRight size={18} />
          </button>
        </div>

        {/* INTERLINKING */}
        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ width: "40px", height: "40px", background: "#d97706", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <BookOpen size={20} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#d97706", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>¿Necesitas lo básico?</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>Revisa nuestro Manual de Ciberseguridad para Asesorías</div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>Guía fundamental para despachos que están comenzando su camino hacia el cumplimiento normativo digital.</p>
          </div>
          <button
            onClick={() => navigate("/legal-y-asesorias")}
            style={{ background: "#d97706", color: "white", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }}
          >
            Ver manual <ChevronRight size={14} />
          </button>
        </div>

      </div>
    </main>
  );
}

// ─── ARTICLE: SEGURIDAD PAGOS ECOMMERCE ──────────────
function ArticleSeguridadPagosEcommerce() {
  const { navigate } = useRouter();
  const article = SAMPLE_ARTICLES.find((a) => a.slug === "ecommerce-y-retail/seguridad-pagos-tpv-virtual-fraude");

  const pStyle = { fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "var(--text-secondary)", marginBottom: "20px" };
  const h2Style = { fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", marginTop: "40px", paddingTop: "16px", borderTop: "1px solid var(--border)" };
  const h3Style = { fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", marginTop: "28px" };

  return (
    <main style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SchemaMarkup type="article" data={article} />
      <SchemaMarkup type="breadcrumb" data={{ items: [
        { name: "Inicio", path: "/" },
        { name: "E-commerce y Retail", path: "/ecommerce-y-retail" },
        { name: "Seguridad en Pagos Online", path: "/ecommerce-y-retail/seguridad-pagos" },
      ]}} />

      {/* HERO — Fintech: slate + green */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #052e16 55%, #14532d 100%)", padding: "64px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 65% 35%, rgba(34,197,94,0.18) 0%, transparent 55%)" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span onClick={() => navigate("/")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>Inicio</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span onClick={() => navigate("/ecommerce-y-retail")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>E-commerce y Retail</span>
            <ChevronRight size={12} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>Seguridad en Pagos Online</span>
          </div>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
            <ShoppingCart size={13} color="#86efac" />
            <span style={{ fontSize: "12px", color: "#86efac", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.5px" }}>E-COMMERCE Y RETAIL</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,4.5vw,44px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Seguridad en el Checkout:<br />
            <span style={{ color: "#86efac" }}>El Corazón de tu Ecommerce en 2026</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: "28px", maxWidth: "680px" }}>
            Una tienda rápida vende, pero una tienda segura es la única que sobrevive a las reclamaciones bancarias.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={11} /> {article?.author}
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} /> {article?.readTime} de lectura
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>
              {article && new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* AD: Below H1 */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="below-h1" />
        </div>

        {/* ── ALERTA CHARGEBACKS ── */}
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderLeft: "4px solid #ea580c", borderRadius: "0 8px 8px 0", padding: "24px 28px", marginBottom: "36px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <RefreshCw size={22} color="#ea580c" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#ea580c", marginBottom: "8px", fontWeight: 700 }}>El Coste Oculto de los Chargebacks</div>
              <p style={{ ...pStyle, marginBottom: "8px", fontSize: "14px", color: "#7c2d12" }}>
                Cada chargeback (devolución forzosa) no solo te devuelve el importe de la venta al cliente: también te cuesta entre <strong>15 y 100 € en comisiones bancarias</strong> por gestión de disputa. Si tu ratio de chargebacks supera el <strong>1%</strong>, tu pasarela de pago puede suspenderte la cuenta sin previo aviso.
              </p>
              <p style={{ ...pStyle, marginBottom: 0, fontSize: "13px", color: "#9a3412" }}>
                En 2026, el fraude con tarjeta costará a los ecommerces españoles más de <strong>890 millones de euros</strong>. La prevención es 20x más barata que la gestión de disputas.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECCIÓN 1: EVOLUCIÓN DEL FRAUDE ── */}
        <h2 style={h2Style}>Más allá del Phishing: El Robo de Sesión</h2>
        <p style={pStyle}>
          En 2026, los atacantes ya no solo roban números de tarjeta; <strong>roban la sesión activa del cliente</strong> (Session Hijacking). Si tu ecommerce no tiene una gestión de cookies segura con tokens rotatorios y binding de IP, un hacker puede «comprar» con la cuenta de un usuario legítimo sin que salten las alarmas de contraseña. El pedido pasa como legítimo, el banco aprueba el cargo y tú envías el producto a una dirección de reenvío.
        </p>
        <p style={pStyle}>
          El daño es triple: pierdes el producto, devuelves el dinero al titular real de la tarjeta y absorbes las comisiones de la disputa. Sin evidencias digitales adecuadas, no hay defensa posible ante el banco.
        </p>

        {/* Stats strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            { value: "890M€", label: "pérdidas por fraude en ecommerce España 2026" },
            { value: "1%", label: "ratio máximo de chargebacks antes de suspensión" },
            { value: "20x", label: "más barata la prevención que la gestión de disputas" },
          ].map((s, i) => (
            <div key={i} style={{ background: "linear-gradient(135deg, #052e16, #14532d)", borderRadius: "10px", padding: "20px 22px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, color: "#86efac", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── SECCIÓN 2: TPV VIRTUAL ── */}
        <h2 style={h2Style}>Puntos Críticos del TPV Virtual</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
          {[
            {
              icon: CreditCard,
              color: "#059669",
              bg: "#ecfdf5",
              title: "Tokenización de Pagos: Nunca Toques los Datos de la Tarjeta",
              text: "Nunca almacenes los datos de la tarjeta en tu base de datos. Usa los «tokens» proporcionados por tu pasarela (Stripe, Redsys, Braintree) para que el dato sensible nunca toque tu servidor. Si te hackean, los tokens robados son inútiles sin las claves del proveedor.",
            },
            {
              icon: ShieldCheck,
              color: "#2563eb",
              bg: "#eff6ff",
              title: "Autenticación SCA (Strong Customer Authentication) — PSD3",
              text: "Con la entrada en vigor de la normativa PSD3 en 2026, el doble factor en el móvil del cliente es obligatorio para todas las transacciones superiores a 30 €. Asegúrate de que tu checkout no genera errores en este paso: cada fricción innecesaria en el SCA equivale a un carrito abandonado.",
            },
            {
              icon: BadgeAlert,
              color: "#ea580c",
              bg: "#fff7ed",
              title: "Protección contra el «Carding»",
              text: "Implementa «rate limiting» y CAPTCHA para evitar que bots automatizados prueben miles de tarjetas robadas en tu formulario de pago. Sin esta medida, tu tienda puede convertirse en un validador gratuito de datos robados, con las consecuencias legales que eso conlleva.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ display: "flex", gap: "20px", padding: "24px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderLeft: `4px solid ${item.color}`, alignItems: "flex-start" }}>
                <div style={{ width: "46px", height: "46px", background: item.bg, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={22} color={item.color} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── COMPARATIVA: PAGO DIRECTO VS TOKENS ── */}
        <h2 style={h2Style}>Pago Directo vs. Tokenización: Por Qué Importa</h2>
        <p style={pStyle}>La diferencia entre guardar datos de tarjeta en tu servidor y usar tokenización no es solo técnica; es la diferencia entre una sanción millonaria y la tranquilidad de no tener datos que robar:</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginBottom: "36px", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
          <div style={{ background: "#fef2f2", padding: "14px 20px", borderBottom: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 800, color: "#7f1d1d", display: "flex", alignItems: "center", gap: "8px" }}>
              <AlertTriangle size={16} color="#dc2626" /> Almacenamiento Directo
            </div>
          </div>
          <div style={{ background: "#ecfdf5", padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 800, color: "#14532d", display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={16} color="#059669" /> Tokenización (Stripe / Redsys)
            </div>
          </div>
          {[
            ["Datos de tarjeta en tu servidor", "Solo tokens en tu servidor — sin datos reales"],
            ["Brecha = robo masivo de tarjetas", "Brecha = tokens inútiles para el atacante"],
            ["Obligación PCI-DSS nivel 1 costosa", "PCI-DSS simplificado (SAQ A) — mínimo esfuerzo"],
            ["Responsabilidad total en caso de fraude", "Responsabilidad compartida con la pasarela"],
            ["Multas AEPD por Categoría Especial de datos", "✓ Sin datos financieros que custodiar"],
          ].map((row, i) => (
            <>
              <div key={`a${i}`} style={{ padding: "12px 20px", background: i % 2 === 0 ? "white" : "#fff5f5", borderBottom: i < 4 ? "1px solid var(--border)" : "none", borderRight: "1px solid var(--border)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5", display: "flex", alignItems: "center", gap: "8px" }}>
                <AlertTriangle size={13} color="#dc2626" style={{ flexShrink: 0 }} />
                {row[0]}
              </div>
              <div key={`b${i}`} style={{ padding: "12px 20px", background: i % 2 === 0 ? "#f0fdf4" : "#dcfce7", borderBottom: i < 4 ? "1px solid var(--border)" : "none", fontSize: "14px", color: "#166534", lineHeight: "1.5", display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle size={13} color="#059669" style={{ flexShrink: 0 }} />
                {row[1]}
              </div>
            </>
          ))}
        </div>

        {/* ── SECCIÓN 3: DETECCIÓN DE PEDIDOS FRAUDULENTOS ── */}
        <h2 style={h2Style}>Cómo Detectar un Pedido Fraudulento</h2>
        <p style={pStyle}>
          Antes de preparar un envío de alto valor, revisa estos patrones de alerta. Cada uno por separado puede ser legítimo; varios combinados en el mismo pedido deben activar una revisión manual:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px", marginBottom: "36px" }}>
          {[
            { icon: Globe, color: "#2563eb", bg: "#eff6ff", title: "IP vs. Dirección de Envío", text: "La dirección IP del comprador está en España pero el producto se envía a un almacén de reenvío en Alemania o Rumanía." },
            { icon: Mail, color: "#7c3aed", bg: "#f5f3ff", title: "Correos Temporales", text: "Uso de emails tipo @temp-mail.org, @guerrillamail.com o nombres aleatorios generados. Ningún cliente legítimo usa un email temporal para comprar." },
            { icon: RefreshCw, color: "#ea580c", bg: "#fff7ed", title: "Intentos Múltiples Rápidos", text: "Varios intentos de compra del mismo producto en pocos minutos con diferentes tarjetas. Señal clásica de carding automatizado." },
            { icon: MousePointerClick, color: "#059669", bg: "#ecfdf5", title: "Pedido sin Historial Previo", text: "Cuenta recién creada, primer pedido de valor alto, método de envío urgente. Combinación frecuente en fraude de tarjeta robada." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ padding: "20px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", borderTop: `3px solid ${item.color}` }}>
                <div style={{ width: "40px", height: "40px", background: item.bg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  <Icon size={20} color={item.color} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>{item.title}</div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* AD: In-content */}
        <div style={{ marginBottom: "36px" }}>
          <AdSlot position="in-content" />
        </div>

        {/* ── SECCIÓN 4: PROTOCOLO ANTI-CHARGEBACK ── */}
        <h2 style={h2Style}>El Protocolo Anti-Chargeback: Tu Defensa Legal</h2>
        <p style={pStyle}>
          Las devoluciones por fraude no solo te quitan el dinero de la venta, sino que te penalizan con comisiones bancarias por cada disputa gestionada. La mejor defensa es el <strong>Registro de Evidencias Digitales</strong>: un log cifrado que documenta cada transacción con todos los elementos necesarios para ganar una disputa ante el banco emisor.
        </p>

        <div style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "28px 32px", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <Receipt size={20} color="#059669" />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 800, color: "#14532d" }}>Evidencias que debes guardar por cada pedido</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "IP + User-Agent del comprador", detail: "Fecha, hora exacta, dirección IP y navegador utilizado en el momento del pago." },
              { label: "Confirmación 3DS del banco", detail: "El código de autorización de la autenticación fuerte (SCA) que prueba que el titular de la tarjeta autorizó la transacción." },
              { label: "Aceptación de términos y condiciones", detail: "Registro con timestamp de que el cliente aceptó los T&C y la política de devoluciones antes de completar el pago." },
              { label: "Acuse de recibo de mensajería", detail: "Número de tracking del envío y confirmación de entrega firmada digitalmente. Sin esto, cualquier disputa de «no recibí el producto» se pierde." },
              { label: "Comunicaciones pre y post-venta", detail: "Emails o chats con el cliente relacionados con el pedido, especialmente si solicitó cambios en la dirección de entrega." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <CheckCircle size={18} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "#14532d" }}>{item.label}: </span>
                  <span style={{ fontSize: "14px", color: "#166534", lineHeight: "1.65" }}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #052e16 100%)", borderRadius: "12px", padding: "44px 40px", textAlign: "center", marginBottom: "36px" }}>
          <div style={{ width: "60px", height: "60px", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <ShoppingCart size={30} color="#86efac" />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 800, color: "#ffffff", marginBottom: "14px" }}>
            ¿Tu pasarela de pago cumple con los estándares de 2026?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", maxWidth: "520px", margin: "0 auto 28px" }}>
            Evita brechas de seguridad en el momento más crítico del túnel de venta. Analizamos tu checkout para reducir el fraude y maximizar la confianza de tus clientes.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            style={{ background: "#059669", color: "white", border: "none", borderRadius: "8px", padding: "14px 32px", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Auditoría de Checkout Seguro
            <ArrowRight size={18} />
          </button>
        </div>

        {/* INTERLINKING */}
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ width: "40px", height: "40px", background: "#059669", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <BookOpen size={20} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#059669", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>¿Quieres asegurar toda tu tienda?</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>Lee nuestra Guía de Ciberseguridad para Ecommerce</div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>Protección completa: RGPD, PCI-DSS, ataques DDoS y defensa ante Ransomware para WooCommerce, Shopify y PrestaShop.</p>
          </div>
          <button
            onClick={() => navigate("/ecommerce-y-retail")}
            style={{ background: "#059669", color: "white", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-display)", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }}
          >
            Ver guía <ChevronRight size={14} />
          </button>
        </div>

      </div>
    </main>
  );
}

// ─── SCROLL TO TOP ON ROUTE CHANGE ───────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ─── NOSOTROS PAGE ───────────────────────────────────
function NosotrosPage() {
  const { navigate } = useRouter();

  const stats = [
    { value: "+500", label: "Auditorías Realizadas", icon: ShieldCheck },
    { value: "10", label: "Sectores Especializados", icon: Target },
    { value: "99%", label: "Clientes Satisfechos", icon: Award },
    { value: "+15", label: "Años de Experiencia", icon: Users },
  ];

  const valores = [
    {
      icon: Users,
      title: "Cercanía y trato directo",
      desc: "Sin intermediarios ni burocracia. Hablas directamente con el experto que conoce tu sector y entiende tu negocio.",
    },
    {
      icon: Target,
      title: "Lenguaje claro, sin tecnicismos",
      desc: "La ciberseguridad no tiene que ser incomprensible. Traducimos la complejidad técnica en acciones concretas para tu empresa.",
    },
    {
      icon: ShieldCheck,
      title: "Especialización sectorial",
      desc: "No somos generalistas. Cada sector tiene sus propias normativas, amenazas y vulnerabilidades, y nosotros las conocemos en profundidad.",
    },
    {
      icon: MapPin,
      title: "Presencia nacional, proximidad local",
      desc: "Sede en Valencia, operando en toda España de forma remota. Estamos donde tu empresa esté, sin coste de desplazamiento.",
    },
  ];

  const sectores = [
    { name: "Salud y Clínicas", detail: "Historiales clínicos, RGPD sanitario, ENS." },
    { name: "Legal y Asesorías", detail: "Secreto profesional digital, cumplimiento deontológico." },
    { name: "E-commerce", detail: "PCI-DSS, pasarelas de pago, fraude online." },
    { name: "Hostelería", detail: "WiFi de huéspedes, PMS hotelero, Booking scams." },
    { name: "Transporte y Logística", detail: "Flota GPS, ransomware en cadena de suministro." },
    { name: "Educación Digital", detail: "Datos de menores, LMS seguro, LOPD educativa." },
  ];

  return (
    <main>
      <Breadcrumbs items={[
        { name: "Inicio", path: "/" },
        { name: "Quiénes Somos", path: "/nosotros" },
      ]} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section style={{
        background: "var(--navy)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
        marginBottom: "0",
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(217,164,48,0.15)", border: "1px solid rgba(217,164,48,0.3)",
            borderRadius: "20px", padding: "6px 16px", marginBottom: "28px",
          }}>
            <Shield size={14} color="var(--amber)" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--amber)" }}>
              PymeSegura · Valencia
            </span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            Tu tranquilidad digital<br />
            <span style={{ color: "var(--amber)" }}>es nuestro compromiso</span>
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: 1.75,
            opacity: 0.8,
            fontFamily: "var(--font-body)",
            maxWidth: "600px",
            margin: "0 auto 36px",
          }}>
            Democratizamos la ciberseguridad de alto nivel para que ninguna PYME española
            cierre por un ataque informático. Porque la seguridad digital no debería ser
            solo para las grandes corporaciones.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contacto"
              onClick={(e) => { e.preventDefault(); navigate("/contacto"); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "var(--amber)", color: "var(--navy)",
                padding: "14px 28px", borderRadius: "4px",
                fontWeight: 700, fontSize: "14px", textDecoration: "none",
                fontFamily: "var(--font-body)",
              }}
            >
              Agenda una consultoría gratuita <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section style={{
        background: "var(--navy-light)",
        padding: "48px 20px",
        marginBottom: "0",
      }}>
        <div style={{
          maxWidth: "1000px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "0",
        }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} style={{
                textAlign: "center", padding: "32px 20px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}>
                <Icon size={22} color="var(--amber)" style={{ marginBottom: "12px" }} />
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(34px, 4vw, 48px)",
                  fontWeight: 800, color: "white",
                  letterSpacing: "-1px", lineHeight: 1,
                  marginBottom: "8px",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px",
                  letterSpacing: "1px", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Nuestra Historia ─────────────────────────── */}
      <section style={{ padding: "80px 20px", maxWidth: "880px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="content-grid">
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
              textTransform: "uppercase", color: "var(--amber)", display: "block", marginBottom: "12px",
            }}>
              Nuestra historia
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 34px)",
              fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.5px",
              lineHeight: 1.2, marginBottom: "20px",
            }}>
              Vimos el problema antes de que afectara a miles de empresas
            </h2>
            <p style={{
              fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8,
              fontFamily: "var(--font-body)", marginBottom: "16px",
            }}>
              Fundada por ingenieros con más de 15 años protegiendo infraestructuras críticas
              — banca, energía, administración pública —, llegó un momento en que nos hicimos
              una pregunta incómoda: <strong>¿quién protege a las PYMES?</strong>
            </p>
            <p style={{
              fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8,
              fontFamily: "var(--font-body)", marginBottom: "16px",
            }}>
              Las grandes consultoras cobran honorarios inaccesibles. Las soluciones genéricas
              no entienden que una clínica dental tiene riesgos muy distintos a los de una
              agencia inmobiliaria. Y mientras tanto, el 60% de las PYMES que sufren un
              ciberataque grave cierran en menos de seis meses.
            </p>
            <p style={{
              fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8,
              fontFamily: "var(--font-body)",
            }}>
              Por eso creamos PymeSegura: para llevar la ciberseguridad de alto nivel
              a cada rincón del tejido empresarial español, con el lenguaje claro y la
              especialización sectorial que las pequeñas empresas merecen.
            </p>
          </div>
          <div style={{
            background: "var(--bg-warm)", border: "1px solid var(--border)",
            borderRadius: "8px", padding: "36px", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "4px",
              background: "linear-gradient(90deg, var(--amber), var(--navy))",
            }} />
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1px",
              textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px",
            }}>
              Nuestra misión
            </div>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700,
              color: "var(--navy)", lineHeight: 1.5, marginBottom: "24px", letterSpacing: "-0.3px",
            }}>
              "Democratizar la ciberseguridad de alto nivel para que ninguna PYME española
              cierre por un ataque informático."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "40px", height: "40px", background: "var(--navy)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Shield size={18} color="var(--amber)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--navy)", fontFamily: "var(--font-body)" }}>
                  Equipo PymeSegura
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Sede central · Valencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nuestro Enfoque ──────────────────────────── */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
              textTransform: "uppercase", color: "var(--amber)", display: "block", marginBottom: "12px",
            }}>
              Nuestro enfoque
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 34px)",
              fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.5px", marginBottom: "16px",
            }}>
              Por qué trabajamos por sectores
            </h2>
            <p style={{
              fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.7,
              fontFamily: "var(--font-body)", maxWidth: "560px", margin: "0 auto",
            }}>
              Cada sector tiene su propio marco normativo, sus vectores de ataque habituales
              y sus particularidades operativas. La seguridad genérica no sirve.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px", marginBottom: "48px",
          }}>
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} style={{
                  background: "white", border: "1px solid var(--border)",
                  borderRadius: "6px", padding: "28px",
                  transition: "box-shadow 0.2s ease",
                }}>
                  <div style={{
                    width: "44px", height: "44px",
                    background: "var(--navy)", borderRadius: "6px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "16px",
                  }}>
                    <Icon size={20} color="var(--amber)" />
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: "16px",
                    fontWeight: 700, color: "var(--navy)", marginBottom: "10px",
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontSize: "14px", color: "var(--text-secondary)",
                    lineHeight: 1.7, fontFamily: "var(--font-body)",
                  }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sectores grid */}
          <div style={{
            background: "var(--navy)", borderRadius: "8px", padding: "40px",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px",
          }}>
            <div style={{ gridColumn: "1 / -1", marginBottom: "8px" }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--amber)",
              }}>
                Sectores en los que somos especialistas
              </span>
            </div>
            {sectores.map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                padding: "14px", borderRadius: "4px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <CheckCircle size={16} color="var(--amber)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <div style={{
                    fontWeight: 700, fontSize: "14px", color: "white",
                    fontFamily: "var(--font-body)", marginBottom: "4px",
                  }}>
                    {s.name}
                  </div>
                  <div style={{
                    fontSize: "12px", color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-mono)",
                  }}>
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section style={{
        background: "var(--amber)", padding: "64px 20px", textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <MapPin size={28} color="var(--navy)" style={{ marginBottom: "16px" }} />
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.5px",
            lineHeight: 1.2, marginBottom: "16px",
          }}>
            ¿Quieres saber si tu empresa está realmente protegida?
          </h2>
          <p style={{
            fontSize: "16px", color: "rgba(15,29,53,0.75)", lineHeight: 1.7,
            fontFamily: "var(--font-body)", marginBottom: "32px", maxWidth: "520px",
            margin: "0 auto 32px",
          }}>
            Agenda una consultoría inicial gratuita y en menos de 30 minutos te diremos
            exactamente qué riesgos tiene tu negocio y qué medidas priorizar.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contacto"
              onClick={(e) => { e.preventDefault(); navigate("/contacto"); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "var(--navy)", color: "white",
                padding: "16px 32px", borderRadius: "4px",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                fontFamily: "var(--font-body)",
              }}
            >
              Solicitar consultoría gratuita <ArrowRight size={16} />
            </a>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate("/"); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent", color: "var(--navy)",
                padding: "16px 32px", borderRadius: "4px",
                fontWeight: 600, fontSize: "15px", textDecoration: "none",
                fontFamily: "var(--font-body)", border: "2px solid var(--navy)",
              }}
            >
              Ver guías por sector
            </a>
          </div>
          <div style={{
            display: "flex", gap: "24px", justifyContent: "center", marginTop: "28px",
            flexWrap: "wrap",
          }}>
            {[
              { icon: MapPin, text: "Sede en Valencia · Operamos en toda España" },
              { icon: ShieldCheck, text: "+15 años en infraestructuras críticas" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  fontSize: "13px", color: "rgba(15,29,53,0.7)", fontFamily: "var(--font-body)",
                }}>
                  <Icon size={14} color="var(--navy)" />
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── ROUTER ──────────────────────────────────────────
function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/privacidad" element={<LegalPage type="privacidad" />} />
        <Route path="/politica-de-privacidad" element={<LegalPage type="privacidad" />} />
        <Route path="/aviso-legal" element={<LegalPage type="aviso-legal" />} />
        <Route path="/cookies" element={<LegalPage type="cookies" />} />
        <Route path="/articulo/:id" element={<ArticlePageWrapper />} />
        <Route path="/salud-y-clinicas" element={<CategoryPage categoryId="salud-y-clinicas" />} />
        <Route path="/salud-y-clinicas/guia-lopdgdd-ciberseguridad-clinicas" element={<ArticleGuiaLopdgddClinicas />} />
        <Route path="/ecommerce-y-retail" element={<CategoryPage categoryId="ecommerce-y-retail" />} />
        <Route path="/ecommerce-y-retail/ciberseguridad-ecommerce-rgpd-pci-dss" element={<ArticleCiberseguridadEcommerce />} />
        <Route path="/sector-inmobiliario" element={<CategoryPage categoryId="sector-inmobiliario" />} />
        <Route path="/sector-inmobiliario/ciberseguridad-inmobiliarias-fraude-transferencias" element={<ArticleCiberseguridadInmobiliarias />} />
        <Route path="/inmobiliarias" element={<ArticleCiberseguridadInmobiliarias />} />
        <Route path="/legal-y-asesorias" element={<CategoryPage categoryId="legal-y-asesorias" />} />
        <Route path="/legal-y-asesorias/ciberseguridad-despachos-abogados-secreto-profesional" element={<ArticleCiberseguridadDespachos />} />
        <Route path="/transporte-y-logistica" element={<CategoryPage categoryId="transporte-y-logistica" />} />
        <Route path="/sector-logistica/ciberseguridad-logistica-ransomware-flota" element={<ArticleCiberseguridadLogistica />} />
        <Route path="/logistica" element={<ArticleCiberseguridadLogistica />} />
        <Route path="/hosteleria-y-turismo" element={<CategoryPage categoryId="hosteleria-y-turismo" />} />
        <Route path="/hosteleria-y-turismo/ciberseguridad-hoteles-proteccion-huespedes" element={<ArticleCiberseguridadHosteleria />} />
        <Route path="/hosteleria" element={<ArticleCiberseguridadHosteleria />} />
        <Route path="/educacion-digital" element={<CategoryPage categoryId="educacion-digital" />} />
        <Route path="/educacion-digital/ciberseguridad-academias-colegios-elearning" element={<ArticleCiberseguridadEducacion />} />
        <Route path="/educacion" element={<ArticleCiberseguridadEducacion />} />
        <Route path="/salud-y-clinicas/auditoria-seguridad-clinicas-ens-historial-clinico" element={<ArticleAuditoriaSaludClinicas />} />
        <Route path="/auditoria-salud" element={<ArticleAuditoriaSaludClinicas />} />
        <Route path="/legal-y-asesorias/secreto-profesional-ciberseguridad-despachos" element={<ArticleSecretoProfesionalLegal />} />
        <Route path="/legal-y-asesorias/secreto-profesional" element={<ArticleSecretoProfesionalLegal />} />
        <Route path="/ecommerce-y-retail/seguridad-pagos-tpv-virtual-fraude" element={<ArticleSeguridadPagosEcommerce />} />
        <Route path="/ecommerce-y-retail/seguridad-pagos" element={<ArticleSeguridadPagosEcommerce />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

function ArticlePageWrapper() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  return <ArticlePage articleId={id} />;
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