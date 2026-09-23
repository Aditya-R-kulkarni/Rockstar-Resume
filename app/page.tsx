"use client";

import { useEffect, useRef, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type SceneId =
  | "home"
  | "about"
  | "projects"
  | "resume"
  | "connect"
  | "lab";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  icon: string;
  accent: string;
};

/* =========================================================
   DATA
========================================================= */

const projects: Project[] = [
  {
    id: "phishing",
    title: "Phishing Website Detection",
    category: "ML / Cybersecurity",
    description:
      "A machine-learning platform built to identify phishing websites and provide a practical detection workflow.",
    stack: [
      "Python",
      "ML",
      "Random Forest",
      "SVM",
      "Streamlit",
      "SQLite",
      "Authentication",
    ],
    icon: "◈",
    accent: "red",
  },
  {
    id: "autism",
    title: "Autism Prediction Using ML",
    category: "ML / Data Science",
    description:
      "A college machine-learning project exploring classification of autism traits using a toddler screening dataset.",
    stack: [
      "Python",
      "Random Forest",
      "Pandas",
      "Data Preprocessing",
      "Classification",
      "ML",
    ],
    icon: "✦",
    accent: "red",
  },
  {
    id: "cyber-shield",
    title: "Cyber Shield: 8-Bit Auditor",
    category: "AI / Cybersecurity",
    description:
      "A gamified cloud-security auditing tool combining automated security checks with an interactive 8-bit training experience.",
    stack: [
      "Gemini API",
      "Google AI Studio",
      "Web",
      "Security",
      "AI",
      "Prompt Engineering",
    ],
    icon: "⬡",
    accent: "red",
  },
  {
    id: "legal-copilot",
    title: "Legal Copilot",
    category: "AI / LLM",
    description:
      "An AI-focused project exploring how language models can support legal research and information workflows.",
    stack: [
      "AI",
      "LLMs",
      "Research",
      "Web",
      "Prompt Engineering",
    ],
    icon: "⌘",
    accent: "red",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function GlowText({
  children,
  red = false,
}: {
  children: React.ReactNode;
  red?: boolean;
}) {
  return (
    <span
      className={
        red
          ? "text-red-500 drop-shadow-[0_0_18px_rgba(239,68,68,0.45)] transition-all duration-300 hover:text-red-300 hover:drop-shadow-[0_0_35px_rgba(239,68,68,1)]"
          : ""
      }
    >
      {children}
    </span>
  );
}

function ReturnButton({
  onClick,
  label = "Back",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/45 transition-colors duration-300 hover:text-white"
    >
      <span className="text-base text-red-500 transition-transform duration-300 group-hover:-translate-x-1">
        ←
      </span>

      {label}
    </button>
  );
}

/* =========================================================
   WORLD BACKGROUND
========================================================= */

function WorldBackground({
  mouse,
  transitioning,
}: {
  mouse: { x: number; y: number };
  transitioning: boolean;
}) {
  const floatingNodes = [
    { x: 12, y: 20 },
    { x: 24, y: 72 },
    { x: 78, y: 18 },
    { x: 88, y: 64 },
    { x: 67, y: 82 },
    { x: 38, y: 14 },
  ];

  const paths = [
    "M0 180 H180 V300 H340",
    "M0 700 H220 V610 H430 V520",
    "M1600 170 H1390 V260 H1250",
    "M1600 680 H1430 V580 H1280 V500",
    "M420 0 V110 H560 V180",
    "M1170 0 V110 H1040 V190",
    "M300 900 V780 H470 V700",
    "M1260 900 V780 H1110 V700",
  ];

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden transition-all duration-[900ms] ${
        transitioning
          ? "scale-[1.035] blur-[1.5px]"
          : "scale-100 blur-0"
      }`}
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Atmospheric gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(100,0,0,0.17),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(150,0,0,0.08),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(100,0,0,0.08),transparent_30%)]" />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Circuit system */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.24]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            fill="none"
            stroke="rgba(239,68,68,0.55)"
            strokeWidth="1"
            strokeDasharray={
              index === 0 || index === 3 ? "7 10" : "0"
            }
            className={
              index === 0 || index === 3 ? "animate-dash" : ""
            }
          />
        ))}
      </svg>

      {/* Cursor-reactive nodes */}
      {floatingNodes.map((node, index) => {
        const moveX =
          mouse.x * (index % 2 === 0 ? 8 : -5);

        const moveY =
          mouse.y * (index % 2 === 0 ? 5 : -7);

        return (
          <div
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-red-500/60 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: `translate(${moveX}px, ${moveY}px)`,
            }}
          />
        );
      })}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.72)_100%)]" />

      <style jsx>{`
        @keyframes dashMove {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -80;
          }
        }

        .animate-dash {
          animation: dashMove 5s linear infinite;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   ORB
========================================================= */

function WorldOrb({
  mouse,
  transitioning,
  active = false,
}: {
  mouse: { x: number; y: number };
  transitioning: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`relative h-[360px] w-[360px] sm:h-[450px] sm:w-[450px] transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        transitioning
          ? "scale-[1.14] rotate-[5deg]"
          : "scale-100 rotate-0"
      }`}
      style={{
        transform: `translate3d(${mouse.x * 7}px, ${
          mouse.y * -7
        }px, 0)`,
      }}
    >
      {/* Atmospheric glow */}
      <div className="absolute inset-[8%] rounded-full bg-red-700/20 blur-[70px]" />

      <div className="absolute inset-[18%] rounded-full bg-red-600/10 blur-[40px]" />

      {/* Main glass shell */}
      <div className="absolute inset-[12%] rounded-full border border-white/[0.16] bg-white/[0.025] shadow-[inset_0_0_60px_rgba(255,255,255,0.035),0_0_100px_rgba(130,0,0,0.15)] backdrop-blur-xl">
        {/* Inner reflection */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.13),transparent_22%),radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.08),transparent_35%)]" />

        {/* Concentric rings */}
        <div className="absolute inset-[7%] rounded-full border border-white/[0.055]" />

        <div className="absolute inset-[16%] rounded-full border border-red-500/[0.12]" />

        <div className="absolute inset-[26%] rounded-full border border-white/[0.045]" />

        {/* Orbital ring 1 */}
        <div
          className="absolute inset-[4%] rounded-full border border-red-500/[0.25]"
          style={{
            transform: "rotateX(68deg) rotateZ(-18deg)",
          }}
        />

        {/* Orbital ring 2 */}
        <div
          className="absolute inset-[8%] rounded-full border border-white/[0.12]"
          style={{
            transform: "rotateY(68deg) rotateZ(22deg)",
          }}
        />

        {/* Orbital ring 3 */}
        <div
          className="absolute inset-[15%] rounded-full border border-red-400/[0.18]"
          style={{
            transform: "rotateX(72deg) rotateY(20deg)",
          }}
        />

        {/* Energy field */}
        <div className="absolute inset-[27%] rounded-full bg-[radial-gradient(circle_at_45%_40%,rgba(255,70,70,0.45),rgba(120,0,0,0.2)_38%,rgba(0,0,0,0.8)_72%)] shadow-[0_0_55px_rgba(180,0,0,0.3)]" />

        {/* Core */}
        <div className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/30 bg-[radial-gradient(circle_at_35%_28%,rgba(255,100,100,0.8),rgba(100,0,0,0.7)_38%,#050505_72%)] shadow-[0_0_45px_rgba(220,0,0,0.5)]">
          <div className="absolute inset-[18%] rounded-full border border-white/10" />
        </div>

        {/* Micro nodes */}
        {[
          ["25%", "32%"],
          ["70%", "25%"],
          ["76%", "67%"],
          ["31%", "73%"],
          ["52%", "17%"],
        ].map(([left, top], index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.9)]"
            style={{ left, top }}
          />
        ))}

        {/* Reflection */}
        <div className="absolute left-[22%] top-[17%] h-[23%] w-[10%] rotate-[35deg] rounded-full bg-white/10 blur-md" />
      </div>

      {/* Active node resonance */}
      {active && (
        <div className="absolute inset-[4%] animate-pulse rounded-full border border-red-500/20" />
      )}
    </div>
  );
}

/* =========================================================
   NAVIGATION
========================================================= */

function SceneNavigation({
  selectedNode,
  onNavigate,
}: {
  selectedNode: SceneId;
  onNavigate: (id: SceneId) => void;
}) {
  const items = [
    {
      id: "about" as SceneId,
      label: "ABOUT",
      position: "top-[18%] left-[22%]",
    },
    {
      id: "projects" as SceneId,
      label: "PROJECTS",
      position: "top-[30%] right-[18%]",
    },
    {
      id: "lab" as SceneId,
      label: "LAB",
      position: "bottom-[25%] left-[18%]",
    },
    {
      id: "resume" as SceneId,
      label: "RESUME",
      position: "bottom-[18%] right-[24%]",
    },
    {
      id: "connect" as SceneId,
      label: "CONNECT",
      position: "top-[48%] right-[7%]",
    },
  ];

  return (
    <>
      {items.map((item) => {
        const active = selectedNode === item.id;
        const disabled = item.id === "lab";

        return (
          <button
            key={item.id}
            onClick={() => {
              if (!disabled) {
                onNavigate(item.id);
              }
            }}
            disabled={disabled}
            className={`group absolute ${item.position} z-30 flex items-center gap-3 ${
              disabled ? "cursor-default" : ""
            }`}
          >
            <span
              className={`relative h-2.5 w-2.5 rounded-full border transition-all duration-500 ${
                active
                  ? "scale-125 border-red-400 bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.9)]"
                  : disabled
                  ? "border-white/10 bg-white/[0.025]"
                  : "border-red-500/60 bg-red-500/20 group-hover:scale-125 group-hover:bg-red-500"
              }`}
            />

            <span
              className={`text-[10px] font-medium tracking-[0.32em] transition-all duration-300 ${
                active
                  ? "text-white"
                  : disabled
                  ? "text-white/15"
                  : "text-white/35 group-hover:text-white/80"
              }`}
            >
              {item.label}
            </span>

            {!disabled && (
              <span className="absolute -inset-4 rounded-full bg-red-500/0 blur-xl transition-all duration-500 group-hover:bg-red-500/10" />
            )}
          </button>
        );
      })}
    </>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home({
  mouse,
  transitioning,
  onNavigate,
}: {
  mouse: { x: number; y: number };
  transitioning: boolean;
  onNavigate: (id: SceneId) => void;
}) {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden">
      <SceneNavigation
        selectedNode="home"
        onNavigate={onNavigate}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-center px-8 sm:px-14">
        {/* Identity */}
        <div
          className={`relative z-20 max-w-[560px] transition-all duration-[900ms] ${
            transitioning
              ? "-translate-x-4 scale-[0.98] opacity-80"
              : "translate-x-0 scale-100 opacity-100"
          }`}
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-red-500" />

            <span className="text-[10px] tracking-[0.42em] text-white/35">
              INFORMATION SCIENCE & ENGINEERING
            </span>
          </div>

          <h1 className="text-[clamp(4rem,9vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
            Aditya
            <br />
            <GlowText red>Kulkarni.</GlowText>
          </h1>

          <p className="mt-9 max-w-[520px] text-base leading-8 text-white/45 sm:text-lg">
            An engineering graduate interested in AI, software,
            cybersecurity, data and the process of turning ideas
            into things that actually work.
          </p>
        </div>

        {/* Orb */}
        <div className="absolute left-[53%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <WorldOrb
            mouse={mouse}
            transitioning={transitioning}
          />
        </div>

        {/* Bottom location */}
        <div className="absolute bottom-8 right-8 text-right text-[8px] tracking-[0.32em] text-white/20 sm:right-14">
          BENGALURU · INDIA
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function AboutScene({
  mouse,
  transitioning,
  onBack,
}: {
  mouse: { x: number; y: number };
  transitioning: boolean;
  onBack: () => void;
}) {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-[1450px] items-center px-8 py-20 sm:px-14">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          {/* Copy */}
          <section
            className={`transition-all duration-[900ms] ${
              transitioning
                ? "-translate-x-5 opacity-70"
                : "translate-x-0 opacity-100"
            }`}
          >
            <ReturnButton onClick={onBack} label="Home" />

            <div className="mt-14">
              <div className="mb-5 text-[10px] tracking-[0.4em] text-red-500">
                ABOUT
              </div>

              <h2 className="text-6xl font-semibold tracking-[-0.05em] sm:text-8xl">
                About <GlowText red>me.</GlowText>
              </h2>

              <div className="mt-9 max-w-[650px] space-y-6 text-base leading-8 text-white/45 sm:text-lg">
                <p>
                  I’m an Information Science and Engineering
                  graduate who enjoys building, experimenting and
                  understanding how technology can solve practical
                  problems.
                </p>

                <p>
                  My interests sit across AI, software development,
                  cybersecurity and data. I tend to learn by building
                  something, breaking it, figuring out why it broke,
                  and improving it.
                </p>

                <p>
                  Outside technology, I spend time riding, taking
                  photographs, travelling, discovering food, working
                  out, listening to music and exploring creative ideas.
                </p>
              </div>
            </div>

            <div className="mt-12 grid max-w-[650px] grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Problem Solving",
                "Curiosity",
                "Building",
                "Learning",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-5 text-[9px] uppercase tracking-[0.2em] text-white/45 backdrop-blur-xl"
                >
                  <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Orb */}
          <section className="flex justify-center lg:justify-end">
            <div
              className={`transition-all duration-[1100ms] ${
                transitioning
                  ? "scale-[1.08] opacity-70"
                  : "scale-100 opacity-100"
              }`}
            >
              <WorldOrb
                mouse={mouse}
                transitioning={transitioning}
                active
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  active,
  onClick,
}: {
  project: Project;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[28px] border p-6 text-left backdrop-blur-xl transition-all duration-500 ${
        active
          ? "border-red-500/35 bg-red-500/[0.055]"
          : "border-white/[0.08] bg-white/[0.025] hover:-translate-y-1 hover:border-red-500/20 hover:bg-white/[0.04]"
      }`}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-600/0 blur-3xl transition-all duration-500 group-hover:bg-red-600/10" />

      <div className="relative z-10">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.06] text-xl text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.08)]">
            {project.icon}
          </div>

          <span className="text-[8px] tracking-[0.25em] text-white/25">
            0{index + 1}
          </span>
        </div>

        <div className="mb-3 text-[8px] uppercase tracking-[0.3em] text-red-400/70">
          {project.category}
        </div>

        <h3 className="max-w-[280px] text-2xl font-medium leading-tight tracking-[-0.025em] text-white">
          {project.title}
        </h3>

        <p className="mt-5 min-h-[72px] text-sm leading-6 text-white/35">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[8px] tracking-[0.14em] text-white/35"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/35 transition-colors group-hover:text-white/70">
          View project

          <span className="text-red-500 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </button>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

function ProjectsScene({
  mouse,
  transitioning,
  onBack,
}: {
  mouse: { x: number; y: number };
  transitioning: boolean;
  onBack: () => void;
}) {
  const [selectedProject, setSelectedProject] = useState(0);
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = projects.filter((project) => {
    if (filter === "ALL") return true;

    if (filter === "ML") {
      return project.category.includes("ML");
    }

    if (filter === "AI") {
      return project.category.includes("AI");
    }

    if (filter === "SECURITY") {
      return project.category.includes("Cybersecurity");
    }

    return true;
  });

  const selected =
    filteredProjects[selectedProject] ?? filteredProjects[0];

  useEffect(() => {
    setSelectedProject(0);
  }, [filter]);

  return (
    <main className="relative z-10 min-h-screen overflow-hidden">
      <div className="mx-auto min-h-screen max-w-[1550px] px-8 py-14 sm:px-14">
        <div className="flex items-center justify-between">
          <ReturnButton onClick={onBack} label="Home" />

          <div className="hidden text-right sm:block">
            <div className="text-[8px] tracking-[0.38em] text-white/20">
              SELECTED
            </div>

            <div className="mt-1 text-[9px] tracking-[0.25em] text-red-400/60">
              {selected?.category}
            </div>
          </div>
        </div>

        {/* Header */}
        <div
          className={`mt-16 flex flex-col justify-between gap-8 transition-all duration-[900ms] lg:flex-row lg:items-end ${
            transitioning
              ? "translate-y-3 opacity-70"
              : "translate-y-0 opacity-100"
          }`}
        >
          <div>
            <div className="mb-5 text-[10px] tracking-[0.4em] text-red-500">
              SELECTED WORK
            </div>

            <h2 className="text-6xl font-semibold tracking-[-0.055em] sm:text-8xl">
              My <GlowText red>Projects.</GlowText>
            </h2>

            <p className="mt-5 text-sm tracking-wide text-white/30 sm:text-base">
              Ideas → Code → Impact
            </p>
          </div>

          <div className="flex gap-2">
            {["ALL", "ML", "AI", "SECURITY"].map(
              (item) => {
                const activeFilter = filter === item;

                return (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-full border px-4 py-2 text-[8px] tracking-[0.2em] transition-all ${
                      activeFilter
                        ? "border-red-500/40 bg-red-500/10 text-red-400"
                        : "border-white/[0.07] text-white/25 hover:border-white/15 hover:text-white/55"
                    }`}
                  >
                    {item}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Main visual */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Orb */}
          <div
            className={`relative flex min-h-[430px] items-center justify-center transition-all duration-[1000ms] ${
              transitioning
                ? "scale-[1.07] opacity-70"
                : "scale-100 opacity-100"
            }`}
          >
            <WorldOrb
              mouse={mouse}
              transitioning={transitioning}
              active
            />

            {/* Project orbital labels */}
            <div className="absolute inset-0">
              {projects.map((project, index) => {
                const positions = [
                  "left-[3%] top-[25%]",
                  "right-[2%] top-[18%]",
                  "right-[0%] bottom-[22%]",
                  "left-[5%] bottom-[18%]",
                ];

                const visibleIndex =
                  filteredProjects.findIndex(
                    (item) => item.id === project.id
                  );

                if (visibleIndex === -1) {
                  return null;
                }

                return (
                  <button
                    key={project.id}
                    onClick={() =>
                      setSelectedProject(visibleIndex)
                    }
                    className={`absolute ${positions[index]} hidden items-center gap-2 lg:flex`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        selected?.id === project.id
                          ? "bg-red-400 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
                          : "bg-white/20"
                      }`}
                    />

                    <span
                      className={`text-[8px] tracking-[0.2em] transition-colors ${
                        selected?.id === project.id
                          ? "text-white/70"
                          : "text-white/20 hover:text-white/50"
                      }`}
                    >
                      {project.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
                active={selected?.id === project.id}
                onClick={() => setSelectedProject(index)}
              />
            ))}
          </div>
        </div>

        {/* Selected project detail strip */}
        {selected && (
          <div className="mt-8 overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.018] p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr_1fr] lg:items-center">
              <div>
                <div className="text-[8px] tracking-[0.3em] text-red-500">
                  CURRENT PROJECT
                </div>

                <h3 className="mt-3 text-2xl font-medium">
                  {selected.title}
                </h3>
              </div>

              <div>
                <div className="mb-2 text-[8px] uppercase tracking-[0.28em] text-white/25">
                  Focus
                </div>

                <p className="text-sm leading-6 text-white/40">
                  {selected.description}
                </p>
              </div>

              <div className="lg:text-right">
                <div className="mb-3 text-[8px] uppercase tracking-[0.28em] text-white/25">
                  Stack
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {selected.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[8px] text-white/35"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

/* =========================================================
   RESUME
========================================================= */

function ResumeScene({
  mouse,
  transitioning,
  onBack,
}: {
  mouse: { x: number; y: number };
  transitioning: boolean;
  onBack: () => void;
}) {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden">
      <div className="mx-auto min-h-screen max-w-[1500px] px-8 py-14 sm:px-14">
        <div className="flex items-center justify-between">
          <ReturnButton onClick={onBack} label="Home" />

          <div className="hidden text-right sm:block">
            <div className="text-[8px] tracking-[0.38em] text-white/20">
              PROFILE
            </div>

            <div className="mt-1 text-[9px] tracking-[0.25em] text-red-400/60">
              ADITYA R KULKARNI
            </div>
          </div>
        </div>

        <div
          className={`mt-14 grid gap-12 transition-all duration-[1000ms] lg:grid-cols-[0.85fr_1.5fr] ${
            transitioning
              ? "translate-y-4 opacity-70"
              : "translate-y-0 opacity-100"
          }`}
        >
          {/* Left */}
          <section>
            <div className="text-[10px] tracking-[0.4em] text-red-500">
              RESUME
            </div>

            <h2 className="mt-5 text-6xl font-semibold tracking-[-0.055em] sm:text-8xl">
              The <GlowText red>work.</GlowText>
            </h2>

            <p className="mt-7 max-w-[470px] text-base leading-8 text-white/40">
              Information Science and Engineering graduate with
              experience spanning software, AI, cybersecurity,
              data and cross-functional digital operations.
            </p>

            {/* Orb */}
            <div className="mt-10 hidden justify-center lg:flex">
              <div
                style={{
                  transform: `translate3d(${mouse.x * 5}px, ${
                    mouse.y * -5
                  }px, 0)`,
                }}
              >
                <WorldOrb
                  mouse={mouse}
                  transitioning={transitioning}
                />
              </div>
            </div>
          </section>

          {/* Resume information */}
          <section className="grid gap-4 sm:grid-cols-2">
            {/* Education */}
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl">
              <div className="text-[8px] tracking-[0.32em] text-red-500">
                EDUCATION
              </div>

              <h3 className="mt-5 text-xl font-medium">
                B.Tech, Information Science & Engineering
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Reva University
              </p>

              <p className="mt-1 text-[9px] tracking-[0.2em] text-white/20">
                11/2021 — 07/2025
              </p>
            </div>

            {/* Experience */}
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl">
              <div className="text-[8px] tracking-[0.32em] text-red-500">
                EXPERIENCE
              </div>

              <h3 className="mt-5 text-xl font-medium">
                Social Media & Operations Account Manager
              </h3>

              <p className="mt-3 text-sm text-white/40">
                Hyper Visuals · Bengaluru
              </p>

              <p className="mt-1 text-[9px] tracking-[0.2em] text-white/20">
                05/2026 — 07/2026
              </p>
            </div>

            {/* Skills */}
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl">
              <div className="text-[8px] tracking-[0.32em] text-red-500">
                CORE SKILLS
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "AI",
                  "Machine Learning",
                  "Cybersecurity",
                  "Prompt Engineering",
                  "Excel VBA",
                  "Data Visualization",
                  "Streamlit",
                  "Agile",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-[8px] tracking-[0.12em] text-white/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl">
              <div className="text-[8px] tracking-[0.32em] text-red-500">
                CERTIFICATIONS
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-sm font-medium text-white/75">
                    CompTIA Security+ SY0-701
                  </h3>

                  <p className="mt-1 text-[9px] tracking-[0.18em] text-white/25">
                    UDEMY · 2025
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white/75">
                    Agile Software Development Virtual Experience
                  </h3>

                  <p className="mt-1 text-[9px] tracking-[0.18em] text-white/25">
                    JP MORGAN CHASE & CO · 2023
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white/75">
                    Microsoft Excel Masterclass: Advanced Analytics & VBA
                  </h3>

                  <p className="mt-1 text-[9px] tracking-[0.18em] text-white/25">
                    UDEMY · 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Technical work */}
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl sm:col-span-2">
              <div className="text-[8px] tracking-[0.32em] text-red-500">
                TECHNICAL WORK
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <h3 className="text-base font-medium">
                    EV Market Trends Analysis
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Automated automotive dataset cleaning and
                    structuring using Excel VBA and built interactive
                    visualizations for EV industry trends.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium">
                    ML Phishing Detection
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Full-stack phishing detection web application
                    with authentication using Python, Streamlit and
                    SQLite.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium">
                    Cyber Shield: 8-Bit Auditor
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Gamified cloud-security auditing tool built with
                    Google AI Studio and the Gemini API.
                  </p>
                </div>
              </div>
            </div>

            {/* Resume action */}
            <div className="flex items-center justify-between rounded-[28px] border border-red-500/15 bg-red-500/[0.035] p-7 backdrop-blur-xl sm:col-span-2">
              <div>
                <div className="text-[8px] tracking-[0.32em] text-red-500">
                  FULL DOCUMENT
                </div>

                <p className="mt-2 text-sm text-white/35">
                  Keep the complete CV available alongside the
                  portfolio.
                </p>
              </div>

              <a
                href="/Aditya_Kulkarni_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-3 text-[9px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-red-400 hover:bg-red-500/20"
              >
                View Resume

                <span className="text-red-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   CONNECT
========================================================= */

function ConnectScene({
  mouse,
  transitioning,
  onBack,
}: {
  mouse: { x: number; y: number };
  transitioning: boolean;
  onBack: () => void;
}) {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-[1450px] items-center px-8 py-16 sm:px-14">
        <div
          className={`grid w-full items-center gap-16 transition-all duration-[1000ms] lg:grid-cols-[1.1fr_0.9fr] ${
            transitioning
              ? "translate-y-4 opacity-70"
              : "translate-y-0 opacity-100"
          }`}
        >
          {/* Left */}
          <section>
            <ReturnButton onClick={onBack} label="Home" />

            <div className="mt-14">
              <div className="mb-5 text-[10px] tracking-[0.4em] text-red-500">
                CONNECT
              </div>

              <h2 className="text-6xl font-semibold tracking-[-0.055em] sm:text-8xl">
                Let’s <GlowText red>connect.</GlowText>
              </h2>

              <p className="mt-7 max-w-[620px] text-base leading-8 text-white/40 sm:text-lg">
                Open to opportunities, collaborations, technical
                conversations and interesting projects.
              </p>
            </div>

            <div className="mt-12 max-w-[680px] space-y-3">
              {/* Email */}
              <a
                href="mailto:adityakulkarni2143@gmail.com"
                className="group flex items-center justify-between rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:border-red-500/25 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.06] text-red-400">
                    @
                  </div>

                  <div>
                    <div className="text-[8px] tracking-[0.3em] text-red-400/70">
                      EMAIL
                    </div>

                    <div className="mt-1 text-sm text-white/65">
                      adityakulkarni2143@gmail.com
                    </div>
                  </div>
                </div>

                <span className="text-red-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aditya-kulkarni-62a352194"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:border-red-500/25 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.06] text-sm font-medium text-red-400">
                    in
                  </div>

                  <div>
                    <div className="text-[8px] tracking-[0.3em] text-red-400/70">
                      LINKEDIN
                    </div>

                    <div className="mt-1 text-sm text-white/65">
                      aditya-kulkarni-62a352194
                    </div>
                  </div>
                </div>

                <span className="text-red-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Aditya-R-kulkarni"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:border-red-500/25 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.06] text-red-400">
                    ◉
                  </div>

                  <div>
                    <div className="text-[8px] tracking-[0.3em] text-red-400/70">
                      GITHUB
                    </div>

                    <div className="mt-1 text-sm text-white/65">
                      Aditya-R-kulkarni
                    </div>
                  </div>
                </div>

                <span className="text-red-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </section>

          {/* Orb */}
          <section className="flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{
                transform: `translate3d(${mouse.x * 6}px, ${
                  mouse.y * -6
                }px, 0)`,
              }}
            >
              <WorldOrb
                mouse={mouse}
                transitioning={transitioning}
                active
              />

              <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-[0.35em] text-white/20">
                BENGALURU · INDIA
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   CINEMATIC TRANSITION
========================================================= */

function CinematicTransition({
  active,
}: {
  active: boolean;
}) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-[850ms] ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Edge darkness */}
      <div
        className={`absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
          active ? "scale-100" : "scale-[1.25]"
        }`}
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.22) 38%, rgba(0,0,0,0.82) 78%, rgba(0,0,0,0.98) 100%)",
        }}
      />

      {/* Central aperture */}
      <div
        className={`absolute left-1/2 top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#020202] shadow-[0_0_120px_70px_rgba(120,0,0,0.12)] transition-all duration-[750ms] ease-[cubic-bezier(.22,1,.36,1)] ${
          active ? "scale-[45]" : "scale-0"
        }`}
      />

      {/* Fine red signal */}
      <div
        className={`absolute left-1/2 top-1/2 h-px -translate-x-1/2 -translate-y-1/2 bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.9)] transition-all duration-[700ms] ${
          active ? "w-[45vw]" : "w-0"
        }`}
      />

      {/* Secondary ring */}
      <div
        className={`absolute left-1/2 top-1/2 h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20 transition-all duration-[900ms] ${
          active
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0"
        }`}
      />
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function HomePage() {
  const [selectedNode, setSelectedNode] =
    useState<SceneId>("home");

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const transitionTimers = useRef<number[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x =
        (event.clientX / window.innerWidth) * 2 - 1;

      const y =
        (event.clientY / window.innerHeight) * 2 - 1;

      setMouse({
        x,
        y,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  useEffect(() => {
    return () => {
      transitionTimers.current.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, []);

  const goToScene = (id: SceneId) => {
    if (
      id === selectedNode ||
      id === "lab" ||
      isTransitioning
    ) {
      return;
    }

    transitionTimers.current.forEach((timer) => {
      window.clearTimeout(timer);
    });

    transitionTimers.current = [];

    setIsTransitioning(true);

    /*
     * Cinematic sequence:
     *
     * 0ms
     * Current world begins moving forward.
     *
     * 420ms
     * Darkness reaches the visual peak.
     * Scene changes underneath the veil.
     *
     * 820ms
     * Veil releases and the new scene settles.
     */

    const sceneSwap = window.setTimeout(() => {
      setSelectedNode(id);
    }, 420);

    const reveal = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 820);

    transitionTimers.current = [
      sceneSwap,
      reveal,
    ];
  };

  let scene: React.ReactNode;

  if (selectedNode === "about") {
    scene = (
      <AboutScene
        mouse={mouse}
        transitioning={isTransitioning}
        onBack={() => goToScene("home")}
      />
    );
  } else if (selectedNode === "projects") {
    scene = (
      <ProjectsScene
        mouse={mouse}
        transitioning={isTransitioning}
        onBack={() => goToScene("home")}
      />
    );
  } else if (selectedNode === "resume") {
    scene = (
      <ResumeScene
        mouse={mouse}
        transitioning={isTransitioning}
        onBack={() => goToScene("home")}
      />
    );
  } else if (selectedNode === "connect") {
    scene = (
      <ConnectScene
        mouse={mouse}
        transitioning={isTransitioning}
        onBack={() => goToScene("home")}
      />
    );
  } else {
    scene = (
      <Home
        mouse={mouse}
        transitioning={isTransitioning}
        onNavigate={goToScene}
      />
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      {/* Persistent world */}
      <WorldBackground
        mouse={mouse}
        transitioning={isTransitioning}
      />

      {/* Scene */}
      <div
        className={`relative z-10 min-h-screen transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
          isTransitioning
            ? "scale-[1.045] blur-[0.5px]"
            : "scale-100 blur-0"
        }`}
      >
        {scene}
      </div>

      {/* Cursor signal */}
      <div
        className="pointer-events-none fixed z-[80] hidden h-2 w-2 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.95)] md:block"
        style={{
          left: `${(mouse.x + 1) * 50}%`,
          top: `${(mouse.y + 1) * 50}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="pointer-events-none fixed z-[79] hidden h-8 w-8 rounded-full border border-red-500/20 transition-transform duration-200 md:block"
        style={{
          left: `${(mouse.x + 1) * 50}%`,
          top: `${(mouse.y + 1) * 50}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Cinematic veil */}
      <CinematicTransition active={isTransitioning} />
    </div>
  );
}