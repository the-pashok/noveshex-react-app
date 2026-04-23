export function Container({ className = '', children, as: Component = 'div' }) {
  return <Component className={`container ${className}`.trim()}>{children}</Component>;
}
