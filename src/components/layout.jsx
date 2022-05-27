import React from "react";

function Layout({ title, description, children }) {
  //remeber to add the title and description to the head tag
  return <div>{children}</div>;
}

export default Layout;
