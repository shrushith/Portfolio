"use client"

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts"
import { skills } from "@/lib/data"

export function SkillsChart() {
  return (
    <div className="rounded border bg-card p-4 md:p-6">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">Proficiency overview (self-assessed)</p>
      </div>
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={skills}>
            <PolarGrid stroke="var(--color-border)" />
            <PolarAngleAxis dataKey="name" tick={{ fill: "currentColor", fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: "currentColor", fontSize: 10 }} />
            <Radar dataKey="value" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.25} />
            <Tooltip
              contentStyle={{
                background: "oklch(from var(--color-card) l c h / 1)",
                border: "1px solid var(--color-border)",
                color: "var(--color-foreground)",
                borderRadius: "8px",
              }}
              formatter={(val: number) => [`${val}/10`, "Level"]}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
