type Props = {
  /** Single screenshot. */
  src?: string;
  alt?: string;
  /** Two screenshots that cross-fade with the site theme. */
  dark?: string;
  light?: string;
  className?: string;
  style?: React.CSSProperties;
  frame?: "dark" | "light";
};

export default function PhoneFrame({ src, alt = "", dark, light, className = "", style, frame = "dark" }: Props) {
  return (
    <div className={"phone " + (frame === "light" ? "phone--light " : "") + className} style={style}>
      <div className="phone-screen" style={frame === "light" ? { background: "#f3f4f6" } : undefined}>
        {src ? <img src={src} alt={alt} draggable={false} /> : null}
        {dark ? <img data-shot="dark" src={dark} alt={alt + " (dark theme)"} draggable={false} /> : null}
        {light ? <img data-shot="light" src={light} alt={alt + " (light theme)"} draggable={false} /> : null}
      </div>
    </div>
  );
}
