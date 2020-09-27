import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "./Sidebar.css";
import SidebarChat from "./SidebarChat.js";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [groups, setGroups] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
  
    const unsubscribe = db.collection("groups").onSnapshot((snapshot) =>
      setGroups(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
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
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {groups.map((group) => (
          <SidebarChat key={group.id} id={group.id} name={group.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
