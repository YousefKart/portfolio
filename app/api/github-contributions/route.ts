import { getGithubContributions } from '@/lib/github-contributions';

export async function GET() {
  try {
    const data = await getGithubContributions();

    return Response.json(data);
  } catch {
    return Response.json(
      { error: 'Failed to load GitHub contributions' },
      { status: 500 }
    );
  }
}
