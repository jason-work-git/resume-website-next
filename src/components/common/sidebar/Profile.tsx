import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { MenuContext } from '@/context/MenuContext';
import useIsMobile from '@/hooks/useIsMobile';

import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import ProfileHeader from './ProfileHeader';
import ThemeToggleButton from '@/components/common/ThemeToggleButton';
// import SearchBox from '../elements/SearchBox';
// import ThemeToggleButton from '../elements/ThemeToggleButton';

interface ProfileProps {
  isScrolled?: boolean;
}

const Profile = ({ isScrolled = false }: ProfileProps) => {
  const isMobile = useIsMobile();

  const getImageSize = () => {
    let size = isMobile ? 40 : 80;
    if (!isMobile && isScrolled) {
      size = 0;
    }
    return size;
  };

  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const hideNavbar = () => {
    setExpandMenu(false);
  };

  useEffect(() => {
    if (expandMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandMenu]);

  return (
    <MenuContext.Provider value={{ hideNavbar }}>
      <div
        className={clsx(
          'bg-light dark:bg-dark fixed z-20 w-full p-5 shadow-sm sm:shadow-none lg:relative lg:border-none lg:!bg-transparent lg:p-0 dark:border-b dark:border-neutral-800',
          expandMenu && 'pb-0',
        )}
      >
        <div className='flex items-start justify-between lg:flex-col lg:space-y-4'>
          <ProfileHeader expandMenu={expandMenu} imageSize={getImageSize()} />
          {/* <ProfileHeader expandMenu={expandMenu} imageSize={55} /> */}

          {isMobile && (
            <div
              className={clsx(
                'mt-2 flex items-center gap-5 lg:hidden',
                expandMenu &&
                  'h-[120px] flex-col-reverse !items-end justify-between pb-1',
              )}
            >
              <ThemeToggleButton />
              <MobileMenuButton
                expandMenu={expandMenu}
                setExpandMenu={setExpandMenu}
              />
            </div>
          )}
        </div>

        {isMobile && (
          <AnimatePresence>
            {expandMenu && (
              <div className='space-y-5 pt-6'>
                {/*<SearchBox />*/}
                <MobileMenu />
              </div>
            )}
          </AnimatePresence>
        )}
      </div>
    </MenuContext.Provider>
  );
};

export default Profile;
