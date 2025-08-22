import { Home, Search, Library } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  navContainerVariants,
  navItemVariants,
  sidebarVariants,
} from './config/style.config';
import { NavItem } from './NavItem';
import { useSearchContext } from '@/context/SearchContext/hooks';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
  const { setSearchTerm } = useSearchContext();
  const { t } = useTranslation();

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="mt-4 mb-24 hidden w-64 flex-col rounded-r-4xl border-r border-[#090040] bg-[#040D12] p-4 md:flex"
    >
      <motion.div
        variants={navItemVariants}
        className="mb-8 bg-[radial-gradient(circle,rgba(99,89,133,1)_0%,rgba(68,60,104,1)_100%)] bg-clip-text px-4 text-2xl font-bold text-transparent"
      >
        MusicFinder
      </motion.div>

      <motion.nav
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col space-y-2"
        onClick={() => setSearchTerm('')}
      >
        <motion.div variants={navItemVariants}>
          <NavItem icon={Home} label={t('home')} to="/" />
        </motion.div>
        <motion.div variants={navItemVariants}>
          <NavItem icon={Search} label={t('search')} to="/" />
        </motion.div>
        <motion.div variants={navItemVariants}>
          <NavItem icon={Library} label={t('library')} to="/" />
        </motion.div>
      </motion.nav>
    </motion.aside>
  );
};
