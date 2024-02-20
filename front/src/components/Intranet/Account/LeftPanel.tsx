import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import {toast} from 'react-toastify'
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
  const canAddPayment = data?.dues !== null && data?.price !== 0
  const checkIsBeforeToday = (startDay: any) => {
    const start = moment(startDay)
    const now = moment(moment.now())
    if (moment.utc(start).isAfter(now)) toast.error("No puedes agregar un pago en una fecha posterior a la actual")
    return moment.utc(start).isBefore(now)
  }

  return (
    <div className={`
    bg-white h-full ${side ? 'flex-1 w-full' : 'flex-0 w-0 opacity-0'} transition-all duration-300 ease-in flex flex-col p-4
    lg:flex-1 lg:w-full
    `}>
      <Calendar
        selectable
        onSelectSlot={(e) => (canAddPayment && checkIsBeforeToday(e.start)) && setModal({ type: 'event', params: { start: e.start, end: e.end, type: 'account', id }})}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView='month'
        views={['month']}
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