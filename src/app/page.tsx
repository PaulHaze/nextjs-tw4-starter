export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h2 className="mt-10 pt-0 text-center leading-normal font-bold">
        TW/DaisyUI Next Starter
      </h2>

      <h2 className="font-cursive">Cursive Font Test</h2>
      <h2 className="font-techno">Techno Font Test</h2>

      <div className="flex-center flex w-full flex-col items-center space-y-3">
        <p className="mt-10">Breakpoint Test - max</p>
        <div className="flex-center bg-primary h-40 w-1/2 max-sm:w-40">sm</div>
        <div className="flex-center h-40 w-1/2 bg-green-500 max-md:w-40">
          md
        </div>
        <div className="flex-center h-40 w-1/2 bg-green-600 max-lg:w-40">
          lg
        </div>
        <p className="mt-10">Breakpoint Test - min</p>
        <div className="flex-center h-40 w-1/2 bg-green-400 min-sm:w-40">
          sm
        </div>
        <div className="flex-center h-40 w-1/2 bg-green-500 min-md:w-40">
          md
        </div>
        <div className="flex-center h-40 w-1/2 bg-green-600 min-lg:w-xs">
          lg
        </div>
        <p className="bb mt-10">Breakpoint Test - screens</p>
        <div className="flex-center sm:w-sxs h-40 w-40 bg-green-400">sm</div>
        <div className="flex-center md:w-ssm h-40 w-40 bg-green-500">md</div>
        <div className="flex-center lg:w-smd h-40 w-40 bg-green-600">lg</div>
      </div>
      <div className="custom-box container mt-10 flex flex-grow">
        custom box
      </div>
    </div>
  );
}
