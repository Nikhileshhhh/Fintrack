import React from 'react';
import { Bell, Calendar, CheckCircle, AlertTriangle, CreditCard, Zap } from 'lucide-react';

const BillReminders = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bell className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Never Miss a Bill</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay on top of your payments with timely alerts
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="/images/bill-reminders.png" 
            alt="Bill Reminders Dashboard" 
            className="w-full h-64 object-cover rounded-xl shadow-lg bg-gradient-to-r from-red-100 to-orange-100 flex items-center justify-center"
            onError={(e) => {
              e.currentTarget.style.display = 'flex';
              e.currentTarget.innerHTML = '<span class="text-gray-500 text-lg">Bill Reminders Dashboard</span>';
            }}
          />
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Add bills with due dates</h3>
                <p className="text-gray-600">Add electricity, rent, loans, and other recurring bills with their due dates and amounts.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Get notification reminders before due dates</h3>
                <p className="text-gray-600">Receive timely notifications and email alerts before your bills are due to avoid late payments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Bills */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Bills</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-red-600" />
                <div>
                  <span className="font-medium text-gray-900">Electricity Bill</span>
                  <div className="text-sm text-gray-600">Due: Today</div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-semibold text-red-600">₹2,500</span>
                <div className="text-xs text-red-600">Overdue</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-yellow-600" />
                <div>
                  <span className="font-medium text-gray-900">Internet Bill</span>
                  <div className="text-sm text-gray-600">Due: Jan 18</div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-semibold text-yellow-600">₹1,200</span>
                <div className="text-xs text-yellow-600">Due in 3 days</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <div>
                  <span className="font-medium text-gray-900">Mobile Recharge</span>
                  <div className="text-sm text-gray-600">Due: Jan 22</div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-semibold text-green-600">₹399</span>
                <div className="text-xs text-green-600">Due in 7 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Avoid late fees</h3>
              <p className="text-sm text-gray-600">Never pay penalty charges again</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Improve credit score</h3>
              <p className="text-sm text-gray-600">Timely payments boost your credit rating</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Bell className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Stay stress-free</h3>
              <p className="text-sm text-gray-600">Automated reminders give you peace of mind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillReminders;