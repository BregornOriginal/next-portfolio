'use client';

import React, { useState, useMemo, useEffect } from 'react';
import type { PageInfo, Experience, Skill, Project } from '../typings';
import { buildPortfolioContext } from '../utils/buildPortfolioContext';
import AIChatPanel from '../components/AIChatPanel';
import ChatTrigger from './ChatTrigger';

type Props = {
  pageInfo: PageInfo | null;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
};

export default function AIChatWidget({ pageInfo, experiences, skills, projects }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => setIsOpen(true);
    window.addEventListener('open-gemini-chat', handler);
    return () => window.removeEventListener('open-gemini-chat', handler);
  }, []);

  const systemContext = useMemo(
    () => buildPortfolioContext(pageInfo, experiences, skills, projects),
    [pageInfo, experiences, skills, projects]
  );

  const name = pageInfo?.name ?? 'Me';

  return (
    <>
      <ChatTrigger isOpen={isOpen} onClick={() => setIsOpen((o) => !o)} />
      <AIChatPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        name={name}
        systemContext={systemContext}
      />
    </>
  );
}
