import { cn } from "@/features/_global/libs/shadcn/lib/utils";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/features/_global/libs/shadcn/components/ui/accordion";
import { NavItemProps, NavProps } from "../types";
import { Icon, SidebarContext } from "@/features/_global";
import { ChevronDown, ChevronRight } from "lucide-react";

const NavItem = React.memo((props: NavItemProps) => {
  const [visibleChild, setVisibleChild] = useState(false);

  const sidebarContext = useContext(SidebarContext);

  const handleClick = () => {
    if (!hasChild) return sidebarContext.setVisible();
    setVisibleChild((v) => !v);
  };

  const hasChild = props.items && props.items?.length > 0;

  return (
    <li className="relative">
      <NavLink
        onClick={handleClick}
        to={hasChild ? "#" : props.url || "#"}
        className={(p) =>
          cn(
            " sidebar-nav-item flex gap-3 px-3 py-2 mb-4 items-center rounded-lg border-none hover:bg-theme-color-info justify-between text-sm",
            p.isActive && "bg-theme-color-info",
          )
        }
        end
      >
        <div className="flex flex-row items-center gap-2">
          {props.icon && (
            <Icon
              iconName={props.icon}
              className="sidebar-nav-item-icon h-4 w-4"
            />
          )}
          {props.title}
        </div>
        {hasChild &&
          (visibleChild ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          ))}
      </NavLink>

      {hasChild && visibleChild && (
        <Nav isChild items={props.items || []} mobile={props.mobile} />
      )}
    </li>
  );

  // return (
  //   <AccordionItem
  //     value={String(props.value)}
  //     className="sidebar-nav-accordion border-none"
  //   >
  //     <AccordionTrigger className="sidebar-nav-accordion-trigger hover:no-underline py-2 border-none hover:bg-theme-color-info rounded-lg mb-4 px-3">
  //       <div className="flex gap-3">
  //         {props.icon && (
  //           <Icon
  //             iconName={props.icon}
  //             className="sidebar-nav-item-icon h-4 w-4"
  //           />
  //         )}
  //         {props.title}
  //       </div>
  //     </AccordionTrigger>
  //     {hasChild && (
  //       <AccordionContent className="sidebar-nav-submenu bg-mute pl-4">
  //         {props.items?.map((item, i) => {
  //           const hasSubChild = item.items && item.items?.length > 0;
  //           if (hasSubChild) {
  //             return (
  //               <Accordion
  //                 type="single"
  //                 collapsible
  //                 className="sidebar-nav grid w-full items-start text-sm font-medium sm:px-4"
  //                 defaultValue={`${props.value}-${i}-0`}
  //               >
  //                 {item.items?.map((d, j) => {
  //                   return (
  //                     <NavItem
  //                       {...d}
  //                       key={`${props.value}-${i}-${j}`}
  //                       value={`${props.value}-${i}-${j}`}
  //                       mobile={props.mobile}
  //                     />
  //                   );
  //                 })}
  //               </Accordion>
  //             );
  //           }
  //
  //           return (
  //             <NavLink
  //               key={i}
  //               onClick={sidebarContext.setVisible}
  //               to={item.url || "#"}
  //               className={(p) =>
  //                 cn(
  //                   "sidebar-nav-item flex items-center px-3 py-2 mb-2 rounded-lg hover:bg-theme-color-info duration-200 gap-4",
  //                   p.isActive && "bg-theme-color-info",
  //                 )
  //               }
  //             >
  //               {item.icon && <Icon iconName={item.icon} className="h-4 w-4" />}
  //               {item.title}
  //             </NavLink>
  //           );
  //         })}
  //       </AccordionContent>
  //     )}
  //   </AccordionItem>
  // );
});

export const Nav = React.memo(
  ({ items = [], mobile = false, isChild }: NavProps) => {
    return (
      <ul className={cn(isChild && "pl-4")}>
        {items?.map((item) => {
          return <NavItem {...item} mobile={mobile} />;
        })}
      </ul>
    );
    // return (
    //   <Accordion
    //     type="single"
    //     collapsible
    //     className="sidebar-nav grid w-full items-start text-sm font-medium sm:px-4"
    //     defaultValue="0"
    //   >
    //     {items?.map((item, i) => {
    //       return <NavItem {...item} key={i} value={i} mobile={mobile} />;
    //     })}
    //   </Accordion>
    // );
  },
);

Nav.displayName = "Nav";
