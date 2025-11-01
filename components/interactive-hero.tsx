"use client";

export const InteractiveHero = () => {
  let arr = [];
  for (let i = 0; i < 250; i++) {
    arr.push("+");
  }

  return (
    <div className="flex flex-col w-115 p-5">
      <div className="font-playfair-display text-4xl  italic">Hey,</div>
      <div className="grid grid-cols-25 grid-rows-10 h-50 my-6 rounded-md">
        {arr.map((item, idx) => (
          
            <div key={idx} className=" cursor-default font-bold text-2xl text-neutral-400 transition-all duration-0 hover:delay-0 [transition-delay:0.5s] hover:text-black  hover:scale-125 ease-in-out">
              {item}
         
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-2xl font-medium tracking-tight">
          We help <span className="italic">founders</span> launch their site in
          2 weeks from <span className="text-blue-500">copy</span>,{" "}
          <span className="text-red-500">brand</span>,{" "}
          <span className="text-green-500">tagline</span>,{" "}
          <span className="text-yellow-500">research</span>,{" "}
          <span className="text-purple-500">visual</span> all done by us.
        </p>
        <p className="text-[16px] font-playfair-display text-gray-500 italic tracking-tighter">
          speed and building premium site is our superpower
        </p>
        <div className="flex items-center gap-x-3 font-playfair-display font-semibold">
          <button className="border-2 px-4 py-1  rounded-xl border-gray-200 hover:border-neutral-600 text-[15px] cursor-pointer italic transition duration-300">
            Book a call
          </button>
          <button className="bg-black hover:bg-neutral-800 text-white px-5 py-1.5 rounded-xl text-[14px] italic cursor-pointer tracking-tight transition duration-300">
            $9k/mo →
          </button>
        </div>
      </div>
    </div>
  );
};
