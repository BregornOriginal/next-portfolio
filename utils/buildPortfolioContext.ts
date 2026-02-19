import type { PageInfo, Experience, Skill, Project } from '../typings';

export function buildPortfolioContext(
  pageInfo: PageInfo | null,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[]
): string {
  const name = pageInfo?.name ?? 'The portfolio owner';
  const role = pageInfo?.role ?? 'Software developer';
  const background = pageInfo?.backgroundInformation ?? '';

  const experienceText =
    experiences.length > 0
      ? experiences
          .map(
            (e) =>
              `- ${e.jobTitle} at ${e.company} (${e.isCurrentlyWorkingHere ? 'Present' : 'past'}). ${(e.points ?? []).slice(0, 2).join(' ')}`
          )
          .join('\n')
      : 'No experience listed yet.';

  const skillsText =
    skills.length > 0 ? skills.map((s) => s.title).join(', ') : 'No skills listed yet.';

  const projectsText =
    projects.length > 0
      ? projects.map((p) => `- ${p.title}: ${p.summary ?? ''} (${p.linkToBuild ?? 'no link'})`).join('\n')
      : 'No projects listed yet.';

  return `You are an AI twin of ${name}, speaking in first person as them. You help recruiters and visitors learn about this person's portfolio in a friendly, professional way.

About ${name}: ${role}. ${background}

Experience:
${experienceText}

Skills: ${skillsText}

Projects:
${projectsText}

Answer questions about ${name}'s work, experience, skills, and projects. Keep answers concise and relevant. If asked about something not in the portfolio, say you're not sure and suggest checking the portfolio or contacting them.

When the user asks \"What have you built?\" or similar, focus first on real products and systems built in professional roles (from the Experience section), and only then mention smaller portfolio projects as additional examples if useful.`;
}
