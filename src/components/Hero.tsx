"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    <header className="container mx-auto px-4 pt-12 md:pt-20">
      <div className="grid gap-10 md:grid-cols-[1fr,1.2fr] md:gap-16 items-start">
        <div className="space-y-6">
          <div>
            <h1 className="text-balance text-4xl md:text-6xl font-semibold leading-tight text-[#1877F2]">
              Shrushith Kalavala
            </h1>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground">
              Frontend Developer · Javascript, React.js, Next.js
            </p>
          </div>

          <p className="text-pretty">
            Results-driven Frontend Developer with 5 years of experience
            building high-performance web applications using React.js,
            JavaScript, and modern front-end workflows. Skilled in creating
            interactive dashboards, integrating REST APIs, and optimizing
            application performance to deliver scalable, user-focused solutions.
          </p>

          <nav aria-label="Primary" className="flex flex-wrap gap-3">
            <Link href="#projects">
              <Button className="rounded" variant="facebook">
                View Projects
              </Button>
            </Link>
            <Link href="#experience">
              <Button className="rounded" variant="facebook">
                Experience
              </Button>
            </Link>
            <Link href="#skills">
              <Button className="rounded" variant="facebook">
                Skills
              </Button>
            </Link>
          </nav>

          <div
            className="flex flex-col gap-1 text-sm text-muted-foreground"
            aria-label="Contact"
          >
            <p>Hyderabad, Telangana</p>
            <p>
              <a
                href="mailto:shrushith@gmail.com"
                className="hover:text-foreground underline-offset-4 hover:underline"
              >
                shrushith@gmail.com
              </a>
              • 9493883873
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded border bg-card p-6">
            <h2 className="text-xl font-medium mb-2">What I focus on</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-md bg-secondary text-secondary-foreground px-3 py-2">
                Performance Optimization
              </li>
              <li className="rounded-md bg-secondary text-secondary-foreground px-3 py-2">
                Responsive Web Design
              </li>
              <li className="rounded-md bg-secondary text-secondary-foreground px-3 py-2">
                Single Page Applications
              </li>
              <li className="rounded-md bg-secondary text-secondary-foreground px-3 py-2">
                Component-Driven Development
              </li>
              <li className="rounded-md bg-secondary text-secondary-foreground px-3 py-2">
                State Management & Data Flow
              </li>
              <li className="rounded-md bg-secondary text-secondary-foreground px-3 py-2">
                REST & GraphQL API Integration
              </li>
            </ul>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              Currently open to senior front-end roles and select consulting.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
