// components/icons/ServiceIcons.tsx
export const SoftwareDevelopmentIcon = () => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Sun/Gear Shape (White Stroke: #FFFFFF) */}
    <circle cx="50" cy="50" r="30" stroke="#FFFFFF" strokeWidth="4" />
    
    {/* Rays/Spokes (White Stroke) */}
    <line x1="50" y1="10" x2="50" y2="20" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="80" x2="50" y2="90" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    <line x1="10" y1="50" x2="20" y2="50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    <line x1="80" y1="50" x2="90" y2="50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    
    {/* Diagonal Rays */}
    <line x1="22.9" y1="22.9" x2="29.9" y2="29.9" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" transform="rotate(-45 50 50)" />
    <line x1="22.9" y1="22.9" x2="29.9" y2="29.9" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" transform="rotate(45 50 50)" />
    <line x1="22.9" y1="22.9" x2="29.9" y2="29.9" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" transform="rotate(135 50 50)" />
    <line x1="22.9" y1="22.9" x2="29.9" y2="29.9" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" transform="rotate(-135 50 50)" />
    
    {/* Central Lightning Bolt (Orange Fill: #F05436) */}
    <path d="M48 30L40 50H50L48 70L60 50H50L58 30H48Z" fill="#F05436" /> 
  </svg>
);

export const CustomSoftwareIcon = () => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Monitor/Browser Shape (White Stroke) */}
    <rect 
      x="10" y="20" width="70" height="50" rx="4" 
      stroke="#FFFFFF" 
      strokeWidth="3"
    />
    
    {/* Monitor Stand (White Stroke) */}
    <path 
      d="M30 70L25 75L75 75L70 70Z" 
      stroke="#FFFFFF" 
      strokeWidth="3"
      strokeLinejoin="round" 
    />

    {/* Browser Header Line (White Stroke) */}
    <line 
      x1="10" y1="26" x2="80" y2="26" 
      stroke="#FFFFFF" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Code Tags (</>) in the Center (White Stroke) */}
    <path 
      d="M37 45L30 55L37 65" 
      stroke="#FFFFFF" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M53 45L60 55L53 65" 
      stroke="#FFFFFF" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M44 48L46 62" 
      stroke="#FFFFFF" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Gear Icon (White Stroke and Orange Center) */}
    <g transform="translate(68 70)"> {/* Move the gear to the bottom right corner */}
      {/* Outer Gear Shape (White Stroke) */}
      <path 
        d="M17.5 12.5C17.5 15.3575 16.2917 18.0694 14.1207 20.0898C11.9497 22.1102 9.00693 23.25 6 23.25C2.99307 23.25 0.0503028 22.1102 -2.1207 20.0898C-4.2917 18.0694 -5.5 15.3575 -5.5 12.5C-5.5 9.64251 -4.2917 6.93061 -2.1207 4.91023C0.0503028 2.88985 2.99307 1.75 6 1.75C9.00693 1.75 11.9497 2.88985 14.1207 4.91023C16.2917 6.93061 17.5 9.64251 17.5 12.5Z"
        stroke="#FFFFFF" 
        strokeWidth="2"
        transform="rotate(0 6 12.5)" 
        fill="none"
      />
      {/* Teeth/Points (Simplified Gear Shape) */}
      <path
        d="M17.5 12.5L16.5 10.5L14 10.5L13.5 8L10 6L9.5 3L6 1L2.5 3L2 6L-1.5 8L-2 10.5L-4.5 10.5L-5.5 12.5L-4.5 14.5L-2 14.5L-1.5 17L2 19L2.5 22L6 24L9.5 22L10 19L13.5 17L14 14.5L16.5 14.5L17.5 12.5Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="#00000000" // Transparent fill for the gear body
      />
      
      {/* Inner Gear Circle (Orange Fill: #F05436) */}
      <circle cx="6" cy="12.5" r="4" fill="#F05436" />
    </g>
  </svg>
);

export const MobileAppIcon = () => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Smartphone Body (White Stroke) */}
    <rect 
      x="30" y="10" width="40" height="75" rx="8" 
      stroke="#FFFFFF" 
      strokeWidth="3"
    />
    
    {/* Camera/Speaker Notch (White Stroke) */}
    <rect 
      x="43" y="12" width="14" height="3" rx="1.5"
      stroke="#FFFFFF" 
      strokeWidth="1.5"
      fill="none" 
    />
    
    {/* Home/Indicator Bar (Orange/Red Fill: #F05436) */}
    <rect 
      x="40" y="77" width="20" height="2" rx="1" 
      fill="#F05436"
    />
  </svg>
);
