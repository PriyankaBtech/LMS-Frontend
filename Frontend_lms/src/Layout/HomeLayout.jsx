import {FiMenu} from 'react-icons/fi'

function HomeLayout() {
  return (
    <div className='min-h-[90vh]'>
        <div className='drawer absolute left-0 z-50 w-fit'>
            <input className="drawer-toggle" id="my-drawer" type="checkbox"  />
            <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu 
                            onClick={changeWidth}
                            size={"32px"}
                            className="font-bold text-white m-4"
                        />
                    </label>
                </div>
        </div>
    </div>
  )
}

export default HomeLayout