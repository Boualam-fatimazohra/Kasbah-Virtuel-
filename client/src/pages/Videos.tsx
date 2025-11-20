import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { X, Download } from 'lucide-react';
import Navigation from '@/components/Navigation';

const videosAr = [
  {
    title: 'رحلة في قلب التراث',
    description: 'جولة افتراضية بواقع 360 من قناة PatriCode – Préserver le passé, coder le futur',
    duration: '17:57',
    thumbnail: '/images/draa.jpg',
    videoUrl: '/images/vid1.mp4', // Chemin vers votre vidéo locale
  },
  {
    title: 'الذكاء الاصطناعي في خدمة التراث الثقافي',
    description: 'شرح كيف يمكن للذكاء الاصطناعي أن يساهم في الحفاظ على التراث من قناة PatriCode',
    duration: '8:12',
    thumbnail: '/images/Ai.jpeg',
    videoUrl: '/images/vid2.mp4', // Chemin vers votre vidéo locale
  },
  {
    title: 'رحلة في عالم التراث المغربي (VR)',
    description: 'استكشاف التراث المغربي بتقنية الواقع الافتراضي من PatriCode',
    duration: '11:00',
    thumbnail: '/images/VR.jpg',
    videoUrl: '/images/vid3.mp4', // Chemin vers votre vidéo locale
  },
];

const videosFr = [
  {
    title: 'Voyage au cœur du patrimoine',
    description: 'Visite virtuelle en réalité 360° de la chaîne PatriCode – Préserver le passé, coder le futur',
    duration: '17:57',
    thumbnail: '/images/draa.jpg',
    videoUrl: '/images/video1.mp4',
  },
  {
    title: 'L\'IA au service du patrimoine culturel',
    description: 'Explication de la contribution de l\'intelligence artificielle à la préservation du patrimoine - PatriCode',
    duration: '8:12',
    thumbnail: '/images/Ai.jpeg',
    videoUrl: '/images/video2.mp4',
  },
  {
    title: 'Voyage dans le patrimoine marocain (VR)',
    description: 'Exploration du patrimoine marocain en réalité virtuelle par PatriCode',
    duration: '11:00',
    thumbnail: '/images/VR.jpg',
    videoUrl: '/images/video3.mp4',
  },
];

const translations = {
  ar: {
    title: 'الفيديوهات التربوية والتوعوية',
    subtitle: 'مجموعة من الفيديوهات التعليمية والتوثيقية عن التراث الثقافي',
    watchVideo: 'شاهد الفيديو',
    download: 'تحميل',
  },
  fr: {
    title: 'Vidéos Éducatives et Sensibilisation',
    subtitle: 'Collection de vidéos éducatives et documentaires sur le patrimoine culturel',
    watchVideo: 'Regarder la vidéo',
    download: 'Télécharger',
  },
};

export default function Videos() {
  const { language } = useLanguage();
  const t = translations[language];
  const videos = language === 'ar' ? videosAr : videosFr;
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleDownload = (video) => {
    const link = document.createElement('a');
    link.href = video.videoUrl;
    link.download = `${video.title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-background to-muted/20 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <Navigation />

      {/* Modal Vidéo */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden"
            style={{ height: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={() => handleDownload(selectedVideo)}
              className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors flex items-center gap-2"
              title={t.download}
            >
              <Download size={24} />
            </button>
            
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={selectedVideo.videoUrl}
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.title}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden bg-muted group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-5xl text-white cursor-pointer hover:scale-110 transition-transform"
                  >
                    ▶️
                  </button>
                </div>
                <div className={`absolute bottom-2 ${language === 'ar' ? 'left-2' : 'right-2'} bg-black/80 text-white px-2 py-1 rounded text-xs font-bold`}>
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {video.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setSelectedVideo(video)}
                    className="flex-1 bg-accent hover:bg-accent/90"
                  >
                    {t.watchVideo}
                  </Button>
                  <Button
                    onClick={() => handleDownload(video)}
                    variant="outline"
                    className="px-3"
                    title={t.download}
                  >
                    <Download size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <section className="py-16 bg-white mt-12 rounded-lg">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            
            <h2 className="text-2xl font-semibold mb-2">Contactez-nous</h2>
            <hr className="mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Gauche */}
              <div className="space-y-4">

                {/* Prénom */}
                <div>
                  <label className="block text-gray-700 mb-1">Votre Prénom</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      👤
                    </span>
                    <input
                      type="text"
                      className="w-full border-2 border-indigo-200 rounded-md pl-10 py-2 focus:border-indigo-400 outline-none"
                      placeholder=" "
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1">Votre adresse e-mail</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      📧
                    </span>
                    <input
                      type="email"
                      className="w-full border-2 border-indigo-200 rounded-md pl-10 py-2 focus:border-indigo-400 outline-none"
                      placeholder="about@gmail.com"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-gray-700 mb-1">Votre téléphone</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      📱
                    </span>
                    <input
                      type="text"
                      className="w-full border-2 border-indigo-200 rounded-md pl-10 py-2 focus:border-indigo-400 outline-none"
                      placeholder=" "
                    />
                  </div>
                </div>

              </div>

              {/* Droite */}
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full h-48 border-2 border-indigo-200 rounded-md p-3 focus:border-indigo-400 outline-none"
                  placeholder="Saisissez ici..."
                ></textarea>
              </div>

            </div>

            <div className="mt-6 text-center">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md font-medium shadow-sm">
                Envoyer le message
              </button>
            </div>

            {/* Section Contact direct */}
            <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-around items-center gap-6 text-gray-700">
              
              {/* Téléphone */}
              <div className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <span>+212 6 12 34 56 78</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <span className="text-2xl">✉️</span>
                <span>contact@kasbahvr.com</span>
              </div>

              {/* YouTube */}
              <div className="flex items-center gap-2">
                <span className="text-2xl">📺</span>
                <a
                  href="https://www.youtube.com/channel/UCXXXXXXXXX" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-600"
                >
                  Chaîne YouTube
                </a>
              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}