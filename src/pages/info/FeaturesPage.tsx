import React from 'react';
import { PieChart, Target, Bell, FileText, TrendingUp, Shield, Zap } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SmartPay Features</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover all the powerful features that make SmartPay the ultimate personal finance management tool
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="/images/features.png" 
            alt="SmartPay Features Overview" 
            className="w-full h-64 object-cover rounded-xl shadow-lg bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center"
            onError={(e) => {
              e.currentTarget.style.display = 'flex';
              e.currentTarget.innerHTML = '<span class="text-gray-500 text-lg">Features Overview Image</span>';
            }}
          />
        </div>

        {/* What SmartPay Offers */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What SmartPay Offers</h2>
          <p className="text-gray-600 mb-6">
            SmartPay is a comprehensive personal finance management platform designed to help you take control of your money. 
            Our suite of features covers everything from budget tracking to savings goals, bill reminders to detailed reports.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <PieChart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Budget Management</h3>
                <p className="text-gray-600 text-sm">Create and track budgets by category with real-time spending alerts</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goals</h3>
                <p className="text-gray-600 text-sm">Set and track progress toward your financial goals with visual indicators</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bill Reminders</h3>
                <p className="text-gray-600 text-sm">Never miss a payment with smart notifications and calendar integration</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">PDF Reports</h3>
                <p className="text-gray-600 text-sm">Generate professional financial reports for any time period</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How SmartPay Works</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Connect Your Accounts</h3>
                <p className="text-gray-600">Securely link your bank accounts or manually input your financial data. All information is encrypted and protected.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Categorization</h3>
                <p className="text-gray-600">Our AI automatically categorizes your transactions and provides insights into your spending patterns.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Get AI Insights</h3>
                <p className="text-gray-600">Receive personalized recommendations on budgeting, saving, and spending optimization based on your financial behavior.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Track & Optimize</h3>
                <p className="text-gray-600">Monitor your progress, receive alerts, and make informed financial decisions with comprehensive reports and analytics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose SmartPay */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why SmartPay is Useful</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                Improve Financial Health
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Track spending patterns and identify areas for improvement</li>
                <li>• Set realistic budgets based on your income and expenses</li>
                <li>• Build better financial habits with consistent monitoring</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="h-5 w-5 text-blue-500 mr-2" />
                Stay Organized
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Never miss bill payments with smart reminders</li>
                <li>• Keep all financial information in one secure place</li>
                <li>• Generate reports for tax filing and financial planning</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Example Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>College Students:</strong> Track hostel expenses, manage pocket money, and save for gadgets or trips
              </div>
              <div>
                <strong>Working Professionals:</strong> Monitor salary allocation, plan investments, and manage EMIs
              </div>
              <div>
                <strong>Freelancers:</strong> Track irregular income, manage project expenses, and plan for taxes
              </div>
              <div>
                <strong>Families:</strong> Coordinate household budgets, track children's expenses, and plan for future goals
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;