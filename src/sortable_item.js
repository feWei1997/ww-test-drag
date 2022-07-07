import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
export function Item(props) {
  const { id } = props;

  const style = {
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    margin: "10px 0",
    background: "white"
  };
  style.width = props.width;
  if (id.startsWith("ADD_PH_")) {
    style.backgroundColor = "purple";
  }
  return <div style={style}>{id}</div>;
}

export default function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    touchAction: "auto",
    transform: CSS.Transform.toString(transform),
    transition
  };

  style.width = props.width;
  if (props.id.startsWith("ADD_PH_")) {
  }
  return (
    <div ref={setNodeRef} style={style} width={props.width}>
      <BrowserView {...attributes} {...listeners}>
        <Item id={props.id} />
      </BrowserView>
      <MobileView>
        <button
          {...attributes}
          {...listeners}
          style={{ touchAction: "manipulation" }}
        >
          DH
        </button>
        <Item id={props.id} />
      </MobileView>
    </div>
  );
}
