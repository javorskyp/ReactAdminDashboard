import React from "react";

import { Avatar as AntdAvatar } from "antd";

type Props = AvatarProps & {
    name?: string;
  };
  
  const CustomAvatarComponent = ({ name = "", style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={'jpSoftware'}
      size="small"
      style={{
        backgroundColor: '#87d068',
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
     
    >
      JP
    </AntdAvatar>
  );
};

export default CustomAvatarComponent