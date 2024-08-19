import SubLvl from "./components/SubLvl"
import { useOutletContext } from "@remix-run/react";
import { SubLvlInterface } from "./levels/types";

export default function level() {

    const context:{
        currentSubLvl: SubLvlInterface,
        transposition: string,
        subLevelRef: React.MutableRefObject<any>
    } = useOutletContext()
    const currentSubLvl = context.currentSubLvl
    
    return (
        <div className="h-full">
            <SubLvl
                name={currentSubLvl.name}
                title={currentSubLvl.title}
                description={currentSubLvl.description}
                transposition={context.transposition}
                vfTitle={currentSubLvl.vfTitle}
                vfProps={currentSubLvl.vfProps}
                vf_w={currentSubLvl.vf_w}
                vf_h={currentSubLvl.vf_h}
                reRender={currentSubLvl.reRender}
                ref={context.subLevelRef}
            />
        </div>
        
    )
}