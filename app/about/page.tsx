import React from 'react';
import Leading from '../components/about/Leading';
import { Text } from '../components/about/Text';
import { Team } from '../components/about/Team';
import Awards from '../components/about/Awards';
import HeroSec from '../components/about/hero/page';

export default function page() {
  return (
    <main className="w-full  2xl:max-w-[1440px] mx-auto flex flex-col justify-center items-center">
      <HeroSec />
      <Leading />
      <Text />
      <Team />
      <Awards />
    </main>
  );
}