// bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900 via-slate-800 to-black
export default function EventTimeline() {
    return (
      <div className="pt-14 pb-4 h-full pl-8 p-8
      bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-pink-900 to-slate-900">
          <div className="flex-col">
              <h2 className="text-left text-5xl font-semibold w-1/2 text-white">
              Timeline
              </h2>

              <div className="mt-5 mb-5 w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md"/>


          <div className="pt-8">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
  
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Day 1: 10th April, Monday <br></br>6:30 PM to 8:30 PM
                </time>
                <h3 className="text-lg font-semibold text-white dark:text-white">
                Introduction to Dapps using Solidity
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  A complete introduction to Solidity programming and Dapps (Decentralized Apps). You will get to know all about History and Working of Blockchain, Ethereum, EVM, Transactions, Gas Fees, Blockchain Wallets, NFTs and What exactly is a Dapp.
                  We will set up our Tools for Development and get hands experience by creating Smart Contracts
                </p>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Day 2: 11th April, Tuesday <br></br>6:30 PM to 8:30 PM
                </time>
                <h3 className="text-lg font-semibold text-white dark:text-white">
                Deep dive into Smart Contracts and Deployment
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Here you will learn about how Scalable Smart Contract Development. You will understand how to test and debug your Contracts and eventually Deploy them.   
                </p>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Day 3: 12th April, Wednesday<br></br>6:30 PM to 8:30 PM
                </time>
                <h3 className="text-lg font-semibold text-white dark:text-white">
                Fullstack Blockchain: Integration of Smart Contracts with Frontend                 </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Now that you know how to write smart contracts, learn how to deploy them into production. We will understand how to use Frontend Frameworks and Wallets to finally launch your Dapp. 

                </p>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Day 4: 13th April, Thursday <br></br>6:30 PM to 8:30 PM
                </time>
                <h3 className="text-lg font-semibold text-white dark:text-white">
                 Smart Contract Battle
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Time for Battle! In this event, You will be given a problem statement for which you will have to solve by implementing a smart contract under a time limit. 
                </p>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Day 5: 14th April, Saturday <br></br>6:30 PM to 8:30 PM
                </time>
                <h3 className="text-lg font-semibold text-white dark:text-white">
                Exploration of Blockchain and Roadmap

                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Now that you have learned Solidity programming, What else is out there?
                  Why use Chain A over Chain B? What to do next? All these questions will be answered. 
                </p>
              </li>

              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Day 6: 15th April, Saturday <br></br>6:30 PM to 8:30 PM
                </time>
                <h3 className="text-lg font-semibold text-white dark:text-white">
                Offical Blockchain Specialisation Workshop <span className="mx-1 text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600
            lg:mx-2 sm:mx-3">(Open for all students)</span>
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                
                All about Blockchain Specialisation in BU by Dr. Vimal Baghel: Blockchain Champion 

                </p>
              </li>
            </ol>
          </div>
          </div>
      </div>
    )
  }
  