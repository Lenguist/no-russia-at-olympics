import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detailed Action Plan — No Russia at Paralympics",
  description:
    "Who to contact, what to say, and how to coordinate pressure on IPC and sponsors.",
};

export default function ActionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <a href="/" className="text-muted text-sm hover:text-foreground">
          &larr; Back
        </a>

        <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-4">
          Detailed action plan
        </h1>
        <p className="text-muted mb-12 leading-relaxed">
          This page provides specific contacts, templates, and coordination
          guidance. The opening ceremony is{" "}
          <strong className="text-foreground">March 6, 2026</strong>. Every
          day of pressure before that date matters.
        </p>

        {/* Section 1: IPC */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            1. Contact the IPC directly
          </h2>
          <div className="bg-white/5 border border-border p-4 mb-4">
            <p className="text-sm text-muted mb-2">
              <strong className="text-foreground">
                International Paralympic Committee
              </strong>
            </p>
            <ul className="text-sm text-muted space-y-1">
              <li>
                Website:{" "}
                <a
                  href="https://www.paralympic.org/contact"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  paralympic.org/contact
                </a>
              </li>
              <li>
                President: Andrew Parsons (Brazil)
              </li>
              <li>
                HQ: Adenauerallee 212-214, 53113 Bonn, Germany
              </li>
              <li>Phone: +49 228 2097 200</li>
              <li>
                Twitter/X:{" "}
                <a
                  href="https://twitter.com/Paralympics"
                  className="text-accent underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Paralympics
                </a>
              </li>
            </ul>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Ask them to reinstate neutral status (no flags, no anthem) for
            Russian and Belarusian athletes. Reference the combatant-athlete
            profiles.
          </p>
        </section>

        {/* Section 2: Sponsors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            2. Pressure sponsors (highest leverage)
          </h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            These companies fund the Paralympics directly. They have public
            contact forms and active social media. Tag them publicly with calm,
            factual questions. Companies monitor brand risk closely — public
            tags trigger internal escalation.
          </p>

          <h3 className="font-bold mb-3">
            Priority targets (most PR-sensitive)
          </h3>

          <div className="space-y-4 mb-8">
            <SponsorCard
              name="Visa"
              twitter="@Visa"
              twitterUrl="https://twitter.com/Visa"
              instagram="@visa"
              contact="https://usa.visa.com/support/consumer/contact-visa.html"
              hq="San Francisco, CA, USA"
            />
            <SponsorCard
              name="Coca-Cola"
              twitter="@CocaCola"
              twitterUrl="https://twitter.com/CocaCola"
              instagram="@cocacola"
              contact="https://www.coca-colacompany.com/contact-us"
              hq="Atlanta, GA, USA"
            />
            <SponsorCard
              name="Samsung"
              twitter="@Samsung"
              twitterUrl="https://twitter.com/Samsung"
              instagram="@samsung"
              contact="https://www.samsung.com/us/support/contact/"
              hq="Suwon, South Korea"
            />
            <SponsorCard
              name="Airbnb"
              twitter="@Airbnb"
              twitterUrl="https://twitter.com/Airbnb"
              instagram="@airbnb"
              contact="https://www.airbnb.com/help"
              hq="San Francisco, CA, USA"
            />
            <SponsorCard
              name="Allianz"
              twitter="@Allianz"
              twitterUrl="https://twitter.com/Allianz"
              instagram="@allianz"
              contact="https://www.allianz.com/en/press/contact.html"
              hq="Munich, Germany"
            />
          </div>

          <h3 className="font-bold mb-3">Secondary targets</h3>
          <div className="space-y-4 mb-8">
            <SponsorCard
              name="Procter & Gamble"
              twitter="@ProcterGamble"
              twitterUrl="https://twitter.com/ProcterGamble"
              instagram="@proctergamble"
              contact="https://us.pg.com/contact-us/"
              hq="Cincinnati, OH, USA"
            />
            <SponsorCard
              name="Deloitte"
              twitter="@Deloitte"
              twitterUrl="https://twitter.com/Deloitte"
              instagram="@deloitte"
              contact="https://www2.deloitte.com/global/en/footerlinks/contact-us.html"
              hq="London, UK"
            />
            <SponsorCard
              name="Ottobock"
              twitter="@ottobock"
              twitterUrl="https://twitter.com/ottobock"
              instagram="@ottobock"
              contact="https://www.ottobock.com/en-us/contact"
              hq="Duderstadt, Germany"
              note="Prosthetics company — profits from disability while sponsoring an event featuring war combatants"
            />
            <SponsorCard
              name="AB InBev (Budweiser)"
              twitter="@ABInBev"
              twitterUrl="https://twitter.com/ABInBev"
              instagram="@budweiser"
              contact="https://www.ab-inbev.com/contact/"
              hq="Leuven, Belgium"
            />
            <SponsorCard
              name="Stellantis (Milano-Cortina local partner)"
              twitter="@Stellantis"
              twitterUrl="https://twitter.com/Stellantis"
              instagram="@stellantis"
              contact="https://www.stellantis.com/en/contact-us"
              hq="Amsterdam, Netherlands / Turin, Italy"
              note="Italian presence — sensitive to EU opinion"
            />
          </div>

          <div className="bg-white/5 border border-border p-4">
            <h4 className="font-bold mb-2">Template message for sponsors</h4>
            <p className="text-muted text-sm italic leading-relaxed">
              &ldquo;@[Sponsor] — The 2026 Paralympics will feature athletes
              who served in Russia&apos;s military invasion of Ukraine,
              including a member of the 5th Guards Tank Brigade implicated in
              the Bucha massacre. They will compete under the Russian flag.
              Does [Sponsor] support this? We would welcome a public
              statement. Details: [link to dossier page]&rdquo;
            </p>
          </div>
        </section>

        {/* Section 3: National Paralympic Committees */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            3. Contact your national Paralympic committee
          </h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            National committees vote inside the IPC. Internal dissent changes
            policy. Email yours and ask them to publicly oppose the
            reinstatement or demand neutral status.
          </p>

          <div className="space-y-3">
            <NpcCard
              country="United States"
              name="U.S. Olympic & Paralympic Committee"
              url="https://www.usopc.org/contact-us"
              twitter="@TeamUSA"
            />
            <NpcCard
              country="United Kingdom"
              name="British Paralympic Association"
              url="https://paralympics.org.uk/contact"
              twitter="@ParalympicsGB"
            />
            <NpcCard
              country="Canada"
              name="Canadian Paralympic Committee"
              url="https://www.paralympic.ca/contact"
              twitter="@CDNParalympics"
            />
            <NpcCard
              country="Germany"
              name="Deutscher Behindertensportverband"
              url="https://www.dbs-npc.de/kontakt.html"
              twitter="@Paralympic_Team"
            />
            <NpcCard
              country="France"
              name="Comite Paralympique et Sportif Francais"
              url="https://www.france-paralympique.fr/contact"
              twitter="@FrParalympique"
            />
            <NpcCard
              country="Australia"
              name="Paralympics Australia"
              url="https://www.paralympic.org.au/contact/"
              twitter="@AUSParalympics"
            />
            <NpcCard
              country="Japan"
              name="Japanese Paralympic Committee"
              url="https://www.parasports.or.jp/english/"
              twitter="@JPN_Paralympic"
            />
          </div>

          <div className="bg-white/5 border border-border p-4 mt-6">
            <h4 className="font-bold mb-2">Template email</h4>
            <p className="text-muted text-sm italic leading-relaxed">
              &ldquo;Dear [Committee Name], I am writing to express concern
              about the IPC&apos;s decision to allow Russian and Belarusian
              athletes to compete under national flags at the 2026
              Paralympics. Among Russia&apos;s delegation are individuals
              directly connected to military service in the invasion of
              Ukraine, including a member of a unit implicated in the Bucha
              massacre. I urge [Committee Name] to publicly call for neutral
              status (no flags, no anthem) or demand an emergency review.
              [Your name]&rdquo;
            </p>
          </div>
        </section>

        {/* Section 4: Elected representatives */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            4. Write to elected representatives
          </h2>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            35 countries already issued a joint statement. Push your
            representatives to go further — ask for official diplomatic
            objections, parliamentary questions, or ceremony boycotts.
          </p>
          <ul className="text-muted text-sm space-y-2 list-disc pl-5 leading-relaxed">
            <li>
              <strong className="text-foreground">EU citizens:</strong> Email
              your MEP via{" "}
              <a
                href="https://www.europarl.europa.eu/meps/en/home"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                europarl.europa.eu
              </a>
            </li>
            <li>
              <strong className="text-foreground">UK citizens:</strong> Find
              your MP at{" "}
              <a
                href="https://members.parliament.uk/members/commons"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                parliament.uk
              </a>
            </li>
            <li>
              <strong className="text-foreground">US citizens:</strong> Find
              your Representative at{" "}
              <a
                href="https://www.house.gov/representatives/find-your-representative"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                house.gov
              </a>
            </li>
            <li>
              <strong className="text-foreground">Canadian citizens:</strong>{" "}
              Find your MP at{" "}
              <a
                href="https://www.ourcommons.ca/members/en"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ourcommons.ca
              </a>
            </li>
          </ul>
          <p className="text-muted text-sm mt-4 leading-relaxed">
            Reference the{" "}
            <a
              href="https://valtioneuvosto.fi/en/-/1410845/sports-ministers-express-concern-over-ipc-decision-not-to-maintain-suspensions-on-russia-and-belarus-1"
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              35-country joint statement
            </a>{" "}
            and ask: why has your country not taken stronger action?
          </p>
        </section>

        {/* Section 5: Media */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            5. Reach journalists
          </h2>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            The combatant-athlete story is underreported in English-language
            media. Journalists covering this topic:
          </p>
          <div className="space-y-3">
            <JournalistCard
              name="Tariq Panja"
              outlet="New York Times"
              twitter="@taraborelli"
              twitterUrl="https://twitter.com/tariqpanja"
              muckrack="https://muckrack.com/tariqpanja"
            />
            <JournalistCard
              name="Sean Ingle"
              outlet="The Guardian"
              twitter="@saboringle"
              twitterUrl="https://twitter.com/saboringle"
            />
            <JournalistCard
              name="Nick Butler"
              outlet="Inside the Games"
              twitter="@NickButlerITG"
              twitterUrl="https://twitter.com/NickButlerITG"
            />
            <JournalistCard
              name="Halya Coynash"
              outlet="KHPG.org (Kharkiv Human Rights Group)"
              twitter=""
              twitterUrl=""
              note="Author of the comprehensive KHPG investigation"
            />
          </div>
          <p className="text-muted text-sm mt-4 leading-relaxed">
            Send them the{" "}
            <a href="/dossier" className="text-accent underline">
              dossier
            </a>{" "}
            with sourced profiles. Journalists need documented cases, not
            opinion — that is what we provide.
          </p>
        </section>

        {/* Section 6: Coordination */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            6. Coordinate with organizations
          </h2>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            Single voices are ignored. Organized clusters are noticed. Connect
            with:
          </p>
          <ul className="text-muted text-sm space-y-2 list-disc pl-5 leading-relaxed">
            <li>
              <strong className="text-foreground">
                Ukrainian diaspora organizations
              </strong>{" "}
              in your country — they are already mobilized
            </li>
            <li>
              <a
                href="https://www.ukrainianworldcongress.org/"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ukrainian World Congress
              </a>
            </li>
            <li>
              <a
                href="https://www.sportresolutions.com/"
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sport Resolutions
              </a>{" "}
              (sports governance NGO)
            </li>
            <li>
              Local human rights organizations with sports governance focus
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Timeline</h2>
          <div className="space-y-3 text-sm">
            <TimelineItem
              date="Feb 18-22"
              label="Launch"
              detail="Share dossier, initial social media + journalist outreach"
            />
            <TimelineItem
              date="Feb 22-27"
              label="Amplify"
              detail="Sponsor tagging begins, coordinate with orgs, follow up with journalists"
            />
            <TimelineItem
              date="Feb 28 - Mar 3"
              label="Peak pressure"
              detail="Maximum visibility before ceremony. Escalate non-responses to business journalists."
            />
            <TimelineItem
              date="Mar 4-6"
              label="Opening ceremony"
              detail="Document protests, coverage, sponsor silence"
            />
            <TimelineItem
              date="Mar 6+"
              label="Long game"
              detail="Shift focus to preventing full Russian team at LA 2028"
            />
          </div>
        </section>

        <div className="border-t border-border pt-8">
          <a
            href="/"
            className="text-muted text-sm hover:text-foreground"
          >
            &larr; Back to main page
          </a>
        </div>
      </section>
    </main>
  );
}

function SponsorCard({
  name,
  twitter,
  twitterUrl,
  instagram,
  contact,
  hq,
  note,
}: {
  name: string;
  twitter: string;
  twitterUrl: string;
  instagram: string;
  contact: string;
  hq: string;
  note?: string;
}) {
  return (
    <div className="border border-border p-4">
      <h4 className="font-bold">{name}</h4>
      <div className="text-sm text-muted mt-1 space-y-0.5">
        <p>
          Twitter:{" "}
          <a
            href={twitterUrl}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {twitter}
          </a>{" "}
          &middot; Instagram: {instagram}
        </p>
        <p>
          Contact:{" "}
          <a
            href={contact}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.replace("https://", "").split("/")[0]}
          </a>
        </p>
        <p>HQ: {hq}</p>
        {note && (
          <p className="text-xs mt-1 italic">{note}</p>
        )}
      </div>
    </div>
  );
}

function NpcCard({
  country,
  name,
  url,
  twitter,
}: {
  country: string;
  name: string;
  url: string;
  twitter: string;
}) {
  return (
    <div className="border border-border p-3">
      <p className="font-bold text-sm">{country}</p>
      <p className="text-muted text-sm">
        {name} &middot;{" "}
        <a
          href={url}
          className="text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>{" "}
        &middot;{" "}
        <a
          href={`https://twitter.com/${twitter.replace("@", "")}`}
          className="text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitter}
        </a>
      </p>
    </div>
  );
}

function JournalistCard({
  name,
  outlet,
  twitter,
  twitterUrl,
  muckrack,
  note,
}: {
  name: string;
  outlet: string;
  twitter: string;
  twitterUrl: string;
  muckrack?: string;
  note?: string;
}) {
  return (
    <div className="border border-border p-3">
      <p className="font-bold text-sm">
        {name}{" "}
        <span className="text-muted font-normal">— {outlet}</span>
      </p>
      <p className="text-muted text-sm">
        {twitterUrl && (
          <>
            <a
              href={twitterUrl}
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {twitter || "Twitter"}
            </a>
            {muckrack && " | "}
          </>
        )}
        {muckrack && (
          <a
            href={muckrack}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Muck Rack
          </a>
        )}
        {note && <span className="text-xs italic"> — {note}</span>}
      </p>
    </div>
  );
}

function TimelineItem({
  date,
  label,
  detail,
}: {
  date: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-accent font-bold w-28 shrink-0">{date}</div>
      <div>
        <span className="font-bold">{label}</span>
        <span className="text-muted"> — {detail}</span>
      </div>
    </div>
  );
}
