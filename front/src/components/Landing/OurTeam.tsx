import { LegacyRef } from "react"
import { Slider } from "../../pre-components/Slider"

const OurTeam = ({ setRef } : { setRef: (id: number) => LegacyRef<HTMLDivElement> }) => {
  return (
    <Slider setRef={setRef}/>
  )
}

export default OurTeam