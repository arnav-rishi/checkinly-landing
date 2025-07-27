
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  children?: React.ReactNode;
  triggerText?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const ContactModal = ({ 
  children, 
  triggerText = "Contact Us", 
  variant = "default" 
}: ContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant={variant} className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0">
        <ContactForm onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
