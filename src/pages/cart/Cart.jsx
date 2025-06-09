import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Breadcrumbs } from "@material-tailwind/react";
import CartSummary from "./Summary";
import CartTable from "./Carttable";

export default function EmptyCart() {
  // return (
  //   <>
  //     <div className="container mx-auto ">

  //       {/* nav path */}
  //       <div className="flex  items-center justify-between ">
  //         <h3 className="">Cart</h3>
  //         <Breadcrumbs>
  //           <a href="#" className="opacity-60 hover:opacity-80 font-weight:700">
  //             HOME
  //           </a>
  //           <a href="#" className="opacity-60 hover:opacity-80 font-weight:700 ">
  //             Cart
  //           </a>
  //         </Breadcrumbs>
  //       </div>
  //       {/* ????????????????????????????????????????????????? */}

  //       <Summary></Summary>

  //     </div>
  //   </>
  // );
  return (
    <div className="p-4 bg-slate-100 ">
      {/* ////////////////////////// */}
      <div className="container mx-auto">
        <div className="flex  items-center justify-between ">
        <h3 className="">Cart</h3>
        <Breadcrumbs>
          <a href="#" className="opacity-60 hover:opacity-80 font-weight:700">
            HOME
          </a>
          <a href="#" className="opacity-60 hover:opacity-80 font-weight:700 ">
            Cart
          </a>
        </Breadcrumbs>
      </div>
      </div>
      {/* //////////////// */}
      <div className="w-100% bg-white">
        <div className="container mx-auto p-6 flex  items-start justify-center">
            <CartSummary />
            <CartTable ></CartTable>

        </div>
      </div>
    </div>
  );
}
