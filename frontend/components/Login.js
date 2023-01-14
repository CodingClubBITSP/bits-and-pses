export default function Login(){
    return(
            <div className="flex items-center justify-center h-screen w-[100%] flex-col ">
                <div className="item text-[40px] text-[#211d70] px-[10px] py-[4px] mb-[25vh] mt-[-10%]">Students Login</div>
                <button className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal  mr-1 rounded px-[30px] py-[4px] mb-[10px]">Login with BITS Mail</button>
                <div div className="item px-[10px] py-[4px]">Example: xyz@pilani.bits-pilani.ac.in</div>
            </div>
    );
}