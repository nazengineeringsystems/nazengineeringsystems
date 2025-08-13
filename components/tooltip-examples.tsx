"use client"

import { Button } from "@/components/ui/button"
import { SimpleTooltip, ChatTooltip, TextTooltip } from "@/components/ui/simple-tooltip"
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
              
              <ChatTooltip text="Need help?" position="right" showIcon={false}>
                <Button variant="outline" size="sm">
                  <Info className="h-4 w-4 mr-2" />
                  Info
                </Button>
              </ChatTooltip>
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
              <div className="flex items-center justify-between">
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
                      Chat
                    </Button>
                  </ChatTooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
