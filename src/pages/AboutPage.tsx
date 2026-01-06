import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl font-hindi text-primary mb-6">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-gray-600">
              {t('about.description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-[#FFF0F5]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.ourMission')}</h2>
                <p className="text-gray-600 mb-4">
                  {t('about.missionDescription')}
                </p>
                <p className="text-gray-600">
                  {t('about.missionDescription2')}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-primary">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('about.authenticConnections')}</h3>
                      <p className="text-gray-600 text-sm">{t('about.authenticConnectionsDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('about.culturalValues')}</h3>
                      <p className="text-gray-600 text-sm">{t('about.culturalValuesDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('about.userSafety')}</h3>
                      <p className="text-gray-600 text-sm">{t('about.userSafetyDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t('about.ourValues')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-primary">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.trust')}</h3>
                <p className="text-gray-600">
                  {t('about.trustDesc')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-primary">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.privacy')}</h3>
                <p className="text-gray-600">
                  {t('about.privacyDesc')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-primary">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.authenticity')}</h3>
                <p className="text-gray-600">
                  {t('about.authenticityDesc')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.ourStory')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                {t('about.storyPara1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('about.storyPara2')}
              </p>
              <p className="text-gray-600">
                {t('about.storyPara3')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Values Section */}
      <section className="py-16 md:py-20 bg-primary">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.joinJourney')}</h2>
            <p className="text-xl text-white mb-8">
              {t('about.joinJourneyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-block transform hover:scale-105"
              >
                {t('common.comingSoon')}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all inline-block transform hover:scale-105"
              >
                {t('common.contactUs')}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
