import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Star, MessageCircle, ArrowLeft, MapPin, Navigation, Globe } from "lucide-react"
import Link from "next/link"

export default function ProfileDetailPage() {
  const interests = [
    "Hiking",
    "Photography",
    "Reading",
    "Cooking",
    "Yoga",
    "Travel",
    "Concerts",
    "Volunteering",
    "Board Games",
    "Coffee Tasting",
    "Authenticity",
    "Kindness",
    "Sense of Humor",
    "Open-mindedness",
    "Intellectual Curiosity",
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/matches">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="/woman-brunette-smiling-portrait.jpg" alt="Anya Sharma" className="w-full h-96 object-cover" />
              <div className="p-4">
                <h1 className="text-2xl font-bold">Anya Sharma, 28</h1>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    Extrovert
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Single</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    Open to Love
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                    Adventure Seeker
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>New York, USA</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600 mt-1">
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm font-medium">2.3 miles away</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <img
                src="/woman-hiking-outdoor.jpg"
                alt="Profile photo"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="/woman-sunset-photography.jpg"
                alt="Profile photo"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="/woman-coffee-reading.jpg"
                alt="Profile photo"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img src="/woman-yoga-beach.jpg" alt="Profile photo" className="w-full h-24 object-cover rounded-lg" />
              <img
                src="/woman-cooking-kitchen.jpg"
                alt="Profile photo"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="/placeholder.svg?height=120&width=120"
                alt="Profile photo"
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            {/* About Me */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate traveler and aspiring photographer always looking for new adventures. I love exploring hidden
                cafes, reading sci-fi novels, and spending time outdoors. My ideal match is someone who shares a
                curiosity for the world and enjoys deep conversations. I believe in genuine connections and finding joy
                in the simple things.
              </p>
            </div>

            {/* Interests & Preferences */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Interests & Preferences</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 bg-transparent">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <Star className="w-4 h-4 mr-2" />
                Super Like
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Location Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Location & Distance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Showing approximate location</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Distance from you:</span>
                    <span className="font-medium text-blue-600">2.3 miles</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Estimated travel time:</span>
                    <span className="font-medium">8 minutes by car</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Common area:</span>
                    <span className="font-medium">Manhattan, NYC</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Places */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Nearby Places</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Central Park</p>
                      <p className="text-xs text-gray-600">0.8 miles away</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Blue Bottle Coffee</p>
                      <p className="text-xs text-gray-600">0.5 miles away</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">MoMA</p>
                      <p className="text-xs text-gray-600">1.2 miles away</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Bryant Park</p>
                      <p className="text-xs text-gray-600">0.3 miles away</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
              </CardContent>
            </Card>

            {/* Safety & Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Location Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-600 space-y-2">
                  <p>• Exact location is never shared</p>
                  <p>• Distance is approximate</p>
                  <p>• Location updates when you move</p>
                  <p>• You can hide distance anytime</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
