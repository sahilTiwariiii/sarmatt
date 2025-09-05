"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  Heart,
  Search,
  Bell,
  MessageCircle,
  Users,
  Calendar,
  ShoppingBag,
  Gamepad2,
  HelpCircle,
  Settings,
  Home,
  Video,
  Bookmark,
  Clock,
  MoreHorizontal,
  X,
  ThumbsUp,
  Share,
  Camera,
  Smile,
  Menu,
} from "lucide-react"

export default function SocialFeed() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <span className="text-lg md:text-xl font-bold text-foreground">GlobalHearts</span>
            </div>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search GlobalHearts" className="pl-10 w-48 md:w-64 bg-muted/50 border-0" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Home className="h-6 w-6 text-primary" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="h-6 w-6 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Video className="h-6 w-6 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Users className="h-6 w-6 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Calendar className="h-6 w-6 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <MessageCircle className="h-6 w-6 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Settings className="h-6 w-6 text-muted-foreground" />
            </Button>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-2 md:px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1 space-y-4">
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>MV</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-card-foreground">Minsara Vithanage</span>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/matches"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Users className="h-5 w-5 text-blue-500" />
                    <span>Friends</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Bookmark className="h-5 w-5 text-purple-500" />
                    <span>Saved</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>Memories</span>
                  </Link>
                  <Link
                    href="/random-chat"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Video className="h-5 w-5 text-red-500" />
                    <span>Video</span>
                  </Link>
                  <Link
                    href="/nearby"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Calendar className="h-5 w-5 text-red-500" />
                    <span>Events</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ShoppingBag className="h-5 w-5 text-blue-500" />
                    <span>Marketplace</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Gamepad2 className="h-5 w-5 text-blue-500" />
                    <span>Gaming Video</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <HelpCircle className="h-5 w-5 text-blue-500" />
                    <span>Support</span>
                  </Link>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <h4 className="font-semibold text-card-foreground mb-3">Your shortcuts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">F</span>
                      </div>
                      <span className="text-muted-foreground text-sm">Figma designers community</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">J</span>
                      </div>
                      <span className="text-muted-foreground text-sm">Java Q and A</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed - Full width on mobile, 2 columns on large screens */}
          <div className="col-span-1 lg:col-span-2 space-y-4 md:space-y-6">
            {/* Stories Section */}
            <Card className="bg-card border-border">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-card-foreground">Stories</h3>
                  <Link href="#" className="text-primary text-sm hover:underline">
                    See All
                  </Link>
                </div>
                <div className="flex space-x-2 md:space-x-3 overflow-x-auto pb-2">
                  <div className="flex-shrink-0 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded-xl flex items-center justify-center mb-2 relative">
                      <span className="text-xl md:text-2xl">+</span>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">+</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">Create story</span>
                  </div>
                  {["Albert Frank", "Jenny Marzia", "Maria Watt", "John Carls"].map((name, i) => (
                    <div key={i} className="flex-shrink-0 text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl p-0.5 mb-2">
                        <div className="w-full h-full bg-muted rounded-xl"></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Post Creation */}
            <Card className="bg-card border-border">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-8 w-8 md:h-10 md:w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>MV</AvatarFallback>
                  </Avatar>
                  <Input
                    placeholder="What's on your mind, Minsara?"
                    className="flex-1 bg-muted/50 border-0 rounded-full"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-border gap-2 sm:gap-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-red-500 w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <Video className="h-4 w-4" />
                    <span className="text-sm">Live Video</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-green-500 w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <Camera className="h-4 w-4" />
                    <span className="text-sm">Photo/video</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-yellow-500 w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <Smile className="h-4 w-4" />
                    <span className="text-sm">Feeling/activity</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sample Post */}
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8 md:h-10 md:w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-card-foreground text-sm md:text-base">John Snow</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">5 mins • 🌍</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-card-foreground mb-3 text-sm md:text-base">It's Coming ❄️</p>
                </div>

                <div className="relative">
                  <img
                    src="/beautiful-sunset-landscape-with-mountains-and-tree.jpg"
                    alt="Winter scene"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center space-x-1 md:space-x-2 text-muted-foreground hover:text-primary"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">Like</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center space-x-1 md:space-x-2 text-muted-foreground hover:text-primary"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">Comment</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center space-x-1 md:space-x-2 text-muted-foreground hover:text-primary"
                      >
                        <Share className="h-4 w-4" />
                        <span className="text-sm">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1 space-y-4">
            {/* Groups Section */}
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-card-foreground">Groups</h3>
                  <span className="text-sm text-muted-foreground">Suggested</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-card-foreground">New ways to find and join communities</p>
                      <Button size="sm" className="mt-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                        Find Your Groups
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">josh</span> and <span className="font-medium">4 friends</span> joined
                    Groups
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacts */}
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-card-foreground mb-4">Contacts</h3>
                <div className="space-y-3">
                  {[
                    "Alexander Smith",
                    "Olivia Johnson",
                    "Benjamin Williams",
                    "Emily Brown",
                    "Liam Davis",
                    "Sophia Martinez",
                    "Noah Wilson",
                    "William Taylor",
                    "Jacob Harris",
                  ].map((name, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/abstract-geometric-shapes.png?height=32&width=32&query=${name}`} />
                          <AvatarFallback>
                            {name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                      </div>
                      <span className="text-sm text-card-foreground">{name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-6 md:py-8 px-4 mt-8 md:mt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Advertising
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Ad Choices
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              More
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted-foreground text-sm">Meta © 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
