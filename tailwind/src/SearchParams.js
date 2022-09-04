import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, updateAnimal] = useState("cat");
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="w-full max-w-6xl flex ml-10">
      <div className="w-1/3 px-10">
        <form
          className="bg-pink-50 shadow-md rounded px-8 pb-8 mb-4 flex flex-col justify-center divide-y divide-gray-900 "
          onSubmit={(e) => {
            e.preventDefault();
            requestPets();
          }}
        >
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            Location
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => updateLocation(e.target.value)}
            />
          </label>
          <label
            htmlFor="animal"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Animal
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="animal"
              value={animal}
              onChange={(e) => updateAnimal(e.target.value)}
              onBlur={(e) => updateAnimal(e.target.value)}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="breed"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Breed
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline disabled:opacity-50"
              disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => updateBreed(e.target.value)}
              onBlur={(e) => updateBreed(e.target.value)}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="theme"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Theme
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              onBlur={(e) => setTheme(e.target.value)}
            >
              <option value="peru">Peru</option>
              <option value="darkblue">Dark Blue</option>
              <option value="chartreuse">Chartreuse</option>
              <option value="mediumorchid">Medium Orchid</option>
            </select>
          </label>
          <button
            className="rounded px-6 py-2 color text-white hover:opacity-50 border-none"
            style={{ backgroundColor: theme }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-2/3 px-6">
        <Results pets={pets} />
      </div>
    </div>
  );
};

export default SearchParams;
