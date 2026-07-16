import {
  Building2,
  ChartLine,
  FileText,
  Gift,
  Globe,
  GraduationCap,
  Heart,
  Leaf,
  Lock,
  Shield,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  building: Building2,
  shield: Shield,
  chart: ChartLine,
  heart: Heart,
  graduation: GraduationCap,
  lock: Lock,
  "shield-check": ShieldCheck,
  leaf: Leaf,
  document: FileText,
  users: Users,
  gift: Gift,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 28 }: IconProps) {
  const LucideIcon = iconMap[name] ?? Globe;
  return <LucideIcon className={className} size={size} strokeWidth={1.5} />;
}
