import { Facebook, Instagram, Youtube, Twitter, MessageCircle, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Popular Locations */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">POPULAR LOCATIONS</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Delhi</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Mumbai</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Chennai</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Pune</div>
            </div>
          </div>

          {/* Trending Locations */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">TRENDING LOCATIONS</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Bhubaneshwar</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Hyderabad</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Chandigarh</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Nashik</div>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">ABOUT US</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">About OLX Group</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Careers</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Contact Us</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">OLXPeople</div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-[hsl(var(--primary))] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-[hsl(var(--primary))] cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-[hsl(var(--primary))] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-[hsl(var(--primary))] cursor-pointer transition-colors" />
              <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-[hsl(var(--primary))] cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-[hsl(var(--primary))] cursor-pointer transition-colors" />
            </div>
            
            {/* App Download */}
            <div className="mt-6 space-y-3">
              <div className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
              <div className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Partner Logos */}
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">CarTrade</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">OLX</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">CarWale</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">BikeWale</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">CarTrade</div>
              <div className="hover:text-[hsl(var(--primary))] cursor-pointer">Mobility Outlook</div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              All rights reserved © 2006-2024 OLX
            </div>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            Help - Sitemap
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;