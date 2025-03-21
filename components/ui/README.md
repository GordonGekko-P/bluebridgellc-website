# BlueBridge UI Components

This directory contains custom UI components created for the BlueBridge website, featuring metallic finishes, 3D effects, and modern design patterns.

## Available Components

### MetallicButton

A customizable button component with metallic finishes, gradient effects, and interactive animations.

```tsx
import { MetallicButton } from "@/components/ui/metallic-button";

// Basic usage
<MetallicButton>Click Me</MetallicButton>

// With variants
<MetallicButton variant="metallic">Metallic Button</MetallicButton>
<MetallicButton variant="outline">Outline Button</MetallicButton>
<MetallicButton variant="ghost">Ghost Button</MetallicButton>
<MetallicButton variant="dark">Dark Button</MetallicButton>
<MetallicButton variant="light">Light Button</MetallicButton>

// With sizes
<MetallicButton size="sm">Small Button</MetallicButton>
<MetallicButton size="default">Default Size</MetallicButton>
<MetallicButton size="lg">Large Button</MetallicButton>
<MetallicButton size="xl">Extra Large</MetallicButton>

// With glow effects
<MetallicButton glowIntensity="subtle">Subtle Glow</MetallicButton>
<MetallicButton glowIntensity="default">Default Glow</MetallicButton>
<MetallicButton glowIntensity="strong">Strong Glow</MetallicButton>

// Special effects
<MetallicButton shimmer={true}>Shimmer Effect</MetallicButton>
<MetallicButton loading={true}>Loading State</MetallicButton>

// With icons
<MetallicButton 
  icon={<YourIconComponent />}
  iconPosition="left"
>
  Icon Left
</MetallicButton>
```

### TiltCard (3D Tilt Card)

A card component that creates a 3D tilt effect based on mouse position, with customizable glow and border effects.

```tsx
import { TiltCard } from "@/components/ui/3d-tilt-card";

// Basic usage
<TiltCard>
  Card content goes here
</TiltCard>

// With custom styling
<TiltCard 
  className="p-8 h-64 bg-gradient-to-br from-blue-900/50 to-purple-900/50"
  glowColor="rgba(124, 58, 237, 0.5)"
  borderColor="rgba(124, 58, 237, 0.3)"
>
  <h3>Card Title</h3>
  <p>Card content with custom background and glow colors</p>
</TiltCard>

// Customizing tilt factors
<TiltCard 
  rotateXFactor={0.1}  // Controls vertical tilt sensitivity (default: 0.05)
  rotateYFactor={0.1}  // Controls horizontal tilt sensitivity (default: 0.05)
>
  Card with custom tilt sensitivity
</TiltCard>
```

### MetallicNavbar

A responsive navigation bar with a metallic finish, scroll effects, and mobile menu.

```tsx
import { MetallicNavbar } from "@/components/ui/metallic-navbar";

// Basic usage
<MetallicNavbar />

// With custom navigation links
<MetallicNavbar 
  navLinks={[
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]}
/>

// With custom CTA button
<MetallicNavbar 
  ctaButton={{
    href: "/signup",
    label: "Sign Up",
  }}
/>

// With custom logo
<MetallicNavbar 
  logo={<YourLogoComponent />}
/>
```

## Showcase

Visit the [Components Page](/components) to see all components in action.

For a complete design system showcase, visit the [Showcase Page](/showcase).

## Implementation

These components are built with:
- React and Next.js
- TailwindCSS for styling
- CSS animations and transitions
- Standard HTML buttons and elements (no third-party dependencies) 