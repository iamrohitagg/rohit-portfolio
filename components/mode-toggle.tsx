"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const;

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        aria-label="Change colour theme"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" strokeWidth={1.75} />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" strokeWidth={1.75} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8.5rem] rounded-lg border bg-popover p-1">
        {options.map((o) => (
          <DropdownMenuItem
            key={o.value}
            onClick={() => setTheme(o.value)}
            className="cursor-pointer justify-between rounded-md text-sm"
          >
            {o.label}
            {theme === o.value && <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
