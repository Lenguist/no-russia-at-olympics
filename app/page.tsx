"use client";

import { useEffect, useState } from "react";

const RUSSIAN_ATHLETES = [
  {
    name: "Alexei Bugaev",
    sport: "Para Alpine Skiing (LW6/8)",
    detail:
      "Born 1997, Krasnoyarsk. Missing four fingers on right hand. 3-time Paralympic champion — won 5 medals at Sochi 2014 (2 gold, 2 silver, 1 bronze) at age 16. World Athlete of the Year 2018. Received state decorations from Putin after Beijing 2022.",
    profileUrl: "https://www.paralympic.org/aleksei-bugaev",
  },
  {
    name: "Varvara Voronchikhina",
    sport: "Para Alpine Skiing",
    detail:
      "Born 2002. 2-time World Champion. Won IPC World Cup overall standings. Received state award from Putin in April 2022 — weeks after the Bucha massacre. Named Female Athlete of the Year at 2022 Russian National Sports Awards.",
    profileUrl: "https://www.paralympic.org/varvara-voronchikhina",
  },
  {
    name: "Ivan Golubkov",
    sport: "Para Cross-Country Skiing & Biathlon",
    detail:
      "Multiple World Champion. 3 Crystal Globes in cross-country, 2 in biathlon. Became World Cup champion at 18, Crystal Globe winner at 20. Missed Sochi 2014 and couldn't qualify for PyeongChang 2018 due to Russia's suspension.",
    profileUrl:
      "https://www.paralympic.org/feature/ivan-golubkov-proves-home-training-can-make-champion",
  },
  {
    name: "Anastasia Bagiyan",
    sport: "Para Cross-Country Skiing (with guide Sergei Sinyakin)",
    detail: "World Championship medalist in para cross-country skiing.",
  },
  {
    name: "Dmitry Fadeev",
    sport: "Para Snowboard",
    detail: "Russian para snowboarder selected via bipartite invitation.",
  },
  {
    name: "Philipp Shebbo",
    sport: "Para Snowboard",
    detail:
      "Russian champion and European champion. Lost his leg in a car accident approximately 13 years ago. Designs custom prosthetic limbs for snowboarding using carbon fiber and titanium alloy.",
    profileUrl:
      "https://news.cgtn.com/news/2024-10-18/Russian-para-snowboarding-champ-enhances-sports-prosthetics-1xNN9xSuRKU/p.html",
  },
];

const BELARUSIAN_ATHLETES = [
  { name: "Valentina Birilo", sport: "Para Cross-Country Skiing" },
  { name: "Lidiya Loban", sport: "Para Cross-Country Skiing" },
  { name: "Darya Fedkovich", sport: "Para Cross-Country Skiing" },
  { name: "Roman Sviridenko", sport: "Para Cross-Country Skiing" },
];

const COMBATANT_HIGHLIGHTS = [
  {
    name: "Tsyden Geninov",
    detail:
      "Lieutenant, 5th Guards Tank Brigade — the unit that committed atrocities in Bucha. CISM World Champion 2025. Nominated for Russia's best athlete.",
  },
  {
    name: "Denis Ishbulatov",
    detail:
      "Lt. Colonel, 106th Airborne Tula Division — participated in the offensive on Kyiv region. Russian Cup winner in shooting.",
  },
  {
    name: "Anton Bushmakin",
    detail:
      'Former marine, wounded near Avdiivka. Said in January 2026: "I am ready to compete under my flag, under the anthem, and to win. This is the goal: to get first place at the Paralympics."',
  },
  {
    name: "Ruslan Ustyuzhin",
    detail:
      "31st Airborne Brigade. Participated in the battle for Hostomel airport. Aiming for Paralympic sitting volleyball.",
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
  const [stats, setStats] = useState<{
    actionTakers: number;
    totalActions: number;
  } | null>(null);
  const [checkedActions, setCheckedActions] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved: string[] = JSON.parse(
      localStorage.getItem("nro_actions") || "[]"
    );
    setCheckedActions(new Set(saved));
    fetch("/api/actions")
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => {});
  }, []);

  const recordAction = async (actionKey: string) => {
    const saved: string[] = JSON.parse(
      localStorage.getItem("nro_actions") || "[]"
    );
    if (saved.includes(actionKey)) return;
    const isFirstAction = saved.length === 0;
    saved.push(actionKey);
    localStorage.setItem("nro_actions", JSON.stringify(saved));
    setCheckedActions(new Set(saved));
    setStats((prev) =>
      prev
        ? {
            actionTakers: isFirstAction
              ? prev.actionTakers + 1
              : prev.actionTakers,
            totalActions: prev.totalActions + 1,
          }
        : null
    );
    try {
      await fetch("/api/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: actionKey, isFirstAction }),
      });
    } catch {}
  };

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
          Milano-Cortina 2026 &middot; March 6-15
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Russia is returning to the Paralympics under its flag.
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
          For the first time since 2014, Russian athletes will compete under the
          Russian flag and anthem at the Winter Paralympics. The war against
          Ukraine is ongoing. Among Russia&apos;s broader Paralympic teams are{" "}
          <strong className="text-foreground">
            approximately 500 war veterans
          </strong>
          , including soldiers from units linked to the Bucha massacre.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#what-is-happening"
            className="bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
          >
            READ THE FACTS
          </a>
          <a
            href="#what-can-we-do"
            className="border border-border px-6 py-3 text-sm tracking-wide hover:bg-white/5 transition"
          >
            WHAT CAN WE DO
          </a>
        </div>

        {stats !== null && (
          <div className="flex gap-10 mt-10 text-sm text-muted">
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-foreground">
                {stats.actionTakers.toLocaleString()}
              </span>
              people took action
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-foreground">
                {stats.totalActions.toLocaleString()}
              </span>
              actions recorded
            </div>
          </div>
        )}
      </section>

      <div className="border-t border-border" />

      {/* What is happening */}
      <section id="what-is-happening" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What is happening
        </h2>

        <ul className="space-y-4 text-muted leading-relaxed mb-10">
          <li>
            <strong className="text-foreground">Sep 27, 2025</strong> — IPC
            General Assembly voted 91-77 to lift Russia&apos;s suspension. Full
            membership restored.{" "}
            <a
              href="https://www.paralympic.org/news/ipc-general-assembly-votes-not-maintain-npc-russia-s-partial-suspension"
              className="text-accent underline text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              [source]
            </a>
          </li>
          <li>
            <strong className="text-foreground">Dec 2, 2025</strong> — Court of
            Arbitration for Sport overturned the ski federation&apos;s block on
            Russian qualification.{" "}
            <a
              href="https://www.tas-cas.org/en/news/CAS-confirms-appeal-by-Russian-Ski-Association"
              className="text-accent underline text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              [source]
            </a>
          </li>
          <li>
            <strong className="text-foreground">Feb 17, 2026</strong> — IPC
            confirmed{" "}
            <strong className="text-foreground">
              6 Russian and 4 Belarusian athletes
            </strong>{" "}
            will compete with flag and anthem via bipartite invitations.{" "}
            <a
              href="https://www.paralympic.org/news/update-potential-participation-npc-belarus-and-russia-milano-cortina-2026"
              className="text-accent underline text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              [source]
            </a>
          </li>
          <li>
            <strong className="text-foreground">Mar 6, 2026</strong> — Opening
            ceremony in Verona. Russia walks in the parade of nations with its
            flag for the first time since Sochi 2014.{" "}
            <a
              href="https://www.paralympic.org/milano-cortina-2026"
              className="text-accent underline text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              [source]
            </a>
          </li>
        </ul>

        <div className="bg-white/5 border border-border p-6 mb-10">
          <h3 className="font-bold mb-2">Who opposes it</h3>
          <p className="text-muted leading-relaxed text-sm">
            <a
              href="https://www.nbcnews.com/world/ukraine/ukraine-boycott-winter-paralympics-russians-competing-flag-belarus-rcna259525"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ukraine
            </a>{" "}
            (official boycott),{" "}
            <a
              href="https://sports.yahoo.com/articles/government-hits-paralympics-allowing-brutal-222505359.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              UK Sports Minister Lisa Nandy
            </a>
            ,{" "}
            <a
              href="https://www.euronews.com/my-europe/2026/02/18/eu-commissioner-boycotts-paralympics-opening-ceremony-over-russian-and-belarusian-flags"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              EU Commissioner Glenn Micallef
            </a>{" "}
            (boycotting ceremony), Estonia, and a{" "}
            <a
              href="https://valtioneuvosto.fi/en/-/1410845/sports-ministers-express-concern-over-ipc-decision-not-to-maintain-suspensions-on-russia-and-belarus-1"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="text-foreground">
                35-country coalition
              </strong>
            </a>{" "}
            including France, Germany, Japan, Australia, Canada, and Italy.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* The 6 Russian athletes */}
      <section id="the-athletes" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          The 6 Russian athletes invited
        </h2>
        <p className="text-muted mb-8 text-sm">
          These athletes received bipartite invitations to compete in alpine
          skiing, cross-country skiing, and snowboard. None are former military.{" "}
          <a
            href="https://tass.com/sports/2087843"
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TASS source
          </a>
        </p>

        <div className="space-y-6 mb-10">
          {RUSSIAN_ATHLETES.map((athlete) => (
            <div key={athlete.name} className="border-l-2 border-accent pl-4">
              <h3 className="font-bold text-lg">
                {athlete.name}
                {athlete.profileUrl && (
                  <a
                    href={athlete.profileUrl}
                    className="text-accent text-xs ml-2 underline font-normal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    profile
                  </a>
                )}
              </h3>
              <p className="text-muted text-xs mb-1">{athlete.sport}</p>
              <p className="text-muted text-sm leading-relaxed">
                {athlete.detail}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">
          The 4 Belarusian athletes invited
        </h3>
        <p className="text-muted mb-4 text-sm">
          All in para cross-country skiing (1 male, 3 female).
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {BELARUSIAN_ATHLETES.map((a) => (
            <span
              key={a.name}
              className="border border-border px-3 py-1 text-sm text-foreground"
            >
              {a.name}
            </span>
          ))}
        </div>

        <p className="text-muted text-sm">
          Russia has confirmed a{" "}
          <a
            href="https://tass.com/sports/2088623"
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            23-member delegation
          </a>{" "}
          including coaches, support staff, and officials.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* Why it matters */}
      <section id="why-it-matters" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why it matters
        </h2>

        <div className="space-y-8">
          {/* The 500 veterans */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              500 war veterans in Russian Paralympic sport
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              The 6 invited athletes are not former military. But the Russian
              Paralympic Committee president Pavel Rozhkov stated in his 2026 New
              Year&apos;s address that{" "}
              <strong className="text-foreground">
                approximately 500 participants in the war against Ukraine are in
                Russian Paralympic teams
              </strong>
              . The RPC describes channeling military personnel into Paralympic
              sport as &ldquo;one of the most important and serious areas of
              their activities.&rdquo;
            </p>
            <p className="text-muted text-sm mb-4">
              The{" "}
              <a
                href="https://suspilne.media/1243028-rosijski-sportsmeni-aki-vouvali-proti-ukraini-teper-maut-ambicii-na-ucast-u-paralimpiadi/"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suspilne investigation
              </a>{" "}
              (February 18, 2026) identified and profiled 10 of these veterans.
              They are in the broader team, reserves, and pipeline — and openly
              declare Paralympic ambitions.
            </p>

            <div className="space-y-4">
              {COMBATANT_HIGHLIGHTS.map((person) => (
                <div
                  key={person.name}
                  className="border-l-2 border-red-400 pl-4"
                >
                  <h4 className="font-bold">{person.name}</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {person.detail}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/dossier"
              className="text-accent underline text-sm mt-4 inline-block"
            >
              Read full dossier: all 10 sourced profiles &rarr;
            </a>
          </div>

          {/* Institutional program */}
          <div className="bg-white/5 border border-border p-6">
            <h3 className="font-bold mb-2">The institutional escalation</h3>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <strong className="text-foreground">March 2023:</strong> Rozhkov
                stated Paralympic athletes were visiting military hospitals and
                war participants.
              </li>
              <li>
                <strong className="text-foreground">2024:</strong> Began publicly
                including veterans in Paralympic teams.
              </li>
              <li>
                <strong className="text-foreground">2026:</strong> Claims 500 war
                veterans in teams. Calls it a key institutional priority.
              </li>
            </ul>
          </div>

          {/* The contrast */}
          <div className="bg-white/5 border border-border p-6">
            <h3 className="font-bold mb-2">The contrast</h3>
            <p className="text-muted text-sm leading-relaxed">
              Ukrainian skeleton athlete{" "}
              <strong className="text-foreground">
                Vladyslav Heraskevych
              </strong>{" "}
              was{" "}
              <a
                href="https://sports.yahoo.com/articles/ukrainian-skeleton-racer-banned-olympics-153402286.html"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                banned from the 2026 Winter Olympics
              </a>{" "}
              for wearing a helmet honoring Ukrainian athletes killed by Russia.
              The same Court of Arbitration for Sport that upheld his ban then
              overturned the ski federation&apos;s block on Russian
              qualification. A Ukrainian was banned for remembering the dead.
              Russians are welcomed to compete under their flag.
            </p>
          </div>

          {/* What this normalizes */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              What this normalizes
            </h3>
            <p className="text-muted leading-relaxed">
              Allowing Russia to compete under its flag during an ongoing war
              of aggression signals that there are no lasting consequences for
              invading a sovereign country. It provides a propaganda victory: Russia
              can claim the international community has moved on. It sets the
              precedent for full Russian reinstatement at the LA 2028 Summer
              Olympics. And it does all of this while{" "}
              <a
                href="https://en.kremlin.ru/events/president/news/68284"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                the athletes shake hands with the president who ordered the
                invasion
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* What can we do */}
      <section id="what-can-we-do" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          What can we do
        </h2>
        <div className="bg-white/5 border border-border p-6 mb-8">
          <h3 className="font-bold mb-2">Realistic goals</h3>
          <p className="text-muted text-sm leading-relaxed">
            The decision to allow Russia to compete is legally final (IPC General
            Assembly vote + CAS ruling). Reversing it in the remaining days
            before March 6 is unlikely. But we can{" "}
            <strong className="text-foreground">
              make this decision politically costly
            </strong>{" "}
            — so that full Russian reinstatement at LA 2028 becomes harder. In
            2022, FIFA reversed its position on Russia in 4 days because
            national teams refused to play. Reputational cost works.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold mb-2">
              1. Pressure the sponsors
            </h3>
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
                competing under the Russian flag during an ongoing war of
                aggression. Russia&apos;s own Paralympic president claims 500 war
                veterans are in their teams. Does [Sponsor] support this? We
                would welcome a public statement.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              2. Contact your national Paralympic committee
            </h3>
            <p className="text-muted leading-relaxed">
              National committees vote inside the IPC. Ask yours to publicly
              oppose the reinstatement or demand neutral status (no flags, no
              anthem). Internal dissent changes votes. The IPC General Assembly
              was 91-77 — it was not a landslide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              3. Write to elected representatives
            </h3>
            <p className="text-muted leading-relaxed">
              Sports ministers intervene. Email your MP, MEP, or Congress member.
              Ask them to issue a statement or raise a diplomatic objection. The{" "}
              <a
                href="https://valtioneuvosto.fi/en/-/1410845/sports-ministers-express-concern-over-ipc-decision-not-to-maintain-suspensions-on-russia-and-belarus-1"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                35-country coalition
              </a>{" "}
              shows this channel works — push them to go further.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">4. Share the evidence</h3>
            <p className="text-muted leading-relaxed">
              The combatant-athlete story is underreported in English-language
              media. Share the{" "}
              <a href="/dossier" className="text-accent underline">
                sourced dossier
              </a>{" "}
              with journalists and on social media. Journalists need documented
              cases, not opinion — that&apos;s what we provide.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-border p-6 mt-8 mb-6">
          <h4 className="font-bold mb-2">How to frame it</h4>
          <p className="text-muted text-sm leading-relaxed mb-2">
            <span className="text-red-400">Wrong:</span> &ldquo;Ban all Russians
            from sport.&rdquo;
          </p>
          <p className="text-muted text-sm leading-relaxed">
            <span className="text-green-400">Right:</span> &ldquo;A country
            waging a war of aggression should not parade under its flag and
            anthem at the Paralympics. National symbols reward the state, not the
            athletes.&rdquo;
          </p>
        </div>

        <a
          href="/action"
          className="bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition inline-block"
        >
          DETAILED ACTION PLAN: CONTACTS, TEMPLATES, TIMELINE
        </a>
      </section>

      <div className="border-t border-border" />

      {/* Action Tracker */}
      <section id="track-actions" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Record what you&apos;ve done
        </h2>
        <p className="text-muted mb-8 leading-relaxed">
          Check off actions as you take them. Your progress is saved in your
          browser and counted in the totals above.
        </p>

        <div className="space-y-8">
          <ChecklistGroup
            title="Social media"
            items={[
              { key: "tagged_visa_twitter", label: "Tagged Visa on Twitter/X" },
              {
                key: "tagged_cocacola_twitter",
                label: "Tagged Coca-Cola on Twitter/X",
              },
              {
                key: "tagged_samsung_twitter",
                label: "Tagged Samsung on Twitter/X",
              },
              {
                key: "tagged_airbnb_twitter",
                label: "Tagged Airbnb on Twitter/X",
              },
              {
                key: "tagged_allianz_twitter",
                label: "Tagged Allianz on Twitter/X",
              },
              {
                key: "tagged_sponsor_instagram",
                label: "Tagged a sponsor on Instagram",
              },
              {
                key: "tagged_sponsor_tiktok",
                label: "Tagged a sponsor on TikTok",
              },
              { key: "shared_site", label: "Shared the site" },
            ]}
            checked={checkedActions}
            onCheck={recordAction}
          />
          <ChecklistGroup
            title="Direct contact"
            items={[
              { key: "emailed_sponsor", label: "Emailed a sponsor" },
              {
                key: "emailed_committee",
                label: "Emailed national Paralympic committee",
              },
              {
                key: "emailed_representative",
                label: "Emailed MP / MEP / representative",
              },
            ]}
            checked={checkedActions}
            onCheck={recordAction}
          />
          <ChecklistGroup
            title="Amplification"
            items={[
              {
                key: "contacted_journalist",
                label: "Sent to a journalist or media contact",
              },
              {
                key: "shared_community",
                label: "Shared in a group chat or community",
              },
            ]}
            checked={checkedActions}
            onCheck={recordAction}
          />
        </div>

        {checkedActions.size > 0 && (
          <p className="text-accent text-sm mt-8 font-bold">
            You&apos;ve recorded {checkedActions.size} action
            {checkedActions.size !== 1 ? "s" : ""}. Thank you.
          </p>
        )}
      </section>

      <div className="border-t border-border" />

      {/* Resources */}
      <section id="resources" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Resources</h2>

        <div className="space-y-8">
          {/* Investigations */}
          <div>
            <h3 className="font-bold mb-3">Investigations &amp; evidence</h3>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <a
                  href="https://suspilne.media/1243028-rosijski-sportsmeni-aki-vouvali-proti-ukraini-teper-maut-ambicii-na-ucast-u-paralimpiadi/"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suspilne investigation (Ukrainian)
                </a>{" "}
                — Original investigation by Alla Sadovnyk &amp; Hanna Kalaur
                identifying 10 war veterans in Russian Paralympic teams (Feb 18,
                2026)
              </li>
              <li>
                <a
                  href="https://khpg.org/en/1608815528"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KHPG.org (English)
                </a>{" "}
                — Kharkiv Human Rights Protection Group English-language summary
              </li>
              <li>
                <a href="/dossier" className="text-accent underline">
                  Sourced dossier (this site)
                </a>{" "}
                — All 10 war veteran profiles with military unit details, quotes,
                and linked sources
              </li>
              <li>
                <a
                  href="https://sport.nv.ua/ukr/olimpiada-2026/paralimpiada-2026-mpk-dopustiv-rosiyu-z-praporom-i-gimnom-sered-sportsmeniv-kolishni-viyskovi-50584100.html"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NV.ua (Ukrainian)
                </a>{" "}
                — Additional coverage of veteran-athlete pipeline
              </li>
              <li>
                <a
                  href="https://sportnews.24tv.ua/ru/paralimpiada-2026-sportsmeny-rossii-kotorye-srazhalis-protiv_n3011932"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  24tv.ua / Suspilne (Russian)
                </a>{" "}
                — Athlete profiles summary
              </li>
              <li>
                <a
                  href="https://society.comments.ua/news/warrussia/voennyh-kotorye-ubivali-ukraincev-pustili-na-paralimpiyskie-igry-2026-797825.html"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comments.ua
                </a>{" "}
                — Coverage of war veterans in Paralympic teams
              </li>
            </ul>
          </div>

          {/* IPC decisions */}
          <div>
            <h3 className="font-bold mb-3">IPC decisions &amp; rulings</h3>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <a
                  href="https://www.paralympic.org/news/update-potential-participation-npc-belarus-and-russia-milano-cortina-2026"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IPC: Update on Russia &amp; Belarus participation (Feb 17,
                  2026)
                </a>
              </li>
              <li>
                <a
                  href="https://www.paralympic.org/news/ipc-general-assembly-votes-not-maintain-npc-russia-s-partial-suspension"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IPC General Assembly vote to lift suspension (Sep 27, 2025)
                </a>
              </li>
              <li>
                <a
                  href="https://www.tas-cas.org/en/news/CAS-confirms-appeal-by-Russian-Ski-Association"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAS ruling overturning FIS block on Russian qualification (Dec
                  2, 2025)
                </a>
              </li>
              <li>
                <a
                  href="https://www.insidethegames.biz/articles/end-of-paralympic-neutral-status-for-russia-and-belarus"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inside the Games: End of Paralympic neutral status
                </a>
              </li>
            </ul>
          </div>

          {/* International news */}
          <div>
            <h3 className="font-bold mb-3">International news coverage</h3>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <a
                  href="https://www.aljazeera.com/sports/2026/2/18/russian-belarusian-athletes-to-compete-under-own-flag-at-paralympics-2026"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Al Jazeera: Russian, Belarusian athletes to compete under own
                  flag
                </a>
              </li>
              <li>
                <a
                  href="https://kyivindependent.com/russian-belarusian-athletes-to-compete-under-national-flags-at-2026-winter-paralympics/"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kyiv Independent: Competing under national flags
                </a>
              </li>
              <li>
                <a
                  href="https://www.france24.com/en/sport/20260217-paralympic-governing-body-lifts-ban-on-russian-and-belarusian-athletes-ahead-of-2026-games"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  France 24: Paralympic governing body lifts ban
                </a>
              </li>
              <li>
                <a
                  href="https://www.skysports.com/olympics/news/29877/13508851/paralympics-russian-and-belarusian-athletes-to-compete-under-own-flag-at-milan-cortina-games"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sky Sports: Russia &amp; Belarus to compete under own flag
                </a>
              </li>
              <li>
                <a
                  href="https://www.espn.com/olympics/story/_/id/47958708/russians-compete-own-flag-next-month-paralympics-says-ipc"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ESPN: Russians to compete under own flag
                </a>
              </li>
              <li>
                <a
                  href="https://www.nbcnews.com/world/ukraine/ukraine-boycott-winter-paralympics-russians-competing-flag-belarus-rcna259525"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NBC News: Ukraine to boycott Winter Paralympics
                </a>
              </li>
              <li>
                <a
                  href="https://united24media.com/latest-news/russian-and-belarusian-athletes-cleared-to-compete-under-national-flags-at-2026-winter-paralympics-16016"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UNITED24: Athletes cleared to compete under national flags
                </a>
              </li>
            </ul>
          </div>

          {/* Government responses */}
          <div>
            <h3 className="font-bold mb-3">Government responses</h3>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <a
                  href="https://valtioneuvosto.fi/en/-/1410845/sports-ministers-express-concern-over-ipc-decision-not-to-maintain-suspensions-on-russia-and-belarus-1"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  35-country joint statement (Finland-led coalition)
                </a>{" "}
                — France, Germany, Japan, Australia, Canada, Italy, and 29 more
              </li>
              <li>
                <a
                  href="https://sports.yahoo.com/articles/government-hits-paralympics-allowing-brutal-222505359.html"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UK Sports Minister Lisa Nandy: &ldquo;completely the wrong
                  decision&rdquo;
                </a>
              </li>
              <li>
                <a
                  href="https://www.euronews.com/my-europe/2026/02/18/eu-commissioner-boycotts-paralympics-opening-ceremony-over-russian-and-belarusian-flags"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EU Commissioner Glenn Micallef boycotting opening ceremony
                </a>
              </li>
            </ul>
          </div>

          {/* Heraskevych */}
          <div>
            <h3 className="font-bold mb-3">The Heraskevych case</h3>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <a
                  href="https://sports.yahoo.com/articles/ukrainian-skeleton-racer-banned-olympics-153402286.html"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vladyslav Heraskevych banned from 2026 Olympics for memorial
                  helmet
                </a>
              </li>
            </ul>
          </div>

          {/* Russian sources */}
          <div>
            <h3 className="font-bold mb-3">
              Russian state media (self-reporting)
            </h3>
            <p className="text-muted text-xs mb-2">
              These sources are Russian state-controlled media. They are included
              because they contain statements by athletes and officials that
              serve as primary evidence.
            </p>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <a
                  href="https://tass.com/sports/2087843"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TASS: Six Russian athletes receive invitations
                </a>
              </li>
              <li>
                <a
                  href="https://tass.com/sports/2088623"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TASS: Russia confirms 23-member delegation
                </a>
              </li>
              <li>
                <a
                  href="https://tass.com/sports/2088077"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TASS: Four of six athletes granted Italian visas
                </a>
              </li>
              <li>
                <a
                  href="https://en.iz.ru/en/2044175/2026-02-17/six-russian-athletes-have-received-invitations-2026-paralympics"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Izvestia: Six athletes invited to 2026 Paralympics
                </a>
              </li>
              <li>
                <a
                  href="https://en.kremlin.ru/events/president/news/68284"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kremlin.ru: Putin meets Paralympic team after Beijing 2022
                </a>
              </li>
              <li>
                <a
                  href="https://paralymp.ru/press_center/news/official/09-02-2026-veteranu_svo_chempionu_rossii_po_strelbe_iz_luka_sporta_lits_s_poda_n_bondarenko_prisvoeno_zvanie_ma/"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paralymp.ru: War veteran Bondarenko awarded Master of Sport
                  (Feb 2026)
                </a>
              </li>
            </ul>
          </div>

          {/* This campaign */}
          <div>
            <h3 className="font-bold mb-3">This campaign</h3>
            <ul className="text-muted text-sm space-y-2 leading-relaxed">
              <li>
                <a href="/dossier" className="text-accent underline">
                  Sourced dossier: 10 war veteran profiles
                </a>
              </li>
              <li>
                <a href="/action" className="text-accent underline">
                  Detailed action plan: contacts, templates, timeline
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Subscribe */}
      <section id="subscribe" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay updated</h2>
        <p className="text-muted mb-6">
          Subscribe to receive updates on sponsor responses, media coverage, and
          coordination for the LA 2028 campaign.
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
          institutions and symbols — not individual athletes or disability.
        </p>
      </footer>
    </main>
  );
}

function ChecklistGroup({
  title,
  items,
  checked,
  onCheck,
}: {
  title: string;
  items: { key: string; label: string }[];
  checked: Set<string>;
  onCheck: (key: string) => void;
}) {
  return (
    <div>
      <h3 className="font-bold text-xs uppercase tracking-widest text-muted mb-3">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item) => {
          const done = checked.has(item.key);
          return (
            <button
              key={item.key}
              onClick={() => onCheck(item.key)}
              className={`flex items-center gap-3 w-full text-left text-sm py-2 px-3 border transition ${
                done
                  ? "border-accent text-foreground"
                  : "border-border text-muted hover:border-white/30"
              }`}
            >
              <span
                className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                  done ? "border-accent bg-accent text-black" : "border-border"
                }`}
              >
                {done ? "✓" : ""}
              </span>
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
