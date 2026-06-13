export function MfkLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  // SVG representation of the Mentors for Kids logo
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Large Figure (Purple) */}
      <circle cx="50" cy="15" r="8" fill="#4a406e" />
      <path
        d="M20 70 L50 35 L80 70"
        stroke="#4a406e"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Small Figure (Yellow) */}
      <circle cx="50" cy="45" r="4" fill="#fbb040" />
      <path
        d="M35 75 L50 55 L65 75"
        stroke="#fbb040"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
