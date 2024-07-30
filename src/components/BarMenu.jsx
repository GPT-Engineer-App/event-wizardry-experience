import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BarMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Classic Martini', price: 12, description: 'Gin, dry vermouth, olive or lemon twist' },
    { id: 2, name: 'Mojito', price: 10, description: 'White rum, sugar, lime juice, soda water, mint' },
    { id: 3, name: 'Old Fashioned', price: 14, description: 'Bourbon, sugar cube, Angostura bitters, orange twist' },
  ]);

  return (
    <div className="grid gap-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Bar Menu</h2>
      {menuItems.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>${item.price}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{item.description}</p>
          </CardContent>
          <CardFooter>
            <Button>Add to Order</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BarMenu;
