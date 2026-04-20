import { useEffect, useMemo, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Heart,
  Hotel,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  User,
  X,
} from "lucide-react";
import CookieBanner from "./CookieBanner";
import "./App.css";

const SITE = {
  name: "PymeSegura",
  title: "PymeSegura | Guias practicas de ciberseguridad y cumplimiento para pymes",
  description:
    "Portal especializado en ciberseguridad y cumplimiento digital para pymes. Incluye guias por sector, checklists accionables y herramientas gratuitas.",
  contactEmail: "hola@pymesegura.org",
  contactPhone: "+34 960 88 44 21",
  location: "Valencia, Espana",
};

const AUTHOR = {
  name: "Equipo Editorial PymeSegura",
};

const CATEGORIES = [
  {
    slug: "salud-y-clinicas",
    name: "Salud y clinicas",
    short: "Salud",
    icon: Heart,
    accent: "accent-red",
    intro:
      "Como proteger historiales clinicos, gestionar consentimientos y reducir el riesgo de sanciones en consultas y centros sanitarios.",
  },
  {
    slug: "ecommerce-y-retail",
    name: "Ecommerce y retail",
    short: "Ecommerce",
    icon: ShoppingCart,
    accent: "accent-green",
    intro:
      "Controles para tiendas online: pagos, antifraude, proteccion de cuentas de cliente y continuidad de negocio en campanas de alta demanda.",
  },
  {
    slug: "legal-y-asesorias",
    name: "Legal y asesorias",
    short: "Legal",
    icon: Scale,
    accent: "accent-indigo",
    intro:
      "Buenas practicas para preservar el secreto profesional, proteger expedientes y trabajar con IA sin comprometer la confidencialidad.",
  },
  {
    slug: "sector-inmobiliario",
    name: "Sector inmobiliario",
    short: "Inmobiliaria",
    icon: Building2,
    accent: "accent-blue",
    intro:
      "Protocolos anti-fraude para reservas, senal y compraventa, con foco en suplantaciones por correo y cambios de cuenta bancaria.",
  },
  {
    slug: "transporte-y-logistica",
    name: "Transporte y logistica",
    short: "Logistica",
    icon: Truck,
    accent: "accent-orange",
    intro:
      "Guias para blindar ERP, TMS, flota conectada y operaciones de ultima milla frente a ransomware y paradas criticas.",
  },
  {
    slug: "hosteleria-y-turismo",
    name: "Hosteleria y turismo",
    short: "Hosteleria",
    icon: Hotel,
    accent: "accent-cyan",
    intro:
      "Seguridad WiFi, reservas, PMS y TPV para proteger a huespedes y marca sin frenar la experiencia digital.",
  },
  {
    slug: "educacion-digital",
    name: "Educacion digital",
    short: "Educacion",
    icon: GraduationCap,
    accent: "accent-violet",
    intro:
      "Proteccion de datos de alumnado, seguridad de LMS y prevencion de accesos indebidos en aulas online.",
  },
];

const ARTICLES = [
  {
    slug: "plan-rgpd-ciberseguridad-clinicas-30-dias",
    category: "salud-y-clinicas",
    title: "Plan RGPD y ciberseguridad para clinicas en 30 dias",
    description:
      "Ruta practica para clinicas pequenas: inventario de datos, control de accesos, copias seguras y plan de respuesta ante incidentes.",
    updatedAt: "2026-04-18",
    readTime: "11 min",
    level: "Intermedio",
    keyPoints: [
      "Define responsables y un inventario real de tratamientos.",
      "Aplica minimo privilegio en historia clinica y pruebas diagnosticas.",
      "Valida proveedores cloud y contratos de encargado del tratamiento.",
      "Prepara notificacion de brechas antes de tener una brecha.",
    ],
    sections: [
      {
        title: "Semana 1: inventario y base legal",
        paragraphs: [
          "Empieza por listar todos los datos personales que maneja la clinica: pacientes, acompanantes, empleados, proveedores y candidatos. Si no existe inventario, no existe control ni criterio para priorizar riesgos.",
          "Para cada flujo de datos, documenta finalidad, base juridica, plazo de conservacion y ubicacion. Este mapa te permite detectar tratamientos sin respaldo legal o duplicados que solo aumentan exposicion.",
        ],
        checklist: [
          "Registro de actividades actualizado.",
          "Clausulas informativas revisadas en recepcion y web.",
          "Matriz de sistemas con datos de salud identificada.",
        ],
      },
      {
        title: "Semana 2: accesos, dispositivos y copias",
        paragraphs: [
          "El 80% de incidencias en pymes sanitarias no llega por ataques sofisticados sino por credenciales compartidas, ordenadores sin cifrar o copias no verificadas. Establece cuentas individuales y MFA en todos los accesos remotos.",
          "La copia de seguridad solo es util si se puede restaurar. Programa una prueba mensual de recuperacion con un caso real: agenda de pacientes, documentos clinicos y facturacion.",
        ],
        checklist: [
          "MFA activo en correo y software clinico remoto.",
          "Discos de portatil cifrados.",
          "Prueba de restauracion completada y documentada.",
        ],
      },
      {
        title: "Semana 3: terceros y contratos",
        paragraphs: [
          "Una clinica depende de laboratorios, software de gestion, mensajeria medica y servicios cloud. Cada proveedor que toca datos personales requiere un contrato de encargado con medidas concretas.",
          "No basta con una clausula generica. Exige evidencias: cifrado en transito y reposo, gestion de subencargados, localizacion de datos y tiempos de notificacion de incidentes.",
        ],
        checklist: [
          "Inventario de encargados con contacto y riesgo.",
          "DPA firmado con todos los proveedores criticos.",
          "Evaluacion anual de proveedor de software clinico.",
        ],
      },
      {
        title: "Semana 4: simulacro y mejora continua",
        paragraphs: [
          "Cierra el ciclo con un simulacro de incidente. Define quien detecta, quien decide, quien comunica internamente y quien se encarga de la relacion con pacientes y autoridad.",
          "El objetivo del simulacro no es evitar errores, sino descubrirlos cuando todavia no cuestan reputacion ni sanciones. Tras la sesion, recoge tiempos, bloqueos y acciones de mejora para el trimestre siguiente.",
        ],
        checklist: [
          "Playbook de incidente aprobado por direccion.",
          "Plantillas de comunicacion listas.",
          "Calendario trimestral de revision de riesgos.",
        ],
      },
    ],
    mistakes: [
      "Usar la misma cuenta para todo el personal clinico.",
      "Guardar pruebas diagnosticas en discos USB sin cifrado.",
      "Firmar contratos de proveedor sin revisar subencargados.",
    ],
    faq: [
      {
        q: "Una clinica pequena tambien necesita analisis de riesgos formal?",
        a: "Si. El tamano no elimina el riesgo ni las obligaciones. El analisis puede ser proporcionado, pero debe existir, estar actualizado y justificarse con medidas concretas.",
      },
      {
        q: "Cada cuanto debo revisar accesos de personal?",
        a: "Como minimo cada trimestre y siempre que haya alta, baja o cambio de funciones. En entornos sanitarios la revision frecuente es critica por la sensibilidad del dato.",
      },
    ],
  },
  {
    slug: "hardening-ecommerce-12-controles-prioritarios",
    category: "ecommerce-y-retail",
    title: "Hardening ecommerce: 12 controles prioritarios que si reducen fraude",
    description:
      "Guia para tiendas online que quieren reducir chargebacks, robo de cuentas y caida de conversion por incidentes de seguridad.",
    updatedAt: "2026-04-16",
    readTime: "10 min",
    level: "Intermedio",
    keyPoints: [
      "Prioriza controles de acceso, pago y monitorizacion.",
      "Separa entorno de pruebas y produccion con rigor.",
      "Define alertas de fraude por patron y ticket medio.",
      "Combina seguridad con experiencia de compra.",
    ],
    sections: [
      {
        title: "Capa de cuenta cliente y autenticacion",
        paragraphs: [
          "El fraude de cuenta crece cuando contrasenas robadas circulan en mercados masivos. Para mitigarlo, activa deteccion de inicios de sesion anomalos y limita intentos por IP y dispositivo.",
          "La friccion debe ser inteligente: solicita verificacion adicional solo cuando hay senales de riesgo. Asi reduces fraude sin castigar a usuarios legitimos.",
        ],
        checklist: [
          "Rate limit en login y recuperacion.",
          "Bloqueo temporal ante intentos sucesivos.",
          "Alertas al cliente por nuevos dispositivos.",
        ],
      },
      {
        title: "Capa de pago y prevencion de chargeback",
        paragraphs: [
          "La mayoria de perdidas en ecommerce no viene del ataque tecnico, sino del abuso en pago y devoluciones. Define reglas de riesgo por importe, pais de emision, historico y discrepancia entre direccion de envio y facturacion.",
          "Integra logs de pasarela y backoffice para poder defender disputas. Si no conservas evidencia de entrega, validacion 3DS y trazabilidad de pedido, pierdes margen aunque la operacion fuese legitima.",
        ],
        checklist: [
          "3DS2 activo por defecto.",
          "Reglas antifraude por umbral y comportamiento.",
          "Evidencias de pedido almacenadas 13 meses.",
        ],
      },
      {
        title: "Capa operativa: parches, plugins y monitorizacion",
        paragraphs: [
          "Plugins desactualizados siguen siendo una via habitual de intrusion. Manten un inventario de extensiones con fecha de revision, criticidad y responsable interno.",
          "La monitorizacion debe combinar disponibilidad, errores de checkout y eventos de seguridad. Si solo miras uptime, descubriras el fraude demasiado tarde.",
        ],
        checklist: [
          "Calendario mensual de actualizacion de plugins.",
          "WAF o reglas de proteccion en front publico.",
          "Alertas unificadas en un canal operativo.",
        ],
      },
    ],
    mistakes: [
      "Desactivar controles antifraude para subir conversion a corto plazo.",
      "No separar roles entre marketing, operaciones y administracion tecnica.",
      "Confiar en un unico proveedor sin plan alternativo de pago.",
    ],
    faq: [
      {
        q: "Puedo mejorar seguridad sin empeorar conversion?",
        a: "Si. La clave esta en aplicar verificacion adaptativa por riesgo, no reglas rigidas para todos los clientes.",
      },
      {
        q: "Que indicador debo mirar cada semana?",
        a: "Tasa de chargeback, tasa de intentos fallidos de login, pedidos bloqueados por antifraude y disponibilidad del checkout.",
      },
    ],
  },
  {
    slug: "secreto-profesional-despachos-riesgos-digitales",
    category: "legal-y-asesorias",
    title: "Secreto profesional en despachos: controles digitales imprescindibles",
    description:
      "Checklist para despachos y asesorias que trabajan con documentacion sensible, correo y herramientas colaborativas en la nube.",
    updatedAt: "2026-04-14",
    readTime: "9 min",
    level: "Intermedio",
    keyPoints: [
      "Clasifica expedientes por sensibilidad y acceso.",
      "Asegura comparticion externa con expiracion y trazabilidad.",
      "Define politicas para IA y redaccion asistida.",
      "Entrena al equipo ante phishing dirigido.",
    ],
    sections: [
      {
        title: "Gobierno documental y clasificacion",
        paragraphs: [
          "No todos los expedientes deben circular igual. Crea tres niveles de sensibilidad y asocia medidas concretas: cifrado, limitacion de descarga y doble validacion para comparticiones externas.",
          "La clasificacion reduce errores humanos porque convierte una norma abstracta en una decision operativa diaria.",
        ],
        checklist: [
          "Etiquetas de confidencialidad en gestor documental.",
          "Permisos por rol y cliente.",
          "Auditoria de comparticiones mensuales.",
        ],
      },
      {
        title: "Correo, mensajeria y reuniones",
        paragraphs: [
          "Los despachos reciben campanas de phishing muy especificas, con suplantacion de cliente o de procurador. Refuerza autenticacion de dominio, revisa reglas de reenvio y habilita alertas ante cambios criticos.",
          "En reuniones virtuales, evita enlaces publicos permanentes y usa salas de espera en asuntos de alta sensibilidad.",
        ],
        checklist: [
          "SPF, DKIM y DMARC correctamente configurados.",
          "Revision de reglas de correo no autorizadas.",
          "Plantilla de verificacion de identidad por llamada.",
        ],
      },
      {
        title: "Uso de IA sin fuga de informacion",
        paragraphs: [
          "El uso de IA generativa exige reglas claras. Define que tipo de datos nunca pueden introducirse y que tareas si son validas con anonimización previa.",
          "Registra herramienta, finalidad y responsable. Esta trazabilidad te protege frente a incidencias y mejora la gobernanza interna.",
        ],
        checklist: [
          "Politica de IA aprobada y difundida.",
          "Bloqueo de pegado de datos sensibles cuando sea posible.",
          "Revision legal trimestral de proveedores de IA.",
        ],
      },
    ],
    mistakes: [
      "Enviar documentacion sensible por correo sin cifrado o contrasena separada.",
      "Permitir repositorios compartidos sin caducidad de acceso.",
      "Usar IA con datos identificables de clientes.",
    ],
    faq: [
      {
        q: "Es obligatorio prohibir la IA en un despacho?",
        a: "No necesariamente. Lo recomendable es permitir casos de uso acotados con anonimización, proveedor evaluado y politica interna explicita.",
      },
      {
        q: "Que control ofrece mas retorno inmediato?",
        a: "MFA en correo, revision de reglas de reenvio y verificacion de cambios de cuenta por canal alternativo.",
      },
    ],
  },
  {
    slug: "fraude-transferencias-inmobiliaria-protocolo-antibec",
    category: "sector-inmobiliario",
    title: "Fraude por cambio de cuenta en inmobiliaria: protocolo anti-BEC",
    description:
      "Procedimiento para evitar suplantaciones por correo en reservas y compraventas con transferencia bancaria.",
    updatedAt: "2026-04-17",
    readTime: "8 min",
    level: "Basico",
    keyPoints: [
      "Introduce doble validacion fuera del correo.",
      "Usa plantillas de comunicacion anti-cambio de cuenta.",
      "Define un flujo de aprobacion para operaciones criticas.",
      "Entrena comerciales y administracion con casos reales.",
    ],
    sections: [
      {
        title: "Donde ocurre el fraude y por que",
        paragraphs: [
          "El fraude BEC aparece en el tramo final de la operacion, cuando cliente y agencia estan bajo presion de cierre. Un unico correo manipulado puede redirigir una senal completa a una cuenta fraudulenta.",
          "La defensa no es solo tecnologica. Requiere disciplina comercial y un protocolo de verificacion muy simple para todo el equipo.",
        ],
        checklist: [
          "Aviso fijo en presupuestos y contratos: nunca cambiamos cuenta por email.",
          "Telefono de verificacion visible en todos los documentos.",
          "Registro de validaciones por expediente.",
        ],
      },
      {
        title: "Protocolo operativo en 5 pasos",
        paragraphs: [
          "Paso 1: cuenta bancaria validada y bloqueada en CRM. Paso 2: cualquier modificacion requiere aprobacion dual. Paso 3: confirmacion telefonica por numero oficial. Paso 4: confirmacion escrita posterior. Paso 5: archivo de evidencias.",
          "Este flujo puede parecer lento, pero evita perdidas de alto impacto y conflictos reputacionales con compradores y vendedores.",
        ],
        checklist: [
          "Flujo de aprobacion dual activo.",
          "Telefonos oficiales verificados en CRM.",
          "Plantilla de incidente preparada.",
        ],
      },
    ],
    mistakes: [
      "Aceptar cambios de cuenta con urgencia y sin verificacion.",
      "No registrar quien valido la operacion.",
      "Confiar en respuesta por el mismo hilo comprometido.",
    ],
    faq: [
      {
        q: "Sirve una advertencia legal en el pie de email?",
        a: "Ayuda, pero no es suficiente. El control eficaz es la validacion activa por canal alternativo y trazable.",
      },
      {
        q: "Que hago si detecto fraude despues de transferir?",
        a: "Activa plan de incidente inmediatamente: banco receptor y emisor, denuncia, preservacion de evidencias y comunicacion guiada al cliente.",
      },
    ],
  },
  {
    slug: "continuidad-operativa-logistica-ransomware",
    category: "transporte-y-logistica",
    title: "Continuidad operativa en logistica ante ransomware",
    description:
      "Como preparar rutas, almacen y facturacion para seguir operando durante las primeras 24 horas de un incidente.",
    updatedAt: "2026-04-13",
    readTime: "9 min",
    level: "Intermedio",
    keyPoints: [
      "Define procesos minimos para operar en degradado.",
      "Segmenta entornos de oficina y operacion.",
      "Protege telematica de flota y credenciales de transportistas.",
      "Ensaya recuperacion con escenarios realistas.",
    ],
    sections: [
      {
        title: "Operacion en degradado: que nunca puede parar",
        paragraphs: [
          "Antes de invertir en tecnologia adicional, define que actividades deben mantenerse incluso con sistemas limitados: despacho de rutas criticas, comunicacion con clientes clave y registro minimo de entregas.",
          "Disena plantillas offline y un protocolo de priorizacion para que la operacion no dependa de una unica aplicacion.",
        ],
        checklist: [
          "Listado de clientes y rutas criticas.",
          "Plantillas manuales de albaran y confirmacion.",
          "Canal alternativo de comunicacion interna.",
        ],
      },
      {
        title: "Arquitectura de seguridad para TMS y almacen",
        paragraphs: [
          "Separa redes y credenciales entre oficina, almacen y telematica. Si todo comparte acceso y segmentacion debil, el incidente escala demasiado rapido.",
          "Aplica copias inmutables y monitorizacion de cambios masivos en ficheros. En logistica, minutos de deteccion marcan la diferencia entre retraso puntual y colapso de servicio.",
        ],
        checklist: [
          "Segmentacion de red por zonas operativas.",
          "Copias inmutables de sistemas criticos.",
          "Alertas ante cifrado o borrado masivo.",
        ],
      },
    ],
    mistakes: [
      "Guardar credenciales de sistemas criticos en documentos compartidos.",
      "No ensayar plan de continuidad con operaciones reales.",
      "No definir cadena de decision durante incidente.",
    ],
    faq: [
      {
        q: "Que metrica refleja mejor la resiliencia logistica?",
        a: "El tiempo de recuperacion operativa por proceso clave: rutas, almacen, facturacion y atencion al cliente.",
      },
      {
        q: "Es viable operar manualmente un dia completo?",
        a: "Si, si esta disenado y practicado. Sin entrenamiento previo suele fallar por saturacion y falta de coordinacion.",
      },
    ],
  },
  {
    slug: "wifi-segura-hoteles-checklist-operativo",
    category: "hosteleria-y-turismo",
    title: "WiFi segura en hoteles: checklist operativo para recepcion y TI",
    description:
      "Controles practicos para reducir abuso de red de huespedes, proteger TPV y evitar incidentes que impacten en reputacion.",
    updatedAt: "2026-04-11",
    readTime: "8 min",
    level: "Basico",
    keyPoints: [
      "Segmenta red de huespedes y red corporativa.",
      "Aplica rotacion de claves y control de dispositivos.",
      "Refuerza seguridad de PMS y terminales de recepcion.",
      "Establece protocolo de incidentes orientado a cliente.",
    ],
    sections: [
      {
        title: "Diseno de red por zonas y riesgo",
        paragraphs: [
          "No mezcles la red de huespedes con los sistemas internos del hotel. La segmentacion es la medida mas rentable para limitar impacto de equipos comprometidos.",
          "Define redes diferenciadas para recepcion, administracion, IoT y huesped. Cada zona con controles y monitoreo adaptados al nivel de exposicion.",
        ],
        checklist: [
          "VLAN separadas y auditadas.",
          "Portal cautivo con terminos claros.",
          "Control de acceso por dispositivo y tiempo.",
        ],
      },
      {
        title: "Recepcion y atencion al huesped durante incidentes",
        paragraphs: [
          "La experiencia del huesped se deteriora rapido cuando no hay comunicacion. Prepara guiones breves para informar sin tecnicismos y sin ocultar el problema.",
          "El equipo de recepcion necesita una ruta clara de escalado y una ventana estimada de recuperacion para evitar respuestas improvisadas.",
        ],
        checklist: [
          "Guion de comunicacion listo para recepcion.",
          "Escalado definido con responsable de guardia.",
          "Registro de incidencias con tiempos de resolucion.",
        ],
      },
    ],
    mistakes: [
      "Usar la misma contrasena WiFi durante meses.",
      "Permitir que TPV y dispositivos de huesped compartan red.",
      "No comunicar tiempos de recuperacion al cliente.",
    ],
    faq: [
      {
        q: "La segmentacion de red es suficiente por si sola?",
        a: "No. Debe acompanarse de control de accesos, monitorizacion y revisiones periodicas de configuracion.",
      },
      {
        q: "Cada cuanto se revisa la seguridad WiFi?",
        a: "Mensualmente para cambios operativos y al menos cada trimestre para auditoria completa.",
      },
    ],
  },
  {
    slug: "seguridad-lms-centros-formacion",
    category: "educacion-digital",
    title: "Seguridad en LMS para academias y centros de formacion",
    description:
      "Como proteger cuentas de alumnado, contenidos y evaluaciones en plataformas de aprendizaje digital.",
    updatedAt: "2026-04-10",
    readTime: "9 min",
    level: "Intermedio",
    keyPoints: [
      "Gestiona altas y bajas de usuarios con disciplina.",
      "Aisla plugins y extensiones no verificadas.",
      "Protege material docente y evaluaciones.",
      "Define controles para clases en directo.",
    ],
    sections: [
      {
        title: "Gobierno de usuarios y ciclo de vida",
        paragraphs: [
          "En educacion digital, las cuentas huerfanas son una puerta abierta. Implementa automatizacion de bajas y revision semanal de usuarios con privilegios.",
          "Asocia cada rol a permisos concretos y elimina privilegios acumulados por antiguedad o cambios de puesto.",
        ],
        checklist: [
          "Baja automatica al finalizar curso.",
          "Revision semanal de cuentas con permisos altos.",
          "MFA para personal docente y administracion.",
        ],
      },
      {
        title: "Integridad academica y proteccion de contenidos",
        paragraphs: [
          "Las plataformas LMS deben proteger tanto datos como propiedad intelectual. Configura controles de descarga, marcas de agua y trazabilidad de accesos a material premium.",
          "Para evaluaciones online, combina banco de preguntas, aleatorizacion y ventanas de tiempo razonables para reducir abuso sin deteriorar la experiencia educativa.",
        ],
        checklist: [
          "Control de descarga por tipo de usuario.",
          "Registro de actividad en examenes online.",
          "Politica de incidencias para clases en directo.",
        ],
      },
    ],
    mistakes: [
      "Mantener cuentas de antiguos alumnos con acceso completo.",
      "No revisar extensiones del LMS tras actualizaciones.",
      "Falta de protocolo ante suplantacion de profesor.",
    ],
    faq: [
      {
        q: "Que control da mas resultado al inicio?",
        a: "Revision de permisos y baja automatica de cuentas inactivas. Reduce superficie de ataque de forma inmediata.",
      },
      {
        q: "Debo cifrar tambien grabaciones de clases?",
        a: "Si, especialmente cuando contienen datos identificables del alumnado o discusiones sensibles.",
      },
    ],
  },
  {
    slug: "plan-respuesta-incidentes-24-horas-pyme",
    category: "legal-y-asesorias",
    title: "Plan de respuesta a incidentes en 24 horas para pymes",
    description:
      "Marco rapido para detectar, contener y comunicar incidentes de seguridad sin bloquear la operacion completa.",
    updatedAt: "2026-04-19",
    readTime: "10 min",
    level: "Basico",
    keyPoints: [
      "Define responsables por turno y escalado.",
      "Evita improvisacion en las primeras 4 horas.",
      "Prepara comunicacion interna y externa por adelantado.",
      "Convierte cada incidente en aprendizaje medible.",
    ],
    sections: [
      {
        title: "Primeras 4 horas: contencion y evidencia",
        paragraphs: [
          "Las primeras horas determinan el alcance del incidente. El objetivo inicial no es explicar todo, sino frenar propagacion y preservar evidencias para analisis posterior.",
          "Evita acciones impulsivas como formatear equipos o reiniciar sin criterio. Documenta cada accion y su responsable.",
        ],
        checklist: [
          "Canal de crisis activado.",
          "Sistemas afectados identificados.",
          "Registro cronologico de decisiones.",
        ],
      },
      {
        title: "De 4 a 24 horas: comunicacion y recuperacion",
        paragraphs: [
          "Con la contencion en marcha, prioriza recuperacion de procesos clave y comunicacion transparente con direccion, clientes y, cuando proceda, autoridad.",
          "La calidad de la comunicacion reduce dano reputacional. Mensajes breves, verificables y con proximos pasos claros generan mas confianza que promesas imprecisas.",
        ],
        checklist: [
          "Plantillas de comunicacion revisadas por legal.",
          "RTO objetivo por proceso definido.",
          "Plan de lecciones aprendidas calendarizado.",
        ],
      },
    ],
    mistakes: [
      "Esperar confirmacion total para empezar a contener.",
      "Comunicar sin validar datos minimos.",
      "No registrar decisiones para analisis posterior.",
    ],
    faq: [
      {
        q: "Necesito un equipo grande para tener plan de incidentes?",
        a: "No. Una pyme puede operar con un equipo pequeno si roles y escalado estan definidos y ensayados.",
      },
      {
        q: "Cada cuanto conviene hacer simulacros?",
        a: "Al menos dos veces al ano y siempre tras cambios relevantes en infraestructura o proveedores.",
      },
    ],
  },
];

const LEGACY_REDIRECTS = [
  ["/salud-y-clinicas", "/sectores/salud-y-clinicas"],
  ["/ecommerce-y-retail", "/sectores/ecommerce-y-retail"],
  ["/legal-y-asesorias", "/sectores/legal-y-asesorias"],
  ["/sector-inmobiliario", "/sectores/sector-inmobiliario"],
  ["/transporte-y-logistica", "/sectores/transporte-y-logistica"],
  ["/hosteleria-y-turismo", "/sectores/hosteleria-y-turismo"],
  ["/educacion-digital", "/sectores/educacion-digital"],
  [
    "/salud-y-clinicas/guia-lopdgdd-ciberseguridad-clinicas",
    "/guias/plan-rgpd-ciberseguridad-clinicas-30-dias",
  ],
  [
    "/ecommerce-y-retail/ciberseguridad-ecommerce-rgpd-pci-dss",
    "/guias/hardening-ecommerce-12-controles-prioritarios",
  ],
  [
    "/legal-y-asesorias/ciberseguridad-despachos-abogados-secreto-profesional",
    "/guias/secreto-profesional-despachos-riesgos-digitales",
  ],
  [
    "/sector-inmobiliario/ciberseguridad-inmobiliarias-fraude-transferencias",
    "/guias/fraude-transferencias-inmobiliaria-protocolo-antibec",
  ],
  [
    "/sector-logistica/ciberseguridad-logistica-ransomware-flota",
    "/guias/continuidad-operativa-logistica-ransomware",
  ],
  [
    "/hosteleria-y-turismo/ciberseguridad-hoteles-proteccion-huespedes",
    "/guias/wifi-segura-hoteles-checklist-operativo",
  ],
  [
    "/educacion-digital/ciberseguridad-academias-colegios-elearning",
    "/guias/seguridad-lms-centros-formacion",
  ],
  ["/herramientas/checklist-calidad-web", "/herramientas/plan-recuperacion-datos"],
  ["/privacidad", "/politica-de-privacidad"],
  ["/cookies", "/politica-de-cookies"],
];

const RISK_QUESTIONS = [
  {
    id: "mfa",
    text: "MFA esta activo en correo, paneles cloud y administracion?",
    weight: 22,
    recommendation: "Activa MFA en todas las cuentas con acceso a datos sensibles.",
  },
  {
    id: "backups",
    text: "Haces prueba real de restauracion al menos una vez al mes?",
    weight: 20,
    recommendation: "Programa pruebas de restauracion y registra tiempos de recuperacion.",
  },
  {
    id: "vendors",
    text: "Evaluas proveedores que tratan datos con contratos actualizados?",
    weight: 16,
    recommendation: "Audita proveedores criticos y actualiza acuerdos de tratamiento.",
  },
  {
    id: "awareness",
    text: "Tu equipo recibe formacion anti-phishing trimestral?",
    weight: 14,
    recommendation: "Define microformaciones periodicas y simulaciones cortas.",
  },
  {
    id: "monitoring",
    text: "Tienes alertas de eventos criticos (login, borrado, cifrado)?",
    weight: 14,
    recommendation: "Configura alertas tempranas en correo, endpoints y sistemas criticos.",
  },
  {
    id: "incident",
    text: "Existe plan de respuesta a incidentes probado en simulacro?",
    weight: 14,
    recommendation: "Crea un playbook de incidente y ensayalo con escenarios reales.",
  },
];

function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function textToId(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function findCategory(slug) {
  return CATEGORIES.find((category) => category.slug === slug);
}

function updateMeta(attr, key, value) {
  if (!value) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

function useSEO({ title, description, pathname, schema }) {
  useEffect(() => {
    document.title = title;
    updateMeta("name", "description", description);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", "website");
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);

    const canonicalHref = `${window.location.origin}${pathname}`;
    let canonical = document.head.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    const scriptId = "pymesegura-jsonld";
    const previous = document.getElementById(scriptId);
    if (previous) previous.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const cleanup = document.getElementById(scriptId);
      if (cleanup) cleanup.remove();
    };
  }, [description, pathname, schema, title]);
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/guias", label: "Guias" },
    { to: "/herramientas/evaluacion-riesgo", label: "Herramientas" },
    { to: "/metodologia-editorial", label: "Metodologia" },
    { to: "/contacto", label: "Contacto" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="top-strip">
        <span>Contenido editorial y tecnico para pymes</span>
      </div>
      <div className="header-inner container">
        <Link className="brand" to="/" aria-label="Volver al inicio">
          <span className="brand-mark">
            <ShieldCheck size={20} />
          </span>
          <span>
            <strong>{SITE.name}</strong>
            <small>Guias de ciberseguridad aplicada</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={pathname === link.to ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{SITE.name}</h3>
          <p>
            Biblioteca practica de ciberseguridad y cumplimiento para pequenas y medianas
            empresas en Espana.
          </p>
        </div>

        <div>
          <h4>Accesos rapidos</h4>
          <ul>
            <li>
              <Link to="/guias">Todas las guias</Link>
            </li>
            <li>
              <Link to="/herramientas/plan-recuperacion-datos">
                Plan de recuperacion de datos
              </Link>
            </li>
            <li>
              <Link to="/sobre-nosotros">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/mapa-web">Mapa del sitio</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Legal y contacto</h4>
          <ul>
            <li>
              <Link to="/aviso-legal">Aviso legal</Link>
            </li>
            <li>
              <Link to="/politica-de-privacidad">Politica de privacidad</Link>
            </li>
            <li>
              <Link to="/politica-de-cookies">Politica de cookies</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({ icon: Icon, kicker, title, description }) {
  return (
    <div className="section-intro">
      <span className="kicker">
        <Icon size={14} /> {kicker}
      </span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function ArticleCard({ article }) {
  const category = findCategory(article.category);
  if (!category) return null;
  const Icon = category.icon;

  return (
    <article className="article-card">
      <div className="article-top">
        <span className={`chip ${category.accent}`}>
          <Icon size={14} /> {category.short}
        </span>
        <span className="chip chip-muted">{article.level}</span>
      </div>

      <h3>
        <Link to={`/guias/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.description}</p>

      <div className="article-meta">
        <span>
          <Clock size={14} /> {article.readTime}
        </span>
        <span>
          <User size={14} /> {AUTHOR.name}
        </span>
        <span>{formatDate(article.updatedAt)}</span>
      </div>
    </article>
  );
}

function CategoryCard({ category }) {
  const Icon = category.icon;
  const count = ARTICLES.filter((article) => article.category === category.slug).length;

  return (
    <Link className="category-card" to={`/sectores/${category.slug}`}>
      <div className="category-head">
        <span className={`chip ${category.accent}`}>
          <Icon size={14} /> {category.short}
        </span>
        <strong>{count} guias</strong>
      </div>
      <h3>{category.name}</h3>
      <p>{category.intro}</p>
      <span className="text-link">
        Ver contenido <ArrowRight size={14} />
      </span>
    </Link>
  );
}

function HomePage() {
  const featured = ARTICLES.slice(0, 3);
  const recent = [...ARTICLES]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 6);
  const { pathname } = useLocation();

  useSEO({
    title: SITE.title,
    description: SITE.description,
    pathname,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      description: SITE.description,
      inLanguage: "es",
      potentialAction: {
        "@type": "SearchAction",
        target: `${window.location.origin}/guias`,
        "query-input": "required name=search_term_string",
      },
    },
  });

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="kicker">
              <Shield size={14} /> Contenido util para negocio real
            </span>
            <h1>Ciberseguridad y cumplimiento explicados para pymes, sin relleno.</h1>
            <p>
              Convertimos normativas y controles tecnicos en acciones concretas por sector.
              Cada guia incluye checklist operativo, errores frecuentes y pasos de
              implementacion.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/guias">
                Explorar guias <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-ghost" to="/herramientas/evaluacion-riesgo">
                Evaluar madurez de mi pyme
              </Link>
            </div>
          </div>

          <aside className="hero-panel">
            <h2>Senales de calidad editorial</h2>
            <ul>
              <li>
                <CheckCircle size={16} /> Actualizacion visible en cada articulo.
              </li>
              <li>
                <CheckCircle size={16} /> Metodologia de revision y verificacion publica.
              </li>
              <li>
                <CheckCircle size={16} /> Contenido especializado por industria.
              </li>
              <li>
                <CheckCircle size={16} /> Herramientas interactivas gratuitas para usuarios.
              </li>
            </ul>
            <Link className="text-link" to="/metodologia-editorial">
              Ver metodologia completa <ExternalLink size={14} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            icon={BookOpen}
            kicker="Guias destacadas"
            title="Contenido profundo para resolver problemas concretos"
            description="No publicamos articulos vacios. Cada guia esta pensada para apoyar decisiones operativas en empresas con recursos limitados."
          />
          <div className="card-grid">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionIntro
            icon={TrendingUp}
            kicker="Sectores"
            title="Rutas de seguridad y cumplimiento por actividad"
            description="Selecciona tu sector y accede a guias adaptadas al riesgo real de tu negocio."
          />
          <div className="card-grid">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tools-grid">
          <div>
            <SectionIntro
              icon={ShieldCheck}
              kicker="Herramientas gratuitas"
              title="Utilidad real para tus visitantes"
              description="Estas utilidades generan valor inmediato, mas tiempo en pagina y mas paginas vistas por sesion."
            />
          </div>
          <div className="tool-cards">
            <Link className="tool-card" to="/herramientas/evaluacion-riesgo">
              <h3>Evaluacion de riesgo expres</h3>
              <p>Diagnostico en 2 minutos con recomendaciones priorizadas segun madurez.</p>
              <span className="text-link">
                Abrir herramienta <ArrowRight size={14} />
              </span>
            </Link>
            <Link className="tool-card" to="/herramientas/calculadora-impacto-incidente">
              <h3>Calculadora de impacto economico</h3>
              <p>
                Estima coste potencial de un incidente para justificar presupuesto y
                prioridades.
              </p>
              <span className="text-link">
                Abrir calculadora <ArrowRight size={14} />
              </span>
            </Link>
            <Link className="tool-card" to="/herramientas/plan-recuperacion-datos">
              <h3>Planificador de recuperacion de datos</h3>
              <p>
                Define frecuencia de copias, objetivos de recuperacion y prioridades de
                contingencia para tu empresa.
              </p>
              <span className="text-link">
                Abrir planificador <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionIntro
            icon={FileText}
            kicker="Ultimas actualizaciones"
            title="Novedades editoriales"
            description="Publicamos y revisamos contenido de forma continua para evitar paginas obsoletas o de bajo valor."
          />
          <div className="list-grid">
            {recent.map((article) => (
              <Link key={article.slug} className="list-item" to={`/guias/${article.slug}`}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <div className="article-meta">
                  <span>{formatDate(article.updatedAt)}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function GuidesPage() {
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useSEO({
    title: "Guias de ciberseguridad para pymes | PymeSegura",
    description:
      "Biblioteca de guias de ciberseguridad y cumplimiento por sector para pymes. Incluye checklists y planes de accion.",
    pathname,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Guias PymeSegura",
      inLanguage: "es",
    },
  });

  const filtered = useMemo(() => {
    return ARTICLES.filter((article) => {
      const byCategory =
        selectedCategory === "all" || article.category === selectedCategory;
      const term = query.trim().toLowerCase();
      const byText =
        term.length === 0 ||
        article.title.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term);
      return byCategory && byText;
    });
  }, [query, selectedCategory]);

  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          icon={BookOpen}
          kicker="Biblioteca"
          title="Guias completas por sector"
          description="Filtra por tematica y encuentra contenido accionable para tu empresa."
        />

        <div className="filters">
          <label className="search-box">
            <Search size={16} />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por tema, por ejemplo: ransomware, RGPD, ecommerce..."
            />
          </label>

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            aria-label="Filtrar por categoria"
          >
            <option value="all">Todas las categorias</option>
            {CATEGORIES.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className="card-grid">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="empty-state">
            No hemos encontrado resultados con esos filtros. Prueba con otro termino o
            selecciona una categoria distinta.
          </p>
        )}
      </div>
    </section>
  );
}

function CategoryPage() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const category = findCategory(slug);

  if (!category) return <NotFoundPage />;

  const articles = ARTICLES.filter((article) => article.category === slug);
  const Icon = category.icon;

  useSEO({
    title: `${category.name} | Guias para pymes | PymeSegura`,
    description: category.intro,
    pathname,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.name,
      description: category.intro,
      inLanguage: "es",
    },
  });

  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          icon={Icon}
          kicker="Sector"
          title={category.name}
          description={category.intro}
        />
        <div className="card-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticlePage() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const article = ARTICLES.find((entry) => entry.slug === slug);

  if (!article) return <NotFoundPage />;

  const category = findCategory(article.category);
  const related = ARTICLES.filter(
    (entry) => entry.category === article.category && entry.slug !== article.slug,
  ).slice(0, 3);

  useSEO({
    title: `${article.title} | PymeSegura`,
    description: article.description,
    pathname,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      dateModified: article.updatedAt,
      author: {
        "@type": "Organization",
        name: AUTHOR.name,
      },
      publisher: {
        "@type": "Organization",
        name: SITE.name,
      },
      inLanguage: "es",
    },
  });

  return (
    <article className="section">
      <div className="container article-layout">
        <div className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <Link to="/guias">Guias</Link>
          <span>/</span>
          <Link to={`/sectores/${category.slug}`}>{category.name}</Link>
        </div>

        <header className="article-header">
          <span className={`chip ${category.accent}`}>{category.name}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="article-meta">
            <span>
              <Clock size={14} /> {article.readTime}
            </span>
            <span>
              <User size={14} /> {AUTHOR.name}
            </span>
            <span>Actualizado: {formatDate(article.updatedAt)}</span>
          </div>
        </header>

        <section className="summary-box">
          <h2>Resumen ejecutivo</h2>
          <ul>
            {article.keyPoints.map((point) => (
              <li key={point}>
                <CheckCircle size={16} /> {point}
              </li>
            ))}
          </ul>
        </section>

        <div className="article-content-grid">
          <aside className="toc">
            <h3>Contenido de la guia</h3>
            <ul>
              {article.sections.map((section) => (
                <li key={section.title}>
                  <a href={`#${textToId(section.title)}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.title} id={textToId(section.title)} className="article-section">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.checklist && section.checklist.length > 0 ? (
                  <ul className="checklist">
                    {section.checklist.map((item) => (
                      <li key={item}>
                        <CheckCircle size={15} /> {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="article-section warning-box">
              <h2>Errores frecuentes que debemos evitar</h2>
              <ul>
                {article.mistakes.map((mistake) => (
                  <li key={mistake}>
                    <AlertTriangle size={15} /> {mistake}
                  </li>
                ))}
              </ul>
            </section>

            <section className="article-section faq">
              <h2>Preguntas frecuentes</h2>
              {article.faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </section>

            <section className="cta-inline">
              <h3>Quieres aplicar esto en tu pyme con un plan ordenado?</h3>
              <p>
                Escribenos y te compartimos una hoja de ruta priorizada por impacto,
                riesgo y coste.
              </p>
              <Link className="btn btn-primary" to="/contacto">
                Solicitar revision inicial
              </Link>
            </section>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="related">
            <h2>Guias relacionadas</h2>
            <div className="card-grid">
              {related.map((entry) => (
                <ArticleCard key={entry.slug} article={entry} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}

function RiskEvaluationPage() {
  const { pathname } = useLocation();
  const [answers, setAnswers] = useState({});

  useSEO({
    title: "Evaluacion de riesgo para pymes | Herramienta gratuita",
    description:
      "Evalua en 2 minutos la madurez de ciberseguridad de tu empresa y obten acciones recomendadas.",
    pathname,
  });

  const maxScore = RISK_QUESTIONS.reduce((total, question) => total + question.weight * 2, 0);
  const current = RISK_QUESTIONS.reduce((total, question) => {
    const value = Number(answers[question.id] ?? 0);
    return total + value * question.weight;
  }, 0);

  const completed = RISK_QUESTIONS.every((question) => answers[question.id] !== undefined);
  const maturity = completed ? Math.round((current / maxScore) * 100) : 0;

  const level =
    maturity >= 75
      ? "Madurez alta"
      : maturity >= 45
        ? "Madurez media"
        : "Madurez inicial";

  const pendingRecommendations = RISK_QUESTIONS.filter(
    (question) => Number(answers[question.id] ?? 0) < 2,
  )
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 4)
    .map((question) => question.recommendation);

  return (
    <section className="section">
      <div className="container tool-layout">
        <SectionIntro
          icon={ShieldCheck}
          kicker="Herramienta"
          title="Evaluacion de madurez de ciberseguridad"
          description="Marca el estado actual de tu pyme y recibe prioridades de mejora en tiempo real."
        />

        <div className="tool-panel">
          {RISK_QUESTIONS.map((question) => (
            <label key={question.id} className="question-row">
              <span>{question.text}</span>
              <select
                value={answers[question.id] ?? ""}
                onChange={(event) =>
                  setAnswers((previous) => ({
                    ...previous,
                    [question.id]: Number(event.target.value),
                  }))
                }
              >
                <option value="" disabled>
                  Selecciona una opcion
                </option>
                <option value="0">No</option>
                <option value="1">Parcial</option>
                <option value="2">Si</option>
              </select>
            </label>
          ))}
        </div>

        <div className="result-box">
          <h2>Resultado</h2>
          {completed ? (
            <>
              <p>
                Indice de madurez: <strong>{maturity}/100</strong> · {level}
              </p>
              <ul>
                {pendingRecommendations.length > 0 ? (
                  pendingRecommendations.map((recommendation) => (
                    <li key={recommendation}>
                      <ArrowRight size={15} /> {recommendation}
                    </li>
                  ))
                ) : (
                  <li>
                    <CheckCircle size={15} /> Tu base es solida. Revisa periodicamente y
                    manten simulacros operativos.
                  </li>
                )}
              </ul>
            </>
          ) : (
            <p>Completa todas las preguntas para generar recomendaciones.</p>
          )}
        </div>
      </div>
    </section>
  );
}

function IncidentImpactPage() {
  const { pathname } = useLocation();
  const [inputs, setInputs] = useState({
    records: 2500,
    notificationCost: 2.5,
    downtimeHours: 12,
    costPerHour: 420,
    forensic: 3000,
    legal: 1800,
  });

  useSEO({
    title: "Calculadora de impacto economico de incidentes | PymeSegura",
    description:
      "Calcula de forma orientativa el coste economico de una brecha o incidente de seguridad en tu pyme.",
    pathname,
  });

  const recordsCost = inputs.records * inputs.notificationCost;
  const downtimeCost = inputs.downtimeHours * inputs.costPerHour;
  const total = recordsCost + downtimeCost + inputs.forensic + inputs.legal;

  function updateField(field, value) {
    const parsed = Number(value);
    setInputs((previous) => ({
      ...previous,
      [field]: Number.isNaN(parsed) ? 0 : parsed,
    }));
  }

  return (
    <section className="section section-soft">
      <div className="container tool-layout">
        <SectionIntro
          icon={TrendingUp}
          kicker="Calculadora"
          title="Impacto economico de un incidente"
          description="Usala para priorizar presupuesto y justificar inversiones de seguridad con datos de negocio."
        />

        <div className="tool-panel form-grid">
          <label>
            Registros/personas afectadas
            <input
              type="number"
              min="0"
              value={inputs.records}
              onChange={(event) => updateField("records", event.target.value)}
            />
          </label>
          <label>
            Coste medio de notificacion por registro (EUR)
            <input
              type="number"
              min="0"
              step="0.1"
              value={inputs.notificationCost}
              onChange={(event) => updateField("notificationCost", event.target.value)}
            />
          </label>
          <label>
            Horas de parada operativa
            <input
              type="number"
              min="0"
              value={inputs.downtimeHours}
              onChange={(event) => updateField("downtimeHours", event.target.value)}
            />
          </label>
          <label>
            Coste por hora parada (EUR)
            <input
              type="number"
              min="0"
              value={inputs.costPerHour}
              onChange={(event) => updateField("costPerHour", event.target.value)}
            />
          </label>
          <label>
            Coste forense y recuperacion (EUR)
            <input
              type="number"
              min="0"
              value={inputs.forensic}
              onChange={(event) => updateField("forensic", event.target.value)}
            />
          </label>
          <label>
            Coste legal/comunicacion (EUR)
            <input
              type="number"
              min="0"
              value={inputs.legal}
              onChange={(event) => updateField("legal", event.target.value)}
            />
          </label>
        </div>

        <div className="result-box">
          <h2>Estimacion total</h2>
          <p className="big-number">{total.toLocaleString("es-ES")} EUR</p>
          <ul>
            <li>Notificacion y gestion de afectados: {recordsCost.toLocaleString("es-ES")} EUR</li>
            <li>Parada operativa: {downtimeCost.toLocaleString("es-ES")} EUR</li>
            <li>Recuperacion tecnica: {inputs.forensic.toLocaleString("es-ES")} EUR</li>
            <li>Legal y comunicacion: {inputs.legal.toLocaleString("es-ES")} EUR</li>
          </ul>
          <p className="small-text">
            Calculo orientativo para priorizacion interna. Ajusta los parametros a tus costes
            reales.
          </p>
        </div>
      </div>
    </section>
  );
}

function RecoveryPlannerPage() {
  const { pathname } = useLocation();
  const [inputs, setInputs] = useState({
    criticalSystems: 4,
    rtoTarget: 8,
    backupsPerWeek: 3,
    offsiteCopies: "no",
    restoreTest: "no",
  });

  useSEO({
    title: "Planificador de recuperacion de datos | PymeSegura",
    description:
      "Herramienta para definir prioridades de backup y recuperacion ante incidentes en pymes.",
    pathname,
  });

  const penalty =
    Math.max(0, 20 - inputs.backupsPerWeek * 3) +
    Math.max(0, 18 - Math.max(1, 24 - inputs.rtoTarget)) +
    (inputs.offsiteCopies === "si" ? 0 : 18) +
    (inputs.restoreTest === "si" ? 0 : 22) +
    Math.min(24, inputs.criticalSystems * 3);

  const readinessScore = Math.max(0, Math.min(100, 100 - penalty));

  const recommendations = [
    inputs.backupsPerWeek < 7
      ? "Sube la frecuencia de copias para sistemas criticos a diario."
      : null,
    inputs.offsiteCopies === "no"
      ? "Mantener una copia externa u offsite reduce el impacto de ransomware."
      : null,
    inputs.restoreTest === "no"
      ? "Programa una prueba mensual de restauracion para validar tiempos reales."
      : null,
    inputs.rtoTarget <= 4
      ? "Alinea infraestructura y personal para cumplir un RTO exigente."
      : "Define un objetivo RTO mas estricto para procesos de alto impacto.",
  ].filter(Boolean);

  const level =
    readinessScore >= 75
      ? "Base de recuperacion solida"
      : readinessScore >= 50
        ? "Base intermedia con mejoras pendientes"
        : "Riesgo alto de interrupcion prolongada";

  function updateField(field, value) {
    setInputs((previous) => ({
      ...previous,
      [field]: typeof previous[field] === "number" ? Number(value) : value,
    }));
  }

  return (
    <section className="section">
      <div className="container tool-layout">
        <SectionIntro
          icon={FileText}
          kicker="Planificador"
          title="Plan de recuperacion de datos para pymes"
          description="Ajusta los parametros y obtendras prioridades concretas para reducir tiempos de parada."
        />

        <div className="tool-panel form-grid">
          <label>
            Sistemas criticos de negocio
            <input
              type="number"
              min="1"
              max="20"
              value={inputs.criticalSystems}
              onChange={(event) => updateField("criticalSystems", event.target.value)}
            />
          </label>
          <label>
            Objetivo de recuperacion (RTO, horas)
            <input
              type="number"
              min="1"
              max="72"
              value={inputs.rtoTarget}
              onChange={(event) => updateField("rtoTarget", event.target.value)}
            />
          </label>
          <label>
            Copias de seguridad por semana
            <input
              type="number"
              min="1"
              max="21"
              value={inputs.backupsPerWeek}
              onChange={(event) => updateField("backupsPerWeek", event.target.value)}
            />
          </label>
          <label>
            Tienes copia offsite?
            <select
              value={inputs.offsiteCopies}
              onChange={(event) => updateField("offsiteCopies", event.target.value)}
            >
              <option value="no">No</option>
              <option value="si">Si</option>
            </select>
          </label>
          <label>
            Has probado restauraciones en el ultimo mes?
            <select
              value={inputs.restoreTest}
              onChange={(event) => updateField("restoreTest", event.target.value)}
            >
              <option value="no">No</option>
              <option value="si">Si</option>
            </select>
          </label>
        </div>

        <div className="result-box">
          <h2>Madurez de recuperacion</h2>
          <p className="big-number">{readinessScore}/100</p>
          <p>
            <strong>{level}</strong>
          </p>
          <ul>
            {recommendations.map((recommendation) => (
              <li key={recommendation}>
                <ArrowRight size={15} /> {recommendation}
              </li>
            ))}
          </ul>
          <p className="small-text">
            Resultado orientativo para priorizar acciones de continuidad y backup.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const { pathname } = useLocation();

  useSEO({
    title: "Sobre PymeSegura | Equipo editorial",
    description:
      "Conoce al equipo, enfoque editorial y criterios de utilidad de PymeSegura para pymes.",
    pathname,
  });

  return (
    <section className="section section-soft">
      <div className="container prose">
        <SectionIntro
          icon={ShieldCheck}
          kicker="Equipo"
          title="Sobre PymeSegura"
          description="Somos un proyecto editorial centrado en transformar requisitos de seguridad y cumplimiento en acciones que una pyme pueda ejecutar."
        />

        <p>
          Nuestro enfoque es practico: publicamos guias con pasos, checklist y errores
          tipicos por sector. Revisamos contenido con enfoque tecnico, legal y de operacion
          para evitar recomendaciones genericas.
        </p>

        <div className="info-grid">
          <div className="info-card">
            <h3>Que publicamos</h3>
            <ul>
              <li>Guias de implementacion por industria.</li>
              <li>Herramientas de autoevaluacion gratuita.</li>
              <li>Plantillas operativas para equipos pequenos.</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Que no hacemos</h3>
            <ul>
              <li>Contenido automatico sin revision humana.</li>
              <li>Promesas de resultados sin contexto.</li>
              <li>Recomendaciones que incentiven clics en publicidad.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologyPage() {
  const { pathname } = useLocation();

  useSEO({
    title: "Metodologia editorial | PymeSegura",
    description:
      "Como investigamos, validamos y actualizamos las guias de ciberseguridad y cumplimiento publicadas en PymeSegura.",
    pathname,
  });

  return (
    <section className="section">
      <div className="container prose">
        <SectionIntro
          icon={BookOpen}
          kicker="Transparencia"
          title="Metodologia editorial"
          description="Publicamos contenido orientado a resolver decisiones reales de negocio. Esta es nuestra politica de calidad."
        />

        <ol className="steps">
          <li>
            <strong>Investigacion inicial.</strong> Definimos el problema operativo por
            sector y recopilamos normativa y buenas practicas aplicables.
          </li>
          <li>
            <strong>Redaccion orientada a accion.</strong> Cada guia debe incluir checklist,
            prioridades y errores frecuentes.
          </li>
          <li>
            <strong>Revision interna.</strong> Verificamos coherencia tecnica, legal y
            viabilidad para pymes.
          </li>
          <li>
            <strong>Actualizacion continua.</strong> Mostramos fecha de revision y
            actualizamos cuando cambian practicas o contexto operativo.
          </li>
        </ol>

        <div className="info-card">
          <h3>Principios de publicacion</h3>
          <ul>
            <li>Primero utilidad, luego formato.</li>
            <li>Sin relleno SEO ni textos repetitivos.</li>
            <li>Lenguaje claro para responsables no tecnicos.</li>
            <li>Tono neutral, sin incentivar clics publicitarios.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  useSEO({
    title: "Contacto | PymeSegura",
    description:
      "Contacta con el equipo de PymeSegura para dudas editoriales o colaboracion en contenidos para pymes.",
    pathname,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = `Consulta de ${formData.nombre || "usuario"} desde PymeSegura`;
    const body = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`;
    const href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitMessage("Se ha abierto tu cliente de correo para enviar el mensaje.");
  }

  return (
    <section className="section section-soft">
      <div className="container contact-grid">
        <div>
          <SectionIntro
            icon={Mail}
            kicker="Contacto"
            title="Hablemos"
            description="Si quieres proponer un tema o revisar la seguridad de tu pyme, puedes escribirnos directamente."
          />
          <ul className="contact-list">
            <li>
              <Mail size={16} />
              <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
            </li>
            <li>
              <Phone size={16} />
              <span>{SITE.contactPhone}</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>{SITE.location}</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </label>
          <label>
            Mensaje
            <textarea
              name="mensaje"
              rows="6"
              placeholder="Cuentanos tu situacion y te responderemos por email."
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
          {submitMessage ? <p className="small-text">{submitMessage}</p> : null}
        </form>
      </div>
    </section>
  );
}

function LegalPage({ type }) {
  const { pathname } = useLocation();

  const docs = {
    "aviso-legal": {
      title: "Aviso legal",
      description:
        "Informacion legal, titularidad del sitio, condiciones de uso y limitacion de responsabilidad.",
      blocks: [
        {
          heading: "Titularidad",
          text: "Este sitio es gestionado por el equipo editorial de PymeSegura. Para cualquier cuestion legal o editorial puedes contactar en hola@pymesegura.org.",
        },
        {
          heading: "Condiciones de uso",
          text: "El contenido se ofrece con fines informativos y de apoyo a la toma de decisiones en pymes. No sustituye asesoramiento legal individualizado.",
        },
        {
          heading: "Propiedad intelectual",
          text: "Los contenidos, diseno y estructura del portal son propiedad de PymeSegura salvo indicacion expresa. No se autoriza reproduccion integra sin consentimiento.",
        },
      ],
    },
    privacidad: {
      title: "Politica de privacidad",
      description:
        "Informacion sobre tratamiento de datos personales, base legal, conservacion y derechos.",
      blocks: [
        {
          heading: "Que datos tratamos",
          text: "Tratamos datos de contacto enviados voluntariamente a traves del formulario o correo electronico, con la finalidad de responder solicitudes.",
        },
        {
          heading: "Base legal y conservacion",
          text: "La base juridica es el consentimiento del usuario y el interes legitimo en responder solicitudes. Conservamos los datos durante el tiempo estrictamente necesario.",
        },
        {
          heading: "Derechos de las personas",
          text: "Puedes ejercer derechos de acceso, rectificacion, supresion, oposicion, limitacion y portabilidad mediante email a hola@pymesegura.org.",
        },
      ],
    },
    cookies: {
      title: "Politica de cookies",
      description:
        "Uso de cookies tecnicas, analiticas y de terceros para mejorar experiencia y medir rendimiento del sitio.",
      blocks: [
        {
          heading: "Que son las cookies",
          text: "Las cookies son archivos pequenos almacenados en el navegador para recordar preferencias, mejorar navegacion y analizar uso del sitio.",
        },
        {
          heading: "Tipos utilizadas",
          text: "Usamos cookies tecnicas necesarias para funcionamiento basico y, con consentimiento, cookies analiticas o publicitarias de terceros.",
        },
        {
          heading: "Como gestionar cookies",
          text: "Puedes aceptar o rechazar cookies no esenciales desde el banner y tambien gestionarlas en la configuracion de tu navegador.",
        },
      ],
    },
  };

  const selected = docs[type] || docs.privacidad;

  useSEO({
    title: `${selected.title} | ${SITE.name}`,
    description: selected.description,
    pathname,
  });

  return (
    <section className="section">
      <div className="container prose">
        <SectionIntro
          icon={FileText}
          kicker="Legal"
          title={selected.title}
          description={selected.description}
        />
        {selected.blocks.map((block) => (
          <section key={block.heading} className="info-card">
            <h3>{block.heading}</h3>
            <p>{block.text}</p>
          </section>
        ))}
      </div>
    </section>
  );
}

function SiteMapPage() {
  const { pathname } = useLocation();

  useSEO({
    title: "Mapa del sitio | PymeSegura",
    description: "Mapa interno con enlaces a todas las secciones principales de PymeSegura.",
    pathname,
  });

  return (
    <section className="section section-soft">
      <div className="container prose">
        <SectionIntro
          icon={MapPin}
          kicker="Navegacion"
          title="Mapa del sitio"
          description="Acceso rapido a paginas principales, guias y herramientas."
        />

        <div className="info-grid">
          <div className="info-card">
            <h3>Paginas principales</h3>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/guias">Guias</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros">Sobre nosotros</Link>
              </li>
              <li>
                <Link to="/metodologia-editorial">Metodologia editorial</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Herramientas</h3>
            <ul>
              <li>
                <Link to="/herramientas/evaluacion-riesgo">Evaluacion de riesgo</Link>
              </li>
              <li>
                <Link to="/herramientas/calculadora-impacto-incidente">
                  Calculadora de impacto
                </Link>
              </li>
              <li>
                <Link to="/herramientas/plan-recuperacion-datos">
                  Plan de recuperacion de datos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  const { pathname } = useLocation();

  useSEO({
    title: "Pagina no encontrada | PymeSegura",
    description: "La pagina solicitada no existe o ha sido movida.",
    pathname,
  });

  return (
    <section className="section">
      <div className="container empty-state-box">
        <h1>Pagina no encontrada</h1>
        <p>El contenido que buscas no esta disponible en esta URL.</p>
        <Link className="btn btn-primary" to="/guias">
          Ir a guias publicadas
        </Link>
      </div>
    </section>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guias" element={<GuidesPage />} />
      <Route path="/guias/:slug" element={<ArticlePage />} />
      <Route path="/sectores/:slug" element={<CategoryPage />} />

      <Route path="/herramientas/evaluacion-riesgo" element={<RiskEvaluationPage />} />
      <Route
        path="/herramientas/calculadora-impacto-incidente"
        element={<IncidentImpactPage />}
      />
      <Route
        path="/herramientas/plan-recuperacion-datos"
        element={<RecoveryPlannerPage />}
      />

      <Route path="/sobre-nosotros" element={<AboutPage />} />
      <Route path="/metodologia-editorial" element={<MethodologyPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/aviso-legal" element={<LegalPage type="aviso-legal" />} />
      <Route
        path="/politica-de-privacidad"
        element={<LegalPage type="privacidad" />}
      />
      <Route path="/politica-de-cookies" element={<LegalPage type="cookies" />} />
      <Route path="/mapa-web" element={<SiteMapPage />} />

      {LEGACY_REDIRECTS.map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
