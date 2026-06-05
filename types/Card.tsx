import { Icon } from "@/util/icons";

export interface CardProps {
  title: string;
  description: string;
  href: string;
  lang: string;
  icon: string;
}

export default function Card({
  title,
  description,
  href,
  lang,
  icon,
}: CardProps) {
  return (
    <a href={href}
      target="_blank"
      rel="noreferrer"
      className="
        block
        rounded-xl
        border-2
        border-zinc-800
        border-width-10
        bg-white
        p-5
        transition
        hover:-translate-y-1
        hover:shadow-lg">
      <div className="gap-3 w-25">
        {icon.startsWith("$") ? <Icon name={icon} className="w-full h-full" />
          : <img src={icon} alt={title} className="w-full h-full" />}

        <h3 className="text underline">
          {title}
        </h3>

        <p className="ml-auto text-sm">
          {description}
        </p>

        <br />

        <div className="ml-auto text-sm">
          {lang}
        </div>
      </div>
    </a>
  );
}