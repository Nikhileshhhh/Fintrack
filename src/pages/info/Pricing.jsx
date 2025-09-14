import React from 'react';
import { Check, Star, Users, Headphones, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FINTRACK Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable options for students, professionals, and families
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="/images/pricing.png" 
            alt="Pricing Plans" 
            className="w-full h-64 object-cover rounded-xl shadow-lg bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center"
            onError={(e) => {
              e.currentTarget.style.display = 'flex';
              e.currentTarget.innerHTML = '<span class="text-gray-500 text-lg">Pricing Plans</span>';
            }}
          />
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-gray-600 mb-6">
            Choose the plan that fits your needs. All plans include secure data storage, 
            multi-device sync, and our core budgeting features. Upgrade anytime for advanced features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
                <div className="text-4xl font-bold text-gray-600 mb-2">₹0</div>
                <p className="text-gray-600">Perfect for students</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic budgeting</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Bill reminders</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic reports</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Current Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">₹199<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600">Great for professionals</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced budgets</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Savings goals</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Detailed reports</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Bill reminders</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AI insights</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Upgrade to Pro
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Plan</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹399<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600">Perfect for families</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">All Pro features</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Priority Support</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Family Sharing</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Advanced security</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">For Students</h3>
              <p className="text-sm text-gray-600">Free plan with all essential features</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">For Professionals</h3>
              <p className="text-sm text-gray-600">Advanced features at affordable price</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">For Families</h3>
              <p className="text-sm text-gray-600">Share and manage family finances together</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;