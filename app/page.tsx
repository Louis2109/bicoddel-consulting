import { Hero } from '@/app/components/sections';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">Qui sommes-nous?</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-16 max-w-2xl mx-auto">
            BICODDEL Consulting accompagne les collectivités territoriales, les ONG internationales et les agences de coopération dans la structuration et le financement de leurs projets de développement.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">240M+</div>
              <div className="text-gray-700 font-semibold">USD Financés</div>
              <p className="text-sm text-gray-600 mt-2">Montant total de financements sécurisés</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">45+</div>
              <div className="text-gray-700 font-semibold">Projets</div>
              <p className="text-sm text-gray-600 mt-2">Projets structurés et financés</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
              <div className="text-gray-700 font-semibold">Années</div>
              <p className="text-sm text-gray-600 mt-2">D'expérience dans le secteur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400/5 to-white p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">Ingénierie de Projet</h3>
              <p className="text-gray-700 leading-relaxed">
                Structuration complète de vos projets selon les standards internationaux et les exigences des bailleurs de fonds.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ Analyse de faisabilité</li>
                <li>✓ Structuration financière</li>
                <li>✓ Montage juridique</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-400/5 to-white p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">Assistance à Maîtrise d'Ouvrage</h3>
              <p className="text-gray-700 leading-relaxed">
                Accompagnement tout au long du cycle de vie de vos projets, de la conception à l'exécution.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ Gestion administrative</li>
                <li>✓ Suivi budgétaire</li>
                <li>✓ Reporting</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-400/5 to-white p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">Formation & Renforcement</h3>
              <p className="text-gray-700 leading-relaxed">
                Développement des capacités de votre équipe dans la gestion de projets et le financement.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ Formations sur mesure</li>
                <li>✓ Ateliers pratiques</li>
                <li>✓ Mentorat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-yellow-400/10 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Prêt à transformer vos projets?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <a href="#" className="inline-block px-10 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 text-lg">
            Demander une consultation
          </a>
        </div>
      </section>
    </div>
  );
}
