interface CoverArtProps {
  seed: string;
  label: string;
  index: string;
  className?: string;
}

interface Palette {
  from: string;
  via: string;
  to: string;
  accent: string;
  accent2: string;
  line: string;
  text: string;
}

const palettes: Palette[] = [
  {
    from: "#0a0a0a",
    via: "#1b1b1b",
    to: "#000000",
    accent: "#ff7a1a",
    accent2: "#ff2d78",
    line: "rgba(255,255,255,0.28)",
    text: "#f4f4f2",
  },
  {
    from: "#03101f",
    via: "#052a4a",
    to: "#00040a",
    accent: "#38bdf8",
    accent2: "#6366f1",
    line: "rgba(196,232,255,0.3)",
    text: "#e6f5ff",
  },
  {
    from: "#d8f3c6",
    via: "#8bd85f",
    to: "#3f8f25",
    accent: "#ffffff",
    accent2: "#1d5c0c",
    line: "rgba(9,44,3,0.28)",
    text: "#0b2b06",
  },
  {
    from: "#f6f6f2",
    via: "#e9e9e3",
    to: "#d4d4cc",
    accent: "#131313",
    accent2: "#9a9a90",
    line: "rgba(19,19,19,0.2)",
    text: "#131313",
  },
  {
    from: "#191a1f",
    via: "#2d2f37",
    to: "#0a0a0c",
    accent: "#cfd2db",
    accent2: "#7b7f8c",
    line: "rgba(255,255,255,0.24)",
    text: "#f0f0f2",
  },
  {
    from: "#f7efe4",
    via: "#e8d3b8",
    to: "#cba87d",
    accent: "#1f6feb",
    accent2: "#f6b73c",
    line: "rgba(42,26,11,0.22)",
    text: "#2a1a0b",
  },
  {
    from: "#1b1030",
    via: "#3b1d63",
    to: "#0d0617",
    accent: "#a78bfa",
    accent2: "#f472b6",
    line: "rgba(233,220,255,0.28)",
    text: "#f3ebff",
  },
  {
    from: "#04201d",
    via: "#0b4a41",
    to: "#01100e",
    accent: "#2dd4bf",
    accent2: "#84cc16",
    line: "rgba(204,251,241,0.28)",
    text: "#e6fffb",
  },
  {
    from: "#2a0b0b",
    via: "#5c1616",
    to: "#120303",
    accent: "#fb7185",
    accent2: "#f59e0b",
    line: "rgba(255,228,230,0.28)",
    text: "#fff1f2",
  },
];

function hashCode(value: string): number {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

export default function CoverArt({
  seed,
  label,
  index,
  className = "",
}: CoverArtProps) {
  const palette = palettes[hashCode(seed) % palettes.length];

  return (
    <div
      aria-hidden="true"
      className={`relative isolate aspect-[16/10] w-full overflow-hidden rounded-[3px] ${className}`}
      style={{
        background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.via} 55%, ${palette.to} 100%)`,
      }}
    >
      <div
        className="absolute -right-[18%] -top-[32%] h-[85%] w-[58%] rounded-full opacity-60 blur-3xl"
        style={{ background: palette.accent }}
      />
      <div
        className="absolute -bottom-[38%] -left-[14%] h-[85%] w-[68%] rounded-full opacity-25 blur-3xl"
        style={{ background: palette.accent2 }}
      />

      <div
        className="absolute left-[10%] top-[20%] h-[62%] w-[62%] rounded-full border transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ borderColor: palette.line }}
      />
      <div
        className="absolute left-[22%] top-[31%] h-[40%] w-[40%] rounded-full border"
        style={{ borderColor: palette.line }}
      />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `linear-gradient(${palette.line} 1px, transparent 1px), linear-gradient(90deg, ${palette.line} 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(135deg, black, transparent 72%)",
          WebkitMaskImage: "linear-gradient(135deg, black, transparent 72%)",
        }}
      />

      <span
        className="absolute left-4 top-4 font-sans text-[9px] uppercase tracking-[0.24em] sm:left-5 sm:top-5 sm:text-[10px]"
        style={{ color: palette.text }}
      >
        {label}
      </span>
      <span
        className="absolute bottom-4 right-4 font-sans text-[9px] uppercase tracking-[0.24em] sm:bottom-5 sm:right-5 sm:text-[10px]"
        style={{ color: palette.text }}
      >
        {index}
      </span>
    </div>
  );
}
