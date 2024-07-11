import '../../../assets/css/MainSections.css'
import { Colors } from '../../../assets/colors'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Filters from '../../../components/Main/Filters'

const AssetsPage = () => {
  return (
    <section className='main-section'>
      <div className='container'>
        <div className='heading'>
          <h2 className=''>Assets</h2>
          <div className='flex items-center gap-[1rem]'>
            <button type='button' className='btn btn-submit mb-0'>
              Add Asset
            </button>
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
      </div>
    </section>
  )
}

export default AssetsPage
