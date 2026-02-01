import { CreditCard, Wallet, PiggyBank, Shield } from 'lucide-react';

export default function PersonalBanking() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Personal Banking</h1>
          <p className="text-xl">Accounts and services designed for your everyday needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Wallet className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Checking Accounts</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>No monthly maintenance fees</li>
                <li>Free debit card with fraud protection</li>
                <li>Unlimited transactions</li>
                <li>Mobile check deposit</li>
                <li>Overdraft protection available</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Open Checking Account
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <PiggyBank className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Savings Accounts</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Competitive interest rates up to 4.5% APY</li>
                <li>No minimum balance requirement</li>
                <li>Automatic savings plans</li>
                <li>FDIC insured up to $250,000</li>
                <li>Easy online transfers</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Open Savings Account
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Credit Cards</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Earn 2% cash back on all purchases</li>
                <li>No annual fee</li>
                <li>0% intro APR for 12 months</li>
                <li>Travel rewards and benefits</li>
                <li>Contactless payment technology</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply for Credit Card
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Certificates of Deposit</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Fixed rates up to 5.0% APY</li>
                <li>Terms from 3 months to 5 years</li>
                <li>FDIC insured</li>
                <li>Automatic renewal options</li>
                <li>Minimum deposit starting at $1,000</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Open CD Account
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Digital Banking Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
              <p className="text-gray-600">Bank anywhere with our secure mobile app</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">Multi-factor authentication and fraud monitoring</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Transfers</h3>
              <p className="text-gray-600">Send money instantly to friends and family</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
