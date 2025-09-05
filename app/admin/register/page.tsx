import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function AdminRegister() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">GH</span>
            </div>
            <span className="font-bold text-xl text-gray-800">GlobalHearts Admin</span>
          </div>
          <CardTitle className="text-2xl font-bold">Request Admin Access</CardTitle>
          <p className="text-gray-600">Submit your application for admin privileges</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john.doe@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Requested Role</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select admin role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moderator">Content Moderator</SelectItem>
                <SelectItem value="support">Customer Support</SelectItem>
                <SelectItem value="analytics">Analytics Manager</SelectItem>
                <SelectItem value="super-admin">Super Administrator</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" placeholder="GlobalHearts Inc." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Access</Label>
            <Textarea
              id="reason"
              placeholder="Please explain why you need admin access and your relevant experience..."
              className="min-h-[100px]"
            />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Application</Button>
          <div className="text-center">
            <span className="text-sm text-gray-600">Already have admin access? </span>
            <Link href="/admin/login" className="text-sm text-blue-600 hover:underline">
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
