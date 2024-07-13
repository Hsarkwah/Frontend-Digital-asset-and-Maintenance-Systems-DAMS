import '../../../assets/css/MainSections.css'
import '../../../assets/css/Devices.css'
import { Colors } from '../../../assets/colors'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Filters from '../../../components/Main/Filters'
import Table from '../../../components/Main/Table'
import { Link } from 'react-router-dom'

const Devices = () => {
  return (
    <section className='main-section'>
      <div className='container'>
        <div className='heading'>
          <h2 className=''>Devices</h2>
          <div className='flex items-center gap-[1rem]'>
            <Link to='/devices/add' className='btn btn-submit mb-0 add-device-btn'>Add device</Link>
            <div className='flex items-center gap-2'>
              <input
                type='text'
                name='asset'
                id='asset'
                placeholder='Serial number...'
                style={{ borderColor: Colors.GrayBlack }}
              />
              <MagnifyingGlassIcon className='w-[20px] h-[20px]' />
            </div>
          </div>
        </div>
        <Filters />
        <Table />
      </div>
    </section>
  )
}

export default Devices
