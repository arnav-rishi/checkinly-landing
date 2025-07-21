
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const quickQuestions = [
    "How does the check-in process work?",
    "What devices do you support?",
    "Can I schedule a demo?",
    "What's included in the free trial?"
  ];

  return (
    <>
      {/* Chat Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-glow hover-lift z-50 transition-bounce ${
          isOpen ? "hidden" : "flex"
        }`}
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Open chat</span>
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-elegant border-border/30 rounded-large bg-card z-50 animate-scale-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border/30">
            <CardTitle className="text-lg font-semibold">
              👋 Hi! How can we help?
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex-1 space-y-3 mb-4">
              <div className="text-sm text-muted-foreground mb-3">
                Quick questions:
              </div>
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 text-sm bg-muted/50 hover:bg-muted rounded-modern transition-smooth border border-border/30"
                  onClick={() => setMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-border/30 rounded-modern bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    // Handle message send
                    console.log("Sending message:", message);
                    setMessage("");
                  }
                }}
              />
              <Button size="icon" className="w-10 h-10">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
