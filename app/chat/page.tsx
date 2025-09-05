import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Phone, Video, MoreHorizontal, Send, Smile, Paperclip, Mic, Volume2 } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  const chats = [
    {
      name: "Sophia M.",
      lastMessage: "Sounds great! How about we...",
      time: "2m",
      avatar: "/woman-blonde-smiling.jpg",
      online: true,
    },
    {
      name: "David L.",
      lastMessage: "I really enjoyed our conversation...",
      time: "1h",
      avatar: "/man-dark-hair.jpg",
      online: false,
    },
    {
      name: "Sarah & Friends (Group)",
      lastMessage: "Sarah: Let's plan something...",
      time: "3h",
      avatar: "/group-friends.jpg",
      online: true,
    },
    {
      name: "Olivia K.",
      lastMessage: "I'll get back to you soon.",
      time: "1d",
      avatar: "/woman-red-hair.jpg",
      online: false,
    },
  ]

  const messages = [
    {
      sender: "Sophia M.",
      message: "Hey there! I saw your profile and thought we might have a lot in common. How are you doing today?",
      time: "10:00 AM",
      isMe: false,
    },
    {
      sender: "Me",
      message:
        "Hi Sophia! I'm doing great, thanks for asking. I'm doing good. Your profile caught my eye too! I love your interests in hiking and photography. What kind of photography do you enjoy the most?",
      time: "10:05 AM",
      isMe: true,
    },
    {
      sender: "Sophia M.",
      message:
        "I'm mostly into landscape photography, but I also enjoy capturing candid moments. Here's a photo from my recent trip!",
      time: "10:15 AM",
      isMe: false,
    },
    {
      sender: "Sophia M.",
      message: "",
      time: "10:16 AM",
      isMe: false,
      image: "/mountain-lake-sunset.jpg",
    },
    {
      sender: "Me",
      message:
        "Wow, that's beautiful! I'm so impressed. The colors are incredible. You've got a real talent for it. I'd love to see more of your work sometime. Maybe we could chat over coffee?",
      time: "10:20 AM",
      isMe: true,
    },
    {
      sender: "Sophia M.",
      message: "I'd love that! Coffee sounds perfect. Sounds great! How about we meet at 7 PM?",
      time: "10:25 AM",
      isMe: false,
      translated: true,
    },
    {
      sender: "Sophia M.",
      message: "",
      time: "10:30 AM",
      isMe: false,
      audio: "0:35",
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
            <Link href="/chat" className="text-blue-600 font-medium">
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
            <Button variant="outline" size="sm" asChild>
              <Link href="/random-chat">Random Chat</Link>
            </Button>
            <Button variant="outline" size="sm">
              Log Out
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Chat List Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Chats</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/random-chat" className="text-blue-600">
                  Random
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {chats.map((chat, index) => (
              <div key={index} className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={chat.avatar || "/placeholder.svg"}
                      alt={chat.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                  <div className="text-xs text-gray-500">{chat.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                ←
              </Button>
              <img src="/woman-blonde-smiling.jpg" alt="Sophia M." className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-medium">Sophia M.</h3>
                <p className="text-xs text-gray-500">2.3 miles away</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Video className="w-4 h-4" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
              </Button>
              <Button variant="ghost" size="sm">
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                {!message.isMe && (
                  <img
                    src="/woman-blonde-smiling.jpg"
                    alt="Sophia"
                    className="w-8 h-8 rounded-full object-cover mr-2 mt-1"
                  />
                )}
                <div className={`max-w-xs lg:max-w-md ${message.isMe ? "order-1" : "order-2"}`}>
                  {message.audio ? (
                    <div
                      className={`p-3 rounded-lg ${message.isMe ? "bg-blue-600 text-white" : "bg-gray-200"} notification-pulse`}
                    >
                      <div className="flex items-center space-x-2">
                        <Mic className="w-4 h-4" />
                        <span className="text-sm">{message.audio}</span>
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <Volume2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ) : message.image ? (
                    <div className="rounded-lg overflow-hidden">
                      <img src={message.image || "/placeholder.svg"} alt="Shared image" className="max-w-full h-auto" />
                    </div>
                  ) : (
                    <div className={`p-3 rounded-lg ${message.isMe ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
                      <p className="text-sm">{message.message}</p>
                      {message.translated && <p className="text-xs mt-1 opacity-75">Translated</p>}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                </div>
                {message.isMe && (
                  <img src="/user-profile.jpg" alt="Me" className="w-8 h-8 rounded-full object-cover ml-2 mt-1" />
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Smile className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mic className="w-4 h-4" />
              </Button>
              <Input placeholder="Type your message..." className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
