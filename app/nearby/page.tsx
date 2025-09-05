"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Filter, Navigation, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function NearbyPage() {
  const [searchRadius, setSearchRadius] = useState(5)

  const nearbyUsers = [
    {
      id: 1,
      name: "Sarah Chen",
      age: 26,
      distance: "0.8 miles",
      location: "Central Park East",
      avatar: "/woman-asian-smiling.jpg",
      interests: ["Photography", "Hiking", "Coffee"],
      personality: "Ambivert",
      lastSeen: "2 hours ago",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      age: 29,
      distance: "1.2 miles",
      location: "Upper West Side",
      avatar: "/man-latino-smile.jpg",
      interests: ["Music", "Cooking", "Travel"],
      personality: "Extrovert",
      lastSeen: "30 minutes ago",
    },
    {
      id: 3,
      name: "Emma Thompson",
      age: 24,
      distance: "2.1 miles",
      location: "Greenwich Village",
      avatar: "/woman-blonde-smiling.jpg",
      interests: ["Art", "Reading", "Yoga"],
      personality: "Introvert",
      lastSeen: "1 hour ago",
    },
    {
      id: 4,
      name: "David Kim",
      age: 31,
      distance: "3.5 miles",
      location: "Brooklyn Heights",
      avatar: "/man-asian-professional.jpg",
      interests: ["Tech", "Gaming", "Fitness"],
      personality: "Ambivert",
      lastSeen: "4 hours ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GH</span>
            </div>
            <span className="font-bold text-xl text-blue-600">GlobalHearts</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/matches" className="text-gray-600 hover:text-blue-600">
              Matches
            </Link>
            <Link href="/chat" className="text-gray-600 hover:text-blue-600">
              Chat
            </Link>
            <Link href="/premium" className="text-gray-600 hover:text-blue-600">
              Premium
            </Link>
            <Link href="/settings" className="text-gray-600 hover:text-blue-600">
              Settings
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Log Out
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">People Nearby</h1>
          <p className="text-gray-600">Discover connections in your area</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search by name or interests..." className="pl-10" />
              </div>
              <div>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Within {searchRadius} miles</option>
                  <option>Within 1 mile</option>
                  <option>Within 3 miles</option>
                  <option>Within 10 miles</option>
                  <option>Within 25 miles</option>
                </select>
              </div>
              <div>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>All personalities</option>
                  <option>Introvert</option>
                  <option>Extrovert</option>
                  <option>Ambivert</option>
                </select>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Nearby Users Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyUsers.map((user) => (
            <Card key={user.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Navigation className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-medium">{user.distance}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-white text-xs">{user.lastSeen}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="font-bold text-lg">
                    {user.name}, {user.age}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{user.location}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {user.personality}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {user.interests.slice(0, 3).map((interest, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Heart className="w-3 h-3 mr-1" />
                    Like
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More People
          </Button>
        </div>
      </div>
    </div>
  )
}
