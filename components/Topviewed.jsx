import React, { useContext, useEffect, useState } from "react";
import { Container } from "reactstrap/lib";
import { UserContext } from "@/context/UserContext";

const Topviewed = () => {
  const [videos, setVideos] = useState([]);
  let count = 0;
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user && user.videos) {
      const videos = JSON.parse(user.videos)[0].items;
      setVideos(
        videos.sort(function (a, b) {
          return (
            Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
          );
        })
      );
    }
  }, [user]);

  return (
    <div
      className="text-[12px] w-[380px]  flex-col   rounded-[8px] flex justify-center  bg-[#FFFFFF] 
  py-[20px] px-[10px] "
    >
      <div className="text-[16px] font-bold pb-[10px]">Next Video Shedule</div>
      <div className="flex">
        <iframe
          width="30%"
          height="50%"
          src={
            "https://www.youtube.com/embed/" +
            (videos.length ? videos[0].id : "pRbxlpvXw2s")
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col text-black mt-2 px-[10px]">
          <div className="text-[20px] font-bold ">Title</div>
          <div className="text-[16px] pt-[10px] ">JUL 2 2023 - 5:00pm</div>
        </div>
      </div>

      <div className="text-[16px] px-[10px] pt-[20px] font-bold text-[#2e61fb]">
        View All
      </div>
    </div>
  );
};

export default Topviewed;
