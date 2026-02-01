import { Home, Car, GraduationCap, TrendingUp } from 'lucide-react';

export default function Loans() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Loans & Financing</h1>
          <p className="text-xl">Competitive rates to help you achieve your goals</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Home className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Home Loans</h2>
              <p className="text-gray-600 mb-4">
                Make your dream home a reality with our competitive mortgage rates and flexible terms.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Rates starting at 6.25% APR</li>
                <li>15 and 30-year fixed-rate mortgages</li>
                <li>FHA and VA loans available</li>
                <li>First-time homebuyer programs</li>
                <li>Fast pre-approval process</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply for Home Loan
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Car className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Auto Loans</h2>
              <p className="text-gray-600 mb-4">
                Finance your next vehicle with low rates and flexible payment options.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Rates as low as 5.49% APR</li>
                <li>New and used vehicle financing</li>
                <li>Terms up to 72 months</li>
                <li>No prepayment penalties</li>
                <li>Quick online application</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply for Auto Loan
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Personal Loans</h2>
              <p className="text-gray-600 mb-4">
                Get the funds you need for any purpose with our flexible personal loans.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Borrow up to $50,000</li>
                <li>Fixed rates from 7.99% APR</li>
                <li>No origination fees</li>
                <li>Same-day funding available</li>
                <li>Flexible repayment terms</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply for Personal Loan
              </button>
            </div>

            <div className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Student Loans</h2>
              <p className="text-gray-600 mb-4">
                Invest in your education with our competitive student loan options.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>Undergraduate and graduate loans</li>
                <li>Competitive fixed and variable rates</li>
                <li>No origination or application fees</li>
                <li>Flexible repayment options</li>
                <li>Cosigner release available</li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply for Student Loan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Loan Calculator</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="number"
                  placeholder="$25,000"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (APR)
                </label>
                <input
                  type="number"
                  placeholder="6.5%"
                  step="0.1"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (months)
                </label>
                <input
                  type="number"
                  placeholder="60"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Calculate Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
