import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import { useAppStore } from '../../../store'
import { useParams } from 'react-router-dom'



import "react-big-calendar/lib/css/react-big-calendar.css";
import { TClient } from '../../../types/client';


const localizer = momentLocalizer(moment)

type TProps = {
    side: boolean
    data: TClient | undefined
}


const LeftPanel = ({side, data }: TProps) => {
  const { setModal, event} = useAppStore()
  const { id } = useParams()
  const canAddPayment = data?.dues !== null

  return (
    <div className={`
    bg-white h-full ${side ? 'flex-1 w-full' : 'flex-0 w-0'} transition-all duration-300 ease-in flex flex-col
    lg:flex-1 lg:w-full
    `}>
      <Calendar
        selectable
        onSelectSlot={(e) => canAddPayment && setModal({ type: 'event', params: { start: e.start, end: e.end, type: 'account', id }})}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView='month'
        events={event.account}
        style={{
          height: '100%',
          width: '100%'
        }}
      />
    </div>
  )
}

export default LeftPanel