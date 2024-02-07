import { LegacyRef } from "react"
import { SliderText } from "../../pre-components/SliderText"

const Offer = ({ setRef } : { setRef: (id: number) => LegacyRef<HTMLDivElement> }) => {
  return (
    <>
      <SliderText setRef={setRef} />
    </>
  )
}

export default Offer