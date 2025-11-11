import React from 'react';
import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import { TbBrandFramerMotion } from 'react-icons/tb';

import {
  SiRadixui,
  SiZod,
  SiAxios,
  SiReactquery,
  // SiNextauth,
  // SiI18next,
  // SiAmazonaws,
  // SiHeroicons,
  // SiZustand,
  // SiMoment,
  // SiMicrosoftexcel,
  SiTrpc,
  SiSwiper,
  SiGreensock,
  SiAlgolia,
  SiFfmpeg,
  SiDaisyui,
  SiChartdotjs,
  SiAuth0,
} from 'react-icons/si';
import { TbCommand, TbEdit, TbPencil, TbForms } from 'react-icons/tb';
import { BsBellFill } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';

import {
  SiAngular,
  SiApollographql,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si';
import ShadcnIcon from '../../public/icons/ShadcnIcon';
import Image from 'next/image';
import { LuShield } from 'react-icons/lu';
import { CiClock2 } from 'react-icons/ci';
import { RiFileExcel2Line } from 'react-icons/ri';

export type stacksProps = {
  [key: string]: React.JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  'Artificial Intelligence': (
    <BsRobot size={iconSize} className='text-rose-500' />
  ),
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  PWA: <SiPwa size={iconSize} className='text-amber-600' />,
  Nginx: <SiNginx size={iconSize} className='text-green-500' />,
  Jest: <SiJest size={iconSize} className='text-red-600' />,
  Storybook: <SiStorybook size={iconSize} className='text-amber-500' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Socket: <SiSocketdotio size={iconSize} />,
  Express: <SiExpress size={iconSize} />,
  Jquery: <SiJquery size={iconSize} />,

  'Framer-Motion': <TbBrandFramerMotion size={iconSize} />,
  Shadcn: <ShadcnIcon />,
  RadixUI: <SiRadixui size={iconSize} className='text-pink-400' />,
  Zod: <SiZod size={iconSize} className='text-emerald-500' />,
  Axios: <SiAxios size={iconSize} className='text-sky-400' />,
  'TanStack Query': <SiReactquery size={iconSize} className='text-red-400' />,
  NextAuth: (
    <Image
      src={'/icons/nextauth.png'}
      width={iconSize}
      height={iconSize}
      alt='nextauth'
      className='text-black dark:text-white'
    />
  ),
  i18next: (
    <Image
      src={'/icons/i18next.avif'}
      width={iconSize}
      height={iconSize}
      alt='i18next'
      className='text-blue-500'
    />
  ),
  tRPC: <SiTrpc size={iconSize} className='text-indigo-400' />,
  Swiper: <SiSwiper size={iconSize} className='text-sky-500' />,
  GSAP: <SiGreensock size={iconSize} className='text-green-500' />,
  Algolia: <SiAlgolia size={iconSize} className='text-blue-600' />,
  FFmpeg: <SiFfmpeg size={iconSize} className='text-orange-600' />,
  'AWS S3': <FaAws size={iconSize} className='text-yellow-500' />,
  DaisyUI: <SiDaisyui size={iconSize} className='text-pink-400' />,
  Heroicons: <LuShield size={iconSize} className='text-purple-500' />,
  Zustand: (
    <Image
      src={'/icons/zustand.svg'}
      width={iconSize}
      height={iconSize}
      alt='zustand'
    />
  ),
  Moment: <CiClock2 size={iconSize} className='text-gray-500' />,
  Charts: <SiChartdotjs size={iconSize} className='text-rose-500' />,
  Auth0: <SiAuth0 size={iconSize} className='text-orange-500' />,
  Excel: <RiFileExcel2Line size={iconSize} className='text-green-500' />,
  Sonner: <BsBellFill size={iconSize} className='text-amber-500' />,
  'React Hook Form': <TbForms size={iconSize} className='text-blue-400' />,
  Lexical: <TbEdit size={iconSize} className='text-emerald-400' />,
  TipTap: <TbPencil size={iconSize} className='text-violet-500' />,
  CMDK: <TbCommand size={iconSize} />,
};
