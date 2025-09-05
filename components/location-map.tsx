"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Maximize2, Minimize2 } from "lucide-react"

interface LocationMapProps {
  userLocation: {
    lat: number
    lng: number
    address: string
  }
  targetLocation: {
    lat: number
    lng: number
    address: string
    name: string
  }
  distance: string
  travelTime: string
}

export function LocationMap({ userLocation, targetLocation, distance, travelTime }: LocationMapProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={`transition-all duration-300 ${isExpanded ? "fixed inset-4 z-50" : ""}`}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="w-5 h-5" />
          <span>Interactive Map</span>
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
      </CardHeader>
      <CardContent>
        <div
          className={`bg-gradient-to-br from-blue-100 to-green-100 rounded-lg ${isExpanded ? "h-[calc(100vh-200px)]" : "h-64"} flex items-center justify-center relative overflow-hidden`}
        >
          {/* Simulated Map Interface */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-purple-200"></div>
            {/* Grid lines to simulate map */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-gray-400"
                  style={{
                    left: `${i * 10}%`,
                    top: 0,
                    bottom: 0,
                    borderLeft: "1px solid",
                  }}
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-gray-400"
                  style={{
                    top: `${i * 12.5}%`,
                    left: 0,
                    right: 0,
                    borderTop: "1px solid",
                  }}
                />
              ))}
            </div>
          </div>

          {/* User Location Marker */}
          <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                You
              </div>
            </div>
          </div>

          {/* Target Location Marker */}
          <div className="absolute top-3/4 right-1/3 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {targetLocation.name}
              </div>
            </div>
          </div>

          {/* Distance Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1="33%"
              y1="25%"
              x2="67%"
              y2="75%"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.7"
            />
          </svg>

          {/* Center Info */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-lg">{distance}</span>
            </div>
            <p className="text-sm text-gray-600">{travelTime}</p>
            <p className="text-xs text-gray-500 mt-1">Approximate distance</p>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Your Location</h4>
              <p className="text-xs text-gray-600">{userLocation.address}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-1">Their Location</h4>
              <p className="text-xs text-gray-600">{targetLocation.address}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
