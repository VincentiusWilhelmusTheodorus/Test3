import TestChatBot from '@/components/TestChatBot'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏃‍♂️</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Sportkunde Leiderschap Academy
                </h1>
                <p className="text-blue-600 font-medium">
                  HBO Sportkunde • Leiderschap • Groepsvorming • Motivatie
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                🎓 HBO Niveau
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                🤖 AI Ondersteund
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Word een Inspirerende Sportleider
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Leer alles over effectief leiderschap in de sport, groepsdynamiek en het motiveren van sporters, 
            teams en vrijwilligers. Met praktische tools, AI-ondersteuning en interactieve oefeningen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
              <span className="text-2xl">🏆</span>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Praktijkgericht</div>
                <div className="text-sm text-gray-600">Echte sportcases</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
              <span className="text-2xl">👥</span>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Teamdynamiek</div>
                <div className="text-sm text-gray-600">Groepsprocessen</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
              <span className="text-2xl">💪</span>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Motivatietechnieken</div>
                <div className="text-sm text-gray-600">Prestatie verbeteren</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Leiderschap Module */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👑</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Leiderschap in Sport</h3>
              <p className="text-gray-600">Ontwikkel je leiderschapsvaardigheden voor sportomgevingen</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">🎯 Leiderschapsstijlen</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Transformationeel leiderschap</li>
                  <li>• Situationeel leiderschap</li>
                  <li>• Authentiek leiderschap</li>
                  <li>• Servant leadership</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">🔧 Praktische Vaardigheden</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Effectieve communicatie</li>
                  <li>• Besluitvorming onder druk</li>
                  <li>• Conflicthantering</li>
                  <li>• Feedback geven en ontvangen</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">📚 Casestudies</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Succesvolle sportcoaches</li>
                  <li>• Teamcaptains in actie</li>
                  <li>• Crisismanagement</li>
                  <li>• Cultuurverandering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Groepsvorming Module */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Groepsvorming & Teambuilding</h3>
              <p className="text-gray-600">Begrijp en beïnvloed groepsdynamiek in sportteams</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">📊 Groepsdynamiek</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Tuckman's teamfasen</li>
                  <li>• Rollen binnen teams</li>
                  <li>• Groepsnormen en waarden</li>
                  <li>• Sociale cohesie</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">🎮 Teambuilding Activiteiten</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Vertrouwensoefeningen</li>
                  <li>• Communicatiespellen</li>
                  <li>• Probleem-oplossingstaken</li>
                  <li>• Reflectiesessies</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">⚡ Uitdagingen Aanpakken</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Conflicten in teams</li>
                  <li>• Sociale uitsluiting</li>
                  <li>• Prestatieverval</li>
                  <li>• Motivatieverlies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Motivatie Module */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-2">Motivatie & Prestatie</h3>
              <p className="text-gray-600">Leer sporters en vrijwilligers optimaal te motiveren</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">🧠 Motivatietheorieën</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Self-Determination Theory</li>
                  <li>• Achievement Goal Theory</li>
                  <li>• Flow theorie</li>
                  <li>• Intrinsieke vs extrinsieke motivatie</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">🎯 Praktische Technieken</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Doelen stellen (SMART)</li>
                  <li>• Positieve bekrachtiging</li>
                  <li>• Mentale training</li>
                  <li>• Visualisatietechnieken</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">📈 Prestatie Optimalisatie</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Prestatieangst overwinnen</li>
                  <li>• Concentratie verbeteren</li>
                  <li>• Zelfvertrouwen opbouwen</li>
                  <li>• Veerkracht ontwikkelen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Learning Tools */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🤖 AI-Ondersteunde Leertools
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <span className="text-3xl mb-2 block">💬</span>
              <h4 className="font-semibold text-purple-800 mb-2">AI Coach</h4>
              <p className="text-sm text-purple-600">Stel vragen over leiderschapssituaties</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <span className="text-3xl mb-2 block">📊</span>
              <h4 className="font-semibold text-blue-800 mb-2">Case Analyse</h4>
              <p className="text-sm text-blue-600">Upload situaties voor analyse</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <span className="text-3xl mb-2 block">🎯</span>
              <h4 className="font-semibold text-green-800 mb-2">Actieplannen</h4>
              <p className="text-sm text-green-600">Krijg gepersonaliseerde adviezen</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <span className="text-3xl mb-2 block">📚</span>
              <h4 className="font-semibold text-orange-800 mb-2">Kennisbank</h4>
              <p className="text-sm text-orange-600">Doorzoek sportpsychologie literatuur</p>
            </div>
          </div>

          {/* AI Chatbot Integration */}
          <TestChatBot />
        </div>

        {/* Practical Scenarios */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            🎭 Praktijkscenario's voor HBO Sportkunde
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3">🏀 Basketbalteam in Crisis</h4>
              <p className="text-sm mb-4">
                Een jeugdteam presteert onder verwachting. Er zijn conflicten tussen spelers 
                en de motivatie is laag. Hoe pak je dit aan als teamleider?
              </p>
              <div className="text-xs bg-white bg-opacity-30 rounded p-2">
                <strong>Leeruitkomsten:</strong> Conflicthantering, teammotivatie, communicatie
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3">🏃‍♀️ Atletiekvereniging Vrijwilligers</h4>
              <p className="text-sm mb-4">
                Vrijwilligers bij een atletiekvereniging raken demotiveerd en haken af. 
                Hoe motiveer je vrijwilligers en behoud je hun betrokkenheid?
              </p>
              <div className="text-xs bg-white bg-opacity-30 rounded p-2">
                <strong>Leeruitkomsten:</strong> Vrijwilligersmotivatie, waardering, betrokkenheid
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3">⚽ Voetbalcoach Dilemma</h4>
              <p className="text-sm mb-4">
                Als assistent-coach moet je een moeilijke beslissing nemen over speeltijd 
                verdeling. Hoe balanceer je individuele en teambelangen?
              </p>
              <div className="text-xs bg-white bg-opacity-30 rounded p-2">
                <strong>Leeruitkomsten:</strong> Besluitvorming, eerlijkheid, teamdynamiek
              </div>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                📖
              </span>
              Aanbevolen Literatuur
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">Sportpsychologie & Leiderschap</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• "Leadership in Sport" - Chelladurai & Kerwin</li>
                  <li>• "Sportpsychologie" - Bakker, Oudejans & Binsch</li>
                  <li>• "The Champion's Mind" - Jim Afremow</li>
                  <li>• "Mindset" - Carol Dweck</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">Groepsdynamiek & Teams</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• "Team Dynamics in Sport" - Carron & Eys</li>
                  <li>• "The Five Dysfunctions of a Team" - Lencioni</li>
                  <li>• "Groepsdynamica" - Boekaerts & Simons</li>
                  <li>• "Teamwork and Teamplay" - Salas & Rosen</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800">Motivatie & Prestatie</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• "Drive" - Daniel Pink</li>
                  <li>• "Motivation in Sport" - Roberts & Treasure</li>
                  <li>• "Flow" - Mihaly Csikszentmihalyi</li>
                  <li>• "Grit" - Angela Duckworth</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                🛠️
              </span>
              Praktische Tools & Assessments
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">🔍 Leiderschapsassessments</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>LSS (Leadership Scale for Sports):</strong> Meet je leiderschapsstijl</li>
                  <li>• <strong>MLQ (Multifactor Leadership Questionnaire):</strong> Transformationeel leiderschap</li>
                  <li>• <strong>DISC-profiel:</strong> Communicatiestijlen in teams</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">📊 Team Assessment Tools</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>GEQ (Group Environment Questionnaire):</strong> Teamcohesie meten</li>
                  <li>• <strong>Belbin Team Roles:</strong> Teamrollen identificeren</li>
                  <li>• <strong>Team Diagnostic Survey:</strong> Teameffectiviteit</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">💪 Motivatie Instrumenten</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>SMS (Sport Motivation Scale):</strong> Motivatietypen</li>
                  <li>• <strong>TEOSQ:</strong> Prestatiedoeloriëntatie</li>
                  <li>• <strong>IMI (Intrinsic Motivation Inventory):</strong> Intrinsieke motivatie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Assignment Ideas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            📝 Opdrachten & Projecten voor HBO Sportkunde
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-4">🎯 Individuele Opdrachten</h4>
              <div className="space-y-4">
                <div className="border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-700 mb-2">Leiderschapsreflectie</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Analyseer je eigen leiderschapsstijl aan de hand van een assessment en 
                    reflecteer op sterke punten en ontwikkelpunten.
                  </p>
                  <div className="text-xs text-blue-600">
                    <strong>Deliverable:</strong> Reflectieverslag (1500 woorden) + ontwikkelplan
                  </div>
                </div>
                
                <div className="border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-700 mb-2">Case Study Analyse</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Bestudeer een echte leiderschapscase uit de sport en analyseer de 
                    toegepaste strategieën en hun effectiviteit.
                  </p>
                  <div className="text-xs text-blue-600">
                    <strong>Deliverable:</strong> Case analyse rapport + presentatie
                  </div>
                </div>
                
                <div className="border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-700 mb-2">Motivatieplan Ontwerp</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Ontwikkel een motivatieplan voor een specifieke doelgroep 
                    (jeugdsporters, vrijwilligers, of elite atleten).
                  </p>
                  <div className="text-xs text-blue-600">
                    <strong>Deliverable:</strong> Motivatieplan + theoretische onderbouwing
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-800 mb-4">👥 Groepsprojecten</h4>
              <div className="space-y-4">
                <div className="border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-700 mb-2">Teambuilding Workshop</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Ontwerp en voer een teambuilding workshop uit voor een echte sportorganisatie. 
                    Evalueer de effectiviteit.
                  </p>
                  <div className="text-xs text-green-600">
                    <strong>Deliverable:</strong> Workshop plan + uitvoering + evaluatierapport
                  </div>
                </div>
                
                <div className="border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-700 mb-2">Organisatie Diagnose</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Voer een leiderschaps- en cultuuranalyse uit bij een sportvereniging 
                    en geef advies voor verbetering.
                  </p>
                  <div className="text-xs text-green-600">
                    <strong>Deliverable:</strong> Diagnose rapport + adviesplan + presentatie
                  </div>
                </div>
                
                <div className="border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-700 mb-2">Interventie Onderzoek</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Implementeer een leiderschaps- of motivatie-interventie en meet 
                    de effecten met voor- en nametingen.
                  </p>
                  <div className="text-xs text-green-600">
                    <strong>Deliverable:</strong> Onderzoeksrapport + data-analyse + aanbevelingen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            💡 Snelle Tips voor Sportleiders
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">🗣️ Communicatie</h4>
              <ul className="text-sm space-y-1">
                <li>• Luister actief naar je team</li>
                <li>• Geef specifieke, constructieve feedback</li>
                <li>• Pas je communicatiestijl aan per persoon</li>
                <li>• Gebruik positieve bekrachtiging</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">🎯 Doelen Stellen</h4>
              <ul className="text-sm space-y-1">
                <li>• Maak doelen SMART (Specifiek, Meetbaar, etc.)</li>
                <li>• Betrek sporters bij het doelstellingsproces</li>
                <li>• Stel zowel proces- als uitkomstdoelen</li>
                <li>• Evalueer en pas doelen regelmatig aan</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">🤝 Teambuilding</h4>
              <ul className="text-sm space-y-1">
                <li>• Organiseer regelmatig teamactiviteiten</li>
                <li>• Creëer een veilige, inclusieve omgeving</li>
                <li>• Stimuleer onderlinge samenwerking</li>
                <li>• Vier successen samen als team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">🏃‍♂️ Sportkunde Leiderschap Academy</h4>
            <p className="text-gray-300 mb-4">
              Ontwikkel jezelf tot een inspirerende sportleider met wetenschappelijk onderbouwde methoden
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>💜 Gemaakt voor HBO Sportkunde studenten</span>
              <span>🤖 Powered by AI</span>
              <span>📚 Evidence-based learning</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}