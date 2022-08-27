import React from "react";
import { Sidebar } from "flowbite-react";
import { useAtom } from "jotai";
import sideBarDatas from "./data";

function Sidebar2() {
  const [sideBarData, setsideBarData] = useAtom(sideBarDatas);

  return (
    <div className="w-fit bg-gray-50">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sideBarData.map((item, index) => (
              <Sidebar.Item href={item.link} icon={item.icon}>
                {item.name}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default Sidebar2;
