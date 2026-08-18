import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { ProfileCard } from "@/features/profile/components/profile-card";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_38%),var(--background)] p-4 dark:bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_38%),var(--background)]">
      <div className="w-full max-w-md rounded-[2rem] border border-border/60 bg-card/60 p-2 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-3">
        <ProfileCard session={session} />
        <div className="grid gap-2 p-1 pt-3 sm:grid-cols-2">
          <a
            href="https://github.com/Rajat0741/better-next/issues/new?title=[Bug]: "
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "secondary",
              className: "w-full",
            })}
          >
            Report a bug
          </a>
          <a
            href="https://github.com/Rajat0741/better-next/issues/new?title=[Feature]: "
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "secondary",
              className: "w-full",
            })}
          >
            Suggest an improvement
          </a>
        </div>
      </div>
    </main>
  );
}
