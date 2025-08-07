import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CategoryNavigation from "@/components/CategoryNavigation";
import CategoryGrid from "@/components/CategoryGrid";
import LoginModal from "@/components/LoginModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Show login modal after a short delay to simulate OLX behavior
    const timer = setTimeout(() => {
      setShowLoginModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNavigation />
      <CategoryGrid />
      <Footer />
      
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </div>
  );
};

export default Index;
