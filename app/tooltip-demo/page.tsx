import { TooltipExamples } from "@/components/tooltip-examples"

export default function TooltipDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Simple Tooltip Component Demo
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This page demonstrates different tooltip variations that match your WhatsApp chat widget style.
            You now have simple, reusable tooltip components that you can use throughout your website.
          </p>
        </div>
        
        <TooltipExamples />
        
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>
          <div className="prose text-gray-600">
            <p className="mb-4">You can now use these tooltip components anywhere in your project:</p>
            <ul className="space-y-2 text-sm">
              <li><strong>TextTooltip:</strong> Simple text tooltips for basic hover information</li>
              <li><strong>ChatTooltip:</strong> WhatsApp-style tooltips with icons (like your current chat widget)</li>
              <li><strong>SimpleTooltip:</strong> Fully customizable tooltips with advanced features</li>
              <li><strong>Radix Tooltip:</strong> Your existing Radix UI tooltips for complex interactions</li>
            </ul>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-sm mb-2">Example Usage:</h3>
              <pre className="text-xs text-gray-800 overflow-x-auto">
{`import { TextTooltip, ChatTooltip } from "@/components/ui/simple-tooltip"

// Simple text tooltip
<TextTooltip text="This is a simple tooltip">
  <button>Hover me</button>
</TextTooltip>

// Chat-style tooltip like WhatsApp
<ChatTooltip text="Chat with us!" position="top">
  <button className="bg-green-500 text-white rounded-full p-3">
    💬
  </button>
</ChatTooltip>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
