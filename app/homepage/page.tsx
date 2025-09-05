import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Star, Shield, Globe, Users, MessageCircle, Video, Smartphone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GlobalHearts</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Feed
            </Link>
            <Link href="/homepage" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/matches" className="text-foreground hover:text-primary transition-colors">
              Matches
            </Link>
            <Link href="/chat" className="text-foreground hover:text-primary transition-colors">
              Chat
            </Link>
            <Link href="/premium" className="text-foreground hover:text-primary transition-colors">
              Premium
            </Link>
            <Link href="/settings" className="text-foreground hover:text-primary transition-colors">
              Settings
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/profile/create">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Discover Your Perfect Connection
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Connect with like-minded people from around the world. Build meaningful relationships based on personality,
            interests, and shared values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profile/create">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link href="/matches">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Browse Matches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose GlobalHearts?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced matching technology meets genuine human connection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personality Matching</h3>
                <p className="text-muted-foreground">
                  Connect with introverts, extroverts, or ambiverts who complement your personality type
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Connections</h3>
                <p className="text-muted-foreground">
                  Meet people from any country and build international friendships or relationships
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Chat</h3>
                <p className="text-muted-foreground">
                  Random video chats and introduction videos help you connect authentically
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your privacy matters. Control who sees your details and location information
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Messaging</h3>
                <p className="text-muted-foreground">
                  Multilanguage support and custom notification tones for every conversation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Themes</h3>
                <p className="text-muted-foreground">
                  Customize your experience with themes like dark, light, rainy, sunny, and more
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Perfect Plan</h2>
            <p className="text-xl text-muted-foreground">
              Start free and upgrade when you're ready for premium features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="relative">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <div className="text-3xl font-bold text-primary mb-4">Free</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Browse profiles
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Send 5 messages daily
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Basic search filters
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Current Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  $19.99<span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited messages
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    See who liked you
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Advanced search filters
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Video chat access
                  </li>
                </ul>
                <Button className="w-full">Upgrade Now</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">VIP Elite</h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  $49.99<span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    All Premium features
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Priority customer support
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />5 Profile boosts monthly
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    Invisible browsing
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Go VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of people who have found meaningful connections through GlobalHearts
          </p>
          <Link href="/profile/create">
            <Button size="lg">Start Your Journey Today</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Company
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Legal
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted-foreground text-sm">Made with ❤️ GlobalHearts © 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
