import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

const variantStyles = {
  primary: {
    backgroundColor: "var(--accent)",
    color: "#101010",
    borderColor: "transparent",
  },
  secondary: {
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    color: "var(--foreground)",
    borderColor: "var(--border)",
  },
} as const;

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      style={variantStyles[variant]}
      className={clsx(
        "inline-flex min-w-fit items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold leading-none tracking-[0.02em] no-underline whitespace-nowrap transition duration-300",
        variant === "primary"
          ? "shadow-[0_18px_40px_rgba(16,16,16,0.14)] hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          : "hover:-translate-y-0.5 hover:border-[rgba(17,17,17,0.22)] hover:bg-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
