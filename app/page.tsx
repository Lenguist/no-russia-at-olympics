"use client";

import { useState } from "react";

const COMBATANTS = [
  {
    name: "Tsyden Geninov",
    detail:
      "Lieutenant in the 5th Guards Tank Brigade — the unit that committed atrocities in Bucha. Lost a leg. CISM World Champion 2025. Nominated for Russia's best athlete.",
  },
  {
    name: "Denis Ishbulatov",
    detail:
      "Lt. Colonel, 106th Airborne Tula Division — participated in the offensive on Kyiv region. Also served in 104th Division, deployed in occupied Kherson. Russian Cup winner in shooting.",
  },
  {
    name: "Ruslan Ustyuzhin",
    detail:
      "31st Airborne Brigade. Participated in the battle for Hostomel airport. Wounded near Popasna. Aiming for Paralympic sitting volleyball.",
  },
  {
    name: "Vladislav Shinkar",
    detail:
      "Callsign 'Shiba.' Battalion 'Vostok' since 2014. Lost both legs at Donetsk Airport. On Russia's Paralympic fencing team.",
  },
  {
    name: "Nikolai Bondarenko",
    detail:
      "Volunteered in 2022. Lost an arm at Popasna. Champion of Russia in archery. Master of Sport (Feb 2026).",
  },
  {
    name: "Anton Bushmakin",
    detail:
      "Former marine and sapper. Volunteered for Ukraine war. Lost both legs near Avdiivka. Training for Paralympic kayaking.",
  },
  {
    name: "Rinat Vasiliev",
    detail:
      "Served 10 years. Commanded ammunition convoys to the front. Lost both legs near Melitopol. Three-time Moscow powerlifting champion.",
  },
  {
    name: "Ivan Shiryayev",
    detail:
      "Drafted 2022, commanded detachment in occupied Luhansk. Wounded near Bakhmut. In Russian para snowboard team reserve.",
  },
  {
    name: "Rustam Saifullin",
    detail:
      "Colonel, 'Hero of Russia.' Fought in Chechnya, Syria, Georgia, Ukraine. Major propaganda figure. Paralympic Committee ambassador.",
  },
  {
    name: "Rostislav Kostenko",
    detail:
      "Callsign 'Cornet.' Drafted into 'Luhansk People's Army' in 2022. Served as grenade launcher. On reserve roster of Paralympic fencing team.",
  },
];

const SPONSORS = [
  "Visa",
  "Coca-Cola",
  "Samsung",
  "Airbnb",
  "Allianz",
  "Procter & Gamble",
  "Deloitte",
  "Ottobock",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch {
      const existing = JSON.parse(localStorage.getItem("subscribers") || "[]");
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem("subscribers", JSON.stringify(existing));
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-3xl mx-auto">
        <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">
          Paralympics 2026 &middot; Milan
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Russia does not belong at the Paralympics.
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
          On February 17, 2026, the International Paralympic Committee gave six
          Russian and four Belarusian athletes wild-card slots to compete under
          their national flags at the Winter Paralympics. The war against Ukraine
          is ongoing. Among the delegation are{" "}
          <strong className="text-foreground">
            former soldiers who fought in the invasion
          </strong>
          . This is not sport — this is normalization.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#take-action"
            className="bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
          >
            TAKE ACTION
          </a>
          <a
            href="#the-facts"
            className="border border-border px-6 py-3 text-sm tracking-wide hover:bg-white/5 transition"
          >
            READ THE FACTS
          </a>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Facts */}
      <section id="the-facts" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What happened</h2>
        <ul className="space-y-4 text-muted leading-relaxed">
          <li>
            <strong className="text-foreground">Sep 27, 2025</strong> — IPC
            General Assembly voted 91-77 to lift Russia&apos;s suspension.
            Full membership restored.{" "}
            <a href="https://www.paralympic.org/news/ipc-general-assembly-votes-not-maintain-npc-russia-s-partial-suspension" className="text-accent underline text-xs" target="_blank" rel="noopener noreferrer">[source]</a>
          </li>
          <li>
            <strong className="text-foreground">Dec 2, 2025</strong> — Court of
            Arbitration for Sport overturned the ski federation&apos;s block on
            Russian qualification.{" "}
            <a href="https://www.tas-cas.org/en/news/CAS-confirms-appeal-by-Russian-Ski-Association" className="text-accent underline text-xs" target="_blank" rel="noopener noreferrer">[source]</a>
          </li>
          <li>
            <strong className="text-foreground">Feb 17, 2026</strong> — IPC
            confirmed 6 Russian and 4 Belarusian athletes will compete with
            flag and anthem. First time since 2014.{" "}
            <a href="https://www.paralympic.org/news/update-potential-participation-npc-belarus-and-russia-milano-cortina-2026" className="text-accent underline text-xs" target="_blank" rel="noopener noreferrer">[source]</a>
          </li>
          <li>
            <strong className="text-foreground">Mar 6, 2026</strong> — Opening
            ceremony in Verona. Russia walks in the parade of nations.{" "}
            <a href="https://www.paralympic.org/milano-cortina-2026" className="text-accent underline text-xs" target="_blank" rel="noopener noreferrer">[source]</a>
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-12 mb-2">Who opposes it</h3>
        <p className="text-muted leading-relaxed">
          <a href="https://www.nbcnews.com/world/ukraine/ukraine-boycott-winter-paralympics-russians-competing-flag-belarus-rcna259525" className="underline" target="_blank" rel="noopener noreferrer">Ukraine</a> (official boycott),{" "}
          <a href="https://sports.yahoo.com/articles/government-hits-paralympics-allowing-brutal-222505359.html" className="underline" target="_blank" rel="noopener noreferrer">UK Sports Minister Lisa Nandy</a>,{" "}
          <a href="https://www.euronews.com/my-europe/2026/02/18/eu-commissioner-boycotts-paralympics-opening-ceremony-over-russian-and-belarusian-flags" className="underline" target="_blank" rel="noopener noreferrer">EU Commissioner Glenn Micallef</a> (boycotting ceremony), Estonia, and a{" "}
          <a href="https://valtioneuvosto.fi/en/-/1410845/sports-ministers-express-concern-over-ipc-decision-not-to-maintain-suspensions-on-russia-and-belarus-1" className="underline" target="_blank" rel="noopener noreferrer"><strong className="text-foreground">35-country coalition</strong></a>{" "}
          including France, Germany, Japan, Australia, Canada, and Italy.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* Combatant profiles */}
      <section id="who-they-send" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          The 500 war veterans in Russian Paralympic sport
        </h2>
        <p className="text-muted mb-4">
          The 6 athletes invited to the 2026 Games are not former military.
          But the Russian Paralympic Committee president stated in his 2026
          New Year&apos;s address that{" "}
          <strong className="text-foreground">
            ~500 war veterans are in Russian Paralympic teams
          </strong>
          . The following are in the broader team, reserves, and pipeline —
          openly declaring Paralympic ambitions.
        </p>
        <p className="text-muted mb-8 text-sm">
          Source:{" "}
          <a href="https://suspilne.media/1243028-rosijski-sportsmeni-aki-vouvali-proti-ukraini-teper-maut-ambicii-na-ucast-u-paralimpiadi/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Suspilne investigation</a> by Alla Sadovnyk &amp; Hanna Kalaur (Feb 18, 2026)
        </p>

        <div className="space-y-6">
          {COMBATANTS.map((person) => (
            <div key={person.name} className="border-l-2 border-accent pl-4">
              <h3 className="font-bold text-lg">{person.name}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {person.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted text-sm mt-8 mb-6">
          Sources:{" "}
          <a href="https://sportnews.24tv.ua/ru/paralimpiada-2026-sportsmeny-rossii-kotorye-srazhalis-protiv_n3011932" className="underline" target="_blank" rel="noopener noreferrer">24tv.ua / Suspilne</a>,{" "}
          <a href="https://khpg.org/en/1608815528" className="underline" target="_blank" rel="noopener noreferrer">KHPG.org</a>,{" "}
          <a href="https://society.comments.ua/news/warrussia/voennyh-kotorye-ubivali-ukraincev-pustili-na-paralimpiyskie-igry-2026-797825.html" className="underline" target="_blank" rel="noopener noreferrer">Comments.ua</a>,
          Russian media self-reporting.
        </p>
        <a
          href="/dossier"
          className="bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition inline-block"
        >
          READ FULL DOSSIER WITH SOURCES
        </a>

        <div className="bg-white/5 border border-border p-6 mt-10">
          <h4 className="font-bold mb-2">The contrast</h4>
          <p className="text-muted text-sm leading-relaxed">
            Ukrainian skeleton athlete{" "}
            <strong className="text-foreground">Vladyslav Heraskevych</strong>{" "}
            was{" "}
            <a href="https://sports.yahoo.com/articles/ukrainian-skeleton-racer-banned-olympics-153402286.html" className="underline" target="_blank" rel="noopener noreferrer">banned from the 2026 Winter Olympics</a>{" "}
            for wearing a helmet honoring Ukrainian athletes killed by Russia.
            The same Court of Arbitration for Sport that upheld his ban then
            overturned the ski federation&apos;s block on Russian
            qualification. A Ukrainian was banned for remembering the dead.
            Russians are welcomed to compete under their flag.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Take action */}
      <section id="take-action" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Take action</h2>
        <p className="text-muted mb-8">
          Sports bodies respond to reputational cost, not moral arguments.
          Here&apos;s what actually works.
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">1. Pressure the sponsors</h3>
          <p className="text-muted mb-4 leading-relaxed">
            These companies fund the Paralympics. They react when tagged
            publicly. Write a calm, factual post and tag them. Ask a question —
            don&apos;t rant.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {SPONSORS.map((s) => (
              <span
                key={s}
                className="border border-border px-3 py-1 text-sm text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="bg-white/5 border border-border p-4 text-sm text-muted">
            <p className="italic">
              &ldquo;@[Sponsor] — The 2026 Paralympics will feature athletes
              who served in Russia&apos;s military invasion of Ukraine,
              competing under the Russian flag. Does [Sponsor] support this? We
              would welcome a public statement.&rdquo;
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">
            2. Contact your national Paralympic committee
          </h3>
          <p className="text-muted leading-relaxed">
            National committees vote inside the IPC. Ask yours to publicly
            oppose the reinstatement or demand neutral status (no flags, no
            anthem). Internal dissent changes votes.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">
            3. Write to elected representatives
          </h3>
          <p className="text-muted leading-relaxed">
            Sports ministers intervene. Email your MP, MEP, or Congress member.
            Ask them to issue a statement or raise a diplomatic objection. The
            35-country coalition shows this channel works.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">4. Amplify in media</h3>
          <p className="text-muted leading-relaxed">
            Share the combatant profiles with journalists. Submit letters to
            editors. The story of former soldiers getting Paralympic wild-cards
            is underreported in English-language media. Journalists need
            documented cases and credible sources — that&apos;s what we provide.
          </p>
        </div>

        <div className="bg-white/5 border border-border p-6 mt-4 mb-8">
          <h4 className="font-bold mb-2">How to frame it</h4>
          <p className="text-muted text-sm leading-relaxed mb-2">
            <span className="text-red-400">Wrong:</span> &ldquo;Ban all
            Russians from sport.&rdquo;
          </p>
          <p className="text-muted text-sm leading-relaxed">
            <span className="text-green-400">Right:</span> &ldquo;Athletes
            directly connected to a military invasion cannot represent a state
            with flags and anthems during an ongoing war.&rdquo;
          </p>
        </div>

        <a
          href="/action"
          className="bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition inline-block"
        >
          DETAILED ACTION PLAN: WHO TO CONTACT, TEMPLATES, TIMELINE
        </a>
      </section>

      <div className="border-t border-border" />

      {/* Subscribe */}
      <section id="subscribe" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay updated</h2>
        <p className="text-muted mb-6">
          Subscribe to receive coordinated action updates, sponsor response
          tracking, and campaign news. We will not spam you.
        </p>

        {submitted ? (
          <p className="text-accent font-bold">Thank you. You&apos;re in.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </section>

      <div className="border-t border-border" />

      {/* Footer */}
      <footer className="px-6 py-12 max-w-3xl mx-auto text-muted text-sm">
        <p className="mb-2">
          This is a citizen-led campaign. We have no political affiliation.
        </p>
        <p>
          All facts are sourced from public reporting. This campaign targets
          institutions and symbols — not individual disability.
        </p>
      </footer>
    </main>
  );
}
