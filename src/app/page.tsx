import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";

const STACK = [
  {
    title: "Better Auth",
    description: "Sessions, OAuth, and credentials without the glue code.",
    icon: <LockKeyhole />,
    accent: "bg-sky-500/10 text-sky-600 dark:text-sky-300",
    href: "https://better-auth.com",
  },
  {
    title: "Next.js 16",
    description: "The App Router, server components, and fast builds.",
    icon: <Layers3 />,
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
    href: "https://nextjs.org/docs",
  },
  {
    title: "Drizzle ORM",
    description: "Typed SQL that stays close to your database.",
    icon: <Database />,
    accent: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
    href: "https://orm.drizzle.team",
  },
  {
    title: "Neon Postgres",
    description: "Serverless Postgres with branching built in.",
    icon: <Server />,
    accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
    href: "https://neon.tech",
  },
];

const STEPS = [
  ["Install dependencies", "pnpm install"],
  ["Configure your environment", ".env"],
  ["Push your schema", "pnpm db:push"],
  ["Start building", "pnpm dev"],
];

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-168 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.14),transparent_52%),radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.12),transparent_48%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.18),transparent_52%),radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.16),transparent_48%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex h-20 items-center justify-between border-b border-border/60">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <span className="flex size-8 items-center justify-center rounded-xl bg-foreground text-background">
              <Zap className="size-4 fill-current" />
            </span>
            better-next
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Rajat0741/better-next"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground sm:inline-flex"
            >
              GitHub
            </a>
            {session ? (
              <Link href="/profile" className={buttonVariants({ size: "sm" })}>
                Open profile
              </Link>
            ) : (
              <Link href="/login" className={buttonVariants({ size: "sm" })}>
                Sign in
              </Link>
            )}
          </div>
        </nav>

        <section className="grid items-center gap-14 pb-24 pt-20 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              The serious starter for your next app
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-7xl lg:text-[5.5rem] lg:leading-[0.96]">
              Ship the idea.
              <span className="block bg-linear-to-r from-sky-500 via-primary to-violet-500 bg-clip-text text-transparent">
                Skip the setup.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              A thoughtfully wired Next.js foundation for products that need
              auth, a real database, and room to grow from day one.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href={session ? "/profile" : "/login"}
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-xl px-5 shadow-lg shadow-primary/20",
                })}
              >
                {session ? "Go to profile" : "Start building"}
                <ArrowUpRight />
              </Link>
              <a
                href="https://github.com/Rajat0741/better-next"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-xl px-5",
                })}
              >
                <Code2 />
                View source
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex -space-x-1.5">
                <span className="size-6 rounded-full border-2 border-background bg-sky-400" />
                <span className="size-6 rounded-full border-2 border-background bg-violet-400" />
                <span className="size-6 rounded-full border-2 border-background bg-amber-300" />
              </span>
              <span>Everything you need to move from zero to production.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-linear-to-br from-sky-400/20 via-transparent to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/90 shadow-2xl shadow-slate-900/10 backdrop-blur dark:shadow-black/30">
              <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Application core</p>
                    <p className="text-[11px] text-muted-foreground">
                      Ready for your first commit
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-current" /> Online
                </span>
              </div>
              <div className="space-y-3 p-5 font-mono text-xs">
                <div className="rounded-xl border border-border/70 bg-muted/50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                    <Terminal className="size-3.5" /> ~/your-next-project
                  </div>
                  <p>
                    <span className="text-violet-500">const</span>{" "}
                    <span className="text-sky-600 dark:text-sky-300">
                      momentum
                    </span>{" "}
                    ={" "}
                    <span className="text-amber-600 dark:text-amber-300">
                      &quot;built in&quot;
                    </span>
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {"// auth + db + ui, already connected"}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/70 p-3">
                    <p className="mb-2 text-muted-foreground">AUTH STATUS</p>
                    <p className="flex items-center gap-1.5 font-sans font-medium">
                      <Check className="size-3.5 text-emerald-500" /> Secured
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/70 p-3">
                    <p className="mb-2 text-muted-foreground">DATABASE</p>
                    <p className="flex items-center gap-1.5 font-sans font-medium">
                      <GitBranch className="size-3.5 text-primary" /> Synced
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-border/70 bg-muted/30 px-5 py-3 text-[11px] text-muted-foreground">
                <Rocket className="size-3.5 text-primary" /> Your blank canvas
                is already production-minded.
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 py-20 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The stack
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Opinionated where it matters.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Four dependable pieces, composed to work together so you can focus
              on the product instead of the plumbing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border/70 bg-card p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  className={`mb-10 flex size-10 items-center justify-center rounded-xl ${item.accent} [&_svg]:size-5`}
                >
                  {item.icon}
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Four commands
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From clone to hello world.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              No sprawling setup guide. Get the foundation running locally, then
              make it yours.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-2 shadow-sm">
            {STEPS.map(([label, command], index) => (
              <div
                key={command}
                className="flex items-center gap-4 rounded-xl px-4 py-4 transition hover:bg-muted/60"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-semibold text-primary">
                  0{index + 1}
                </span>
                <span className="flex-1 text-sm font-medium">{label}</span>
                <code className="hidden rounded-md bg-muted px-2.5 py-1.5 text-xs text-muted-foreground sm:block">
                  {command}
                </code>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-border/60 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <KeyRound className="size-3.5" /> Built for the first commit and the
            hundredth deploy.
          </p>
          <a
            href="https://better-auth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            Read the docs <ArrowUpRight className="size-3" />
          </a>
        </footer>
      </div>
    </main>
  );
}
