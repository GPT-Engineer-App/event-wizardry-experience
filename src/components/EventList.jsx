import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventList = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Summer Music Festival', date: '2023-07-15', description: 'A day of live music and fun' },
    { id: 2, title: 'Tech Conference 2023', date: '2023-08-22', description: 'Learn about the latest in technology' },
    { id: 3, title: 'Food & Wine Expo', date: '2023-09-10', description: 'Taste cuisines from around the world' },
  ]);

  return (
    <div className="grid gap-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{event.description}</p>
          </CardContent>
          <CardFooter>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
