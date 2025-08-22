export const IconButton = ({ icon: Icon }: { icon: React.ElementType }) => (
  <button className="p-2 text-zinc-400 transition-colors hover:text-white">
    <Icon className="h-5 w-5" />
  </button>
);
