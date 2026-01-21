import PlayerCardList from "./PlayerCardList";


export default function HeroCategory() {
  return (
    <section className="w-full min-h-screen bg-gray-950">
      <div className="w-full px-8 ls:px-16 pb-8 md:pb-12 flex gap-4">
        <button>Active</button>
        <button>Scheduled</button>
        <button>Completed</button>
      </div>
      <div className="w-full px-8 ls:px-16 pb-8 md:pb-12">
        <PlayerCardList />
      </div>
    </section>
  );
}
