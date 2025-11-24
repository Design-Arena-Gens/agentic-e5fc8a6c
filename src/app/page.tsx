"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Globe2,
  Layers,
  Rocket,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import {
  avatarProgression,
  economicLoop,
  foundationalWorlds,
  realities,
  tokenMatrix
} from "@/lib/data";
import { SectionShell } from "@/components/section-shell";

const navLinks = [
  { label: "Visión", href: "#vision" },
  { label: "Realidades", href: "#realidades" },
  { label: "Mundos", href: "#mundos" },
  { label: "Tokenomía", href: "#tokenomia" },
  { label: "Progresión", href: "#progresion" }
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="orbital-ring absolute -left-1/3 top-0 h-[600px] w-[600px] rounded-full blur-3xl" />
        <div className="orbital-ring absolute -right-1/4 top-1/3 h-[520px] w-[520px] rounded-full blur-3xl" />
        <div className="grid-background absolute inset-0 opacity-50" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#vision" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cosmic-500/40 text-cosmic-100">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">
                Ecosistema XFI
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Blueprint consolidado
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#deploy"
            className="hidden items-center gap-2 rounded-full border border-cosmic-400/50 bg-cosmic-500/20 px-5 py-2 text-sm font-semibold text-cosmic-50 backdrop-blur md:flex"
          >
            Protocolos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-16 md:px-6 md:py-24">
        <section
          id="vision"
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/60 p-8 shadow-halo md:p-12"
        >
          <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-cosmic-500/60 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
              Visión Ejecutiva
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Ecosistema de existencia consciente expandida que trasciende
              metaversos tradicionales.
            </h1>
            <p className="mt-6 max-w-3xl text-base text-slate-300 md:text-lg">
              Integración de inmersión neural completa con economía tokenizada
              avanzada, articulada en más de 30 dimensiones interconectadas que
              evolucionan de forma sincrónica junto a sus comunidades co-creadoras.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Inmersión Neural",
                  description:
                    "Interfaces bio-holográficas que sincronizan emociones, memoria y percepción."
                },
                {
                  title: "Economía Consciente",
                  description:
                    "Tokens coordinados para valor, energía, atención y reputación ética."
                },
                {
                  title: "30+ Dimensiones",
                  description:
                    "Realidades evolutivas con leyes modulables y migración de avatares."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cosmic-400/60 hover:bg-cosmic-500/10"
                >
                  <p className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <SectionShell
          id="realidades"
          eyebrow="Cartografía Ontológica"
          title="Arquitectura de Realidades Anidadas"
          description="Cuatro macrocapas sostienen la progresión ontológica del ecosistema. Cada rango despliega protocolos y leyes únicas que definen niveles de percepción, colaboración y gobernanza."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {realities.map((reality) => (
              <motion.article
                key={reality.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-white">
                    {reality.name}
                  </span>
                  <span className="rounded-full border border-cosmic-400/40 px-3 py-1 text-xs text-cosmic-200">
                    {reality.range}
                  </span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {reality.focus}
                </p>
                <p className="text-sm text-slate-300">{reality.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="mundos"
          eyebrow="Fundamentos Dimensionales"
          title="Mundos Fundacionales"
          description="Tres entornos núcleo actúan como puertas de entrada a la red de realidades. Cada mundo es un laboratorio vivo de narrativa, gobernanza y economía interconectada."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {foundationalWorlds.map((world) => (
              <motion.article
                key={world.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white">
                      {world.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-cosmic-200">
                      {world.archetype}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cosmic-400/40 bg-cosmic-500/10 text-cosmic-100">
                    <Layers className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm text-slate-300">{world.description}</p>
                <ul className="mt-2 flex flex-1 flex-col gap-2 text-sm text-slate-300">
                  {world.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cosmic-300" />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="tokenomia"
          eyebrow="Dinámica Económica"
          title="Tokenomía Esencial"
          description="Cuatro tokens sincronizados sostienen la economía circular del ecosistema XFI. Su interacción garantiza liquidez energética, gobernanza ética y escalabilidad consciente."
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              {tokenMatrix.map((token) => (
                <motion.div
                  key={token.ticker}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl text-white">
                        {token.ticker}
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {token.role}
                      </span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cosmic-400/30 text-cosmic-200">
                      <Brain className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{token.utility}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4 rounded-2xl border border-cosmic-400/30 bg-cosmic-500/10 p-6">
              <h3 className="font-display text-lg text-white">
                Economía Circular
              </h3>
              <p className="text-sm text-slate-200/90">
                mecanismos de regulación automática que equilibran emisión,
                quema, staking y financiamiento creativo dentro de la red.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/80">
                {economicLoop.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cosmic-200">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-200/90">
                      {item.insight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="progresion"
          eyebrow="Evolución de Identidad"
          title="Progresión Consciente de Avatares"
          description="Los avatares evolucionan a través de capas de conciencia. Cada tier desbloquea herramientas, permisos y responsabilidades dentro de la red XFI."
        >
          <div className="grid gap-6 md:grid-cols-4">
            {avatarProgression.map((avatar, index) => (
              <motion.article
                key={avatar.tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/90 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white">
                      {avatar.tier}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {avatar.descriptor}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cosmic-200/40 bg-cosmic-500/10 text-cosmic-100">
                    <Rocket className="h-5 w-5" />
                  </div>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
                  {avatar.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cosmic-300" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="deploy"
          eyebrow="Mapa de Acción"
          title="Hoja de Ruta Operativa"
          description="Secuencia de despliegue para convertir la visión XFI en un ecosistema operativo interdimensional."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="flex items-center gap-3 font-display text-xl text-white">
                <Globe2 className="h-6 w-6 text-cosmic-200" />
                Fase 01 · Núcleo Compartido
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  Diseño del protocolo neural y calibración de biofeedback para
                  experiencias Base.
                </li>
                <li>
                  Lanzamiento de la DAO fundacional con gobernanza XFI y cuotas
                  de stake iniciales.
                </li>
                <li>
                  Integración de tokens REAL/TIME con mercados de energía
                  inmersiva.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="flex items-center gap-3 font-display text-xl text-white">
                <Layers className="h-6 w-6 text-cosmic-200" />
                Fase 02 · Expansión Dimensional
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  Despliegue coordinado de Aethelgard, Veridia Prime y Kiber
                  Nexus con interoperabilidad total.
                </li>
                <li>
                  Activación de portales a realidades Superiores y Metacósmicas.
                </li>
                <li>
                  Implementación de licencias SOUL para creadores y guardianes de
                  mundos.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="rounded-2xl border border-cosmic-400/30 bg-cosmic-500/10 p-6 lg:col-span-2"
            >
              <h3 className="flex items-center gap-3 font-display text-xl text-white">
                <Rocket className="h-6 w-6 text-cosmic-200" />
                Fase 03 · Resonancia Primordial
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/90">
                <li>
                  Creación de cámaras Primordiales para rediseñar leyes
                  ontológicas y desplegar nuevas realidades.
                </li>
                <li>
                  Sincronización con nodos físicos en ciudades y comunidades
                  conscientes que utilizan el protocolo XFI.
                </li>
                <li>
                  Expansión de licencias de avatar Primordial y custodios SOUL
                  para preservar coherencia ética.
                </li>
              </ul>
            </motion.div>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} XFI · Ecosistema de existencia
            consciente expandida.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#vision" className="hover:text-white">
              Manifiesto
            </Link>
            <Link href="#tokenomia" className="hover:text-white">
              Tokenomía
            </Link>
            <Link href="#deploy" className="hover:text-white">
              Hoja de ruta
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
