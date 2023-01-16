import React from "react";
import { Fragment } from "react";

 const Contact = ()=>{
  return(<Fragment>
{/* <div className="wave"></div> */}
           
<div className="border-spacing-4 shadow-2xl p-10 m-5 rounded-xl border-4 ...  dark:text-black dark:bg-gray-100">
            <h3 className="text-2xl py-1 mb-3 font-Michroma">
              Reach Out to me!
            </h3>
            <div className="font-burtons p-5 md:text-10md flex-col ">
              <div className="flex items-center flex-wrap gap-5 ">
                <h3 className="m-4 font-Kalam">
                  Associate Software Engineer @BYJU's 💭
                </h3>
                <h3 className="m-4font-Kalam">
                  Open for opportunities:{" "}
                  <span className="text-blue-500 text-4xl font-semibold ...">
                    Yes
                  </span>
                </h3>
                <h3 className="m-4 font-Kalam">
                  Mobile:{" "}
                  <span className="text-blue-500 md:text-3xl font-semibold ...">
                    9591557009
                  </span>
                </h3>
                <h3 className="m-4 font-Kalam">
                  Mail:{" "}
                  <span className="text-blue-500 md:text-3xl font-semibold ...">
                    <a>gaganachanur@gmail.com</a>
                  </span>
                </h3>
              </div>
            </div>
          </div>

  </Fragment>
  )
}
export default Contact;