import { TrendingUp, PieChart, Target, Shield } from 'lucide-react';

export default function Investments() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Investment Services</h1>
          <p className="text-xl">Build your wealth with our expert investment guidance</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Retirement Accounts</h2>
              <p className="text-gray-600 mb-4">
                Secure your future with tax-advantaged retirement savings options.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Traditional and Roth IRAs</li>
                <li>401(k) rollover services</li>
                <li>SEP and SIMPLE IRAs for businesses</li>
                <li>Expert retirement planning guidance</li>
                <li>No account maintenance fees</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Open Retirement Account
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <PieChart className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Investment Portfolios</h2>
              <p className="text-gray-600 mb-4">
                Diversified investment portfolios tailored to your risk tolerance and goals.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Conservative, moderate, and aggressive options</li>
                <li>Professionally managed portfolios</li>
                <li>Low management fees</li>
                <li>Automatic rebalancing</li>
                <li>Tax-loss harvesting</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Investing
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Wealth Management</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive financial planning services for high-net-worth individuals.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Dedicated financial advisor</li>
                <li>Estate planning assistance</li>
                <li>Tax optimization strategies</li>
                <li>Risk management</li>
                <li>Legacy planning</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Education Savings</h2>
              <p className="text-gray-600 mb-4">
                Save for your children's education with tax-advantaged 529 plans.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Tax-free growth and withdrawals</li>
                <li>Flexible contribution options</li>
                <li>Multiple investment choices</li>
                <li>No income restrictions</li>
                <li>Can be used at any eligible school</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Open 529 Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Performance</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">8.7%</div>
                <div className="text-gray-600">Average Annual Return</div>
                <div className="text-sm text-gray-500 mt-1">Conservative Portfolio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">11.3%</div>
                <div className="text-gray-600">Average Annual Return</div>
                <div className="text-sm text-gray-500 mt-1">Moderate Portfolio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">14.2%</div>
                <div className="text-gray-600">Average Annual Return</div>
                <div className="text-sm text-gray-500 mt-1">Aggressive Portfolio</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-8">
              Past performance does not guarantee future results. Investment returns may fluctuate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
