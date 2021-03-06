import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Widget from "../components/Widget";
import Spinner from "../components/Spinner";

const Home = () => {
  const [city, setCity] = useState("manchester");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);

  const fetchData = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });

    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Head>
        <title>Weather 101 | Arbaaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]" />

      {/* BG  Image */}
      <Image
        src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        layout="fill"
        className="object-cover"
      />

      {/* Search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-10 text-white z-20">
        <form
          onSubmit={fetchData}
          className="flex justify-between items-center w-full m-auto  p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="bg-transparent border-none text-white focus:outline-none text-3xl"
              type="text"
              placeholder="Search City"
            />
          </div>
          <button onClick={fetchData}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/* Weather Display */}
      {weather.main ? (
        <Widget data={weather} />
      ) : (
        <div className="relative w-[50%] my-5 mx-auto bg-black/50">
          <h1 className="text-red-500 text-2xl text-center font-semibold">
            No Data Available
          </h1>
        </div>
      )}
    </>
  );
};

export default Home;
