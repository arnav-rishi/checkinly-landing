
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Calendar } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const trackChatInteraction = (action: string) => {
    console.log(`Chat interaction: ${action}`);
    // Analytics tracking for chat interactions
  };

  const quickActions = [
    {
      text: "Book a Demo",
      icon: Calendar,
      action: "demo_request",
      primary: true
    },
    {
      text: "Start Free Trial",
      action: "trial_start",
      primary: true
    },
    {
      text: "How does pricing work?",
      action: "pricing_question"
    },
    {
      text: "What devices are supported?",
      action: "device_question"
    }
  ];

  const handleQuickAction = (action: string, text: string) => {
    trackChatInteraction(action);
    if (action === 'demo_request' || action === 'trial_start') {
      // Handle conversion actions
      console.log(`Conversion action triggered: ${action}`);
    } else {
      setMessage(text);
    }
  };

  return (
    <>
      {/* Chat Trigger Button with notification indicator */}
      <Button
        onClick={() => {
          setIsOpen(true);
          trackChatInteraction('chat_opened');
        }}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-glow hover-lift z-50 transition-bounce relative ${
          isOpen ? "hidden" : "flex"
        }`}
        size="icon"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Notification pulse */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
        <span className="sr-only">Get help</span>
      </Button>

      {/* Enhanced Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-[28rem] shadow-elegant border-border/30 rounded-large bg-card z-50 animate-scale-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border/30 bg-gradient-primary text-primary-foreground rounded-t-large">
            <div>
              <CardTitle className="text-lg font-semibold">
                👋 Hey there!
              </CardTitle>
              <p className="text-sm text-primary-foreground/90 mt-1">
                How can we help you today?
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsOpen(false);
                trackChatInteraction('chat_closed');
              }}
              className="w-8 h-8 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex-1 space-y-3 mb-4">
              <div className="text-sm text-muted-foreground mb-3 font-medium">
                Quick actions:
              </div>
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 text-sm rounded-modern transition-smooth border hover-lift ${
                    action.primary 
                      ? 'bg-accent text-accent-foreground border-accent hover:bg-accent/90 font-medium'
                      : 'bg-muted/50 hover:bg-muted border-border/30'
                  }`}
                  onClick={() => handleQuickAction(action.action, action.text)}
                >
                  <div className="flex items-center space-x-2">
                    {action.icon && <action.icon className="w-4 h-4" />}
                    <span>{action.text}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask us anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-border/30 rounded-modern bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && message.trim()) {
                    trackChatInteraction('message_sent');
                    console.log("Sending message:", message);
                    setMessage("");
                  }
                }}
              />
              <Button 
                size="icon" 
                className="w-10 h-10"
                disabled={!message.trim()}
                onClick={() => {
                  if (message.trim()) {
                    trackChatInteraction('message_sent');
                    console.log("Sending message:", message);
                    setMessage("");
                  }
                }}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground mt-2 text-center">
              Typically replies in under 5 minutes
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
