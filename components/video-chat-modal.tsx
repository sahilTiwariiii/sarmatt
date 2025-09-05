"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Video, VideoOff, Mic, MicOff, Phone, Settings } from "lucide-react"

interface VideoChatModalProps {
  isOpen: boolean
  onClose: () => void
  partnerName: string
  partnerAvatar: string
}

export function VideoChatModal({ isOpen, onClose, partnerName, partnerAvatar }: VideoChatModalProps) {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="w-full h-full relative">
        {/* Partner Video */}
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          {isVideoOn ? (
            <img src={partnerAvatar || "/placeholder.svg"} alt={partnerName} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <VideoOff className="w-16 h-16" />
              </div>
              <p className="text-xl">{partnerName}</p>
              <p className="text-sm opacity-75">Camera is off</p>
            </div>
          )}
        </div>

        {/* Self Video (Picture-in-Picture) */}
        <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
            <div className="text-center">
              <Video className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs">You</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <Button
            variant={isAudioOn ? "default" : "destructive"}
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={() => setIsAudioOn(!isAudioOn)}
          >
            {isAudioOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
          </Button>

          <Button
            variant={isVideoOn ? "default" : "destructive"}
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={() => setIsVideoOn(!isVideoOn)}
          >
            {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
          </Button>

          <Button variant="destructive" size="lg" className="rounded-full w-14 h-14" onClick={onClose}>
            <Phone className="w-6 h-6 rotate-[135deg]" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full w-14 h-14 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Settings className="w-6 h-6" />
          </Button>
        </div>

        {/* Call Info */}
        <div className="absolute top-4 left-4 text-white">
          <p className="text-lg font-medium">{partnerName}</p>
          <p className="text-sm opacity-75">Video call • 00:45</p>
        </div>
      </div>
    </div>
  )
}
