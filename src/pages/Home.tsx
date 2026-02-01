import { Shield, TrendingUp, CreditCard, Building, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Banking You Can Trust</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience modern banking with traditional values. Licensed since 2002, we provide secure and reliable financial services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Open an Account
              </button>
              <Link to="/about" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Banking</h3>
              <p className="text-gray-600">FDIC insured up to $250,000 with state-of-the-art security</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investment Options</h3>
              <p className="text-gray-600">Grow your wealth with our diverse investment portfolios</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Banking</h3>
              <p className="text-gray-600">24/7 access to your accounts through our mobile app</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Solutions</h3>
              <p className="text-gray-600">Tailored banking services for your business needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/personal" className="group">
              <div className="border rounded-lg p-8 hover:border-blue-600 transition-colors">
                <h3 className="text-2xl font-semibold mb-4">Personal Banking</h3>
                <p className="text-gray-600 mb-4">
                  Checking and savings accounts, credit cards, and personal loans designed for your lifestyle.
                </p>
                <span className="text-blue-600 flex items-center group-hover:underline">
                  Explore Personal Banking <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
            <Link to="/business" className="group">
              <div className="border rounded-lg p-8 hover:border-blue-600 transition-colors">
                <h3 className="text-2xl font-semibold mb-4">Business Banking</h3>
                <p className="text-gray-600 mb-4">
                  Business accounts, merchant services, and financing solutions to help your business grow.
                </p>
                <span className="text-blue-600 flex items-center group-hover:underline">
                  Explore Business Banking <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
            <Link to="/investments" className="group">
              <div className="border rounded-lg p-8 hover:border-blue-600 transition-colors">
                <h3 className="text-2xl font-semibold mb-4">Investment Services</h3>
                <p className="text-gray-600 mb-4">
                  Retirement accounts, wealth management, and financial planning for your future.
                </p>
                <span className="text-blue-600 flex items-center group-hover:underline">
                  Explore Investments <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Purity Guaranty Bank?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <span>Licensed and regulated since 2002 with a proven track record</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <span>FDIC insured deposits up to $250,000 per depositor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <span>Award-winning customer service available 24/7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <span>Competitive rates on savings accounts and CDs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <span>Free mobile banking app with biometric login</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Open Your Account Today</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Select Account Type</option>
                  <option>Personal Checking</option>
                  <option>Personal Savings</option>
                  <option>Business Checking</option>
                  <option>Business Savings</option>
                </select>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
