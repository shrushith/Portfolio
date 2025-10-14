import Image from "next/image";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <div
          key={p.slug}
          className="flex flex-col overflow-hidden rounded border bg-card p-4 md:p-6 "
        >
          {p.image && (
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={false}
              />
            </div>
          )}

          <CardHeader>
            <CardTitle className="text-lg">{p.title}</CardTitle>
            <CardDescription>{p.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
      ))}
    </div>
  );
}
