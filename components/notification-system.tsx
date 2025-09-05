"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Heart, MessageCircle, Star, Users, Bell } from "lucide-react"

interface Notification {
  id: string
  type: "like" | "message" | "match" | "super_like" | "group"
  title: string
  message: string
  time: string
  read: boolean
  avatar?: string
  sound?: string
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "like",
      title: "New Like!",
      message: "Sarah liked your profile",
      time: "2 minutes ago",
      read: false,
      avatar: "/woman-asian-smiling.jpg",
      sound: "gentle",
    },
    {
      id: "2",
      type: "message",
      title: "New Message",
      message: "Emma: Hey! How's your day going?",
      time: "5 minutes ago",
      read: false,
      avatar: "/woman-blonde-smiling.jpg",
      sound: "default",
    },
    {
      id: "3",
      type: "match",
      title: "It's a Match!",
      message: "You and David both liked each other",
      time: "1 hour ago",
      read: true,
      avatar: "/man-dark-hair.jpg",
      sound: "modern",
    },
  ])

  const [isVisible, setIsVisible] = useState(false)

  const playNotificationSound = (soundType = "default") => {
    // In a real app, this would play actual sound files
    console.log(`[v0] Playing notification sound: ${soundType}`)

    // Simulate different notification sounds
    const sounds = {
      default: "🔔 Default chime",
      gentle: "🎵 Gentle bell",
      modern: "📱 Modern ping",
      classic: "⏰ Classic ding",
      soft: "🔕 Soft notification",
    }

    console.log(`[v0] Sound played: ${sounds[soundType as keyof typeof sounds] || sounds.default}`)
  }

  const addNotification = (notification: Omit<Notification, "id">) => {
    const newNotification = {
      ...notification,
      id: Date.now().toString(),
    }

    setNotifications((prev) => [newNotification, ...prev])
    playNotificationSound(notification.sound)
    setIsVisible(true)

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 5000)
  }

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-4 h-4 text-red-500" />
      case "message":
        return <MessageCircle className="w-4 h-4 text-blue-500" />
      case "match":
        return <Star className="w-4 h-4 text-yellow-500" />
      case "super_like":
        return <Star className="w-4 h-4 text-purple-500" />
      case "group":
        return <Users className="w-4 h-4 text-green-500" />
      default:
        return <Bell className="w-4 h-4 text-gray-500" />
    }
  }

  // Simulate receiving notifications
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const types = ["like", "message", "match", "super_like"]
        const randomType = types[Math.floor(Math.random() * types.length)] as any
        const messages = {
          like: "Someone liked your profile!",
          message: "You have a new message",
          match: "It's a match!",
          super_like: "Someone super liked you!",
        }

        addNotification({
          type: randomType,
          title: `New ${randomType.replace("_", " ")}!`,
          message: messages[randomType],
          time: "Just now",
          read: false,
          sound: "default",
        })
      }
    }, 10000) // Every 10 seconds for demo

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Notification Toast */}
      {isVisible && notifications.length > 0 && !notifications[0].read && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right">
          <Card className="w-80 shadow-lg notification-pulse">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {notifications[0].avatar ? (
                    <img
                      src={notifications[0].avatar || "/placeholder.svg"}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      {getIcon(notifications[0].type)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{notifications[0].title}</h4>
                    <Button variant="ghost" size="sm" className="h-auto p-1" onClick={() => setIsVisible(false)}>
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notifications[0].message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notifications[0].time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Notification Center (can be toggled) */}
      <div className="hidden">
        <Card className="w-96">
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Notifications</h3>
                <Badge variant="secondary">{notifications.filter((n) => !n.read).length}</Badge>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${!notification.read ? "bg-blue-50" : ""}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {notification.avatar ? (
                        <img
                          src={notification.avatar || "/placeholder.svg"}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          {getIcon(notification.type)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeNotification(notification.id)
                          }}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
