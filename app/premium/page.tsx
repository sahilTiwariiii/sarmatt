import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap } from "lucide-react"
import Link from "next/link"

export default function PremiumPage() {
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

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Unlock Premium Connections</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elevate your dating experience with exclusive features designed to help you find your perfect match faster
            and more effectively. Discover new ways to connect and stand out.
          </p>
        </div>

        {/* Premium Features */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Exclusive Premium Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <CardTitle>Super Likes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Show extra interest with Super Likes. When you Super Like someone, your profile is immediately
                  highlighted to them, dramatically increasing your chances of getting noticed and sparking a
                  connection. Make a powerful first impression that stands out from the crowd.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>Profile Boosts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get more views on your profile for a limited time. Profile Boosts push your profile to the top of the
                  queue in your area, ensuring more people see you and can connect. Perfect for maximizing your
                  visibility and finding new matches quickly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Choose Your Premium Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Monthly Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Monthly Plan</CardTitle>
                <div className="text-3xl font-bold text-blue-600">
                  $19.99<span className="text-sm text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500">(Billed $41.97 every 3 months)</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Unlimited Swipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">5 Super Likes per day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">1 Profile Boost per month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Ad-free experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Message before Match</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>

            {/* Quarterly Plan */}
            <Card className="relative border-blue-600 border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Quarterly Plan</CardTitle>
                <div className="text-3xl font-bold text-blue-600">
                  $14.99<span className="text-sm text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500">(Billed $44.97 every 3 months)</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Unlimited Swipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">10 Super Likes per day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">2 Profile Boosts per month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Ad-free experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Message before Match</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Advanced Filters</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>

            {/* Yearly Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Yearly Plan</CardTitle>
                <div className="text-3xl font-bold text-blue-600">
                  $9.99<span className="text-sm text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500">(Billed $119.88 annually)</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Unlimited Swipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Unlimited Super Likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">4 Profile Boosts per month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Ad-free experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Message before Match</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Advanced Filters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm">See Who Likes You</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is a Super Like?</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do Profile Boosts work?</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel my subscription at any time?</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods are accepted?</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
