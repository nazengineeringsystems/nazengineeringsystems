# Simple Tooltip System

I've created a complete tooltip system for your NAZ Engineering website that matches the style of your existing WhatsApp chat widget.

## What I Built

### 1. **Simple Tooltip Components** (`components/ui/simple-tooltip.tsx`)
- **SimpleTooltip**: Fully customizable tooltip with hover/click triggers
- **ChatTooltip**: WhatsApp-style tooltip with icon (matches your existing chat widget)
- **TextTooltip**: Quick text-only tooltips for basic use cases

### 2. **Example Components** (`components/tooltip-examples.tsx`)
- Comprehensive examples showing all tooltip variations
- Different positions: top, bottom, left, right
- Different triggers: hover, click
- Custom styling examples

### 3. **Demo Page** (`app/tooltip-demo/page.tsx`)
- Visit `http://localhost:3000/tooltip-demo` to see all tooltips in action
- Interactive examples with code snippets

## Features

✅ **Multiple Positions**: top, bottom, left, right
✅ **Trigger Options**: hover (default) or click
✅ **Custom Styling**: Easy to customize colors, animations, etc.
✅ **WhatsApp Style**: Matches your existing chat widget perfectly
✅ **Hardware Accelerated**: Uses your existing CSS animations
✅ **Fully Responsive**: Auto-adjusts size, spacing, and text on mobile
✅ **Single Line Text**: "Chat with us!" stays on one line on all devices
✅ **Mobile Optimized**: Touch-friendly with appropriate sizing
✅ **Smart Collision Detection**: Automatically avoids WhatsApp widget
✅ **Layered Z-Index**: Tooltips (z-40) stay below WhatsApp widget (z-50)
✅ **TypeScript**: Fully typed for better development experience

## How to Use

### Basic Text Tooltip
```tsx
import { TextTooltip } from "@/components/ui/simple-tooltip"

<TextTooltip text="This is a simple tooltip" position="top">
  <button>Hover me</button>
</TextTooltip>
```

### Chat-Style Tooltip (Like WhatsApp)
```tsx
import { ChatTooltip } from "@/components/ui/simple-tooltip"

<ChatTooltip text="Chat with us!" position="top">
  <button className="bg-green-500 text-white rounded-full p-3">
    💬
  </button>
</ChatTooltip>
```

### Advanced Custom Tooltip
```tsx
import { SimpleTooltip } from "@/components/ui/simple-tooltip"

<SimpleTooltip
  content={
    <div className="space-y-1">
      <div className="font-semibold">Contact Info</div>
      <div className="text-xs">Click to call</div>
    </div>
  }
  position="right"
  trigger="click"
  contentClassName="bg-blue-600 border-blue-500"
>
  <button>Advanced Tooltip</button>
</SimpleTooltip>
```

## Available Props

### SimpleTooltip Props
- `content`: string | React.ReactNode - Tooltip content
- `children`: React.ReactNode - Element to attach tooltip to
- `position`: "top" | "bottom" | "left" | "right" - Tooltip position
- `trigger`: "hover" | "click" - How tooltip is activated
- `delay`: number - Delay before showing (default: 300ms)
- `className`: string - CSS class for container
- `contentClassName`: string - CSS class for tooltip content
- `disabled`: boolean - Disable tooltip
- `showArrow`: boolean - Show/hide arrow (default: true)

## Styling

The tooltips use your existing CSS classes and are fully responsive:
- `animate-fade-in-up` for smooth animations
- Dark theme with `bg-gray-900`, `text-white`
- Responsive padding: `px-2 py-1.5 sm:px-3 sm:py-2`
- Responsive text: `text-xs sm:text-sm`
- Responsive spacing: `mb-2 sm:mb-3`
- `whitespace-nowrap` and `text-nowrap` to keep text on single line
- Your existing border and shadow utilities
- Hardware-accelerated animations from your global CSS

## Integration

The tooltips are already integrated into your project:
- Uses your existing `cn` utility function
- Matches your current design system
- Compatible with your existing Radix UI tooltips
- Uses your current animation system

## Testing

Visit `http://localhost:3000/tooltip-demo` to see all tooltip variations in action. The page includes:
- Basic text tooltips in all positions
- Chat-style tooltips like your WhatsApp widget
- Advanced custom tooltips with complex content
- Click vs hover trigger examples
- Custom styling examples

## Responsive Behavior

### Mobile Optimizations:
- **Smaller padding**: `px-2 py-1.5` on mobile, `px-3 py-2` on desktop
- **Smaller text**: `text-xs` on mobile, `text-sm` on desktop
- **Adjusted spacing**: Reduced margins on mobile devices
- **Icon scaling**: Icons are `h-3 w-3` on mobile, `h-4 w-4` on desktop
- **Single-line text**: All tooltip text stays on one line using `whitespace-nowrap`
- **Touch-friendly**: Proper touch targets and mobile-optimized interactions

### Responsive Classes Used:
```css
/* Mobile-first approach */
text-xs sm:text-sm          /* Small text on mobile, larger on desktop */
px-2 py-1.5 sm:px-3 sm:py-2 /* Less padding on mobile */
mb-2 sm:mb-3               /* Less margin on mobile */
h-3 w-3 sm:h-4 sm:w-4      /* Smaller icons on mobile */
whitespace-nowrap          /* Keep text on single line */
```

## WhatsApp Widget Collision Detection

### Smart Positioning System:
The tooltip system automatically detects and avoids your WhatsApp floating widget:

- **Real-time Detection**: Calculates WhatsApp widget position on each tooltip display
- **Auto Repositioning**: Moves tooltips to alternative positions when collision detected
- **Z-Index Management**: Tooltips use `z-40`, WhatsApp widget uses `z-50`
- **Mobile Aware**: Accounts for different widget margins on mobile vs desktop

### How It Works:
```typescript
// Automatically calculates WhatsApp widget area
const whatsappArea = {
  // Mobile: 16px margin, Desktop: 32px margin
  // Accounts for widget size (56px) and tooltip space
}

// Repositions tooltip if collision detected
if (position === "bottom" || position === "right") {
  return "top" // Move away from WhatsApp area
}
```

### Collision Rules:
1. **Bottom/Right tooltips** → Move to **Top** position
2. **Top tooltips** (still overlapping) → Move to **Left** position
3. **No collision** → Keep original position

## Your Existing WhatsApp Widget

Your existing WhatsApp floating widget (`components/whatsapp-float.tsx`) has been updated to match the same responsive behavior. The new tooltip components:

✅ Follow the same design patterns for consistency
✅ Automatically avoid the WhatsApp widget area
✅ Use proper z-index layering (tooltips: z-40, WhatsApp: z-50)
✅ Work seamlessly with your existing chat system

You can now add tooltips anywhere in your website without worrying about collisions with the WhatsApp widget!
