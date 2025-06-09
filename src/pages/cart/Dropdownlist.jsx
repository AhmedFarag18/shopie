// import { AiOutlineDown } from "react-icons/ai"; 
// import {
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Button,
// } from "@material-tailwind/react";
// <AiOutlineDown />
 
// export function MenuDefault({title, items}) {
//   return (
//     <Menu>
//       <MenuHandler>
//         <div className="container mx-auto">
//             <Button className="w-100% flex">{title}
//             <div>{AiOutlineDown}</div>
//         </Button>
//         </div>
//       </MenuHandler>
//       <MenuList>
//         {items.map((item, index)=>(
//             <MenuItem key={index}>{item}</MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// }


import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Dropdownlist({ title, items }) {
  return (
    <Menu>
      <MenuHandler>
        <Button className="flex items-center gap-2">
          {title}
          <AiOutlineDown />
        </Button>
      </MenuHandler>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
