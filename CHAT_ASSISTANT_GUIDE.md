# Stilla Systems Floating Chat Assistant

## Overview

The floating chat assistant is a sophisticated multi-stage interaction system that guides users to the appropriate service and connects them with the N8n chat widget. It consists of two main components that work together seamlessly.

## Components

### 1. FloatingChatAssistant (`components/floating-chat-assistant.tsx`)

The primary user-facing component that provides:

- **Floating Bubble**: Bottom-right animated bubble with pulsing glow effect
- **Service Selection**: Three modular service cards (Business Automation, Customer Support, Website Development)
- **Service Details Modal**: Expandable view with descriptions and offerings
- **Smart Highlighting**: Automatically highlights relevant service based on current page URL
- **Chat Integration**: Seamlessly opens the N8n widget with service context

**Features:**
- Animated micro-interactions and hover effects
- Mobile responsive design
- Smooth transitions and motion effects using Framer Motion
- LocalStorage-based session management
- Custom event system for cross-component communication

### 2. N8nChatWidget (`components/n8n-chat-widget.tsx`)

Enhanced chat widget that:

- Receives service context from the assistant
- Displays specialized header based on selected service
- Sends service metadata to the N8n backend for CRM integration
- Maintains persistent session IDs for conversation continuity
- Handles real-time chat interaction and error states

**Enhancement:**
- Service context tracking via localStorage and custom events
- Metadata forwarding to N8n webhook for CRM tagging
- Specialized chat header showing selected service

## Flow Diagram

```
User → Floating Bubble
       ↓
Service Selection Screen
       ↓
Service Details Modal
       ↓
"Speak with Specialist" Click
       ↓
Chat Widget Opens + Service Context Sent to N8n
       ↓
CRM Integration + Ongoing Chat
```

## Data Flow

### LocalStorage Keys

- `stilla_chat_session_id`: Persistent chat session identifier
- `stilla_chat_context`: Service selection metadata

### Custom Events

- `stilla-chat-open`: Fired when user selects a service to open chat
  - Payload: `{ serviceType, fromAssistant: boolean }`

### N8n Integration

Service metadata sent to N8n webhook:

```json
{
  "chatInput": "user message",
  "sessionId": "uuid",
  "serviceType": "automation|support|website",
  "serviceName": "Service Name",
  "fromAssistant": true
}
```

## Customization Guide

### Adding or Modifying Services

Edit the `SERVICES` array in `floating-chat-assistant.tsx`:

```typescript
const SERVICES: Service[] = [
  {
    id: "your-service",
    name: "Display Name",
    title: "Short Title",
    icon: <YourIcon className="w-6 h-6" />,
    description: "Service description",
    offerings: ["Offering 1", "Offering 2"],
    color: "from-color-500/20 to-color-500/10",
    accentColor: "color",
  },
]
```

### Changing Page-Based Highlighting

Modify the `useEffect` in `floating-chat-assistant.tsx` that detects the page:

```typescript
useEffect(() => {
  const pathname = window.location.pathname
  if (pathname.includes("your-route")) {
    setHighlightedService("service-id")
  }
}, [])
```

### Styling Customization

The components use Tailwind CSS and support dark mode. Key color classes:
- Primary: cyan (cyan-400, cyan-500)
- Secondary: slate (slate-900, slate-800)
- Accent: Service-specific (emerald, purple, etc.)

### N8n Webhook Endpoint

Update the webhook URL in `n8n-chat-widget.tsx`:

```typescript
const response = await fetch("YOUR_N8N_WEBHOOK_URL", {
  // ...
})
```

## Advanced Features

### Smart Page Detection

The assistant automatically highlights the most relevant service based on the current page:
- Pricing/Website routes → Website Development
- Support/Customer routes → Customer Support Agent
- Automation/Business routes → Business Automation

### Session Persistence

User sessions are maintained across browser instances using:
- LocalStorage for session IDs
- UUID generation for new sessions
- Automatic context retrieval on page load

### Responsive Design

Fully responsive from mobile (max-w-md) to desktop:
- Mobile: Adapts popup width to viewport
- Tablet: Optimized spacing and touch targets
- Desktop: Full featured experience

## Browser Support

- Modern browsers with ES2020+ support
- LocalStorage availability required
- CSS Grid and Flexbox support
- Framer Motion animation support

## Performance Considerations

- Lazy loads service icons and descriptions
- Uses React.memo for component optimization (can be added)
- Minimal bundle size overhead
- Efficient event listener cleanup

## Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support (built into Framer Motion)
- Screen reader friendly semantic markup
- High contrast colors for readability

## Testing & Debugging

### Check Session ID

```javascript
localStorage.getItem("stilla_chat_session_id")
```

### Check Service Context

```javascript
JSON.parse(localStorage.getItem("stilla_chat_context"))
```

### Monitor Custom Events

```javascript
window.addEventListener("stilla-chat-open", (e) => {
  console.log("Chat opened with service:", e.detail)
})
```

## Integration Points

The assistant is automatically rendered in:
- `app/layout.tsx` - Global layout wrapping all pages

Both components are "use client" and handle client-side state management with React hooks.

## Support & Issues

For debugging:
1. Check browser console for errors
2. Verify localStorage is enabled
3. Confirm N8n webhook is accessible
4. Check that Framer Motion is properly installed
