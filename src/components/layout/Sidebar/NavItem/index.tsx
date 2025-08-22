import { Link } from 'react-router-dom';

export const NavItem = ({ icon: Icon, label, to }: any) => (
  <Link
    to={to}
    className="flex items-center space-x-4 px-4 py-3 text-[#725CAD] transition-colors duration-200 hover:text-[#393053]"
  >
    <Icon className="h-6 w-6" />
    <span className="font-semibold text-white">{label}</span>
  </Link>
);
