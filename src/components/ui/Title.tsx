interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = function ({ title }) {
  return (
    <h3 className="text-xl lg:text-4xl w-full font-semibold text-gray-900">
      {title}
    </h3>
  );
};

export default Title;
