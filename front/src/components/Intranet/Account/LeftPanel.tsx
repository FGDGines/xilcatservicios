import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import { useAppStore } from '../../../store'
import { useParams } from 'react-router-dom'



import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment)

type TProps = {
    side: boolean
}


const LeftPanel = (data: TProps) => {
  const { setModal, event} = useAppStore()
  const { id } = useParams()

  return (
    <div className={`
    bg-white h-full ${data.side ? 'flex-1 w-full' : 'flex-0 w-0'} transition-all duration-300 ease-in flex flex-col
    lg:flex-1 lg:w-full
    `}>
      <Calendar
        selectable
        onSelectSlot={(e) => setModal({ type: 'event', params: { start: e.start, end: e.end, type: 'account', id }})}
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