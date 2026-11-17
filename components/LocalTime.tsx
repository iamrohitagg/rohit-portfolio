"use client";

import { useEffect, useState } from "react";

/** Live local time for a timezone. Renders a stable placeholder on the server. */
export default function LocalTime({ timeZone, suffix }: { timeZone: string; suffix?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time ?? "--:--"}
      {suffix && <span className="ml-1">{suffix}</span>}
    </time>
  );
}
