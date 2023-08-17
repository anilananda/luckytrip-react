import React from "react";
import * as AntIcons from "react-icons/ai";
import * as Lias from "react-icons/lia";

const iconFamilies = {
  Ant: AntIcons,
  Lia: Lias,
};

const Icon = ({ family, name, ...rest }) => {
  if (iconFamilies[family][name] !== undefined)
    return React.createElement(iconFamilies[family][name], rest);
  else return <></>;
};

export default Icon;
