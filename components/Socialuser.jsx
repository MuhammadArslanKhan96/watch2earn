import React from "react";

const Socialuser = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="flex justify-between px-[20px] pb-[20px]">
          <h3 className="text-[17px] text-[#32325D] font-bold">
            Social traffic
          </h3>
          <div className="bg-[#5E72E4] text-[12px] text-white px-[8px] py-[4px] rounded-[5px]">
            See all
          </div>
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-[#c7c9cb]">
                    <tr className="bg-[#F6F9FC]">
                      <th
                        scope="col"
                        className="px-12 py-4 text-[10px] text-[#8898AA]"
                      >
                        REFERAL
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-4 text-[10px] text-[#8898AA]"
                      >
                        VISITORS
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
                      <th scope="col" className="px-6 py-4"></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b dark:border-[#c7c9cb]">
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#525F7f] px-12 py-4">
                        Facebook
                      </td>
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#8898AA] px-12 py-4">
                        1480
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-x-2">
                          <div className="text-[13px] text-[#525F7f]">45%</div>
                          <div className="h-1 w-[250px] bg-neutral-200 rounded-lg dark:bg-[#E9ECEF]">
                            <div
                              className="h-1 bg-[#d41b1b] rounded-lg"
                              style={{ width: "45%" }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-[#c7c9cb]">
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#525F7f] px-12 py-4">
                        Facebook
                      </td>
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#8898AA] px-12 py-4">
                        5480
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-x-2">
                          <div className="text-[13px] text-[#525F7f]">60%</div>
                          <div className="h-1 w-[250px] bg-neutral-200 rounded-lg dark:bg-[#E9ECEF]">
                            <div
                              className="h-1 bg-[#69ce21] rounded-lg"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-[#c7c9cb]">
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#525F7f] px-12 py-4">
                        Google
                      </td>
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#8898AA] px-12 py-4">
                        4807
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-x-2">
                          <div className="text-[13px] text-[#525F7f]">80%</div>
                          <div className="h-1 w-[250px] bg-neutral-200 rounded-lg dark:bg-[#E9ECEF]">
                            <div
                              className="h-1 bg-[#3484ed] rounded-lg"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-[#c7c9cb]">
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#525F7f] px-12 py-4">
                        Instagram
                      </td>
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#8898AA] px-12 py-4">
                        3678
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-x-2">
                          <div className="text-[13px] text-[#525F7f]">25%</div>
                          <div className="h-1 w-[250px] bg-neutral-200 rounded-lg dark:bg-[#E9ECEF]">
                            <div
                              className="h-1 bg-[#1bb8ca] rounded-lg"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-[#c7c9cb]">
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#525F7f] px-12 py-4">
                        twitter
                      </td>
                      <td className="whitespace-nowrap text-[13px] font-bold text-[#8898AA] px-12 py-4">
                        2645
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-x-2">
                          <div className="text-[13px] text-[#525F7f]">70%</div>
                          <div className="h-1 w-[250px] bg-neutral-200 rounded-lg dark:bg-[#E9ECEF]">
                            <div
                              className="h-1 bg-[#dca122] rounded-lg"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socialuser;
