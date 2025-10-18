interface IconButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = function ({
  onClick,
  href,
  children,
}) {
  return (
    <a
      className="h-10 w-10 lg:h-16 lg:w-16 border border-gray-200 rounded-4xl shadow-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default IconButton;
