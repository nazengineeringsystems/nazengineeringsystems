"use client"

import { Button } from "@/components/ui/button"
import { SimpleTooltip, ChatTooltip, TextTooltip } from "@/components/ui/simple-tooltip"
import { PermanentTooltip, PermanentChatTooltip, FloatingChatWidget } from "@/components/ui/permanent-tooltip"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { MessageCircle, Info, Phone, Mail } from "lucide-react"

export function TooltipExamples() {
  return (
    <div className="p-8 space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Simple Tooltip Examples</h2>
        
        {/* Basic Text Tooltips */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Basic Text Tooltips</h3>
            <div className="flex space-x-4 flex-wrap gap-4">
              <TextTooltip text="This appears on top!" position="top">
                <Button variant="outline">Hover me (Top)</Button>
              </TextTooltip>
              
              <TextTooltip text="This appears on the right!" position="right">
                <Button variant="outline">Hover me (Right)</Button>
              </TextTooltip>
              
              <TextTooltip text="This appears on the bottom!" position="bottom">
                <Button variant="outline">Hover me (Bottom)</Button>
              </TextTooltip>
              
              <TextTooltip text="This appears on the left!" position="left">
                <Button variant="outline">Hover me (Left)</Button>
              </TextTooltip>
            </div>
          </div>

          {/* Chat Style Tooltips */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Chat Style Tooltips (Like WhatsApp)</h3>
            <div className="flex space-x-4 flex-wrap gap-4">
              <ChatTooltip text="Chat with us!" position="top">
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 p-0">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </ChatTooltip>
              
              <ChatTooltip text="Contact our support team now!" position="bottom">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 p-0">
                  <Phone className="h-5 w-5" />
                </Button>
              </ChatTooltip>
              
              <ChatTooltip text="Need help?" position="right" showIcon={false}>
                <Button variant="outline" size="sm">
                  <Info className="h-4 w-4 mr-2" />
                  Info
                </Button>
              </ChatTooltip>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                📱 <strong>Mobile Responsive:</strong> These tooltips automatically adjust size and spacing on mobile devices. 
                The &quot;Chat with us!&quot; text stays on one line and icons scale appropriately.
              </p>
            </div>
          </div>

          {/* Advanced Custom Tooltips */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Advanced Custom Tooltips</h3>
            <div className="flex space-x-4 flex-wrap gap-4">
              <SimpleTooltip
                content={
                  <div className="space-y-1">
                    <div className="font-semibold">Contact Information</div>
                    <div className="text-xs">Click to call us directly</div>
                  </div>
                }
                position="top"
              >
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </SimpleTooltip>

              <SimpleTooltip
                content={
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Send us an email</span>
                  </div>
                }
                position="bottom"
                contentClassName="bg-blue-600 border-blue-500"
              >
                <Button variant="outline" size="sm">
                  Email Us
                </Button>
              </SimpleTooltip>

              <SimpleTooltip
                content="Click me instead of hover!"
                trigger="click"
                position="right"
              >
                <Button variant="secondary" size="sm">
                  Click Tooltip
                </Button>
              </SimpleTooltip>
            </div>
          </div>

          {/* Radix UI Tooltips for comparison */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Radix UI Tooltips (Existing)</h3>
            <div className="flex space-x-4 flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="default">Radix Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This uses Radix UI tooltip</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Realistic Usage Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Realistic Usage Examples</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h4 className="text-base font-medium">NAZ Engineering Services</h4>
                <div className="flex space-x-2">
                  <TextTooltip text="Learn more about our services">
                    <Button variant="ghost" size="sm">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TextTooltip>
                  
                  <ChatTooltip text="Get instant support!" position="left">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Chat</span>
                    </Button>
                  </ChatTooltip>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ChatTooltip text="Quick contact via WhatsApp" position="top">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  💬 WhatsApp
                </Button>
              </ChatTooltip>
              
              <ChatTooltip text="Call us directly" position="top">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  📞 Call Now
                </Button>
              </ChatTooltip>
              
              <ChatTooltip text="Send us an email" position="top">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  📧 Email
                </Button>
              </ChatTooltip>
              
              <ChatTooltip text="Request a free quote" position="top">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  💰 Quote
                </Button>
              </ChatTooltip>
            </div>
          </div>
          
          {/* WhatsApp Collision Detection Test */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WhatsApp Widget Collision Detection</h3>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
              <p className="text-sm text-blue-800 mb-3">
                🔍 <strong>Smart Positioning:</strong> These tooltips automatically detect and avoid the WhatsApp chat widget in the bottom-right corner.
                Try hovering over the buttons below - tooltips will reposition themselves to avoid overlapping with the WhatsApp widget.
              </p>
              <div className="text-xs text-blue-600">
                <strong>Technical Details:</strong> z-index: 40 (tooltips) vs z-index: 50 (WhatsApp widget)
              </div>
            </div>
            
            {/* Buttons positioned to potentially conflict with WhatsApp widget */}
            <div className="relative h-32">
              {/* Bottom-right area buttons */}
              <div className="absolute bottom-4 right-20">
                <ChatTooltip text="This tooltip will avoid WhatsApp!" position="bottom">
                  <Button size="sm" variant="outline">
                    Near WhatsApp (Bottom)
                  </Button>
                </ChatTooltip>
              </div>
              
              <div className="absolute bottom-12 right-4">
                <ChatTooltip text="Auto-repositioned tooltip" position="right">
                  <Button size="sm" variant="outline">
                    Near WhatsApp (Right)
                  </Button>
                </ChatTooltip>
              </div>
              
              <div className="absolute bottom-20 right-12">
                <TextTooltip text="Smart collision detection in action!" position="bottom">
                  <Button size="sm" variant="secondary">
                    Test Collision
                  </Button>
                </TextTooltip>
              </div>
            </div>
          </div>
          
          {/* Permanent Tooltips */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Permanent Tooltips (Always Visible)</h3>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
              <p className="text-sm text-green-800 mb-2">
                ✨ <strong>Permanent Tooltips:</strong> These tooltips are always visible, just like the one in your image!
              </p>
              <p className="text-xs text-green-600">
                Perfect for chat widgets, call-to-action buttons, or any element that needs constant visibility.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Basic Permanent Tooltips */}
              <div>
                <h4 className="text-base font-medium mb-4">Basic Permanent Tooltips</h4>
                <div className="flex space-x-8 flex-wrap gap-8 items-end">
                  <PermanentTooltip text="Always visible!" position="top">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      ?
                    </div>
                  </PermanentTooltip>
                  
                  <PermanentTooltip text="I'm on the bottom!" position="bottom">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      !
                    </div>
                  </PermanentTooltip>
                  
                  <PermanentTooltip text="Left side tooltip" position="left">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      ←
                    </div>
                  </PermanentTooltip>
                  
                  <PermanentTooltip text="Right side tooltip" position="right">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      →
                    </div>
                  </PermanentTooltip>
                </div>
              </div>
              
              {/* Chat Style Permanent Tooltips */}
              <div>
                <h4 className="text-base font-medium mb-4">Chat Style Permanent Tooltips (Like Your Image)</h4>
                <div className="flex space-x-8 flex-wrap gap-8 items-end">
                  <PermanentChatTooltip text="Chat with us!" position="top">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-7 w-7 text-white" />
                    </div>
                  </PermanentChatTooltip>
                  
                  <PermanentChatTooltip text="Need help?" position="top" showIcon={false}>
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                  </PermanentChatTooltip>
                  
                  <PermanentChatTooltip text="Contact support" position="bottom">
                    <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                  </PermanentChatTooltip>
                </div>
              </div>
              
              {/* Floating Widget Example */}
              <div>
                <h4 className="text-base font-medium mb-4">Complete Floating Chat Widget</h4>
                <div className="relative h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Website content area</p>
                  <FloatingChatWidget 
                    text="Chat with us!"
                    position="bottom-right"
                    onClick={() => alert('Chat clicked!')}
                    className="!absolute !bottom-4 !right-4" 
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  This creates a complete floating chat widget with permanent tooltip - exactly like your image!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
