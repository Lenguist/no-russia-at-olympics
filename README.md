# No Russia at Paralympics

**Live site:** [no-russia-at-olympics.vercel.app](https://no-russia-at-olympics.vercel.app)

A citizen-led campaign opposing Russia and Belarus competing under their national flags and anthems at the 2026 Winter Paralympics (Milano-Cortina, March 6–15).

## What this is

The International Paralympic Committee voted in September 2025 to fully reinstate Russia and Belarus, restoring their flags and anthems for the first time since 2014. The war against Ukraine is ongoing. Russia's own Paralympic president has stated that approximately 500 war veterans — including soldiers from units linked to the Bucha massacre — are now in Russian Paralympic teams.

This site makes it easy to take action: tag sponsors with a factual question, contact national Paralympic committees, reach journalists, and write to elected representatives.

## The ask

Revert to neutral status — no Russian or Belarusian flag or anthem. This was the policy from 2022 through Paris 2024. We're not asking for something new; we're asking them not to change something that was already working.

## Contributing

PRs are welcome. I check in and merge a couple of times a day — please be patient if yours sits for a few hours.

**Good contributions:**
- Translations of key content (Ukrainian, German, Italian, French, Japanese are most useful given the audience)
- Additional sourced information about the combatant-athlete pipeline
- UI/UX improvements
- Additional sponsor or contact information
- Bug fixes

**Ground rules:**
- All facts must be sourced. No unsourced claims.
- No attacks on individual athletes or disability. This campaign is about state symbols and institutional decisions.
- Keep the tone factual and calm — emotional framing gets dismissed; documented evidence does not.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  page.tsx          # Main page
  dossier/          # Sourced profiles of war veterans in Russian Paralympic sport
  action/           # Detailed action plan: sponsors, committees, journalists
  api/
    actions/        # Tracks campaign actions and page views
    subscribe/      # Email signup (Resend)
    organize/       # Organizer requests (Resend)
press/              # Journalist pitch templates
```

## Environment variables (for deployment)

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | From resend.com — powers email signup and organizer form |
| `NOTIFICATION_EMAIL` | Yes | Your email — receives new signup and organizer notifications |
| `RESEND_AUDIENCE_ID` | No | Resend audience ID for managing subscriber list |

## License

MIT. Use freely for advocacy purposes.
