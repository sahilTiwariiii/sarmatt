import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Chrome, Facebook, Smartphone } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GH</span>
            </div>
            <span className="font-bold text-xl text-blue-600">GlobalHearts</span>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to Global Hearts</CardTitle>
          <CardDescription className="text-gray-600">
            Find your perfect match today! Sign up or log in to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-gray-500 font-medium mb-4">SIGN UP WITH</div>

          <Button variant="outline" className="w-full justify-between h-12 bg-transparent" asChild>
            <a href="/signup">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                Sign up with Email
              </div>
              <span>→</span>
            </a>
          </Button>

          <Button variant="outline" className="w-full justify-between h-12 bg-transparent">
            <div className="flex items-center">
              <Chrome className="w-5 h-5 mr-3" />
              Sign up with Google
            </div>
            <span>→</span>
          </Button>

          <Button variant="outline" className="w-full justify-between h-12 bg-transparent">
            <div className="flex items-center">
              <Facebook className="w-5 h-5 mr-3" />
              Sign up with Facebook
            </div>
            <span>→</span>
          </Button>

          <Button variant="outline" className="w-full justify-between h-12 bg-transparent">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-3" />
              Sign up with OTP
            </div>
            <span>→</span>
          </Button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-4">ALREADY HAVE AN ACCOUNT?</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">Log In</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
