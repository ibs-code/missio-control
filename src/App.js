import React, { useState } from 'react';
import { Home, Users, CreditCard, ArrowLeftRight, Settings, Shield, Sparkles, Search, X, Clock, AlertCircle, ChevronRight, TrendingUp, Activity, UserX, XCircle } from 'lucide-react';

const MissionControl = () => {
  const [currentView, setCurrentView] = useState('home');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('all');
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'accounts', label: 'Accounts', icon: CreditCard },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'configurations', label: 'Configurations', icon: Settings },
    { id: 'admin', label: 'Admin', icon: Shield }
  ];

  const stats = [
    { label: 'Transactions in last 24 hours', value: '29,568', icon: ArrowLeftRight },
    { label: 'Tasks assigned to you', value: '23', icon: AlertCircle },
    { label: 'Transaction holds', value: '7', icon: Clock },
    { label: 'Colleagues blocked awaiting your approval', value: '2', icon: Users }
  ];

  const pendingItems = [
    {
      id: 'W-2847',
      type: 'Wire',
      amount: '$247,500',
      customer: 'Acme Fintech Corp',
      issue: 'OFAC screening - entity match',
      aiScore: 92,
      priority: 'high',
      time: '12m ago',
      assignee: 'Unassigned'
    },
    {
      id: 'W-2851',
      type: 'Wire Reversal',
      amount: '$52,000',
      customer: 'FinanceOS Inc',
      issue: 'Fraud claim investigation',
      aiScore: 95,
      priority: 'high',
      time: '18m ago',
      assignee: 'S. Chen'
    },
    {
      id: 'A-5829',
      type: 'ACH Batch',
      amount: '$1.24M',
      customer: 'PayFlow Tech',
      issue: 'Volume 3x average',
      aiScore: 78,
      priority: 'medium',
      time: '28m ago',
      assignee: 'Unassigned'
    },
    {
      id: 'C-1293',
      type: 'Account Open',
      amount: 'N/A',
      customer: 'Stripe Atlas LLC',
      issue: 'Enhanced DD required',
      aiScore: 88,
      priority: 'high',
      time: '1h ago',
      assignee: 'M. Torres'
    },
    {
      id: 'W-2849',
      type: 'Wire',
      amount: '$89,200',
      customer: 'NeoBank Partners',
      issue: 'First-time country (SG)',
      aiScore: 65,
      priority: 'medium',
      time: '2h ago',
      assignee: 'Unassigned'
    }
  ];

  const accounts = [
    { 
      accountNumber: '****8847', 
      customer: 'Acme Fintech Corp', 
      balance: '$2,847,293.18', 
      bank: 'Choice Financial Group',
      type: 'Operating',
      status: 'Active'
    },
    { 
      accountNumber: '****2193', 
      customer: 'PayFlow Technologies', 
      balance: '$1,294,847.52', 
      bank: 'Column N.A.',
      type: 'Reserve',
      status: 'Active'
    },
    { 
      accountNumber: '****5729', 
      customer: 'FinanceOS Inc', 
      balance: '$847,192.34', 
      bank: 'Choice Financial Group',
      type: 'Operating',
      status: 'Active'
    },
    { 
      accountNumber: '****9384', 
      customer: 'Stripe Atlas LLC', 
      balance: '$3,192,847.91', 
      bank: 'Column N.A.',
      type: 'Operating',
      status: 'Active'
    }
  ];

  const customers = [
    {
      name: 'Acme Fintech Corp',
      type: 'Business',
      status: 'Active',
      accounts: 3,
      users: 12,
      primaryContact: 'John Smith',
      onboardDate: '2024-03-15',
      riskLevel: 'Low'
    },
    {
      name: 'PayFlow Technologies',
      type: 'Business',
      status: 'Active',
      accounts: 2,
      users: 8,
      primaryContact: 'Sarah Johnson',
      onboardDate: '2024-01-22',
      riskLevel: 'Medium'
    },
    {
      name: 'FinanceOS Inc',
      type: 'Business',
      status: 'Active',
      accounts: 4,
      users: 15,
      primaryContact: 'Michael Chen',
      onboardDate: '2023-11-08',
      riskLevel: 'Low'
    }
  ];

  const users = [
    {
      name: 'John Smith',
      email: 'john.smith@acmefintech.com',
      customer: 'Acme Fintech Corp',
      role: 'Admin',
      lastLogin: '2 hours ago',
      status: 'Active',
      failedLogins: 0
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.j@payflow.com',
      customer: 'PayFlow Technologies',
      role: 'Operator',
      lastLogin: '15 minutes ago',
      status: 'Active',
      failedLogins: 0
    },
    {
      name: 'Michael Chen',
      email: 'mchen@financeos.com',
      customer: 'FinanceOS Inc',
      role: 'Admin',
      lastLogin: '1 day ago',
      status: 'Active',
      failedLogins: 0
    },
    {
      name: 'Emily Rodriguez',
      email: 'emily.r@acmefintech.com',
      customer: 'Acme Fintech Corp',
      role: 'Viewer',
      lastLogin: '3 hours ago',
      status: 'Locked',
      failedLogins: 5
    },
    {
      name: 'David Park',
      email: 'dpark@payflow.com',
      customer: 'PayFlow Technologies',
      role: 'Operator',
      lastLogin: '6 hours ago',
      status: 'Locked',
      failedLogins: 3
    }
  ];

  const analyticsMetrics = [
    { label: 'Sessions (24hrs)', value: '2,847', icon: Activity, trend: '+12%' },
    { label: 'Unique Users (24hrs)', value: '1,293', icon: Users, trend: '+8%' },
    { label: 'Locked Out Users', value: '7', icon: UserX, trend: '+2' },
    { label: 'Failed Login Attempts', value: '43', icon: XCircle, trend: '-5%' }
  ];

  const paymentRailMetrics = [
    { rail: 'Wire Transfers', completionRate: '94.2%', avgTime: '2.3 hrs', volume: '$847M', count: '2,847' },
    { rail: 'ACH Payments', completionRate: '98.7%', avgTime: '24 hrs', volume: '$1.2B', count: '12,948' },
    { rail: 'Card Settlements', completionRate: '99.1%', avgTime: '15 min', volume: '$294M', count: '45,293' },
    { rail: 'International Wires', completionRate: '89.4%', avgTime: '4.1 hrs', volume: '$521M', count: '1,284' }
  ];

  const getAIScoreColor = (score) => {
    if (score >= 85) return 'bg-red-100 text-red-800 border-red-200';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const renderContent = () => {
    switch(currentView) {
      case 'home':
        return (
          <>
            <div className="grid grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <stat.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-3xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Pending Reviews</h3>
                  <p className="text-sm text-gray-500 mt-0.5">Sorted by AI risk score</p>
                </div>
                <select 
                  className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Type</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Customer</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Amount</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Issue</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">AI Risk</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Assignee</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Time</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pendingItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 cursor-pointer">
                      <td className="px-4 py-2.5 text-xs font-mono font-medium text-gray-900">{item.id}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-700">{item.type}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-900">{item.customer}</td>
                      <td className="px-4 py-2.5 text-xs font-semibold text-gray-900">{item.amount}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-700">{item.issue}</td>
                      <td className="px-4 py-2.5">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold border ${getAIScoreColor(item.aiScore)}`}>
                          {item.aiScore}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-xs text-gray-700">{item.assignee}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-500">{item.time}</td>
                      <td className="px-4 py-2.5">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );
      
      case 'accounts':
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Accounts</h3>
                <p className="text-sm text-gray-500 mt-0.5">All partner and customer accounts</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search accounts..." 
                    className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Account Number</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Customer</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Balance</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Bank</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Status</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {accounts.map((account, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-2.5 text-xs font-mono text-gray-900">{account.accountNumber}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-900">{account.customer}</td>
                    <td className="px-4 py-2.5 text-xs font-semibold text-gray-900">{account.balance}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{account.bank}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{account.type}</td>
                    <td className="px-4 py-2.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        {account.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'customers':
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Customers</h3>
                <p className="text-sm text-gray-500 mt-0.5">Partner and customer directory</p>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search customers..." 
                  className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Accounts</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Users</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Primary Contact</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Onboard Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Risk Level</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Status</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customers.map((customer, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-2.5 text-xs font-medium text-gray-900">{customer.name}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{customer.type}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-900">{customer.accounts}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-900">{customer.users}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{customer.primaryContact}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{customer.onboardDate}</td>
                    <td className="px-4 py-2.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        customer.riskLevel === 'Low' ? 'bg-green-100 text-green-800' : 
                        customer.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {customer.riskLevel}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'users':
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Users</h3>
                <p className="text-sm text-gray-500 mt-0.5">Individual user accounts and login status</p>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Email</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Customer</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Role</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Last Login</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Failed Logins</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Status</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-2.5 text-xs font-medium text-gray-900">{user.name}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{user.email}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{user.customer}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{user.role}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700">{user.lastLogin}</td>
                    <td className="px-4 py-2.5">
                      <span className={`text-xs font-medium ${
                        user.failedLogins > 0 ? 'text-red-700' : 'text-gray-500'
                      }`}>
                        {user.failedLogins}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'analytics':
        return (
          <>
            <div className="grid grid-cols-4 gap-6 mb-8">
              {analyticsMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <metric.icon className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-green-600 font-medium">{metric.trend}</span>
                  </div>
                  <div className="text-3xl font-semibold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-6 py-5 border-b border-gray-100">
                <h3 className="text-base font-semibold text-gray-900">Payment Rails Performance</h3>
                <p className="text-sm text-gray-500 mt-0.5">Completion rates and metrics by payment type (last 24 hours)</p>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Payment Rail</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Completion Rate</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Avg Processing Time</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Volume</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-600">Transaction Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paymentRailMetrics.map((rail, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-2.5 text-xs font-medium text-gray-900">{rail.rail}</td>
                      <td className="px-4 py-2.5">
                        <span className={`text-xs font-semibold ${
                          parseFloat(rail.completionRate) >= 95 ? 'text-green-700' :
                          parseFloat(rail.completionRate) >= 90 ? 'text-yellow-700' : 'text-red-700'
                        }`}>
                          {rail.completionRate}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-xs text-gray-700">{rail.avgTime}</td>
                      <td className="px-4 py-2.5 text-xs font-semibold text-gray-900">{rail.volume}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-700">{rail.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );
      
      default:
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <p className="text-sm text-gray-600">Coming soon: {navItems.find(n => n.id === currentView)?.label} view</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-semibold">Mission Control</h1>
          <p className="text-xs text-gray-400 mt-1">Operator Platform</p>
        </div>
        <nav className="flex-1 p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium mb-1.5 transition-all ${
                currentView === item.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-sm font-semibold">
              SC
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Sarah Chen</p>
              <p className="text-xs text-gray-400">Operations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {navItems.find(n => n.id === currentView)?.label}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">Demo by Ibrahim Saeed for Mercury</p>
          </div>
          <button
            onClick={() => setShowAIAssistant(!showAIAssistant)}
            className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            <Sparkles className="w-4 h-4" />
            AI Assistant
          </button>
        </div>

        <div className="flex-1 overflow-auto p-8">
          {renderContent()}
        </div>
      </div>

      {showAIAssistant && (
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col shadow-xl">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-base font-semibold text-gray-900">AI Assistant</h3>
            </div>
            <button onClick={() => setShowAIAssistant(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-6 overflow-auto">
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm">
                <p className="text-sm font-semibold text-purple-900 mb-1.5">High Priority Items</p>
                <p className="text-sm text-purple-800 leading-relaxed">You have 3 high-priority items requiring immediate attention. W-2847 and W-2851 are OFAC-related.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
                <p className="text-sm font-semibold text-yellow-900 mb-1.5">Unusual Pattern Detected</p>
                <p className="text-sm text-yellow-800 leading-relaxed">PayFlow Tech (A-5829) is showing 3x normal volume. This may require enhanced monitoring.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
                <p className="text-sm font-semibold text-green-900 mb-1.5">Suggested Action</p>
                <p className="text-sm text-green-800 leading-relaxed">Consider reviewing OFAC whitelist for Acme Fintech Corp to reduce false positives on future wires.</p>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200">
            <input
              type="text"
              placeholder="Ask AI Assistant..."
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionControl;