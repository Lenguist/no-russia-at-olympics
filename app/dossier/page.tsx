import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dossier — Who Russia Is Sending to the Paralympics",
  description:
    "Detailed, sourced profiles of Russian Paralympic athletes connected to military service in the invasion of Ukraine.",
};

const SOURCES = {
  ipcAnnouncement:
    "https://www.paralympic.org/news/update-potential-participation-npc-belarus-and-russia-milano-cortina-2026",
  france24:
    "https://www.france24.com/en/sport/20260217-paralympic-governing-body-lifts-ban-on-russian-and-belarusian-athletes-ahead-of-2026-games",
  nbcUkraineBoycott:
    "https://www.nbcnews.com/world/ukraine/ukraine-boycott-winter-paralympics-russians-competing-flag-belarus-rcna259525",
  alJazeera:
    "https://www.aljazeera.com/sports/2026/2/18/russian-belarusian-athletes-to-compete-under-own-flag-at-paralympics-2026",
  khpg: "https://khpg.org/en/1608815528",
  sportnews24tv:
    "https://sportnews.24tv.ua/ru/paralimpiada-2026-sportsmeny-rossii-kotorye-srazhalis-protiv_n3011932",
  commentsUa:
    "https://society.comments.ua/news/warrussia/voennyh-kotorye-ubivali-ukraincev-pustili-na-paralimpiyskie-igry-2026-797825.html",
};

export default function DossierPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <a href="/" className="text-muted text-sm hover:text-foreground">
          &larr; Back
        </a>

        <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-4">
          Dossier: Who Russia is sending
        </h1>
        <p className="text-muted mb-4 leading-relaxed">
          The following profiles are compiled from publicly available sources —
          Russian state media interviews, Ukrainian investigative journalism
          (Suspilne, 24tv.ua), Russian Paralympic Committee announcements, and
          court documents. Every claim is linked to its source.
        </p>
        <p className="text-muted mb-12 text-sm">
          Primary Ukrainian investigation:{" "}
          <a
            href={SOURCES.sportnews24tv}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sportnews 24tv.ua
          </a>{" "}
          |{" "}
          <a
            href={SOURCES.khpg}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            KHPG.org
          </a>{" "}
          |{" "}
          <a
            href={SOURCES.commentsUa}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comments.ua
          </a>
        </p>

        {/* Person 1 */}
        <article className="mb-16">
          <div className="border-l-2 border-accent pl-4 mb-4">
            <h2 className="text-2xl font-bold">Vladislav Shinkar</h2>
            <p className="text-muted text-sm">
              Callsign &ldquo;Shiba&rdquo; &middot; Wheelchair Fencing &middot;
              ~49 years old
            </p>
          </div>
          <h3 className="font-bold mt-4 mb-1">Military service</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              Joined armed militia in Donetsk in spring 2014, served in{" "}
              <strong className="text-foreground">
                Battalion &ldquo;Vostok&rdquo;
              </strong>{" "}
              — a Russian proxy formation in eastern Ukraine
            </li>
            <li>
              Participated in the{" "}
              <strong className="text-foreground">
                Battle for Donetsk Airport
              </strong>{" "}
              (2014-2015)
            </li>
            <li>
              Lost both legs in spring 2015 from an explosive device near
              Donetsk Airport
            </li>
            <li>Discharged from &ldquo;DPR army&rdquo; in 2017</li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Paralympic career</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              Began wheelchair fencing in 2017-2018 under coach Yulia Lysenko
            </li>
            <li>
              Won gold in epee at Russia&apos;s internal &ldquo;Summer
              Paralympic Games&rdquo; (held because Russia was banned from
              official Paralympics)
            </li>
            <li>
              Competes in 2025 Russian Championship for Omsk oblast team
            </li>
            <li>On Russian Paralympic fencing team candidate list</li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Propaganda</h3>
          <p className="text-muted text-sm leading-relaxed">
            In interviews with Russian media, spread the narrative that Ukrainian
            defenders of Donetsk airport were killed by their own command — a
            well-known Russian propaganda claim. Featured as an
            &ldquo;inspirational hero of Donbas.&rdquo;
          </p>
          <div className="mt-3 text-xs text-muted">
            Sources:{" "}
            <a
              href="https://aif.ru/sport/person/shiba_i_shpaga_vladislav_shinkar_lishilsya_obeih_nog_no_ostalsya_voinom"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AIF.ru
            </a>{" "}
            |{" "}
            <a
              href="https://ukraina.ru/20221119/1040973957.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ukraina.ru interview
            </a>{" "}
            |{" "}
            <a
              href="https://nashgorod.ru/news/2023-03-30/nikto-krome-nas-istoriya-desantnika-biznesmena-voennogo-i-paralimpiytsa-iz-donetska-2896608"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              NashGorod.ru
            </a>{" "}
            |{" "}
            <a
              href="https://www.wheelfencing.ru/cntnt/sorevnovaniya-1/n2025-5/rezultati-chempionata-rossii-872.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wheelfencing.ru
            </a>
          </div>
        </article>

        {/* Person 2 */}
        <article className="mb-16">
          <div className="border-l-2 border-accent pl-4 mb-4">
            <h2 className="text-2xl font-bold">Nikolai Bondarenko</h2>
            <p className="text-muted text-sm">
              Archery &middot; Krasnodar Krai
            </p>
          </div>
          <h3 className="font-bold mt-4 mb-1">Military service</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              Volunteered at the start of the full-scale invasion (February
              2022)
            </li>
            <li>
              Lost an arm in combat near{" "}
              <strong className="text-foreground">Popasna</strong> (Luhansk
              oblast) — site of extremely heavy fighting in spring 2022
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Paralympic career</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              2024: Won &ldquo;Cup of Defenders of the Fatherland&rdquo; in
              archery
            </li>
            <li>
              2025: <strong className="text-foreground">Champion of Russia</strong> in archery for athletes with
              physical disabilities
            </li>
            <li>
              2025: Laureate of &ldquo;Heroes of Our Time&rdquo; award by the
              Russian Paralympic Committee
            </li>
            <li>
              February 9, 2026: Awarded title of{" "}
              <strong className="text-foreground">
                Master of Sport of Russia
              </strong>{" "}
              by the Russian Paralympic Committee
            </li>
          </ul>
          <div className="mt-3 text-xs text-muted">
            Sources:{" "}
            <a
              href="https://paralymp.ru/press_center/news/official/09-02-2026-veteranu_svo_chempionu_rossii_po_strelbe_iz_luka_sporta_lits_s_poda_n_bondarenko_prisvoeno_zvanie_ma/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paralymp.ru (Feb 2026)
            </a>{" "}
            |{" "}
            <a
              href="https://paralymp.ru/press_center/news/sport/sport_lits_s_poda/strelba_iz_luka/02-07-2025-opredeleny_pobediteli_i_prizery_chempionata_rossii_po_strelbe_iz_luka_sporta_lits_s_poda_/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paralymp.ru Championship
            </a>
          </div>
        </article>

        {/* Person 3 */}
        <article className="mb-16">
          <div className="border-l-2 border-accent pl-4 mb-4">
            <h2 className="text-2xl font-bold">Tsyden Geninov</h2>
            <p className="text-muted text-sm">
              Lieutenant &middot; Archery &middot; Zabaykalsky Krai
            </p>
          </div>
          <h3 className="font-bold mt-4 mb-1">Military service</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              Lieutenant in the{" "}
              <strong className="text-foreground">
                5th Guards Tank Brigade
              </strong>{" "}
              (military unit 46108), stationed near Ulan-Ude, Buryatia
            </li>
            <li>
              <strong className="text-red-400">
                This brigade is directly implicated in the Bucha massacre
              </strong>{" "}
              and atrocities in Irpin and Hostomel. Ukrainian authorities
              published lists naming the 5th Separate Tank Brigade of the 36th
              Army of the Eastern Military District among units responsible for
              war crimes against civilians in the Kyiv region.
            </li>
            <li>Lost a leg during combat in Ukraine</li>
            <li>Awarded the Order of Courage</li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Paralympic career</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              Began archery in 2023 through the &ldquo;Defenders of the
              Fatherland&rdquo; foundation
            </li>
            <li>
              October 2025:{" "}
              <strong className="text-foreground">CISM World Champion</strong>{" "}
              in archery among military servicemen (Tehran) — 3 medals: gold
              (individual), gold (mixed team), silver (team)
            </li>
            <li>February 2025: Awarded in the Kremlin Palace</li>
            <li>Nominated for CISM Best Athlete of 2025</li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">
            About the 5th Guards Tank Brigade at Bucha
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            The brigade was deployed from Ulan-Ude to the Kyiv region at the
            start of the full-scale invasion in February 2022. During the
            occupation of Bucha (approximately March 5-31, 2022), Russian
            forces conducted systematic killings of civilians, torture, sexual
            violence, and looting. Commander: Colonel A. Kondrov.
          </p>
          <div className="mt-3 text-xs text-muted">
            Sources:{" "}
            <a
              href="https://rsport.ria.ru/20251028/cism-2051073627.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RIA Sport
            </a>{" "}
            |{" "}
            <a
              href="https://www.chita.ru/text/sport/2025/02/15/75113141/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chita.ru
            </a>{" "}
            |{" "}
            <a
              href="https://nv.ua/ukraine/events/izvesten-spisok-podrazdeleniy-rf-sovershavshih-uzhasnye-prestupleniya-v-buche-irpene-i-gostomele-arestovich-50230784.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              NV.ua (Bucha units list)
            </a>{" "}
            |{" "}
            <a
              href="https://www.svoboda.org/a/kto-v-otvete-za-ubiystva-v-buche-holodno-pustj-esche-polezhat/31785609.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Svoboda.org (Bucha investigation)
            </a>
          </div>
        </article>

        {/* Person 4 */}
        <article className="mb-16">
          <div className="border-l-2 border-accent pl-4 mb-4">
            <h2 className="text-2xl font-bold">Anton Bushmakov</h2>
            <p className="text-muted text-sm">
              Former marine &amp; sapper &middot; Kayaking
            </p>
          </div>
          <h3 className="font-bold mt-4 mb-1">Military service</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>Former marine (morpekh) and sapper</li>
            <li>
              Lost both legs near{" "}
              <strong className="text-foreground">Avdiivka</strong> (Donetsk
              oblast) — site of one of the most grinding Russian offensives
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Paralympic career</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>Took up kayaking/canoeing after rehabilitation</li>
            <li>
              January 2026: Reported to be actively preparing for the Paralympic
              Games
            </li>
          </ul>
          <div className="mt-3 text-xs text-muted">
            Sources:{" "}
            <a
              href="https://sport.dialog.ua/328983_1771432432"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dialog.UA
            </a>{" "}
            |{" "}
            <a
              href={SOURCES.sportnews24tv}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              24tv.ua
            </a>
          </div>
        </article>

        {/* Person 5 */}
        <article className="mb-16">
          <div className="border-l-2 border-accent pl-4 mb-4">
            <h2 className="text-2xl font-bold">Rinat Vasiliev</h2>
            <p className="text-muted text-sm">
              Powerlifter &middot; Moscow Paralympic team
            </p>
          </div>
          <h3 className="font-bold mt-4 mb-1">Military service</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              Fought against Ukraine{" "}
              <strong className="text-foreground">since 2014</strong> — over 10
              years of participation in the armed conflict
            </li>
            <li>
              In March 2022, his unit was near{" "}
              <strong className="text-foreground">Melitopol</strong>{" "}
              (Zaporizhzhia oblast) when hit by a Ukrainian rocket strike
            </li>
            <li>Was in a coma for several days on the brink of death</li>
            <li>Both legs amputated</li>
            <li>Awarded Medal &ldquo;For Valour&rdquo;</li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Paralympic career</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              February 2023: 1st place at Moscow Championship in powerlifting
            </li>
            <li>
              April 2023: Debuted at Russian Championship as part of Moscow
              team
            </li>
            <li>Member of Moscow Paralympic team in powerlifting</li>
            <li>
              As of March 2025: trains 3 times per week preparing for
              Paralympics
            </li>
          </ul>
          <div className="mt-3 text-xs text-muted">
            Sources:{" "}
            <a
              href="https://rg.ru/2025/02/26/lishivshijsia-nog-na-svo-veteran-stal-chempionom-po-pauerliftingu.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rossiyskaya Gazeta
            </a>{" "}
            |{" "}
            <a
              href={SOURCES.commentsUa}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comments.ua
            </a>
          </div>
        </article>

        {/* Person 6 */}
        <article className="mb-16">
          <div className="border-l-2 border-accent pl-4 mb-4">
            <h2 className="text-2xl font-bold">Rustam Saifullin</h2>
            <p className="text-muted text-sm">
              Colonel &middot; &ldquo;Hero of Russia&rdquo; &middot; Born 1983
            </p>
          </div>
          <h3 className="font-bold mt-4 mb-1">Military service</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-foreground">Colonel</strong>, commander of
              the{" "}
              <strong className="text-foreground">
                40th Engineer-Sapper Regiment
              </strong>{" "}
              of the 41st Combined Arms Army
            </li>
            <li>
              Wars: <strong className="text-foreground">Chechnya</strong>,{" "}
              <strong className="text-foreground">Georgia</strong> (2008),{" "}
              <strong className="text-foreground">Syria</strong>,{" "}
              <strong className="text-foreground">Ukraine</strong> (from day
              one of full-scale invasion)
            </li>
            <li>
              Led regiment in advance on Chernihiv direction; personally
              directed construction of crossings over the Desna River under
              Ukrainian fire
            </li>
            <li>
              Both legs destroyed by mortar fire; continued commanding regiment
              for ~40 minutes while bleeding
            </li>
            <li>
              Awarded{" "}
              <strong className="text-foreground">
                Hero of the Russian Federation
              </strong>{" "}
              by Putin; Gold Star pinned by Defense Minister Shoigu in hospital
            </li>
            <li>
              After two severe woundings,{" "}
              <strong className="text-foreground">
                returned to the front in November 2023
              </strong>
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Propaganda activities</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              One of the most prominent Russian war propaganda figures —
              interviews in TASS, Rossiyskaya Gazeta, Izvestia, Komsomolskaya
              Pravda
            </li>
            <li>
              Spreads narratives about &ldquo;liberating&rdquo; Ukrainian
              territories; claims residents thanked Russian soldiers for
              &ldquo;saving them from Banderites&rdquo;
            </li>
            <li>
              Claims Ukrainian forces disguise mines as children&apos;s toys
            </li>
            <li>
              Tours Russian cities giving pro-war speeches to youth, cadets,
              and police
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-1">Connection to Paralympics</h3>
          <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
            <li>
              Ambassador of &ldquo;We Are Together. Sport&rdquo; project by
              the Russian Paralympic Committee
            </li>
            <li>
              Champion of &ldquo;Cup of Defenders of the Fatherland&rdquo; in
              table tennis; silver in powerlifting
            </li>
            <li>
              Participates in Paralympic Committee outreach events for war
              veterans
            </li>
            <li>
              Not officially on team roster, but deeply embedded in the
              Paralympic training infrastructure
            </li>
          </ul>
          <div className="mt-3 text-xs text-muted">
            Sources:{" "}
            <a
              href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%84%D1%83%D0%BB%D0%BB%D0%B8%D0%BD,_%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%BC_%D0%93%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%D0%B8%D1%87"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>{" "}
            |{" "}
            <a
              href="https://tass.ru/interviews/19093089"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              TASS interview
            </a>{" "}
            |{" "}
            <a
              href="https://www.tatar-inform.ru/news/geroi-rossii-rustam-saifullin-ya-ze-sibirskii-tatarin-s-detstva-priucen-k-trudu-5891000"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tatar-Inform
            </a>{" "}
            |{" "}
            <a
              href="https://paralymp.ru/press_center/news/master_klassy_dlya_voennosluzhashchikh/12-03-2025-pkr_provel_paralimpiyskiy_urok_dlya_veteranov_svo_uchastnikov_zimnego_kubka_zashchitnikov_otechestva/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paralymp.ru
            </a>
          </div>
        </article>

        <div className="border-t border-border pt-8 mt-8">
          <h2 className="text-xl font-bold mb-4">
            The Russian Paralympic Committee&apos;s own words
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            The president of the Russian Paralympic Committee has stated that
            approximately{" "}
            <strong className="text-foreground">
              500 participants in the war against Ukraine
            </strong>{" "}
            are already part of Russia&apos;s Paralympic teams. This is not a
            fringe phenomenon — it is an institutional program.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            Source:{" "}
            <a
              href={SOURCES.khpg}
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              KHPG.org
            </a>
          </p>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <a
            href="/#take-action"
            className="bg-accent text-black font-bold px-6 py-3 text-sm tracking-wide hover:opacity-90 transition inline-block"
          >
            TAKE ACTION
          </a>
        </div>
      </section>
    </main>
  );
}
