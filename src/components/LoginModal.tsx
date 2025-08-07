import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, Phone, Mail } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      icon: "🔑",
      title: "Help us become one of the safest places to buy and sell"
    },
    {
      icon: "🛡️", 
      title: "Verify your account for better security"
    },
    {
      icon: "✨",
      title: "Get personalized recommendations"
    }
  ];

  return (
    <div className="modal-overlay flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-background border-border">
        <CardHeader className="relative pb-6">
          <Button 
            variant="ghost" 
            size="sm"
            className="absolute right-2 top-2 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="text-center pt-4">
            <div className="text-4xl mb-4">{steps[currentStep].icon}</div>
            <h2 className="text-lg font-semibold text-foreground leading-tight">
              {steps[currentStep].title}
            </h2>
          </div>
          
          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep 
                    ? "bg-[hsl(var(--primary))]" 
                    : "bg-[hsl(var(--olx-gray-medium))]"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Continue with Phone */}
          <Button className="w-full btn-olx justify-start" size="lg">
            <Phone className="w-5 h-5 mr-3" />
            Continue with phone
          </Button>
          
          {/* Continue with Google */}
          <Button 
            variant="outline" 
            className="w-full border-border hover:bg-secondary" 
            size="lg"
          >
            <div className="w-5 h-5 mr-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            Continue with Google
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            OR
          </div>
          
          {/* Login with Email */}
          <Button 
            variant="ghost" 
            className="w-full text-[hsl(var(--primary))] hover:bg-[hsl(var(--category-hover))]"
            size="lg"
          >
            <Mail className="w-5 h-5 mr-3" />
            Login with Email
          </Button>
          
          <div className="text-xs text-muted-foreground text-center mt-6">
            All your personal details are safe with us.
          </div>
          
          <div className="text-xs text-muted-foreground text-center">
            If you continue, you are accepting{" "}
            <span className="text-[hsl(var(--primary))] underline cursor-pointer">
              OLX Terms and Conditions and Privacy Policy
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginModal;