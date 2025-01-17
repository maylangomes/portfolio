import React from "react";
import { BsDownload } from "react-icons/bs";

export default function DownloadButton() {
  return (
    <a
      href="CV_Maylan_Gomes.pdf"
      download
      className="text-white text-lg md:text-xl hover:bg-teal-400 rounded-lg px-0.5 md:px-3 font-bold lg:mr-20 xl:mr-40 hidden md:block"
    >
      <BsDownload style={{ marginLeft: "4px" }} />
      CV
    </a>
  );
}
