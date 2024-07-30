import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventList from '../components/EventList';
import BarMenu from '../components/BarMenu';
import VenueMap from '../components/VenueMap';
import UserProfile from '../components/UserProfile';

const Index = () => {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">EventXperience</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="bar">Bar</TabsTrigger>
          <TabsTrigger value="venue">Venue</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="events">
          <EventList />
        </TabsContent>
        <TabsContent value="bar">
          <BarMenu />
        </TabsContent>
        <TabsContent value="venue">
          <VenueMap />
        </TabsContent>
        <TabsContent value="profile">
          <UserProfile />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
