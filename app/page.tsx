"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

const SPONSORS_DATA = [
  {
    name: "Visa",
    key: "visa",
    postName: "Visa",
    twitterHandle: "Visa",
    instagramHandle: "visa",
    tiktokHandle: "visa",
  },
  {
    name: "Coca-Cola",
    key: "cocacola",
    postName: "Coca-Cola",
    twitterHandle: "CocaCola",
    instagramHandle: "cocacola",
    tiktokHandle: "cocacola",
  },
  {
    name: "Samsung",
    key: "samsung",
    postName: "Samsung",
    twitterHandle: "Samsung",
    instagramHandle: "samsung",
    tiktokHandle: "samsung",
  },
  {
    name: "Airbnb",
    key: "airbnb",
    postName: "Airbnb",
    twitterHandle: "Airbnb",
    instagramHandle: "airbnb",
    tiktokHandle: "airbnb",
  },
  {
    name: "Allianz",
    key: "allianz",
    postName: "Allianz",
    twitterHandle: "Allianz",
    instagramHandle: "allianz",
    tiktokHandle: "allianzgroup",
  },
  {
    name: "P&G",
    key: "pg",
    postName: "Procter & Gamble",
    twitterHandle: "ProcterGamble",
    instagramHandle: "proctergamble",
    tiktokHandle: "proctergamble",
  },
  {
    name: "Deloitte",
    key: "deloitte",
    postName: "Deloitte",
    twitterHandle: "Deloitte",
    instagramHandle: "deloitte",
    tiktokHandle: "deloitte",
  },
  {
    name: "Ottobock",
    key: "ottobock",
    postName: "Ottobock",
    twitterHandle: "ottobock",
    instagramHandle: "ottobock",
    tiktokHandle: "ottobock",
  },
];

const TIER2_ACTIONS = [
  {
    key: "emailed_sponsor",
    label: "Email a sponsor directly",
    desc: "Harder to ignore than a tweet. Use the contact form or PR email on the action page.",
    href: "/action",
    cta: "Get email template →",
  },
  {
    key: "shared_dossier",
    label: "Send the dossier to a journalist",
    desc: "The combatant-athlete story is underreported in English-language media.",
    href: "/dossier",
    cta: "Open dossier →",
  },
  {
    key: "emailed_committee",
    label: "Email your national Paralympic committee",
    desc: "The IPC vote was 91-77. National committee objections shift future votes.",
    href: "/action",
    cta: "Get committee contacts →",
  },
  {
    key: "emailed_representative",
    label: "Write to your MP / MEP / representative",
    desc: "35 countries issued a joint statement. Push yours to go further.",
    href: "/action",
    cta: "Find your representative →",
  },
  {
    key: "shared_community",
    label: "Share in a group or community",
    desc: "Forward this site to a Discord, Telegram group, WhatsApp, or email list.",
    href: null,
    cta: null,
  },
];

function getPostText(postName: string, twitterHandle: string): string {
  return `@${twitterHandle} — The 2026 Paralympics will feature Russian athletes competing under their national flag during an ongoing war. Russia's Paralympic president claims 500 war veterans are in their teams. Does ${postName} support this? no-russia-at-olympics.vercel.app`;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [orgEmail, setOrgEmail] = useState("");
  const [orgWhy, setOrgWhy] = useState("");
  const [orgSocial, setOrgSocial] = useState("");
  const [orgSubmitted, setOrgSubmitted] = useState(false);
  const [stats, setStats] = useState<{
    actionTakers: number;
    totalActions: number;
    pageViews: number;
    uniqueVisitors: number;
    twitterClicks: number;
    instagramClicks: number;
    tiktokClicks: number;
  } | null>(null);
  const [checkedActions, setCheckedActions] = useState<Set<string>>(new Set());
  const [selectedSponsor, setSelectedSponsor] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedTier2, setExpandedTier2] = useState(false);

  useEffect(() => {
    const saved: string[] = JSON.parse(
      localStorage.getItem("nro_actions") || "[]"
    );
    setCheckedActions(new Set(saved));
    fetch("/api/actions")
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => { });

    // Track page view
    fetch("/api/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "page_view" }),
    }).catch(() => { });

    // Track unique visitor (once per browser)
    if (!localStorage.getItem("nro_visited")) {
      localStorage.setItem("nro_visited", "1");
      fetch("/api/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "unique_visit" }),
      }).catch(() => { });
    }
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
          ...prev,
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
    } catch { }
  };

  const trackPlatformClick = (platform: "twitter" | "instagram" | "tiktok") => {
    const key = `${platform}Clicks` as
      | "twitterClicks"
      | "instagramClicks"
      | "tiktokClicks";
    setStats((prev) => (prev ? { ...prev, [key]: prev[key] + 1 } : null));
    fetch("/api/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: `platform_${platform}`, increment: true }),
    }).catch(() => { });
  };

  const copyText = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch { }
  };

  const taggedSponsors = new Set(
    SPONSORS_DATA.filter((s) => checkedActions.has(`tagged_${s.key}`)).map(
      (s) => s.key
    )
  );
  const tier2Unlocked = taggedSponsors.size >= 3;

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
            TAKE ACTION
          </a>
        </div>

        {stats !== null && (
          <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-border text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                Website
              </p>
              <div className="space-y-1.5">
                <div>
                  <span className="text-2xl font-bold text-foreground">
                    {stats.pageViews.toLocaleString()}
                  </span>
                  <span className="text-muted ml-2">page views</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">
                    {stats.uniqueVisitors.toLocaleString()}
                  </span>
                  <span className="text-muted ml-2">unique visitors</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                Actions taken
              </p>
              <div className="space-y-1.5">
                <div>
                  <span className="text-2xl font-bold text-foreground">
                    {stats.actionTakers.toLocaleString()}
                  </span>
                  <span className="text-muted ml-2">people acted</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-sky-400">
                    {stats.twitterClicks.toLocaleString()}
                  </span>
                  <span className="text-muted ml-2">on Twitter/X</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-pink-400">
                    {stats.instagramClicks.toLocaleString()}
                  </span>
                  <span className="text-muted ml-2">on Instagram</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-foreground">
                    {stats.tiktokClicks.toLocaleString()}
                  </span>
                  <span className="text-muted ml-2">on TikTok</span>
                </div>
              </div>
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

        {/* Highlight Image */}
        <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/images/flag.png"
            alt="Russian Flag returning to Paralympics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-medium opacity-90">
              Russia returns to the Parade of Nations
            </p>
          </div>
        </div>


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

          {/* The contrast */}
          <div className="border border-accent/40 bg-accent/5 p-6">
            <h3 className="font-bold mb-2 text-accent">The hypocrisy</h3>
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

      {/* Take Action */}
      <section id="what-can-we-do" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Take action</h2>
        <p className="text-muted mb-8 leading-relaxed">
          The most effective thing right now: publicly tag sponsors with a calm,
          factual question. Companies escalate internally when tagged. Even one
          sponsor reacting creates news.
        </p>

        {/* Progress bar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex gap-1.5">
            {SPONSORS_DATA.map((s) => (
              <div
                key={s.key}
                className={`h-2 w-7 transition-colors ${taggedSponsors.has(s.key) ? "bg-accent" : "bg-border"
                  }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted">
            {taggedSponsors.size === 0
              ? "Tag 3 sponsors to unlock more actions"
              : taggedSponsors.size < 3
                ? `${taggedSponsors.size}/3 — ${3 - taggedSponsors.size
                } more to unlock next steps`
                : `${taggedSponsors.size} sponsors tagged`}
          </span>
        </div>

        {/* Sponsor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
          {SPONSORS_DATA.map((sponsor) => {
            const tagged = taggedSponsors.has(sponsor.key);
            const selected = selectedSponsor === sponsor.key;
            return (
              <button
                key={sponsor.key}
                onClick={() =>
                  setSelectedSponsor(selected ? null : sponsor.key)
                }
                className={`border p-3 text-left transition ${tagged
                  ? "border-green-500 bg-green-950/40 text-foreground"
                  : selected
                    ? "border-accent text-foreground"
                    : "border-border text-muted hover:border-white/30 hover:text-foreground"
                  }`}
              >
                <span className="block font-bold text-sm">{sponsor.name}</span>
                <span className="block text-xs mt-1 text-muted">
                  {tagged ? "✓ tagged" : selected ? "open ↓" : "tap to tag →"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Expanded sponsor panel */}
        {selectedSponsor &&
          (() => {
            const sponsor = SPONSORS_DATA.find(
              (s) => s.key === selectedSponsor
            )!;
            const postText = getPostText(sponsor.postName, sponsor.twitterHandle);
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              postText
            )}`;
            const igUrl = `https://www.instagram.com/${sponsor.instagramHandle}/`;
            const ttUrl = `https://www.tiktok.com/@${sponsor.tiktokHandle}`;
            const isDone = taggedSponsors.has(sponsor.key);

            return (
              <div className="border border-accent p-5 mt-2 mb-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold">
                    Tagging{" "}
                    <span className="text-accent">{sponsor.name}</span>
                  </h3>
                  <button
                    onClick={() => setSelectedSponsor(null)}
                    className="text-muted text-sm hover:text-foreground transition"
                  >
                    close ✕
                  </button>
                </div>

                <p className="text-xs text-muted uppercase tracking-widest mb-2">
                  1. Copy this post
                </p>
                <div className="bg-white/5 border border-border p-4 mb-4 relative">
                  <p className="text-sm leading-relaxed pr-20">{postText}</p>
                  <button
                    onClick={() => copyText(postText, sponsor.key)}
                    className={`absolute top-3 right-3 text-xs font-bold px-3 py-1.5 transition ${copiedKey === sponsor.key
                      ? "bg-green-600 text-white"
                      : "bg-accent text-black hover:opacity-90"
                      }`}
                  >
                    {copiedKey === sponsor.key ? "COPIED!" : "COPY"}
                  </button>
                </div>

                <p className="text-xs text-muted uppercase tracking-widest mb-2">
                  2. Post it on
                </p>
                <div className="flex gap-2 flex-wrap mb-5">
                  <a
                    href={tweetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPlatformClick("twitter")}
                    className="border border-sky-800 bg-sky-950/40 text-sky-300 px-4 py-2 text-sm hover:bg-sky-900/40 transition"
                  >
                    𝕏 Twitter (opens prefilled)
                  </a>
                  <a
                    href={igUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPlatformClick("instagram")}
                    className="border border-pink-800 bg-pink-950/40 text-pink-300 px-4 py-2 text-sm hover:bg-pink-900/40 transition"
                  >
                    Instagram
                  </a>
                  <a
                    href={ttUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPlatformClick("tiktok")}
                    className="border border-border text-muted px-4 py-2 text-sm hover:border-white/30 hover:text-foreground transition"
                  >
                    TikTok
                  </a>
                </div>

                <p className="text-xs text-muted uppercase tracking-widest mb-2">
                  3. Mark as done
                </p>
                {isDone ? (
                  <p className="text-green-400 text-sm font-bold">
                    ✓ {sponsor.name} tagged
                  </p>
                ) : (
                  <button
                    onClick={() => {
                      recordAction(`tagged_${sponsor.key}`);
                      setSelectedSponsor(null);
                    }}
                    className="bg-accent text-black font-bold px-5 py-2.5 text-sm tracking-wide hover:opacity-90 transition"
                  >
                    DONE — MARK {sponsor.name.toUpperCase()} AS TAGGED
                  </button>
                )}
              </div>
            );
          })()}

        {/* Tier 2 */}
        <div
          className={`mt-4 transition-all duration-300 ${tier2Unlocked
            ? "opacity-100"
            : "opacity-40 pointer-events-none select-none"
            }`}
        >
          <button
            onClick={() => tier2Unlocked && setExpandedTier2(!expandedTier2)}
            disabled={!tier2Unlocked}
            className={`w-full flex items-center justify-between gap-3 mb-4 text-left group ${tier2Unlocked ? "cursor-pointer" : ""}`}
          >
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-lg group-hover:text-accent transition">More ways to apply pressure</h3>
              {!tier2Unlocked && (
                <span className="text-xs text-muted border border-border px-2 py-0.5">
                  unlocks after 3 sponsors
                </span>
              )}
            </div>
            {tier2Unlocked && (
              <span className="text-accent text-sm font-bold">
                {expandedTier2 ? "− Close" : "+ Expand"}
              </span>
            )}
          </button>

          {(expandedTier2 || !tier2Unlocked) && (
            <div className="space-y-2">
              {TIER2_ACTIONS.map((action) => {
                const done = checkedActions.has(action.key);
                return (
                  <div
                    key={action.key}
                    className={`border p-4 flex gap-3 ${done ? "border-green-600/50" : "border-border"
                      }`}
                  >
                    <button
                      onClick={() => recordAction(action.key)}
                      className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 transition ${done
                        ? "border-green-500 bg-green-500 text-black"
                        : "border-border hover:border-white/40"
                        }`}
                    >
                      {done ? "✓" : ""}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm">{action.label}</p>
                      <p className="text-muted text-sm mt-0.5">{action.desc}</p>
                      {action.href && (
                        <a
                          href={action.href}
                          className="text-accent text-sm underline mt-1 inline-block"
                        >
                          {action.cta}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          )}
        </div>

        {/* Framing note */}
        <div className="bg-white/5 border border-border p-5 mt-10 text-sm">
          <p className="mb-2 text-muted">
            <span className="text-red-400 font-bold">Not this:</span>{" "}
            &ldquo;Ban all Russians from sport.&rdquo;
          </p>
          <p className="text-muted">
            <span className="text-green-400 font-bold">Say this:</span>{" "}
            &ldquo;A country waging a war of aggression should not parade under
            its flag and anthem at the Paralympics. National symbols reward the
            state, not the athletes.&rdquo;
          </p>
        </div>

        <a
          href="/action"
          className="mt-8 inline-block border border-border px-5 py-2.5 text-sm text-muted hover:text-foreground hover:border-white/30 transition"
        >
          Full action plan: contacts, templates, timeline &rarr;
        </a>
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

      {/* Subscribe + Organize */}
      <section id="subscribe" className="px-6 py-20 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Stay updated */}
          <div>
            <h2 className="text-xl font-bold mb-2">Stay updated</h2>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              Get updates on sponsor responses, media coverage, and the LA 2028
              campaign.
            </p>
            {submitted ? (
              <p className="text-accent font-bold text-sm">
                Thank you. You&apos;re in.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="w-full bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

          {/* Help organize */}
          <div>
            <h2 className="text-xl font-bold mb-2">
              I want to help organize
            </h2>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              If you want an active role — translating content, tracking sponsor
              responses, or coordinating outreach — we&apos;ll reach out with
              instructions.
            </p>
            {orgSubmitted ? (
              <p className="text-accent font-bold text-sm">
                Got it. We&apos;ll be in touch.
              </p>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    await fetch("/api/organize", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        email: orgEmail,
                        why: orgWhy,
                        social: orgSocial,
                      }),
                    });
                  } catch { }
                  setOrgSubmitted(true);
                }}
                className="space-y-2"
              >
                <textarea
                  required
                  placeholder="Why do you want to organize?"
                  value={orgWhy}
                  onChange={(e) => setOrgWhy(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                />
                <input
                  type="url"
                  required
                  placeholder="Public social profile (LinkedIn, Twitter, Instagram…)"
                  value={orgSocial}
                  onChange={(e) => setOrgSocial(e.target.value)}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={orgEmail}
                  onChange={(e) => setOrgEmail(e.target.value)}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="w-full border border-border px-6 py-3 text-sm font-bold tracking-wide hover:border-accent hover:text-accent transition"
                >
                  SEND REQUEST
                </button>
              </form>
            )}
          </div>
        </div>
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
    </main >
  );
}
