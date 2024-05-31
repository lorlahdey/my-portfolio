interface ProgressBarProps {
  progress: number;
  barStyle: string;
  progressStyle: string;
  styled: boolean;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, barStyle, progressStyle, styled,label }) => {
  return (
    <>
    
        {
            styled ? 
            <div className={`w-full ${barStyle}`}>
                <div className="flex justify-between">
                    <span className="text-white text-[18px] leading-[35px] font-bold ">{label}</span>
                    <span className="text-[14px] leading-[35px] text-[#FFFFFFB2] ">{progress}%</span>
                </div>
                <div className="w-full border-[2px] border-[#444] h-[11px] flex flex-row items-center bg-[#222] rounded-[8px] px-[2px]">
                    <div
                    className="h-[4px] bg-[#007CED] rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            :
            <div className={`bg-[#353535] ${barStyle}`}>
                <div
                    className={`bg-[#007CED] ${progressStyle}`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        }
    </>
  )
}

export default ProgressBar