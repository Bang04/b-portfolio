type Props = {
  href: string;
  label: string;
  icon?: string;
  variant?: "github" | "demo";
};

export const LinkButton = ({ href, label, icon, variant = "github" }: Props) => {
  const base =
    "flex items-center gap-1 text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5";

  const style =
    variant === "github"
      ? "bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white"
      : "bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white";

  return (
    <a href={href} target="_blank" className={`${base} ${style}`}>
      {icon && <img src={icon} alt={label} className="size-4" />}
      <span>{label}</span>
    </a>
  );
};