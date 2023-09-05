"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";
import Drawer from "@/components/Navbar/Drawer";

const MobileNavbar = () => {
    const [isDrawerVisible, setDrawerVisible] = useState(false);
  
    const hideDrawer = () => {
      setDrawerVisible(false);
    };
  
    const handleShowDrawable = () => {
      setDrawerVisible(!isDrawerVisible);
    };
  
    return (
      <div className="display-center">
        <motion.div whileHover={{ scale: 1.2 }}>
          <MenuOutlined onClick={handleShowDrawable} className="text-3xl" />
        </motion.div>
        <Drawer isDrawerVisible={isDrawerVisible} hideDrawer={hideDrawer} />
      </div>
    );
  };

  export default MobileNavbar;