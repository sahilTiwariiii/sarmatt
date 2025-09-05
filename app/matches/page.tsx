import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MessageCircle, Search } from "lucide-react"
import Link from "next/link"

export default function MatchesPage() {
  const matches = [
    {
      name: "Sophia",
      age: 28,
      location: "New York",
      interests: ["Reading", "Travel", "Cooking"],
      image: "/woman-blonde-smiling.jpg",
    },
    {
      name: "Liam",
      age: 30,
      location: "Los Angeles",
      interests: ["Gaming", "Photography"],
      image: "/man-dark-hair.jpg",
    },
    {
      name: "Olivia",
      age: 26,
      location: "Chicago",
      interests: ["Art", "Music", "Dancing"],
      image: "/woman-red-hair.jpg",
    },
    {
      name: "Noah",
      age: 32,
      location: "Houston",
      interests: ["Sports", "Cooking"],
      image: "/man-brown-hair-smiling.jpg",
    },
    {
      name: "Ava",
      age: 29,
      location: "Miami",
      interests: ["Travel", "Photography"],
      image: "/woman-brunette-city.jpg",
    },
    {
      name: "Ethan",
      age: 31,
      location: "San Francisco",
      interests: ["Tech", "Hiking"],
      image: "/man-casual-outdoor.jpg",
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
            <Link href="/matches" className="text-blue-600 font-medium">
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Find Your Perfect Match</h1>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search by name or keyword..." className="pl-10" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Search</Button>
          </div>

          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18-25">18-25</SelectItem>
                <SelectItem value="26-35">26-35</SelectItem>
                <SelectItem value="36-45">36-45</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Interests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="music">Music</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-green-600 hover:bg-green-700 text-white">Apply Filters</Button>
          </div>
        </div>

        {/* Recommended Matches */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Recommended Matches</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {matches.map((match, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="relative">
                  <img src={match.image || "/placeholder.svg"} alt={match.name} className="w-full h-64 object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    {match.name}, {match.age}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{match.location}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {match.interests.map((interest, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-1" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA */}
        <div className="max-w-2xl mx-auto text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold">GH</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Unlock Premium Features</h3>
          <p className="text-gray-600 mb-6">
            Get more matches, see who likes you, and stand out with Super Likes and Profile Boosts.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/premium">Explore Premium</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/premium">View Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
