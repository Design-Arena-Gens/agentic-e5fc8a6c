import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = PropsWithChildren<{
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
}>;

export function SectionShell({
  id,
  title,
  eyebrow,
  description,
  className,
  children
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 p-8 shadow-[0_40px_120px_-40px_rgba(14,116,255,0.35)] md:p-12",
        "glass-surface",
        className
      )}
    >
      <div className="relative z-10 flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          {eyebrow ? (
            <span className="text-xs uppercase tracking-[0.35em] text-cosmic-300/80">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-sm text-slate-300/90 md:text-base">
              {description}
            </p>
          ) : null}
        </header>
        <div className="relative">{children}</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-20" />
    </section>
  );
}
