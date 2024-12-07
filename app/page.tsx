"use client";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-8">Survey Form</h1>
      <div className="bg-gradient-to-bl rounded-lg shadow-lg p-6 border-black border">
        <form className="form-control">
          <label className="label">
            <span className="label-text text-white font-extrabold text-lg">
              Question 1: Choose your favorite color
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter your favorite color"
          />

          <label className="label mt-4">
            <span className="label-text text-white font-extrabold text-lg">
              Question 2: Choose your favorite animal
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter your favorite animal"
          />

          <label className="label mt-4">
            <span className="label-text text-white font-extrabold text-lg">
              Question 3: Choose your favorite food
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter your favorite food"
          />

          <label className="label mt-4">
            <span className="label-text text-white font-extrabold text-lg">
              Question 4: Choose your favorite season
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter your favorite season"
          />
        </form>
      </div>
    </div>
  );
}
