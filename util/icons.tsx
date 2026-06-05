import { FaUnity, FaGithub } from "react-icons/fa";

const iconMap = {
  "$Default": FaGithub,
  "$Unity": FaUnity,
} as const;

export function Icon({ name, className }: { name: string, className?: string }) {
  const Component = iconMap[name as keyof typeof iconMap];
  return <Component className={className} />;
}