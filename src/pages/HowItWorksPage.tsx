import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';

export const HowItWorksPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('howItWorks.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('howItWorks.pageSubtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-[#FFF0F5] p-8 rounded-2xl">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-lg">
                    1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('howItWorks.step1Title')}</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.step1Desc')}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step1Point1')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step1Point2')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step1Point3')}
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-white rounded-2xl p-12 flex items-center justify-center h-80">
                  <svg className="w-32 h-32 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-[#FFF0F5] p-8 rounded-2xl">
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl p-12 flex items-center justify-center h-80">
                  <svg className="w-32 h-32 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-lg">
                    2
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('howItWorks.step2Title')}</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.step2Desc')}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step2Point1')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step2Point2')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step2Point3')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-[#FFF0F5] p-8 rounded-2xl">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-lg">
                    3
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('howItWorks.step3Title')}</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.step3Desc')}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step3Point1')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step3Point2')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step3Point3')}
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-white rounded-2xl p-12 flex items-center justify-center h-80">
                  <svg className="w-32 h-32 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-[#FFF0F5] p-8 rounded-2xl">
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl p-12 flex items-center justify-center h-80">
                  <svg className="w-32 h-32 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-lg">
                    4
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('howItWorks.step4Title')}</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.step4Desc')}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step4Point1')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step4Point2')}
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t('howItWorks.step4Point3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('howItWorks.readyToStart')}</h2>
            <p className="text-xl text-white mb-8">
              {t('howItWorks.readyToStartDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/download"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-block transform hover:scale-105"
              >
                {t('common.comingSoon')}
              </Link>
              <Link 
                to="/features"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all inline-block transform hover:scale-105"
              >
                {t('download.exploreFeatures')}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
