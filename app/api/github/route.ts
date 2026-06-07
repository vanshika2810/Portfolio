export async function GET() {
  try {
    const username = "Shivansh-3010";

    const userRes = await fetch(
      `https://api.github.com/users/${username}`,
      {
        next: { revalidate: 3600 },
      }
    );

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`,
      {
        next: { revalidate: 3600 },
      }
    );

    const user = await userRes.json();
    const repos = await reposRes.json();

    return Response.json({
      user,
      repos,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}