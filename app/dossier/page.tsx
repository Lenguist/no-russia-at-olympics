import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dossier — Russian War Veterans in Paralympic Sport",
  description:
    "Sourced profiles of Russian athletes connected to military service in the invasion of Ukraine, compiled from the Suspilne investigation and public sources.",
};

const SUSPILNE_URL =
  "https://suspilne.media/1243028-rosijski-sportsmeni-aki-vouvali-proti-ukraini-teper-maut-ambicii-na-ucast-u-paralimpiadi/";
const KHPG_URL = "https://khpg.org/en/1608815528";

export default function DossierPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <a href="/" className="text-muted text-sm hover:text-foreground">
          &larr; Back
        </a>

        <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-4">
          Dossier: Russian war veterans in Paralympic sport
        </h1>

        {/* Important clarification */}
        <div className="bg-white/5 border border-border p-6 mb-8">
          <h2 className="font-bold mb-2">Important clarification</h2>
          <p className="text-muted text-sm leading-relaxed mb-3">
            The Suspilne investigative editorial office confirmed that{" "}
            <strong className="text-foreground">
              none of the 6 Russian athletes invited to the 2026 Paralympics
              are former military
            </strong>
            . However, the Russian Paralympic Committee president Pavel Rozhkov
            stated in his 2026 New Year&apos;s address that{" "}
            <strong className="text-foreground">
              approximately 500 participants in the war against Ukraine
            </strong>{" "}
            are already part of Russian Paralympic teams. The athletes profiled
            below are in the broader team, reserves, and pipeline — and they
            openly declare ambitions to compete internationally.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            This is not about 6 athletes. This is about an institutional
            program that channels war veterans into Paralympic sport as a
            normalization tool.
          </p>
        </div>

        <p className="text-muted mb-4 leading-relaxed">
          This dossier is based on the{" "}
          <a
            href={SUSPILNE_URL}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suspilne investigative report
          </a>{" "}
          by Alla Sadovnyk and Hanna Kalaur (February 18, 2026), supplemented
          with additional public sources. Every claim is linked.
        </p>
        <p className="text-muted mb-12 text-sm">
          Additional sources:{" "}
          <a
            href={KHPG_URL}
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            KHPG.org (English)
          </a>{" "}
          |{" "}
          <a
            href="https://sport.nv.ua/ukr/olimpiada-2026/paralimpiada-2026-mpk-dopustiv-rosiyu-z-praporom-i-gimnom-sered-sportsmeniv-kolishni-viyskovi-50584100.html"
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            NV.ua
          </a>
        </p>

        {/* Person 1: Shinkar */}
        <Person
          name="Vladislav Shinkar"
          subtitle='Callsign "Shiba" · Wheelchair Fencing · 49 years old'
          military={[
            'Went to fight against Ukraine in 2014. As Russian propagandists write, "he took the pain of Donbas as his own." Joined Battalion "Vostok" — a Russian proxy formation in eastern Ukraine.',
            "Served first as machine gunner, then as battalion deputy commander for armament.",
            "Wounded and lost both legs on April 12, 2015, in the village of Zhabunky, Donetsk region.",
            'Continued service as deputy battalion commander for personnel work after prosthetics. Discharged to reserve in 2017.',
          ]}
          paralympic={[
            "After retiring, took up wheelchair fencing.",
            "2024: Included in Russian Paralympic team after taking 2nd place at Russian Championship (confirmed by RPC president Rozhkov).",
            "Competes in 2025 Russian Championship for Omsk oblast team. On Russian Paralympic fencing team candidate list.",
          ]}
          quotes={[
            '"Russia did everything right and on time because if Ukrainian troops had entered the territory of Donetsk, the city would have been wiped out."',
            '"In the near future, you will see, the world will change and we will be present in international competitions. Those guys who defended their homeland at the front will defend the honor of Russia at international competitions." (December 3, 2025)',
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
            {
              label: "AIF.ru biography",
              url: "https://aif.ru/sport/person/shiba_i_shpaga_vladislav_shinkar_lishilsya_obeih_nog_no_ostalsya_voinom",
            },
            {
              label: "Ukraina.ru interview",
              url: "https://ukraina.ru/20221119/1040973957.html",
            },
            {
              label: "Wheelfencing.ru",
              url: "https://www.wheelfencing.ru/cntnt/sorevnovaniya-1/n2025-5/rezultati-chempionata-rossii-872.html",
            },
          ]}
        />

        {/* Person 2: Bondarenko */}
        <Person
          name="Nikolai Bondarenko"
          subtitle="Archery · Krasnodar"
          military={[
            "Volunteered to fight against Ukraine in 2022.",
            "In April 2022, during the battle for Popasna (Luhansk region), lost his right arm.",
          ]}
          quotes={[
            '"I just could not imagine how one could stay away at such a time. I saw the reports from the front and rushed there to help the guys. This is not heroism; this is a simple desire to do something necessary, to contribute to the victory."',
          ]}
          paralympic={[
            "February 2026: Became Master of Sport of Russia and winner of the all-Russian Defenders of the Fatherland Cup in archery.",
            "2025: Champion of Russia in archery for athletes with physical disabilities.",
            "Declared ambitions to participate in the Summer Paralympic Games.",
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
            {
              label: "Paralymp.ru (Feb 2026)",
              url: "https://paralymp.ru/press_center/news/official/09-02-2026-veteranu_svo_chempionu_rossii_po_strelbe_iz_luka_sporta_lits_s_poda_n_bondarenko_prisvoeno_zvanie_ma/",
            },
          ]}
        />

        {/* Person 3: Geninov */}
        <Person
          name="Tsyden Geninov"
          subtitle="Lieutenant · Archery · 29 years old · Zabaykalsky Krai"
          military={[
            "Served in the Russian army since 2020. His contract was ending at the start of the full-scale invasion, but he was called to his unit and sent for training, then deployed to Ukraine.",
            <>
              Served in the{" "}
              <strong className="text-foreground">
                5th Guards Tank Brigade
              </strong>{" "}
              (military unit 46108).{" "}
              <strong className="text-red-400">
                This brigade participated in the offensive on Kyiv region and
                its soldiers committed brutal war crimes against civilians in
                Bucha, Irpin, and Hostomel.
              </strong>
            </>,
            "Lost his right leg below the knee during the war. Does not publicly comment on circumstances.",
          ]}
          quotes={[
            '"I did not particularly consider any other choice. Work is work." (on being sent to war)',
          ]}
          paralympic={[
            "Began archery in 2023 through the Defenders of the Fatherland foundation.",
            "October 2025: CISM World Champion in archery (Tehran) — gold (individual), gold (mixed team), silver (team).",
            "February 2025: Awarded in the Kremlin Palace.",
            "Nominated in Russia for best athlete of 2025.",
          ]}
          buchaNote
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
            {
              label: "RIA Sport (CISM)",
              url: "https://rsport.ria.ru/20251028/cism-2051073627.html",
            },
            {
              label: "Chita.ru",
              url: "https://www.chita.ru/text/sport/2025/02/15/75113141/",
            },
            {
              label: "NV.ua (Bucha units list)",
              url: "https://nv.ua/ukraine/events/izvesten-spisok-podrazdeleniy-rf-sovershavshih-uzhasnye-prestupleniya-v-buche-irpene-i-gostomele-arestovich-50230784.html",
            },
            {
              label: "Svoboda.org (Bucha)",
              url: "https://www.svoboda.org/a/kto-v-otvete-za-ubiystva-v-buche-holodno-pustj-esche-polezhat/31785609.html",
            },
          ]}
        />

        {/* Person 4: Bushmakin */}
        <Person
          name="Anton Bushmakin"
          subtitle="Former marine & sapper · Kayaking · 33 years old · Krasnodar region"
          military={[
            "Volunteered for the war against Ukraine and became a sapper.",
            "In April 2023, wounded near Avdiivka (Donetsk region) while performing a combat mission. Lost both legs.",
            "Awarded the 4th degree St. George Cross.",
            "Makes propaganda statements claiming he was wounded by a French-made mine.",
          ]}
          quotes={[
            '"As soon as the situation changes, I will be ready. I am ready to compete. Of course, under my flag, under the anthem, and to win these competitions. This is the goal: to get first place at the Paralympics." (January 2026, from documentary "Step Up")',
          ]}
          paralympic={[
            "Currently in kayaking, member of Krasnodar region team for athletes with physical disabilities.",
            "January 2026: Documentary made about him; states he is preparing for the Paralympics.",
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
            {
              label: "Dialog.UA",
              url: "https://sport.dialog.ua/328983_1771432432",
            },
          ]}
        />

        {/* Person 5: Vasiliev */}
        <Person
          name="Rinat Vasiliev"
          subtitle="Powerlifter · 31 years old · Moscow Paralympic team"
          military={[
            "Joined Russian army at 19 after graduating construction college. Served 10 years total.",
            "In February 2022, his battalion (based in Stavropol) was sent to Crimea, then as part of the occupation forces to Melitopol.",
            "Commanded convoys bringing ammunition to the front line.",
            'Lost both legs near Melitopol on March 18, 2022. The "Peacemaker" database confirms this date.',
          ]}
          paralympic={[
            "Three-time Moscow powerlifting champion.",
            "Member of Moscow Paralympic team.",
            "Speaker at \"Paralympic lessons\" for war participants.",
            "As of March 2025, trains at least 3 times per week preparing for the Paralympic Games.",
          ]}
          extraNote='Has a YouTube channel featuring edited photos from his military career set to Putin&apos;s announcement of the "special military operation."'
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
            {
              label: "Rossiyskaya Gazeta",
              url: "https://rg.ru/2025/02/26/lishivshijsia-nog-na-svo-veteran-stal-chempionom-po-pauerliftingu.html",
            },
          ]}
        />

        {/* Person 6: Shiryayev — NEW */}
        <Person
          name="Ivan Shiryayev"
          subtitle="Para Snowboard · 41 years old · St. Petersburg · Team reserve"
          military={[
            "Before 2022, worked as a mechanical engineer at a soft drinks factory.",
            "Drafted in autumn 2022 to a motorized brigade in occupied Luhansk region, where he commanded a detachment.",
            "Wounded in autumn 2023 near Bakhmut. Leg amputated. Awarded the Zhukov medal.",
          ]}
          quotes={['"Dreams of participating in the Paralympics."']}
          paralympic={[
            "Began competing in winter 2025.",
            "Won two bronze medals at the first stage of the Russian Para Snowboard Cup in late 2025.",
            "Currently in the reserve of the Russian national team and member of St. Petersburg para snowboard team.",
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
          ]}
        />

        {/* Person 7: Ustyuzhin — NEW */}
        <Person
          name="Ruslan Ustyuzhin"
          subtitle="Sitting Volleyball · 39 years old · Tatarstan / Ulyanovsk"
          military={[
            <>
              Served in Russian airborne troops since 2014. Member of the{" "}
              <strong className="text-foreground">
                31st Guards Airborne Assault Brigade
              </strong>
              .
            </>,
            <>
              Information on Russian social networks indicates he{" "}
              <strong className="text-red-400">
                participated in the battle for Hostomel airport
              </strong>{" "}
              (Kyiv region, February 2022).
            </>,
            "In May 2022, during fighting near Popasna (Luhansk region), had his leg torn off by a shell.",
            "After 6+ months of treatment, returned to serve in the airborne division in Ulyanovsk.",
          ]}
          paralympic={[
            "February 2025: Stated he dreams of going to the Paralympic Games as part of the Russian sitting volleyball team.",
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
          ]}
        />

        {/* Person 8: Ishbulatov — NEW */}
        <Person
          name="Denis Ishbulatov"
          subtitle="Lt. Colonel · Bullseye Shooting · 45 years old · Tula region"
          military={[
            <>
              Served in the{" "}
              <strong className="text-foreground">
                106th Guards Airborne Tula Division
              </strong>
              , which{" "}
              <strong className="text-red-400">
                participated in the offensive on Kyiv region
              </strong>
              .
            </>,
            "Also served in the 104th Airborne Assault Division, currently deployed in the temporarily occupied territory of Kherson region.",
            "Wounded in April 2022; lost his right leg.",
            "Currently serves at a regional military registration office.",
          ]}
          paralympic={[
            "One of the leading shooters in Russia in the para category.",
            "Russian Cup winner in bullseye shooting.",
            'Propagandists claim "his sniper talent began to be revealed in all its glory" in this sport.',
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
          ]}
        />

        {/* Person 9: Saifullin */}
        <Person
          name="Rustam Saifullin"
          subtitle='Colonel · "Hero of Russia" · 40 years old · Tyumen'
          military={[
            "Commander of the 40th Engineer-Sapper Regiment of the 41st Army of the Central Military District.",
            "20 years of military experience. Fought in Chechnya, Syria, Georgia, and Ukraine (from day one of full-scale invasion).",
            "Lost both legs during the crossing of the Desna River. Applied tourniquet himself and continued commanding the crossing.",
            "Hero of the Russian Federation — Gold Star pinned by Defense Minister Shoigu in hospital.",
          ]}
          quotes={[
            "His propaganda video has gathered millions of views on YouTube, featuring a story about a resident of an occupied village who allegedly approached Saifullin to say that \"5 years before the full-scale invasion, their village was settled by Bandera followers who Ukrainized the village.\"",
          ]}
          paralympic={[
            "Currently Deputy Head of the Tyumen Higher Military Engineering Command School.",
            "Won the table tennis competition and silver in powerlifting at the interregional Defenders of the Fatherland Cup in 2023.",
            "Ambassador of the Russian Paralympic Committee's \"We Are Together. Sport\" project.",
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
            {
              label: "Wikipedia",
              url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%84%D1%83%D0%BB%D0%BB%D0%B8%D0%BD,_%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%BC_%D0%93%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%D0%B8%D1%87",
            },
            {
              label: "TASS interview",
              url: "https://tass.ru/interviews/19093089",
            },
          ]}
        />

        {/* Person 10: Kostenko — NEW */}
        <Person
          name="Rostislav Kostenko"
          subtitle='Callsign "Cornet" · Wheelchair Fencing · Luhansk'
          military={[
            "Before 2014, lived in Luhansk and competed in Ukrainian youth fencing championships (in Kharkiv, Kyiv, Khmelnytskyi, Lviv). Stayed in occupied Luhansk.",
            'In 2022, drafted into the so-called "Luhansk People\'s Army." Served as a grenade launcher.',
            "Suffered an injury that cost him his left foot and shin.",
          ]}
          paralympic={[
            "Returned to fencing after injury.",
            "March 2023: Included in the reserve roster of the Russian national Paralympic wheelchair fencing team.",
          ]}
          sources={[
            { label: "Suspilne investigation", url: SUSPILNE_URL },
          ]}
        />

        {/* Institutional context */}
        <div className="border-t border-border pt-8 mt-8">
          <h2 className="text-xl font-bold mb-4">
            The institutional program
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            RPC President Pavel Rozhkov&apos;s own statements, documented by
            Suspilne:
          </p>
          <ul className="text-muted text-sm space-y-3 leading-relaxed list-disc pl-5 mb-4">
            <li>
              <strong className="text-foreground">March 2023:</strong> At the
              &ldquo;Return to Life&rdquo; award ceremony, stated that
              Paralympic athletes &ldquo;together with the leadership of the
              RPC, have been visiting patients of military hospitals and
              participants in the special military operation.&rdquo;
            </li>
            <li>
              <strong className="text-foreground">From 2024:</strong> Began
              publicly stating that war veterans were being included in
              Paralympic teams.
            </li>
            <li>
              <strong className="text-foreground">
                2026 New Year&apos;s address:
              </strong>{" "}
              Claimed{" "}
              <strong className="text-foreground">
                500 war veterans
              </strong>{" "}
              are now in Russian Paralympic teams.
            </li>
          </ul>
          <p className="text-muted text-sm leading-relaxed mb-4">
            Russia actively involves military personnel in sports through
            special programs, contests, and competitions. The Russian
            Paralympic Committee states that involving military personnel in
            major sports is &ldquo;one of the most important and serious areas
            of their activities.&rdquo;
          </p>
          <p className="text-muted text-sm">
            Source:{" "}
            <a
              href={SUSPILNE_URL}
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suspilne investigation (Ukrainian)
            </a>{" "}
            |{" "}
            <a
              href={KHPG_URL}
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              KHPG.org (English)
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

function Person({
  name,
  subtitle,
  military,
  quotes,
  paralympic,
  buchaNote,
  extraNote,
  sources,
}: {
  name: string;
  subtitle: string;
  military: (string | React.ReactNode)[];
  quotes?: string[];
  paralympic: string[];
  buchaNote?: boolean;
  extraNote?: string;
  sources: { label: string; url: string }[];
}) {
  return (
    <article className="mb-16">
      <div className="border-l-2 border-accent pl-4 mb-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-muted text-sm">{subtitle}</p>
      </div>

      <h3 className="font-bold mt-4 mb-1">Military service</h3>
      <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
        {military.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {quotes && quotes.length > 0 && (
        <>
          <h3 className="font-bold mt-4 mb-1">In their own words</h3>
          {quotes.map((q, i) => (
            <p
              key={i}
              className="text-muted text-sm leading-relaxed italic border-l border-muted pl-3 my-2"
            >
              {q}
            </p>
          ))}
        </>
      )}

      <h3 className="font-bold mt-4 mb-1">Paralympic career</h3>
      <ul className="text-muted text-sm space-y-1 leading-relaxed list-disc pl-5">
        {paralympic.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {buchaNote && (
        <div className="bg-red-400/10 border border-red-400/30 p-4 mt-4">
          <p className="text-sm leading-relaxed">
            <strong className="text-red-400">About his unit:</strong> The 5th
            Guards Tank Brigade was deployed from Ulan-Ude to the Kyiv region
            in February 2022. During the occupation of Bucha (March 5-31,
            2022), the brigade participated in systematic killings of
            civilians, torture, sexual violence, and looting. Lt. Nikolai
            Sokovikov of this brigade was convicted in absentia and sentenced
            to life imprisonment for killing two unarmed civilians near Mriya
            village, Bucha district.
          </p>
        </div>
      )}

      {extraNote && (
        <p className="text-muted text-sm mt-3 italic">{extraNote}</p>
      )}

      <div className="mt-3 text-xs text-muted">
        Sources:{" "}
        {sources.map((s, i) => (
          <span key={i}>
            {i > 0 && " | "}
            <a
              href={s.url}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          </span>
        ))}
      </div>
    </article>
  );
}
