export default function Activites() {
  return (
    <div className="pt-32 section">
      <h1 className="text-4xl font-bold mb-6">Nos Activités</h1>

      <p className="text-gray-300 max-w-3xl mb-10">
        Notre entreprise développe des solutions innovantes dans plusieurs domaines clés :
        gestion, technologie, consulting et transformation digitale.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/5 p-6 rounded-xl">🌐 Digitalisation</div>
        <div className="bg-white/5 p-6 rounded-xl">📊 Analyse de données</div>
        <div className="bg-white/5 p-6 rounded-xl">🛡️ Sécurité informatique</div>
        <div className="bg-white/5 p-6 rounded-xl">📈 Stratégie & conseils</div>
      </div>

      <img src="/about.jpg" className="rounded-xl shadow-xl mt-16" />
    </div>
  );
}

