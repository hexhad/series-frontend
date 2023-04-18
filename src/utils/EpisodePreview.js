import React, { useMemo } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { setSelectedSeries } from "../redux/ducks/seriesSlice.js";
import "./styles/EpisodePreview.scss";

import _ from "lodash";
import Accordian from "./Accordian.js";

export default function EpisodePreview(props) {
  const dispatch = useDispatch();
  const { episodes, view } = props;

  function clearState() {
    dispatch(setSelectedSeries({ undefined, view: false }));
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "70vw",
      overflow:"hidden"
    },
  };

  const renderList = useMemo(() => {
    if (!!!episodes?.length) return null;
    let listGroupedBySeasons = _.groupBy(episodes, "season");
    return Object.entries(listGroupedBySeasons)?.map((e, i) => (
      <Accordian {...e} key={i} />
    ));
  }, [episodes]);

  Modal.setAppElement("body");

  if (!!!view) return null;
  return (
    <Modal isOpen={!!view} style={customStyles} contentLabel="Example Modal">
      <div className="series-scroller">
        <button onClick={clearState}>close</button>
        {!!episodes?.length && renderList}
      </div>
    </Modal>
  );
}
