import { icons, HelpCircle } from "lucide-react";
import Image from "next/image";

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

export function Icon({ name, className, size = 24, strokeWidth = 2 }: IconProps) {
  if (name.includes("/") || name.includes(".")) {
    return (
      <div
        className={`relative ${className || ""}`.replace("group-hover:invert", "").replace("group-hover:brightness-0", "")}
        style={{ width: size, height: size }}
      >
        <Image src={name} alt="icon" fill className={`object-contain pointer-events-none ${className?.includes('group-hover') ? className : ''}`} />
      </div>
    );
  }

  const LucideIcon = (icons[name as keyof typeof icons] as React.ElementType) || HelpCircle;

  return (
    <LucideIcon
      className={`${className || ""} pointer-events-none`}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
