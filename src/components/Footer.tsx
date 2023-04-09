import Image from "next/image"
import logo from "public/IBF_logo.png"

export default function Footer()
{
    return (
        <footer className="footer p-6 pb-3 bg-neutral text-neutral-content">
        <div>
            <Image src={logo} alt="IBF Logo" width="60"></Image>
            <p>Indian Blockchain Fraternity<br/>Bennett University</p>
        </div> 

        <div>
            <span className="footer-title">Social</span> 
            <div className="grid grid-flow-col gap-10">
                <a href="https://twitter.com/IBF_Community" target="_blank" className="fill-current hover:text-pink-400 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                <a href="https://www.linkedin.com/company/indian-blockchain-fraternity/" target="_blank" className="fill-current hover:text-pink-400 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a> 
                <a href="https://www.instagram.com/ibf.bu/" target="_blank" className="fill-current hover:text-pink-400 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path> <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M16.5 7.5l0 .01"></path></svg></a>
            </div>
        </div>

        <div>
            <div className="grid grid-flow-col gap-10">
                <p><span className="font-bold"><a href="https://www.linkedin.com/in/mann-acharya" target="_blank" className="fill-current hover:text-purple-400 cursor-pointer">Mann Acharya (POC)</a></span> <br></br>Tech Head IBF<br></br><span className="cursor-pointer" onClick={() => {navigator.clipboard.writeText("9558372850")}}>9558372850</span></p>
            </div>
        </div>

        <div>
            <div className="grid grid-flow-col gap-10">
            <p><span className="font-bold"><a href="https://www.linkedin.com/in/jayvardhan10" target="_blank" className="fill-current hover:text-purple-400 cursor-pointer">Jay Vardhan Singh (POC)</a></span> <br></br>Chairperson IBF<br></br><span className="cursor-pointer" onClick={() => {navigator.clipboard.writeText("8077159037 ")}}>8077159037</span></p>

            </div>
        </div>
        </footer>
    )
}

