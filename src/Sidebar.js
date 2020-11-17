import React from "react";
import "./Sidebar.css";
import DonutLarge from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChart from "./SidebarChart";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.0-1/s320x320/123619933_824135221670386_7508226094334735330_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=K57cEVcWuOwAX9dp70z&_nc_ht=scontent.fpkr1-1.fna&tp=7&oh=ccf36cc99d71ce9fc03fc6443c041d81&oe=5FD36E77" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_charts">
        <SidebarChart />
        <SidebarChart />
        <SidebarChart />
      </div>
    </div>
  );
}

export default Sidebar;
