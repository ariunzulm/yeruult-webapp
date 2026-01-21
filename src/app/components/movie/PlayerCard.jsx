export default function PlayerCardList() {
  return (
    <div className="w-full min-h-screen bg-gray-950 p-4 md:p-8">
      <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {playersInfo.map((player) => (
          <Playercard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

const Playercard = ({ player }) => {
  const { id, imageUrl, name, desc } = player;
  return (
    <article
      key={id}
      className="flex flex-col gap-4 rounded-2xl border border-gray-700 bg-gray-900 p-4 hover:border-gray-600 transition-colors"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-800">
        <img
          className="w-full h-full object-contain"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold leading-tight text-white">{name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          Play
        </button>
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          Learn more
        </button>
      </div>
    </article>
  );
};
const playersInfo = [
  {
    id: 1,
    imageUrl: "/profile.png",
    name: "Yeruult",
    desc: "Complete levels to get your favorite meal",
  },
  {
    id: 2,
    imageUrl: "/profile.png",
    name: "Yeruult-Max",
    desc: "Complete levels to earn reward",
  },
  {
    id: 3,
    imageUrl: "/profile.png",
    name: "Yeruult-ProMax",
    desc: "Complete levels to earn reward & your favorite meal",
  },
];
