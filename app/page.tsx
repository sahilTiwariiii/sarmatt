import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Users,
  Shield,
  Globe,
  Smartphone,
  Heart,
  MessageCircle,
  Lock,
  Search,
  MapPin,
  Clock,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GT</span>
            </div>
            <span className="font-bold text-xl text-foreground">GlobalTree</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-foreground">
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Discover Your Perfect Connection
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect with meaningful relationships through our advanced matching system. Find your perfect match
                  based on compatibility, interests, and values.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/beautiful-sunset-landscape-with-mountains-and-tree.jpg"
                alt="Beautiful landscape representing connections"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How GlobalTree Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How GlobalTree Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to find your perfect match</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">1. Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Set up your detailed profile with photos, interests, and preferences to attract the right matches.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">2. Discover Matches</h3>
                <p className="text-muted-foreground">
                  Our advanced algorithm finds compatible matches based on your preferences and compatibility scores.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">3. Start Connecting</h3>
                <p className="text-muted-foreground">
                  Send messages, share moments, and build meaningful relationships with your matches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to find meaningful connections</p>
          </div>

          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Real-Time Messaging</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect instantly with your matches through our secure messaging platform. Share photos, voice
                  messages, and build genuine connections in real-time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">End-to-end encryption</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Photo and voice sharing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Read receipts and typing indicators</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/two-people-having-a-conversation-with-mobile-phone.jpg"
                  alt="Real-time messaging feature"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="/smartphone-showing-dating-app-interface-with-profi.jpg"
                  alt="Intelligent matchmaking"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-foreground">Intelligent Matchmaking</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our AI-powered algorithm analyzes compatibility factors to suggest the most suitable matches based on
                  your preferences, lifestyle, and relationship goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Advanced compatibility scoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Personality-based matching</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Location and lifestyle preferences</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Your Privacy, Our Priority</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We take your privacy seriously with advanced security measures, profile verification, and complete
                  control over your personal information.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Photo verification system</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Privacy controls and blocking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Secure data encryption</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/person-in-business-attire-holding-a-tablet-showing.jpg"
                  alt="Privacy and security features"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="/world-map-with-connection-lines-showing-global-rea.jpg"
                  alt="Global search and support"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-foreground">Global Search & 24/7 Support</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect with people worldwide and get round-the-clock support from our dedicated team whenever you
                  need assistance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Global user base</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">24/7 customer support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Multi-language support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Unlock Premium Advantages</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get access to exclusive features with our premium membership including unlimited likes, advanced
                  filters, and priority customer support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Unlimited likes and super likes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Advanced search filters</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">See who liked your profile</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/smartphone-showing-premium-dating-app-features-wit.jpg" alt="Premium features" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GlobalTree */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose GlobalTree?</h2>
            <p className="text-xl text-muted-foreground">The features that make us different</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Verified Profiles</h3>
                <p className="text-muted-foreground">
                  All profiles are verified to ensure authentic connections and reduce fake accounts.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Smart Conversations</h3>
                <p className="text-muted-foreground">
                  AI-powered conversation starters and icebreakers to help you connect naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Privacy First</h3>
                <p className="text-muted-foreground">
                  Complete control over your privacy settings and who can see your profile information.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Global Community</h3>
                <p className="text-muted-foreground">
                  Connect with millions of users worldwide and find matches across different cultures.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Mobile Optimized</h3>
                <p className="text-muted-foreground">
                  Seamless experience across all devices with our responsive design and mobile apps.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock customer support to help you with any questions or concerns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Connections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Target Every Kind of Meaningful Connections</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're looking for love, friendship, or professional networking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Dating</h3>
                <p className="text-muted-foreground">
                  Find your perfect romantic partner with our advanced compatibility matching system.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Friendship</h3>
                <p className="text-muted-foreground">
                  Build lasting friendships with people who share your interests and values.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Local Events</h3>
                <p className="text-muted-foreground">
                  Discover local events and meetups to connect with people in your area.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Travel Companions</h3>
                <p className="text-muted-foreground">
                  Find travel buddies and explore the world together with like-minded adventurers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Mentorship</h3>
                <p className="text-muted-foreground">
                  Connect with mentors or become one yourself in your field of expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Language Exchange</h3>
                <p className="text-muted-foreground">
                  Practice languages with native speakers and help others learn your language.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Hear From Our Happy Couples</h2>
            <p className="text-xl text-muted-foreground">Real stories from real people who found love</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src="/happy-couple-smiling.png" alt="Sarah & Mike" className="w-15 h-15 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Sarah & Mike</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "We met on GlobalTree 2 years ago and got married last month! The compatibility matching really
                  works."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src="/young-couple-laughing-together.jpg" alt="Emma & James" className="w-15 h-15 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Emma & James</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The best dating app I've ever used. Found my soulmate within 3 months of joining!"
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src="/mature-couple-holding-hands.jpg" alt="Lisa & David" className="w-15 h-15 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Lisa & David</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Amazing platform with genuine people. The verification process gives me confidence in every match."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Perfect Plan</h2>
            <p className="text-xl text-muted-foreground">Flexible pricing options to suit your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card border-border relative">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Monthly Plan</h3>
                  <div className="text-4xl font-bold text-primary mb-1">$19.99</div>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Unlimited likes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Advanced filters</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">See who liked you</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card border-primary relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">3-Month Plan</h3>
                  <div className="text-4xl font-bold text-primary mb-1">$14.99</div>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Everything in Monthly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Super likes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Boost your profile</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Read receipts</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card border-border relative">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">6-Month Plan</h3>
                  <div className="text-4xl font-bold text-primary mb-1">$9.99</div>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Everything in 3-Month</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Unlimited super likes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Profile insights</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">VIP support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Best Value</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about GlobalTree</p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <CardContent>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  How does the matching algorithm work?
                </h3>
                <p className="text-muted-foreground">
                  Our AI-powered algorithm analyzes your preferences, interests, lifestyle, and compatibility factors to
                  suggest the most suitable matches. It learns from your interactions to improve suggestions over time.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Is my personal information secure?</h3>
                <p className="text-muted-foreground">
                  Yes, we use end-to-end encryption and follow strict privacy protocols. You have complete control over
                  your privacy settings and can choose what information to share with matches.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Can I use GlobalTree for free?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a free tier with basic features including profile creation, limited likes, and
                  messaging. Premium plans unlock additional features like unlimited likes and advanced filters.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-card border-border">
              <CardContent>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">How do I verify my profile?</h3>
                <p className="text-muted-foreground">
                  Profile verification is simple - just upload a clear photo following our guidelines, and our team will
                  review it within 24 hours. Verified profiles get a blue checkmark and better visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Match?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users who have found meaningful connections on GlobalTree
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">Stay Connected with Our Mobile App</h2>
                <p className="text-xl text-muted-foreground">
                  Download our mobile app for the best experience. Get instant notifications, swipe on the go, and never
                  miss a potential match.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8 py-3">
                  <img src="/apple-logo-minimalist.png" alt="Apple" className="w-6 h-6 mr-2" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
                  <img src="/google-play-logo.png" alt="Google Play" className="w-6 h-6 mr-2" />
                  Get it on Google Play
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/person-holding-smartphone-showing-dating-app-inter.jpg"
                alt="Mobile app preview"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">GT</span>
                </div>
                <span className="font-bold text-xl text-foreground">GlobalTree</span>
              </div>
              <p className="text-muted-foreground">
                Connecting hearts worldwide through meaningful relationships and authentic connections.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Safety Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2024 GlobalTree. All rights reserved.</p>
            <p className="text-muted-foreground mt-4 md:mt-0">Made with ❤️ Visily</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
