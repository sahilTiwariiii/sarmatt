"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, MessageCircle, SkipForward, Heart, X, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function RandomChatPage() {
  const [isSearching, setIsSearching] = useState(false)
  const [currentMatch, setCurrentMatch] = useState(null)
  const [chatType, setChatType] = useState<"text" | "video">("text")

  const randomUsers = [
    {
      name: "Emma Chen",
      age: 26,
      location: "Tokyo, Japan",
      personality: "Ambivert",
      interests: ["Photography", "Travel", "Cooking"],
      avatar: "/woman-asian-smiling.jpg",
      distance: "8,547 miles away",
    },
    {
      name: "Marco Silva",
      age: 29,
      location: "São Paulo, Brazil",
      personality: "Extrovert",
      interests: ["Music", "Dancing", "Sports"],
      avatar: "/man-latino-smile.jpg",
      distance: "4,821 miles away",
    },
    {
      name: "Aisha Patel",
      age: 24,
      location: "Mumbai, India",
      personality: "Introvert",
      interests: ["Reading", "Art", "Yoga"],
      avatar: "/woman-indian-traditional.jpg",
      distance: "7,923 miles away",
    },
  ]

  const findRandomMatch = () => {
    setIsSearching(true)
    setCurrentMatch(null)

    setTimeout(() => {
      const randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)]
      setCurrentMatch(randomUser)
      setIsSearching(false)
    }, 2000)
  }

  const skipMatch = () => {
    findRandomMatch()
  }

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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Random Global Connections</h1>
          <p className="text-gray-600 mb-6">
            Connect with people from around the world instantly. Choose your adventure!
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={chatType === "text" ? "default" : "outline"}
              onClick={() => setChatType("text")}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Random Text Chat</span>
            </Button>
            <Button
              variant={chatType === "video" ? "default" : "outline"}
              onClick={() => setChatType("video")}
              className="flex items-center space-x-2"
            >
              <Video className="w-4 h-4" />
              <span>Random Video Chat</span>
            </Button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Connection Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Global Connection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSearching ? (
                <div className="text-center py-12">
                  <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">Finding someone amazing for you...</p>
                  <p className="text-sm text-gray-500 mt-2">Searching globally</p>
                </div>
              ) : currentMatch ? (
                <div className="text-center">
                  <img
                    src={currentMatch.avatar || "/placeholder.svg"}
                    alt={currentMatch.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">
                    {currentMatch.name}, {currentMatch.age}
                  </h3>
                  <p className="text-gray-600 mb-2">{currentMatch.location}</p>
                  <p className="text-sm text-gray-500 mb-4">{currentMatch.distance}</p>

                  <Badge variant="secondary" className="mb-4">
                    {currentMatch.personality}
                  </Badge>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {currentMatch.interests.map((interest, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button
                      variant="outline"
                      onClick={skipMatch}
                      className="flex items-center space-x-2 bg-transparent"
                    >
                      <SkipForward className="w-4 h-4" />
                      <span>Next</span>
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
                      {chatType === "video" ? <Video className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
                      <span>Start {chatType === "video" ? "Video" : "Chat"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 bg-transparent"
                    >
                      <X className="w-4 h-4" />
                      <span>Pass</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Ready to meet someone new?</p>
                  <Button onClick={findRandomMatch} className="bg-blue-600 hover:bg-blue-700">
                    Start Random {chatType === "video" ? "Video" : "Chat"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Chat/Video Area */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {chatType === "video" ? <Video className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
                <span>{chatType === "video" ? "Video Chat" : "Text Chat"}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {chatType === "video" ? (
                <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
                  {currentMatch ? (
                    <div className="text-white text-center">
                      <Video className="w-12 h-12 mx-auto mb-4" />
                      <p>Video call with {currentMatch.name}</p>
                      <p className="text-sm opacity-75">Click "Start Video" to begin</p>
                    </div>
                  ) : (
                    <div className="text-white text-center">
                      <Video className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="opacity-75">Find a match to start video chat</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="border rounded-lg h-64 p-4 bg-gray-50">
                  {currentMatch ? (
                    <div className="text-center text-gray-600 mt-20">
                      <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                      <p>Chat with {currentMatch.name}</p>
                      <p className="text-sm opacity-75">Click "Start Chat" to begin messaging</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 mt-20">
                      <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                      <p>Find a match to start chatting</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Global Connections</h3>
              <p className="text-sm text-gray-600">Meet people from every corner of the world</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Personality Matching</h3>
              <p className="text-sm text-gray-600">Connect with similar personality types</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Video className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Video & Text Chat</h3>
              <p className="text-sm text-gray-600">Choose your preferred way to connect</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
