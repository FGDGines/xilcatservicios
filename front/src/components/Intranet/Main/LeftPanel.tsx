import { useAppStore } from '../../../store'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { jwtDecode } from 'jwt-decode'
import moment from 'moment'
const localizer = momentLocalizer(moment)


type TProps = {
    side: boolean
}

const LeftPanel = ({ side }: TProps) => {
  const { setModal, event } = useAppStore()
  const auth = jwtDecode(localStorage.getItem('auth_token') as any) as any
  const id = auth.id

  return (
    <div className={`
    bg-white h-full ${side ? 'flex-1 w-full' : 'flex-0 w-0 opacity-0'} transition-all duration-300 ease-in flex flex-col lg:p-4
    lg:flex-1 lg:w-full
    `}>
        <Calendar
          selectable
          onSelectSlot={(e) => setModal({ type: 'event', params: { start: e.start, end: e.end, type: 'journal', id } })}
          onSelectEvent={(e) => setModal({ type: 'description', params: { text: e.description, title: e.title } })}
          events={event.journal}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView='month'
          views={['month']}
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </div>
  )
}

export default LeftPanel