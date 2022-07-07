import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
  rectSortingStrategy
} from "@dnd-kit/sortable";

import Grid from "@mui/material/Grid";
import SortableItem from "./sortable_item";

const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  minHeight: "50px",
  minWidth: "50px",
  display: "block"
};

export default function Container(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });
  let properties = {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  };

  let strategy = { strategy: rectSortingStrategy };
  let itemWidth = "100px";
  if (items.length === 0 || items[0].startsWith("ADD_PH_")) {
    // properties = {
    //   direction: "column",
    //   justifyContent: "flex-start",
    //   alignItems: "stretch"
    // };
    // itemWidth = "300px";
    strategy = { strategy: verticalListSortingStrategy };
  }

  const content = (
    <div ref={setNodeRef} style={{ backgroundColor: "pink" }}>
      <Grid
        container
        spacing={2}
        {...properties}
        sx={{
          marginTop: 1,
          backgroundColor: "green",
          minWidth: "100%",
          minHeight: "120px"
        }}
      >
        {items.map((id) => (
          <SortableItem key={id} id={id} width={itemWidth} />
        ))}
      </Grid>
    </div>
  );
  console.log('strategy', strategy)
  const dom = (
    <SortableContext
      id={id}
      items={items}
      style={{ backgroundColor: "gray" }}
      {...strategy}
    >
      {content}
    </SortableContext>
  );
  return dom;
}
