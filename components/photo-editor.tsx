"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { X, RotateCw, Palette, Sparkles, Download } from "lucide-react"

interface PhotoEditorProps {
  imageUrl: string
  onClose: () => void
  onSave: (editedImageUrl: string) => void
}

export function PhotoEditor({ imageUrl, onClose, onSave }: PhotoEditorProps) {
  const [brightness, setBrightness] = useState([100])
  const [contrast, setContrast] = useState([100])
  const [saturation, setSaturation] = useState([100])
  const [rotation, setRotation] = useState(0)

  const handleSave = () => {
    // In a real app, this would apply the filters and return the edited image
    onSave(imageUrl)
    onClose()
  }

  const filterStyle = {
    filter: `brightness(${brightness[0]}%) contrast(${contrast[0]}%) saturate(${saturation[0]}%) rotate(${rotation}deg)`,
    transform: `rotate(${rotation}deg)`,
  }

  return (
    <div className="photo-editor-overlay">
      <div className="relative max-w-4xl max-h-[80vh] bg-black rounded-lg overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>

        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Edit"
          className="max-w-full max-h-[60vh] object-contain"
          style={filterStyle}
        />

        <div className="photo-editor-controls">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-xs">Brightness</span>
            <Slider value={brightness} onValueChange={setBrightness} max={200} min={0} step={1} className="w-20" />
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-xs">Contrast</span>
            <Slider value={contrast} onValueChange={setContrast} max={200} min={0} step={1} className="w-20" />
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-xs">Saturation</span>
            <Slider value={saturation} onValueChange={setSaturation} max={200} min={0} step={1} className="w-20" />
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={() => setRotation(rotation + 90)}
          >
            <RotateCw className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Palette className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Sparkles className="w-4 h-4" />
          </Button>

          <Button variant="default" size="sm" onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
