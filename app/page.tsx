"use client";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-gradient-to-bl rounded-lg shadow-lg p-6 border-black border">
        <form className="form-control">
          <label className="label">
            <span className="label-text">
              Question 1: Choose your favorite color
            </span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue="Select color"
          >
            <option disabled>Select color</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Yellow</option>
          </select>

          <label className="label mt-4">
            <span className="label-text">
              Question 2: Choose your favorite animal
            </span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue="Select animal"
          >
            <option disabled>Select animal</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Fish</option>
          </select>

          <label className="label mt-4">
            <span className="label-text">
              Question 3: Choose your favorite food
            </span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue="Select food"
          >
            <option disabled>Select food</option>
            <option>Pizza</option>
            <option>Burger</option>
            <option>Sushi</option>
            <option>Salad</option>
          </select>

          <label className="label mt-4">
            <span className="label-text">
              Question 4: Choose your favorite season
            </span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue="Select season"
          >
            <option disabled>Select season</option>
            <option>Spring</option>
            <option>Summer</option>
            <option>Autumn</option>
            <option>Winter</option>
          </select>
        </form>
      </div>
    </div>
  );
}
