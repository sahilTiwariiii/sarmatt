import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Volume2, Bell, Globe, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
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
            <Link href="/settings" className="text-blue-600 font-medium">
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
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* Privacy Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Make Profile Visible</h3>
              </div>
              <Switch defaultChecked />
            </div>

            <div>
              <h3 className="font-medium mb-4">Who can see my details:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="age" defaultChecked />
                  <label htmlFor="age" className="text-sm">
                    Age
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="location" defaultChecked />
                  <label htmlFor="location" className="text-sm">
                    Location
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="interests" />
                  <label htmlFor="interests" className="text-sm">
                    Interests
                  </label>
                </div>
              </div>
            </div>

            <div>
              <Button variant="outline" size="sm">
                Manage Blocked Users
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Notification Configuration */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notification Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Email Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Likes</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Matches</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Messages</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">In-App Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Likes</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Matches</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Messages</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4 flex items-center space-x-2">
                <Volume2 className="w-4 h-4" />
                <span>Notification Sounds</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Message Sound</span>
                    <Switch defaultChecked />
                  </div>
                  <Select defaultValue="default">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default Chime</SelectItem>
                      <SelectItem value="gentle">Gentle Bell</SelectItem>
                      <SelectItem value="modern">Modern Ping</SelectItem>
                      <SelectItem value="classic">Classic Ding</SelectItem>
                      <SelectItem value="soft">Soft Notification</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Volume Level</span>
                    <span className="text-xs text-gray-500">75%</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Vibration (Mobile)</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Language Configuration */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Language & Translation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Interface Language</label>
                <Select defaultValue="english">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">🇺🇸 English</SelectItem>
                    <SelectItem value="spanish">🇪🇸 Español</SelectItem>
                    <SelectItem value="french">🇫🇷 Français</SelectItem>
                    <SelectItem value="german">🇩🇪 Deutsch</SelectItem>
                    <SelectItem value="italian">🇮🇹 Italiano</SelectItem>
                    <SelectItem value="portuguese">🇵🇹 Português</SelectItem>
                    <SelectItem value="russian">🇷🇺 Русский</SelectItem>
                    <SelectItem value="chinese">🇨🇳 中文</SelectItem>
                    <SelectItem value="japanese">🇯🇵 日本語</SelectItem>
                    <SelectItem value="korean">🇰🇷 한국어</SelectItem>
                    <SelectItem value="arabic">🇸🇦 العربية</SelectItem>
                    <SelectItem value="hindi">🇮🇳 हिन्दी</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-medium mb-4 flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Auto-Translation</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium">Auto-translate messages</span>
                      <p className="text-xs text-gray-600">Automatically translate incoming messages</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium">Show original text</span>
                      <p className="text-xs text-gray-600">Display both original and translated text</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Translate from languages:</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-spanish" defaultChecked />
                        <label htmlFor="auto-spanish" className="text-sm">
                          Spanish
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-french" defaultChecked />
                        <label htmlFor="auto-french" className="text-sm">
                          French
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-german" />
                        <label htmlFor="auto-german" className="text-sm">
                          German
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-chinese" />
                        <label htmlFor="auto-chinese" className="text-sm">
                          Chinese
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-japanese" />
                        <label htmlFor="auto-japanese" className="text-sm">
                          Japanese
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-arabic" />
                        <label htmlFor="auto-arabic" className="text-sm">
                          Arabic
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  This is an example of left-to-right text. Global Hearts ensures full support for right-to-left
                  languages to enhance user experience.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-4">Language Preferences for Matching</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium">Prefer same language speakers</span>
                      <p className="text-xs text-gray-600">Prioritize matches who speak your language</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium">Open to language exchange</span>
                      <p className="text-xs text-gray-600">Connect with people learning your language</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
