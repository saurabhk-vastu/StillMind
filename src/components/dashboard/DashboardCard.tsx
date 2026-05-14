type Props = {
  image: string;
  title: string;
  subtitle: string;
};

export function DashboardCard({
  image,
  title,
  subtitle,
}: Props) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl">
        <img
          src={image}
          alt={title}
          className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-white/60 text-lg">
          {subtitle}
        </p>
      </div>
    </div>
  );
}