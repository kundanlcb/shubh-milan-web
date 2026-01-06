import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';

export const SuccessStoriesPage = () => {
  const { t } = useTranslation();

  const stories = [
    {
      id: 1,
      names: "Priya & Raj",
      location: "Mumbai, Maharashtra",
      date: `${t('successStories.marriedIn')} December 2024`,
      story: t('successStories.story1'),
      image: "👫"
    },
    {
      id: 2,
      names: "Anjali & Vikram",
      location: "Delhi NCR",
      date: `${t('successStories.marriedIn')} November 2024`,
      story: t('successStories.story2'),
      image: "💑"
    },
    {
      id: 3,
      names: "Neha & Aditya",
      location: "Bangalore, Karnataka",
      date: `${t('successStories.marriedIn')} October 2024`,
      story: t('successStories.story3'),
      image: "👩‍❤️‍👨"
    },
    {
      id: 4,
      names: "Kavita & Rohit",
      location: "Pune, Maharashtra",
      date: `${t('successStories.marriedIn')} September 2024`,
      story: t('successStories.story4'),
      image: "💕"
    },
    {
      id: 5,
      names: "Sneha & Karthik",
      location: "Chennai, Tamil Nadu",
      date: `${t('successStories.marriedIn')} August 2024`,
      story: t('successStories.story5'),
      image: "❤️"
    },
    {
      id: 6,
      names: "Pooja & Amit",
      location: "Hyderabad, Telangana",
      date: `${t('successStories.marriedIn')} July 2024`,
      story: t('successStories.story6'),
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
              {t('successStories.title')}
            </h1>
            <p className="text-xl font-hindi text-primary mb-6">
              {t('successStories.subtitle')}
            </p>
            <p className="text-lg text-gray-600">
              {t('successStories.description')}
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
              <div className="text-gray-600">{t('home.happyCouples')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">{t('home.citiesCovered')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">{t('home.satisfaction')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">{t('home.activeUsers')}</div>
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
              {t('successStories.whatUsersSay')}
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
                  "{t('successStories.testimonial1')}"
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
                  "{t('successStories.testimonial2')}"
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
                  "{t('successStories.testimonial3')}"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('successStories.writeYourStory')}</h2>
            <p className="text-xl text-primary mb-8">
              {t('successStories.joinMessage')}
            </p>
            <Link
              to="/download"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-block"
            >
              {t('common.comingSoon')}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};
