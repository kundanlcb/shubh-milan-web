import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';

export const SuccessStoriesPage = () => {
  const stories = [
    {
      id: 1,
      names: "Priya & Raj",
      location: "Mumbai, Maharashtra",
      date: "Married in December 2024",
      story: "We matched on Dilkor in January 2024, and from our very first conversation, we knew there was something special. The platform's detailed profiles helped us understand each other's values and aspirations before we even met. Six months later, we're happily married!",
      image: "👫"
    },
    {
      id: 2,
      names: "Anjali & Vikram",
      location: "Delhi NCR",
      date: "Married in November 2024",
      story: "After trying several matrimonial platforms, Dilkor stood out with its focus on compatibility and genuine profiles. We connected through shared interests in travel and photography. The social media features helped us share our moments and get to know each other better despite being in different cities.",
      image: "💑"
    },
    {
      id: 3,
      names: "Neha & Aditya",
      location: "Bangalore, Karnataka",
      date: "Married in October 2024",
      story: "As working professionals, we appreciated Dilkor's efficient matching algorithm that saved us time. Within weeks, we found each other, and the rest is history. The platform made it easy to connect with someone who truly understood our lifestyle and values.",
      image: "👩‍❤️‍👨"
    },
    {
      id: 4,
      names: "Kavita & Rohit",
      location: "Pune, Maharashtra",
      date: "Married in September 2024",
      story: "We were both looking for partners from our community, and Dilkor's advanced filters made it easy to find compatible matches. The verification process gave us confidence that profiles were genuine. Thank you Dilkor for bringing us together!",
      image: "💕"
    },
    {
      id: 5,
      names: "Sneha & Karthik",
      location: "Chennai, Tamil Nadu",
      date: "Married in August 2024",
      story: "Long-distance relationships can be challenging, but Dilkor's secure messaging and social media features made it easier for us to stay connected and share our daily moments. We're grateful for this platform that prioritizes safety and privacy while helping people find love.",
      image: "❤️"
    },
    {
      id: 6,
      names: "Pooja & Amit",
      location: "Hyderabad, Telangana",
      date: "Married in July 2024",
      story: "Traditional values meet modern technology - that's what Dilkor represents for us. Our families were involved in the process, and the platform's family-friendly approach made everything smooth. We couldn't have asked for a better matchmaking experience.",
      image: "💝"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl font-hindi text-primary mb-6">
              प्यार की कहानियाँ
            </p>
            <p className="text-lg text-gray-600">
              Real couples, real stories, real happiness. Read how Dilkor helped thousands find their perfect match.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-gray-600">Happy Couples</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stories Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {stories.map((story) => (
                <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white text-center">
                    <div className="text-6xl mb-4">{story.image}</div>
                    <h3 className="text-2xl font-bold mb-2">{story.names}</h3>
                    <p className="text-primary">{story.location}</p>
                    <p className="text-sm text-primary mt-2">{story.date}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed italic">
                      "{story.story}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Best matrimonial app! Found my perfect match within 3 months. Highly recommended!"
                </p>
                <p className="font-semibold text-gray-900">- Meera S., Jaipur</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "User-friendly interface and genuine profiles. The verification process is excellent!"
                </p>
                <p className="font-semibold text-gray-900">- Rahul K., Mumbai</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Great support team and advanced features. Made finding my soulmate so much easier!"
                </p>
                <p className="font-semibold text-gray-900">- Priya M., Bangalore</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Write Your Own Success Story</h2>
            <p className="text-xl text-primary mb-8">
              Join thousands of happy couples who found their perfect match on Dilkor
            </p>
            <Link
              to="/download"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-block"
            >
              App Coming Soon
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};
