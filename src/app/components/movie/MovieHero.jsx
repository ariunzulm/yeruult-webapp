import { Clock3 } from "lucide-react";

export default function MovieHeroSection() {
  return (
    <div className="w-full min-h-screen bg-gray-950 ">
      <div className="relative w-full">
        <div className="relative h-100 md:h-125 lg:h-150">
          <img
            className="w-full h-full object-cover"
            src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQa7C0UksHCrjn42UV_9juJq3nkYATz5r0GuBJip4URdeveQ81vXB_yRl5M2tjT7jOiNI5-fJc81Yz-MWcdErDJ20jRrAZgI1sGKcExVkzvcciqdG8Pqjv2T2MzLjoTzOgolp3lRQwjB3C_mykeICI-ZBzXM.jpg?r=e7e"
            alt="Movie backdrop"
          />
        </div>

        <div className="absolute inset-0 bg-linier-to-t from-gray-950 via-gray-950/70 to-gray-950/30"></div>
        <div className="absolute inset-0 bg-linier-to-r from-gray-950/80 via-transparent to-gray-950/40"></div>
      </div>

      <div className="absolute top-0 left-0 bottom-0 flex items-end">
        <div className="w-full px-4 md:px-8 ls:px-16 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="shrink-0">
                <div className="relative">
                  <img
                    className="w-40 md:w-52 lg:w-64 rounded-lg shadow-2xl "
                    src="https://people.com/thmb/3pq-PIWD_dfGwKfkcwQ9hXMYnhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(515x809:517x811)/stranger-things-2-ba4b0d54a0d146e4a715cec0a7a29976.jpg"
                    alt="Movie Poster"
                  />
                </div>
              </div>
              <div className="absolute top-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-2xl">
                NEW FOR YERUULT
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end pb-2">
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm  text-gray-400 mb-3">
              <span className="font-medium">2026</span>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock3 className="w-4 h-4" strokeWidth={2.5} />
                <span>2h 38m</span>
              </div>
              <span>•</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-5 tracking-wide leading-tight uppercase ">
              stranger things
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-200 font-medium mb-6 md:mb-8 max-w-2xl">
              The world for Yeruult
            </p>

            <p className="text-xm md:text-base text-gray-400 leading-relaxed max-w-3xl mb-6 ">
              You conquered & learned everything.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">IMDb</span>
                <span className="text-white font-bold text-lg">6.4</span>
                <span className="text-gray-500">/10</span>
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Satisfaction</span>
                <span className="text-white font-bold text-lg">58%</span>
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Age Rating</span>
                <span className="text-white font-bold text-lg">12</span>
                <span className="text-gray-500">/18</span>
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Spent-time</span>
                <span className="text-white font-bold text-lg">4.7</span>
                <span className="text-gray-500">hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
