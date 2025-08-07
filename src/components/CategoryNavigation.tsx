import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const CategoryNavigation = () => {
  const topCategories = [
    "ALL CATEGORIES",
    "Cars", 
    "Motorcycles",
    "Mobile Phones",
    "For Sale: Houses & Apartments",
    "Scooters",
    "Commercial & Other Vehicles",
    "For Rent: Houses & Apartments"
  ];

  return (
    <nav className="bg-[hsl(var(--olx-gray-light))] border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1 overflow-x-auto py-2">
          {topCategories.map((category, index) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              className={`whitespace-nowrap text-sm ${
                index === 0 
                  ? "font-semibold text-[hsl(var(--primary))]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {index === 0 && <ChevronDown className="w-4 h-4 ml-1" />}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavigation;