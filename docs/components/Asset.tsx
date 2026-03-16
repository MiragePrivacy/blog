const base = import.meta.env.BASE_URL ?? "/";

export function assetUrl(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}

export default function Asset({
  src,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} src={assetUrl(src ?? "")} />;
}
