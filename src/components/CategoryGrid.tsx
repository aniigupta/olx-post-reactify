import { Card, CardContent } from "@/components/ui/card";

interface Category {
  name: string;
  subcategories?: string[];
}

const CategoryGrid = () => {
  const categories: Category[] = [
    {
      name: "Vehicles",
      subcategories: ["Cars", "Motorcycles", "Scooters", "Spare Parts", "Bicycles"]
    },
    {
      name: "Properties", 
      subcategories: ["For Sale: Houses & Apartments", "For Rent: Houses & Apartments", "Lands & Plots", "For Rent: Shops & Offices", "For Sale: Shops & Offices", "PG & Guest Houses"]
    },
    {
      name: "Electronics & Appliances",
      subcategories: ["TVs, Video - Audio", "Kitchen & Other Appliances", "Computers & Laptops", "Cameras & Lenses", "Games & Entertainment", "Fridges", "Computer Accessories", "Hard Disks, Printers & Monitors", "ACs", "Washing Machines"]
    },
    {
      name: "Mobiles",
      subcategories: ["Mobile Phones", "Accessories", "Tablets"]
    },
    {
      name: "Commercial Vehicles & Spares",
      subcategories: ["Commercial & Other Vehicles", "Spare Parts"]
    },
    {
      name: "Jobs",
      subcategories: ["Data entry & Back office", "Sales & Marketing", "BPO & Telecaller", "Driver", "Office Assistant", "Delivery & Collection", "Teacher", "Cook", "Receptionist & Front office", "Operator & Technician", "IT Engineer & Developer", "Hotel & Travel Executive", "Accountant", "Designer", "Other Jobs"]
    },
    {
      name: "Furniture",
      subcategories: ["Sofa & Dining", "Beds & Wardrobes", "Home Decor & Garden", "Kids Furniture", "Other Household Items"]
    },
    {
      name: "Fashion",
      subcategories: ["Men", "Women", "Kids"]
    },
    {
      name: "Pets",
      subcategories: ["Fishes & Aquarium", "Pet Food & Accessories", "Dogs", "Other Pets"]
    },
    {
      name: "Books, Sports & Hobbies",
      subcategories: ["Books", "Gym & Fitness", "Musical Instruments", "Sports Equipment", "Other Hobbies"]
    },
    {
      name: "Services",
      subcategories: ["Education & Classes", "Tours & Travel", "Electronics Repair & Services", "Health & Beauty", "Home Renovation & Repair", "Cleaning & Pest Control", "Legal & Documentation Services", "Packers & Movers", "Other Services"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="category-card group">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-[hsl(var(--primary))] transition-colors">
                {category.name}
              </h3>
              {category.subcategories && (
                <div className="space-y-2">
                  {category.subcategories.slice(0, 6).map((subcategory) => (
                    <div 
                      key={subcategory}
                      className="text-sm text-muted-foreground hover:text-[hsl(var(--primary))] cursor-pointer transition-colors"
                    >
                      {subcategory}
                    </div>
                  ))}
                  {category.subcategories.length > 6 && (
                    <div className="text-sm text-[hsl(var(--primary))] font-medium cursor-pointer">
                      +{category.subcategories.length - 6} more
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;