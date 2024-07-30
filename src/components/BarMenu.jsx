import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from '@/lib/supabase';

const BarMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const { data, error } = await supabase
      .from('bar_menu')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching menu items:', error);
    } else {
      setMenuItems(data);
    }
  };

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
