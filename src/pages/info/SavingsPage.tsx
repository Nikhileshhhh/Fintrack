import React from 'react';
import { Target, TrendingUp, Lightbulb, PiggyBank, Calendar, CheckCircle } from 'lucide-react';

const SavingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <PiggyBank className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Savings</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Set saving goals and watch your progress with visual tracking and AI-powered suggestions
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="/images/savings.png" 
            alt="Savings Goal Tracking" 
            className="w-full h-64 object-cover rounded-xl shadow-lg bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center"
            onError={(e) => {
              e.currentTarget.style.display = 'flex';
              e.currentTarget.innerHTML = '<span class="text-gray-500 text-lg">Savings Goal Tracking</span>';
            }}
          />
        </div>

        {/* What is Savings Tracking */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Savings Goal Tracking?</h2>
          <p className="text-gray-600 mb-6">
            FINTRACK's savings feature helps you set specific financial goals like vacation funds, emergency savings, 
            education expenses, or buying a new gadget. Track your progress with visual indicators and get personalized 
            suggestions to reach your goals faster.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Set Goals</h3>
              <p className="text-sm text-gray-600">Define target amounts and deadlines</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
              <p className="text-sm text-gray-600">Visual progress bars and milestones</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Lightbulb className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">AI Suggestions</h3>
              <p className="text-sm text-gray-600">Smart tips to save more effectively</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Savings Tracking Works</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Add New Saving Goals</h3>
                <p className="text-gray-600">Create goals with target amounts, deadlines, and categories. Examples: "Vacation to Goa - ₹50,000 by December", "Emergency Fund - ₹1,00,000 by next year".</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Visual Progress Tracking</h3>
                <p className="text-gray-600">See how much you've saved vs your target with colorful progress bars, percentage completion, and remaining amount calculations.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Suggestions</h3>
                <p className="text-gray-600">Get personalized recommendations like "Save ₹200 less on entertainment this month to reach your goal 2 weeks earlier" or "Set up automatic transfers of ₹5,000 monthly".</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Milestone Celebrations</h3>
                <p className="text-gray-600">Celebrate when you reach 25%, 50%, 75%, and 100% of your goals. Stay motivated with achievement badges and progress notifications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Savings Goals */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Savings Goals</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <span className="font-medium text-gray-900">Emergency Fund</span>
                  <div className="text-sm text-gray-600">Target: ₹1,00,000 by Dec 2024</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">₹75,000 / ₹1,00,000</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div>
                  <span className="font-medium text-gray-900">Vacation to Thailand</span>
                  <div className="text-sm text-gray-600">Target: ₹80,000 by June 2024</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">₹32,000 / ₹80,000</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-500 h-2 rounded-full w-2/5"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div>
                  <span className="font-medium text-gray-900">New Laptop</span>
                  <div className="text-sm text-gray-600">Target: ₹60,000 by March 2024</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">₹60,000 / ₹60,000</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-purple-500 h-2 rounded-full w-full"></div>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500 inline ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Savings Goal Tracking</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="h-5 w-5 text-purple-500 mr-2" />
                Encourages Financial Discipline
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Clear targets motivate consistent saving</li>
                <li>• Visual progress keeps you engaged</li>
                <li>• Milestone celebrations maintain momentum</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                Achieve Goals Faster
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI suggestions optimize your saving strategy</li>
                <li>• Deadline tracking prevents procrastination</li>
                <li>• Smart recommendations reduce unnecessary spending</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Popular Saving Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>Short-term (3-6 months):</strong> New phone, weekend trip, festival shopping, course fees
              </div>
              <div>
                <strong>Long-term (1-2 years):</strong> Emergency fund, car down payment, wedding expenses, home renovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsPage;