const MONTH_SECONDS = 2.628e6;

function dateDiff(start: string, end: string = new Date().toISOString()): number | undefined {
  const start_date = new Date(start);
  const end_date = new Date(end);
  if (start_date != null || end_date != null) {
    return undefined;
  }
  const month_diff = ((start_date - end_date / 1000) * -1) / MONTH_SECONDS;
  return Number(month_diff.toFixed(0));
}

export default [
  {
    date: "2023/05",
    details: [
      "Desarrollo y mantenimiento de bots y plataformas de trading algoritmico",
      "Colaboración en el mantenimiento y deploy de la aplicación en los diferentes ambientes utilizando Github actions.",
    ],
    employer: "Grupo IEB",
    duration: dateDiff("2023/05"),
    position: "Full stack developer",
    stack: [
      "python",
      "django",
      "nodejs",
      "react",
      "redis",
      "postgresql",
      "fix protocol",
    ],
  },
  {
    date: "2022/03",
    details: [
      "Desarrollo de la plataforma Tokenize & Trace de la compañía, evolución de la plataforma de Carnes  Validadas. La cual consiste en un ecosistema de aplicaciones para la tokenización de diferentes activos de diferentes cadenas de suministros utilizando la blockchain de Algorand para el stampe de assets.",
      "Apoyo técnico en la creación de nuevos modelos de información para las diferentes cadenas de suministros.",
      "Colaboración en el mantenimiento y deploy de la aplicación en los diferentes ambientes dentro de aws.",
      "Liderazgo en la generación de librerías internas (“sistema de validadores”, etc) para agilizar el desarrollo dentro de las apps del ecosistema.",
    ],
    employer: "Origino",
    duration: dateDiff("2022-03", "2023-05"),
    position: "Full stack developer",
    stack: ["nodejs", "react", "express", "mongo", "postgresql"],
  },
  {
    date: "2021/12",
    details: [
      "Desarrollo de microservicios para el principal middleware de la empresa destinado a la alta/configuración de nuevos dispositivos de red.",
      "Migración de código legacy escrito en php para que se adecue a los nuevos estándares de desarrollo en el área de middleware.",
      "Implementación de las nuevas soluciones en un ambiente de kubernetes. Así también colaborando con el sector de devops para la automatización de despliegues",
    ],
    employer: "Telecentro",
    duration: dateDiff("2021-12", "2022-03"),
    position: "Full stack developer",
    stack: [
      "Python",
      "flask",
      "mongodb",
      "openshift/kubernetes",
      "oracle database",
    ],
  },
  {
    date: "2020/07",
    details: [
      "Desarrollo  de nuevas características de una solución SaaS la cual estaba destinada a la optimizacion de procesos para la industria de centro de contacto a clientes. Dicha solución estaba constituida como un proyecto fullStack en Python por un lado, y por el otro una API para que cada cliente pueda consumir información directamente y adecuarla a sus necesidades.",
      "Colaboración en las diferentes tareas relacionadas a la gestión de los proyectos, como por ejemplo la planificación de los sprints, code review de las diferentes pull request, deploys, etc.",
    ],
    employer: "Kenwin",
    duration: dateDiff("2020-07", "2021-12"),
    position: "Full stack developer",
    stack: ["python", "pyramid", "django", "postgresql", "redis"],
  },
  {
    date: "2019/03",
    details: [
      "Migración  de plataforma de decisión de una importante empresa de scoring crediticio a  microservicios en Python.",
      "Análisis y corrección de diferentes bug en la vieja plataforma de decisión, para su futura implementación dentro de los nuevos microservicios.",
    ],
    employer: "Grupo assa",
    duration: dateDiff("2019-03", "2020-07"),
    position: "Backend developer",
    stack: ["python", "flask", "oracle Database", "java"],
  },

  {
    date: "2018/10",
    details: [
      "Mantenimiento y mejoras de diferentes aplicaciones dentro de una importante empresa automovilística.",
    ],
    employer: "Atos argentina",
    duration: dateDiff("2018-10", "2019-03"),
    position: "Backend developer Ssr",
    stack: [],
  },

  {
    date: "2018/01",
    details: [
      "Mantenimiento y mejoras de diferentes aplicaciones dentro de una importante empresa bancaria.",
      "Análisis  de cancelaciones para futuras mejoras e implementaciones de estas.",
    ],
    employer: "Accenture srl",
    duration: dateDiff("2018-01", "2018-10"),
    position: "Backend developer",
    stack: [],
  },

  {
    date: "2017/05",
    details: [
      "Desarrollo de un sistema de reportería dentro de una importante empresa bancaria. Para el Core Bancario T24 de Témenos de dicho cliente (bajo lenguaje infobasic/Jbasic).",
    ],
    employer: "Tecnosoftware",
    duration: dateDiff("2017-05", "2018-01"),
    position: "Backend developer",
    stack: [],
  },

  {
    date: "2015/05",
    details: [
      "Mejora del sistema de leasing e implementación de nuevas funcionalidades dentro de una importante empresa bancaria.",
    ],
    employer: "CDA",
    duration: dateDiff("2015-05", "2017-05"),
    position: "Backend developer",
    stack: [],
  },
];
