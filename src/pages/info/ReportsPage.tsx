import React from 'react';
import { FileText, BarChart3, PieChart, Download, Calendar, TrendingUp } from 'lucide-react';

const ReportsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Generate Financial Reports</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create automated monthly and yearly reports with detailed insights and export options
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="/images/reports.png" 
            alt="Financial Reports Dashboard" 
            className="w-full h-64 object-cover rounded-xl shadow-lg bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center"
            onError={(e) => {
              e.currentTarget.style.display = 'flex';
              e.currentTarget.innerHTML = '<span class="text-gray-500 text-lg">Financial Reports Dashboard</span>';
            }}
          />
        </div>

        {/* What are Financial Reports */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What are Financial Reports?</h2>
          <p className="text-gray-600 mb-6">
            SmartPay's reporting feature automatically generates comprehensive financial reports that summarize your 
            income, expenses, savings, and spending patterns. These reports help you understand your financial health 
            and make informed decisions about your money management.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <PieChart className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Spending Analysis</h3>
              <p className="text-sm text-gray-600">Pie charts showing expense categories</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Trend Analysis</h3>
              <p className="text-sm text-gray-600">Bar charts tracking monthly patterns</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Download className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">PDF Export</h3>
              <p className="text-sm text-gray-600">Professional reports for sharing</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Financial Reports Work</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Track Spending Patterns</h3>
                <p className="text-gray-600">SmartPay analyzes your transactions and categorizes them automatically. View spending patterns with interactive pie charts showing where your money goes each month.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Income vs Expenses Analysis</h3>
                <p className="text-gray-600">Compare your income sources with expense categories using bar charts. Identify months with surplus or deficit and understand your cash flow patterns.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Monthly & Yearly Summaries</h3>
                <p className="text-gray-600">Generate detailed reports for any time period. View monthly breakdowns, yearly trends, and compare performance across different periods.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Export as PDF</h3>
                <p className="text-gray-600">Download professional PDF reports with charts, tables, and summaries. Perfect for tax filing, loan applications, or sharing with financial advisors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Report Data */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Monthly Report</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Income Sources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Income Sources</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Salary</span>
                  <span className="font-semibold text-green-600">₹45,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Freelance</span>
                  <span className="font-semibold text-green-600">₹8,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Interest</span>
                  <span className="font-semibold text-green-600">₹1,200</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border-2 border-green-200">
                  <span className="font-semibold text-gray-900">Total Income</span>
                  <span className="font-bold text-green-600">₹54,200</span>
                </div>
              </div>
            </div>

            {/* Expense Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Expense Categories</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700">Rent</span>
                  <span className="font-semibold text-red-600">₹18,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700">Food</span>
                  <span className="font-semibold text-red-600">₹8,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700">Transport</span>
                  <span className="font-semibold text-red-600">₹4,200</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700">Entertainment</span>
                  <span className="font-semibold text-red-600">₹3,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-100 rounded-lg border-2 border-red-200">
                  <span className="font-semibold text-gray-900">Total Expenses</span>
                  <span className="font-bold text-red-600">₹34,200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">Net Savings</span>
              <span className="font-bold text-blue-600 text-lg">₹20,000</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">37% of income saved this month</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Financial Reports</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 text-indigo-500 mr-2" />
                Better Financial Insights
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Understand spending patterns and trends</li>
                <li>• Identify areas for cost optimization</li>
                <li>• Track financial progress over time</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                Tax Planning & Documentation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Organized records for tax filing</li>
                <li>• Professional reports for loan applications</li>
                <li>• Easy sharing with financial advisors</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Report Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>Personal Finance:</strong> Monthly budget reviews, yearly financial planning, expense optimization
              </div>
              <div>
                <strong>Professional:</strong> Tax preparation, loan applications, investment planning, financial advisor meetings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;