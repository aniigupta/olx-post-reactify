import { Button } from "@/components/ui/button";
import { ChevronDown, Search, MapPin, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-[hsl(var(--primary))]">
              OLX
            </div>
            
            {/* Location */}
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">India</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                className="w-full pl-4 pr-12 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] bg-background"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 h-8 w-8 p-0 btn-olx"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="btn-olx">
              SELL
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              className="w-full pl-4 pr-12 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] bg-background"
            />
            <Button 
              size="sm" 
              className="absolute right-1 top-1 h-8 w-8 p-0 btn-olx"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;