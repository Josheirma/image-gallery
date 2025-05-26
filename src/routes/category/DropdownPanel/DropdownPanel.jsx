import React from "react";
import Panel from "../../../components/panel/panel-component.jsx";
import "../../global.css";
import styles from "./DropdownPanel.module.css";

export default function DropdownPanel({ showPanel, arrayWithStars }) {
  if (!showPanel) {
    return null;
  }

  return (
    // Toggles element visibility with a slide up/down on button press
    <div className={styles.container}>
      <Panel items={arrayWithStars} />
    </div>
  );
}
