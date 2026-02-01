import { Award, Users, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Your trusted financial partner since 2002</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2002, Purity Guaranty Bank was established with a simple mission: to provide honest, transparent, and reliable banking services to individuals and businesses in our community.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past two decades, we've grown from a single branch to a full-service financial institution serving thousands of customers across the nation. Despite our growth, we've never lost sight of our core values: integrity, customer service, and financial security.
              </p>
              <p className="text-gray-600">
                Today, we combine the personal touch of a community bank with the technology and resources of a modern financial institution, offering our customers the best of both worlds.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">By The Numbers</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-blue-600">22+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">50,000+</div>
                  <div className="text-gray-600">Satisfied Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">$2.5B+</div>
                  <div className="text-gray-600">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">4.8/5</div>
                  <div className="text-gray-600">Customer Satisfaction Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">
                Your financial security is our top priority. We employ industry-leading security measures to protect your assets.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We listen to our customers and tailor our services to meet their unique financial needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from customer service to financial products.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology to provide modern banking solutions while maintaining personal service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Regional Bank</h3>
              <p className="text-gray-600">Banking Excellence Awards 2023</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top Customer Service</h3>
              <p className="text-gray-600">J.D. Power Banking Study 2023</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Mobile Banking App</h3>
              <p className="text-gray-600">Digital Banking Awards 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Licensing & Regulation</h2>
          <p className="text-gray-600 mb-8">
            Purity Guaranty Bank is a federally chartered bank, licensed since 2002. We are regulated by the Office of the Comptroller of the Currency (OCC) and are a member of the Federal Deposit Insurance Corporation (FDIC). All deposits are insured up to $250,000 per depositor.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div>FDIC Certificate #12345</div>
            <div>OCC Charter #67890</div>
            <div>Equal Housing Lender</div>
            <div>Member FDIC</div>
          </div>
        </div>
      </section>
    </div>
  );
}
