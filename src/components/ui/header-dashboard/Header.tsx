type HeaderProps = {
  title: string;
  description?: string;
};
export const Header = ({ title, description }: HeaderProps) => {
  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-bold uppercase text-slate-800 ">
        {title}
      </h1>
      <p className="text-lg lg:text-xl font-light text-gray-500 mt-5">
        {description}
      </p>
    </>
  );
};
