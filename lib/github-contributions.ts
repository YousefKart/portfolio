export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionWeek = {
  days: ContributionDay[];
};

export async function getGithubContributions(username?: string) {
  const login = username ?? process.env.GITHUB_USERNAME;

  if (!login) {
    throw new Error('Missing GitHub username');
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { login },
    }),
    next: {
      revalidate: 60 * 60 * 6, // cache for 6 hours
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch GitHub contributions');
  }

  const json = await res.json();

  const weeks =
    json.data.user.contributionsCollection.contributionCalendar.weeks;

  return weeks.map((week: any) => ({
    days: week.contributionDays.map((day: any) => ({
      date: day.date,
      count: day.contributionCount,
      level: contributionLevelToNumber(day.contributionLevel),
    })),
  })) satisfies ContributionWeek[];
}

function contributionLevelToNumber(level: string): 0 | 1 | 2 | 3 | 4 {
  switch (level) {
    case 'FIRST_QUARTILE':
      return 1;
    case 'SECOND_QUARTILE':
      return 2;
    case 'THIRD_QUARTILE':
      return 3;
    case 'FOURTH_QUARTILE':
      return 4;
    default:
      return 0;
  }
}
