import React from 'react';
import { PieChart, AlertTriangle, CheckCircle, TrendingDown, Calendar, Target } from 'lucide-react';

const BudgetsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <PieChart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Manage Your Budgets</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take control of your spending with smart budget categories and real-time tracking
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="/images/budgets.png" 
            alt="Budget Management Dashboard" 
            className="w-full h-64 object-cover rounded-xl shadow-lg bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center"
            onError={(e) => {
              e.currentTarget.style.display = 'flex';
              e.currentTarget.innerHTML = '<span class="text-gray-500 text-lg">Budget Management Dashboard</span>';
            }}
          />
        </div>

        {/* What is Budget Management */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Budget Management?</h2>
          <p className="text-gray-600 mb-6">
            Budget management in FINTRACK allows you to create spending limits for different categories of expenses. 
            You can set monthly budgets for categories like Food, Travel, Rent, Shopping, Entertainment, and more. 
            This helps you understand where your money goes and prevents overspending.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">On Track</h3>
              <p className="text-sm text-gray-600">Spending within budget limits</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Warning</h3>
              <p className="text-sm text-gray-600">Approaching budget limit (80%+)</p>
            </div>
            
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <TrendingDown className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Over Budget</h3>
              <p className="text-sm text-gray-600">Exceeded spending limit</p>
            </div>
          </div>
        </div>

        {/* How Budget Tracking Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Budget Tracking Works</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Create Budget Categories</h3>
                <p className="text-gray-600">Set up categories like Food & Groceries, Transportation, Entertainment, Rent, Shopping, and Utilities. Customize categories based on your lifestyle.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Set Monthly Limits</h3>
                <p className="text-gray-600">Allocate specific amounts for each category based on your income and financial goals. FINTRACK suggests realistic budgets based on your spending history.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">As you add transactions, FINTRACK automatically updates your budget progress with visual indicators and percentage completion.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Alerts</h3>
                <p className="text-gray-600">Receive notifications when you're approaching (80%) or exceeding your budget limits. Get suggestions on how to stay on track.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Example */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Budget Breakdown</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Food & Groceries</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">₹8,000 / ₹10,000</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Transportation</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">₹4,200 / ₹5,000</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-yellow-500 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Entertainment</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">₹3,500 / ₹3,000</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-red-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Shopping</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">₹2,100 / ₹4,000</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Budget Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="h-5 w-5 text-green-500 mr-2" />
                Avoid Overspending
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Get alerts before you exceed your limits</li>
                <li>• Visual progress bars show spending status</li>
                <li>• Make informed decisions about purchases</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                Better Financial Planning
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plan monthly expenses in advance</li>
                <li>• Allocate money for different priorities</li>
                <li>• Track spending patterns over time</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Real-world Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>Student Budget:</strong> ₹15,000/month - Food (₹6,000), Transport (₹2,000), Books (₹2,000), Entertainment (₹3,000), Miscellaneous (₹2,000)
              </div>
              <div>
                <strong>Professional Budget:</strong> ₹50,000/month - Rent (₹20,000), Food (₹8,000), Transport (₹5,000), Savings (₹10,000), Entertainment (₹7,000)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetsPage;