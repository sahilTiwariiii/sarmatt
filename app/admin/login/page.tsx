import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">GH</span>
            </div>
            <span className="font-bold text-xl text-gray-800">GlobalHearts Admin</span>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <p className="text-gray-600">Access the admin dashboard</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Admin Email</Label>
            <Input id="email" type="email" placeholder="admin@globalhearts.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link href="/admin/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/admin">Login to Dashboard</Link>
          </Button>
          <div className="text-center">
            <span className="text-sm text-gray-600">Need admin access? </span>
            <Link href="/admin/register" className="text-sm text-blue-600 hover:underline">
              Request Access
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
