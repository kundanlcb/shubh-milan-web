import { Container } from '../components/ui/Container';

export const PrivacyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <p className="text-gray-600 text-lg">
                At Dilkor, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mobile application and services.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  <p>
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, age, gender, and contact information</li>
                    <li>Profile photos and personal description</li>
                    <li>Education, profession, and lifestyle details</li>
                    <li>Preferences and interests</li>
                    <li>Location data (with your permission)</li>
                    <li>Communication data (messages, calls)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device information (model, operating system, unique identifiers)</li>
                    <li>Usage data (features used, time spent, interactions)</li>
                    <li>IP address and general location</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="text-gray-600 space-y-2">
                  <p>We use the collected information for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and maintaining our matchmaking services</li>
                    <li>Creating and managing your profile</li>
                    <li>Suggesting compatible matches using our algorithm</li>
                    <li>Facilitating communication between users</li>
                    <li>Verifying profiles and ensuring platform safety</li>
                    <li>Improving our services and user experience</li>
                    <li>Sending you updates, notifications, and promotional materials</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    We do not sell your personal information. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With Other Users:</strong> Your profile information is visible to other users as per your privacy settings</li>
                    <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>End-to-end encryption for messages and calls</li>
                    <li>Secure servers and data storage</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                    <li>SSL/TLS encryption for data transmission</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
                <div className="text-gray-600 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Update or correct your information</li>
                    <li>Delete your account and associated data</li>
                    <li>Control your privacy settings</li>
                    <li>Opt-out of promotional communications</li>
                    <li>Request a copy of your data</li>
                    <li>Object to certain data processing activities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <div className="text-gray-600">
                  <p>
                    We retain your information for as long as your account is active or as needed to provide services. 
                    When you delete your account, we will delete or anonymize your information, except where we need 
                    to retain it for legal obligations or legitimate business purposes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                <div className="text-gray-600">
                  <p>
                    Dilkor is not intended for users under 18 years of age. We do not knowingly collect
                    information from children. If we become aware that a child has provided us with personal
                    information, we will delete it immediately.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <div className="text-gray-600">
                  <p>
                    Your information may be transferred to and processed in countries other than your country of 
                    residence. We ensure appropriate safeguards are in place to protect your information in 
                    accordance with this Privacy Policy.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <div className="text-gray-600">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                    you to review this Privacy Policy periodically.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <div className="text-gray-600">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>Email:</strong> privacy@dilkor.com</li>
                    <li><strong>Phone:</strong> +91 1234567890</li>
                    <li><strong>Address:</strong> Dilkor, Mumbai, India</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help. Contact our privacy team for any concerns.
            </p>
            <a 
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};
