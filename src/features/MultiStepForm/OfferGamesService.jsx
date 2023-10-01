const Games = ["CSGO"];

const options = [{ value: "5", label: "Accounts" }];

function GameSelectionComponent({ register }) {
  return (
    <div className="step">
      <div className="my-4 3xl:my-8">
        <label
          className="mb-2 block font-bold tracking-wide text-gray-700"
          htmlFor="service"
        >
          Select Service
        </label>
        <select
          required
          id="service"
          name="service"
          {...register("serviceId")}
          className="w-full rounded border border-gray-400 px-3 py-2"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label
          className="mb-2 mt-4 block font-bold tracking-wide text-gray-700"
          htmlFor="game"
        >
          Select Game
        </label>
        <div className="overflow-hidden">
          <select
            required
            id="game"
            name="game"
            {...register("gameId")}
            className="w-full overflow-hidden rounded border border-gray-400 px-3 py-2"
          >
            <option>Select an option</option>
            {Games.map((game, index) => (
              <option key={index} value={index + 1}>
                {game}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-3 px-1">
        <p className="mb-3 mt-8 font-semibold text-gray-900">Notifications</p>
        <div className="mt-2 flex items-start text-sm text-gray-600">
          <label htmlFor="comments" className="inline-flex items-start">
            <input
              id="comments"
              name="comments"
              required
              type="checkbox"
              className={`mt-0.5 h-5 w-5 accent-gray-600 md:mt-0`}
            />
            <span className="ml-2 text-[0.8rem] font-medium text-slate-500 sm:text-[0.9rem] md:text-[0.92rem]">
              I agree to receive notifications about important changes and
              optional updates.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default GameSelectionComponent;
