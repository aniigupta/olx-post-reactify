import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Camera, ChevronDown } from "lucide-react";

const PostAdForm = () => {
  const [selectedFuel, setSelectedFuel] = useState<string>("");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [selectedOwners, setSelectedOwners] = useState<string>("");
  const [kmDriven, setKmDriven] = useState("");
  const [adTitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("Aniket Gupta");
  const [phone, setPhone] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState<number>(0);

  const fuelTypes = ["CNG & Hybrids", "Diesel", "Electric", "LPG", "Petrol"];
  const transmissionTypes = ["Automatic", "Manual"];
  const ownerOptions = ["1st", "2nd", "3rd", "4th", "4+"];

  const handlePhotoUpload = () => {
    if (uploadedPhotos < 20) {
      setUploadedPhotos(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-foreground">POST YOUR AD</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Selected Category */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">SELECTED CATEGORY</h2>
                <div className="text-muted-foreground">Cars / Cars</div>
              </div>
              <Button variant="ghost" className="text-[hsl(var(--primary))] hover:bg-[hsl(var(--category-hover))]">
                Change
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Include Some Details */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">INCLUDE SOME DETAILS</h2>
            
            <div className="space-y-6">
              {/* Brand */}
              <div>
                <Label htmlFor="brand" className="text-sm font-medium text-foreground">
                  Brand <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maruti">Maruti Suzuki</SelectItem>
                    <SelectItem value="hyundai">Hyundai</SelectItem>
                    <SelectItem value="tata">Tata</SelectItem>
                    <SelectItem value="mahindra">Mahindra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Year */}
              <div>
                <Label htmlFor="year" className="text-sm font-medium text-foreground">
                  Year <span className="text-red-500">*</span>
                </Label>
                <Input 
                  type="number" 
                  placeholder="Enter year" 
                  className="mt-2"
                  min="1980"
                  max="2024"
                />
              </div>

              {/* Fuel */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Fuel <span className="text-red-500">*</span>
                </Label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {fuelTypes.map((fuel) => (
                    <Button
                      key={fuel}
                      variant={selectedFuel === fuel ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFuel(fuel)}
                      className={selectedFuel === fuel ? "btn-olx" : ""}
                    >
                      {fuel}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Transmission */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Transmission <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-3 mt-2">
                  {transmissionTypes.map((transmission) => (
                    <Button
                      key={transmission}
                      variant={selectedTransmission === transmission ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTransmission(transmission)}
                      className={selectedTransmission === transmission ? "btn-olx" : ""}
                    >
                      {transmission}
                    </Button>
                  ))}
                </div>
              </div>

              {/* KM Driven */}
              <div>
                <Label htmlFor="km-driven" className="text-sm font-medium text-foreground">
                  KM driven <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-2">
                  <Input 
                    value={kmDriven}
                    onChange={(e) => setKmDriven(e.target.value)}
                    placeholder="Enter kilometers"
                    maxLength={6}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                    {kmDriven.length} / 6
                  </div>
                </div>
              </div>

              {/* No. of Owners */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  No. of Owners <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-3 mt-2">
                  {ownerOptions.map((owner) => (
                    <Button
                      key={owner}
                      variant={selectedOwners === owner ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedOwners(owner)}
                      className={selectedOwners === owner ? "btn-olx" : ""}
                    >
                      {owner}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Ad Title */}
              <div>
                <Label htmlFor="ad-title" className="text-sm font-medium text-foreground">
                  Ad title <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-2">
                  <Input 
                    value={adTitle}
                    onChange={(e) => setAdTitle(e.target.value)}
                    placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
                    maxLength={70}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                    {adTitle.length} / 70
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium text-foreground">
                  Description <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-2">
                  <Textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Include condition, features and reason for selling"
                    maxLength={4096}
                    rows={4}
                  />
                  <div className="absolute right-3 bottom-3 text-sm text-muted-foreground">
                    {description.length} / 4096
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Set a Price */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">SET A PRICE</h2>
            <div>
              <Label htmlFor="price" className="text-sm font-medium text-foreground">
                Price <span className="text-red-500">*</span>
              </Label>
              <div className="relative mt-2">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  ₹
                </div>
                <Input 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  className="pl-8"
                  type="number"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Photos */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">UPLOAD UP TO 20 PHOTOS</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Array.from({ length: 20 }, (_, index) => (
                <div
                  key={index}
                  className={`aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    index === 0 
                      ? "border-[hsl(var(--primary))] bg-[hsl(var(--category-hover))]" 
                      : "border-border hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--category-hover))]"
                  }`}
                  onClick={handlePhotoUpload}
                >
                  <Camera className={`w-6 h-6 mb-2 ${index === 0 ? "text-[hsl(var(--primary))]" : "text-muted-foreground"}`} />
                  {index === 0 && (
                    <span className="text-xs font-medium text-[hsl(var(--primary))]">Add Photo</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Confirm Location */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">CONFIRM YOUR LOCATION</h2>
            
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="list">LIST</TabsTrigger>
                <TabsTrigger value="current">CURRENT LOCATION</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list" className="space-y-4">
                <div>
                  <Label htmlFor="state" className="text-sm font-medium text-foreground">
                    State <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue defaultValue="Andaman & Nicobar Islands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="andaman">Andaman & Nicobar Islands</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-red-500 text-sm mt-1">This field is mandatory</div>
                </div>

                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-foreground">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="port-blair">Port Blair</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-red-500 text-sm mt-1">This field is mandatory</div>
                </div>
              </TabsContent>
              
              <TabsContent value="current">
                <div className="text-center py-8 text-muted-foreground">
                  Enable location access to use current location
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Review Your Details */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">REVIEW YOUR DETAILS</h2>
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">A</span>
                </div>
              </div>
              <div className="flex-1">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </Label>
                <div className="relative mt-2">
                  <Input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={30}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                    {name.length} / 30
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-2">Let's verify your account</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We will send you a confirmation code by sms on the next step.
              </p>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Mobile Phone Number <span className="text-red-500">*</span>
                </Label>
                <div className="flex mt-2">
                  <div className="flex items-center px-3 border border-r-0 border-border rounded-l-md bg-muted text-muted-foreground">
                    +91
                  </div>
                  <Input 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter mobile number"
                    className="rounded-l-none"
                    type="tel"
                  />
                </div>
              </div>
            </div>

            <Button 
              className="w-full md:w-auto btn-olx"
              size="lg"
            >
              Post now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostAdForm;