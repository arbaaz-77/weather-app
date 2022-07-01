import Image from "next/image";
import React from "react";

const Widget = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 z-10 text-gray-400">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl ">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl pb-6 text-center">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-2xl font-bold">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
