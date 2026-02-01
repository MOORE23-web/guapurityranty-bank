import { Building, TrendingUp, Users, FileText } from 'lucide-react';

export default function BusinessBanking() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Business Banking</h1>
          <p className="text-xl">Financial solutions to help your business thrive</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Business Checking</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Unlimited monthly transactions</li>
                <li>Free business debit cards</li>
                <li>Online banking and bill pay</li>
                <li>Cash management services</li>
                <li>Merchant services integration</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Open Business Checking
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Business Savings</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Competitive interest rates</li>
                <li>No monthly maintenance fees</li>
                <li>Tiered interest rates for larger balances</li>
                <li>Easy transfers between accounts</li>
                <li>FDIC insured</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Open Business Savings
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Merchant Services</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Credit and debit card processing</li>
                <li>Point-of-sale solutions</li>
                <li>Online payment gateway</li>
                <li>Competitive processing rates</li>
                <li>24/7 customer support</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Merchant Services
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Business Credit Cards</h2>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Earn rewards on business expenses</li>
                <li>Employee cards at no extra cost</li>
                <li>Detailed expense reporting</li>
                <li>Higher credit limits</li>
                <li>No personal guarantee required</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with one of our business banking specialists to find the right solutions for your company.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
