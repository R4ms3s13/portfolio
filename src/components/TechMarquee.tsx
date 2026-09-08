const items = [
  "NestJS",
  "Solidity",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Angular",
  "React",
  "RabbitMQ",
  "Redis",
  "Python",
  "Firebase",
  "Google Cloud",
  "Hardhat",
  "Ethers.js",
];

export default function TechMarquee() {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-6">
      <div className="marquee-track gap-10">
        {list.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display flex items-center gap-3 whitespace-nowrap px-2 text-xl font-semibold text-white/20"
          >
            {item}
            <span className="text-fuchsia-400/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
