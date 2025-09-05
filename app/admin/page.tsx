import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, TrendingUp, Flag, DollarSign, Search, Filter, Download, Eye, Ban, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,450",
      change: "+8.5%",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "New Registrations",
      value: "789",
      change: "+15.2%",
      changeType: "positive",
      icon: TrendingUp,
    },
    {
      title: "Reported Content",
      value: "54",
      change: "-3.1%",
      changeType: "negative",
      icon: Flag,
    },
    {
      title: "Monthly Revenue",
      value: "$28,750",
      change: "+10.8%",
      changeType: "positive",
      icon: DollarSign,
    },
  ]

  const recentActivity = [
    {
      timestamp: "2024-03-12 14:30",
      action: "User Banned",
      user: "Grace Hopper",
      details: "Inappropriate content",
      status: "completed",
    },
    {
      timestamp: "2024-03-12 10:15",
      action: "New Subscription",
      user: "Alice Smith",
      details: "Premium Plan",
      status: "active",
    },
    {
      timestamp: "2024-03-11 18:00",
      action: "Profile Reported",
      user: "Jane Doe",
      details: "Spamming",
      status: "pending",
    },
    {
      timestamp: "2024-03-11 09:45",
      action: "Account Created",
      user: "Olivia Rodrigo",
      details: "New user registration",
      status: "active",
    },
    {
      timestamp: "2024-03-10 16:20",
      action: "Message Reported",
      user: "Mike T.",
      details: "Harassment",
      status: "investigating",
    },
  ]

  const users = [
    {
      id: "001",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      status: "Active",
      plan: "Premium",
      joined: "2024-01-15",
      lastActive: "2 hours ago",
      reports: 0,
    },
    {
      id: "002",
      name: "Mike Chen",
      email: "mike.chen@email.com",
      status: "Suspended",
      plan: "Free",
      joined: "2024-02-20",
      lastActive: "1 day ago",
      reports: 3,
    },
    {
      id: "003",
      name: "Emma Wilson",
      email: "emma.w@email.com",
      status: "Active",
      plan: "VIP Elite",
      joined: "2024-03-01",
      lastActive: "5 minutes ago",
      reports: 0,
    },
  ]

  const reportedContent = [
    {
      id: "R001",
      type: "Profile",
      reporter: "John Doe",
      reported: "BadUser123",
      reason: "Fake profile",
      date: "2024-03-12",
      status: "Under Review",
    },
    {
      id: "R002",
      type: "Message",
      reporter: "Jane Smith",
      reported: "SpamUser456",
      reason: "Harassment",
      date: "2024-03-11",
      status: "Resolved",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">GH</span>
            </div>
            <span className="font-bold text-xl">GlobalHeartsAdmin</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#overview" className="text-white hover:text-blue-200">
              Overview
            </a>
            <a href="#users" className="text-blue-200 hover:text-white">
              Users
            </a>
            <a href="#reports" className="text-blue-200 hover:text-white">
              Reports
            </a>
            <a href="#analytics" className="text-blue-200 hover:text-white">
              Analytics
            </a>
            <a href="#payments" className="text-blue-200 hover:text-white">
              Payments
            </a>
          </nav>
          <Button variant="destructive" size="sm" asChild>
            <Link href="/admin/login">Admin Logout</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard Overview</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" id="overview">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change} than last month
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mb-8" id="users">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <p className="text-gray-600">Manage all registered users and their accounts</p>
              </div>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <Input placeholder="Search users..." className="pl-10 w-64" />
                </div>
                <Button size="sm">Add User</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">User ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Plan</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Last Active</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm font-mono">{user.id}</td>
                      <td className="py-3 px-4 text-sm font-medium">{user.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{user.email}</td>
                      <td className="py-3 px-4">
                        <Badge variant={user.status === "Active" ? "default" : "destructive"}>{user.status}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={user.plan === "Free" ? "secondary" : "default"}>{user.plan}</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{user.lastActive}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Ban className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8" id="reports">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Reported Content</CardTitle>
                <p className="text-gray-600">Review and moderate reported profiles and messages</p>
              </div>
              <Badge variant="destructive">{reportedContent.length} Pending</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Report ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Reporter</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Reported User</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Reason</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reportedContent.map((report) => (
                    <tr key={report.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm font-mono">{report.id}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline">{report.type}</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">{report.reporter}</td>
                      <td className="py-3 px-4 text-sm font-medium">{report.reported}</td>
                      <td className="py-3 px-4 text-sm">{report.reason}</td>
                      <td className="py-3 px-4">
                        <Badge variant={report.status === "Resolved" ? "default" : "secondary"}>{report.status}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                          <Button size="sm" variant="destructive">
                            Ban
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8" id="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Active Users</span>
                <span className="font-semibold">3,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Messages Sent Today</span>
                <span className="font-semibold">12,456</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Matches Made Today</span>
                <span className="font-semibold">234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Premium Conversions</span>
                <span className="font-semibold">5.2%</span>
              </div>
            </CardContent>
          </Card>

          <Card id="payments">
            <CardHeader>
              <CardTitle>Payment Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Revenue (MTD)</span>
                <span className="font-semibold">$28,750</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Premium Subscribers</span>
                <span className="font-semibold">1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">VIP Elite Subscribers</span>
                <span className="font-semibold">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Churn Rate</span>
                <span className="font-semibold text-red-600">2.1%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Log */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity Log</CardTitle>
            <p className="text-gray-600">Latest actions and events on the platform.</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Timestamp</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Details</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((activity, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-600">{activity.timestamp}</td>
                      <td className="py-3 px-4 text-sm font-medium">{activity.action}</td>
                      <td className="py-3 px-4 text-sm">{activity.user}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{activity.details}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            activity.status === "completed"
                              ? "default"
                              : activity.status === "active"
                                ? "default"
                                : activity.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                          }
                        >
                          {activity.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 mt-12">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-blue-200 hover:text-white">
              Admin
            </a>
            <a href="#" className="text-blue-200 hover:text-white">
              Legal
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-white">
              📘
            </a>
            <a href="#" className="text-blue-200 hover:text-white">
              🐦
            </a>
            <a href="#" className="text-blue-200 hover:text-white">
              📷
            </a>
            <a href="#" className="text-blue-200 hover:text-white">
              💼
            </a>
            <a href="#" className="text-blue-200 hover:text-white">
              📺
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
