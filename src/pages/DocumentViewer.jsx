import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { documents } from '../data/documents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PdfModal from '../components/PdfModal';
import NotFound from './NotFound';

export default function DocumentViewer() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Close modal when route location changes (e.g. clicking the home logo)
  useEffect(() => {
    setIsModalOpen(false);
  }, [location]);

  // Find the requested document (or default to the first one at root)
  const doc = slug ? documents.find((d) => d.slug === slug) : documents[0];

  // SEO dynamic updates
  useEffect(() => {
    if (doc) {
      document.title = `Statut du Document - ${doc.title} - Millenium Group`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Vérification officielle de l'attestation pour ${doc.title}.`);
      }
    }
  }, [doc]);

  // If the document is not found, render the custom NotFound component
  if (!doc) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f1f5f9]">
      <Header />

      <main className="flex-grow flex flex-col items-center pt-6 pb-0 sm:pt-10">
        <div className="w-full bg-white shadow-sm border border-slate-100 p-3 sm:p-5 mx-4 max-w-2xl mb-6">

          {/* Card Green Header Status */}
          <div className="bg-[#f8f9fa] px-4 py-3.5 flex items-center gap-3 mb-1.5">
            <div className="w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center text-white flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[#059669] font-semibold text-lg sm:text-xl tracking-tight">
              Statut du document : {doc.status || "Signé"}
            </span>
          </div>

          {/* Card Body with detail fields */}
          <div className="flex flex-col gap-1.5">
            {doc.details.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] px-4 py-3 flex items-center gap-3"
              >
                {/* White Circle Arrow Right with Orange Border */}
                <div className="w-6 h-6 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center text-[#f97316] flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Label and Value */}
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed break-words w-full">
                  <span className="font-semibold text-slate-800">{item.label}</span>
                  <span className="text-slate-500 font-normal"> : {item.value}</span>
                </div>
              </div>
            ))}

            {/* Clickable button row "VOIR LE DOCUMENT" */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#f8f9fa] px-4 py-3 flex items-center gap-3 w-full text-left cursor-pointer hover:bg-gray-100 transition-colors"
              aria-label="Ouvrir la prévisualisation du document"
            >
              {/* White Circle Arrow Right with Orange Border */}
              <div className="w-6 h-6 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center text-[#f97316] flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <span className="text-[#3b82f6] font-normal text-sm sm:text-base uppercase tracking-wide">
                Voir le document
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Image / Map Texture */}
        <div className="w-full mt-auto">
          <img src="/images/image.png" alt="Illustration" className="w-full h-auto object-cover opacity-90" />
        </div>
      </main>

      {/* PDF Modal */}
      <PdfModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={doc.pdf}
        title={doc.title}
      />

      <Footer />
    </div>
  );
}
