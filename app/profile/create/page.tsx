import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Camera, Video, MapPin, Upload } from "lucide-react"
import Link from "next/link"

export default function CreateProfilePage() {
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
            <Link href="/premium" className="text-blue-600 font-medium">
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

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">Create Your Profile</h1>

        <div className="space-y-8">
          {/* Profile Photos */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Photos & Introduction Video</CardTitle>
              <p className="text-gray-600">Upload up to 5 photos and a 30-second introduction video.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/smiling-woman.png" alt="Profile" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/group-friends.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/woman-coffee.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <Camera className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <span className="text-xs text-gray-500">Add Photo</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Video className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Upload Introduction Video</h3>
                  <p className="text-sm text-gray-600 mb-4">Share a 30-second video introducing yourself</p>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Video File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Me */}
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <p className="text-gray-600">Tell us about yourself in your own words.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bio">Your Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Adventurous spirit, seeking a kind-hearted companion for laughter, new experiences, and genuine connection. I love hiking, trying new recipes, and cozy nights in with a good book. Let's explore the world together!"
                    className="min-h-[100px] mt-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Personality Type</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select personality type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="introvert">Introvert</SelectItem>
                        <SelectItem value="extrovert">Extrovert</SelectItem>
                        <SelectItem value="ambivert">Ambivert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Relationship Status</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                        <SelectItem value="separated">Separated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>What Are You Looking For?</CardTitle>
              <p className="text-gray-600">Select all types of connections you're open to.</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="love" />
                  <Label htmlFor="love">Open to Love</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="friendship" />
                  <Label htmlFor="friendship">Open to Friendship</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bros" />
                  <Label htmlFor="bros">Looking for Bros</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="international" />
                  <Label htmlFor="international">International Friends</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="personality-match" />
                  <Label htmlFor="personality-match">Same Personality Type</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="nearby" />
                  <Label htmlFor="nearby">Nearby Connections</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Distance */}
          <Card>
            <CardHeader>
              <CardTitle>Location Preferences</CardTitle>
              <p className="text-gray-600">Help others find you and set your distance preferences.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Your Location</Label>
                    <div className="relative mt-2">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input placeholder="New York, NY" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <Label>Maximum Distance</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">Within 5 miles</SelectItem>
                        <SelectItem value="10">Within 10 miles</SelectItem>
                        <SelectItem value="25">Within 25 miles</SelectItem>
                        <SelectItem value="50">Within 50 miles</SelectItem>
                        <SelectItem value="100">Within 100 miles</SelectItem>
                        <SelectItem value="unlimited">Anywhere</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="show-distance" />
                  <Label htmlFor="show-distance">Show my distance to other users</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* My Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>My Preferences</CardTitle>
              <p className="text-gray-600">Specify your ideal match preferences.</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label>Age Range</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Input type="number" placeholder="25" className="w-20" />
                    <span>-</span>
                    <Input type="number" placeholder="35" className="w-20" />
                  </div>
                </div>
                <div>
                  <Label>Preferred Personality</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Any personality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Personality</SelectItem>
                      <SelectItem value="introvert">Introvert</SelectItem>
                      <SelectItem value="extrovert">Extrovert</SelectItem>
                      <SelectItem value="ambivert">Ambivert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Relationship Goal</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Long-term relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="long-term">Long-term relationship</SelectItem>
                      <SelectItem value="casual">Casual dating</SelectItem>
                      <SelectItem value="friendship">Friendship</SelectItem>
                      <SelectItem value="networking">Networking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* My Interests */}
          <Card>
            <CardHeader>
              <CardTitle>My Interests</CardTitle>
              <p className="text-gray-600">Select what you love to do.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="default" size="sm" className="bg-blue-600 text-white">
                    Reading
                  </Button>
                  <Button variant="default" size="sm" className="bg-blue-600 text-white">
                    Hiking
                  </Button>
                  <Button variant="default" size="sm" className="bg-blue-600 text-white">
                    Cooking
                  </Button>
                  <Button variant="outline" size="sm">
                    Photography
                  </Button>
                  <Button variant="outline" size="sm">
                    Travel
                  </Button>
                  <Button variant="outline" size="sm">
                    Movies
                  </Button>
                  <Button variant="outline" size="sm">
                    Music
                  </Button>
                  <Button variant="outline" size="sm">
                    Art
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="yoga" />
                    <Label htmlFor="yoga">Yoga</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gaming" />
                    <Label htmlFor="gaming">Gaming</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sports" />
                    <Label htmlFor="sports">Sports</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gardening" />
                    <Label htmlFor="gardening">Gardening</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="volunteering" />
                    <Label htmlFor="volunteering">Volunteering</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dancing" />
                    <Label htmlFor="dancing">Dancing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="coding" />
                    <Label htmlFor="coding">Coding</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline">Skip for Now</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/matches">Save & Continue</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
