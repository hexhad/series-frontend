import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import './styles/Accordian.scss'

export default function Accordian(props) {
  const { 0: index, 1: seasonData } = props;
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="accordian-container">
      <div className="accordian-button" onClick={() => setCollapsed((prev) => !prev)}>
        <p className="accordian-main-text">{`Season ${index}`}</p>
        {collapsed ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {!collapsed &&
        Object.values(seasonData)?.map((e, i) => {
            
          return( <div className="accordian-collapsed-text-wrapper" key={i}>
            <p className="accordian-collapsed-name">{e.name}</p>
            <p className="accordian-collapsed-date">{e.air_date}</p>
            <p className="accordian-collapsed-epi">{`${e.episode}/${e.season}`}</p>
            </div>
            );
        })}
    </div>
  );
}
