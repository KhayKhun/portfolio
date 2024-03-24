import { useProgress } from "@react-three/drei";

export default function CustomLoadingScreen() {
    const {progress} = useProgress();
  return (
    <div className={`${progress == 100 && 'hidden'} bg-[#121212] z-20 w-screen h-screen fixed top-0 left-0 flex justify-center items-center`} >
        <div className="flex flex-col">
            <img src="/frog.jpg" className="w-[60vw] sm:w-[300px] h-auto rounded-t-lg"/>
            <div className="w-full h-[30px] relative overflow-hidden rounded-b-lg">
                <div className="absolute w-full h-full top-0 left-0 bg-[#CFF4F0] z-30"/>
                <div style={{width : `${progress}%`}} className="absolute h-full top-0 left-0 bg-[#44dcb8] z-40"/>
                <span className="mono-font font-bold absolute w-full h-full flex justify-center items-center z-50">
                    {Math.round(progress)}%
                </span>
            </div>
        </div>
    </div>
  );
}
