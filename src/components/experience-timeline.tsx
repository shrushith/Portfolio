import { experiences } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-border">
      {experiences.map((role) => (
        <li key={role.company + role.title} className="ms-6 pb-10">
          <span className="absolute -start-2.5 mt-1.5 h-5 w-5 rounded-full border bg-background" aria-hidden />
          <div className="grid gap-2 md:grid-cols-[160px_1fr]">
            <time className="text-xs md:text-sm text-muted-foreground">{role.period}</time>
            <div className="rounded border bg-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-medium">
                  {role.title} · {role.company}
                </h3>
                <div className="flex gap-2">
                  {role.stack.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
