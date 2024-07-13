import '../../../assets/css/ViewDevice.css'

const deleteConfirmation = () => {
  const result = window.confirm('Are you sure you want to delete this device?')
  // Replace code block of if and else with actual implementation
  // of deleting a device
  if (result) {
    console.log('Yes, delete this device!')
  } else {
    console.log('No, do not delete this device!')
  }
}

const ViewDevice = () => {
  return (
    <section className='main-section'>
      <div className='container max-w-[800px] w-[100%] mx-[auto]'>
        <div className='heading justify-between'>
          <h3 className='mb-0'>DELL XPS 13 (Laptop)</h3>
          {/* Only super administrators should see this button */}
          <button
            type='button'
            className='btn btn-delete w-[100px]'
            onClick={deleteConfirmation}
          >
            Delete
          </button>
        </div>
        <div className='device-info-group'>
          <h4>Identification</h4>
          <div className='flex justify-between items-center'>
            <p>
              <span>Brand: </span>
              <span>Dell</span>
            </p>
            <p>
              <span>Model: </span>
              <span>XPS 13</span>
            </p>
            <p>
              <span>Serial number: </span>
              <span>JHK1234LLY</span>
            </p>
          </div>
        </div>
        <div className='device-info-group'>
          <h4>Hardware Components</h4>
          <div className='flex justify-between items-center'>
            <p>
              <span>Processor: </span>
              <span>Intel Core i7 8th Gen 2.40GHz</span>
            </p>
            <p>
              <span>Storage: </span>
              <span>256GB SSD</span>
            </p>
            <p>
              <span>Memory: </span>
              <span>32GB RAM</span>
            </p>
            <p>
              <span>Graphics: </span>
              <span>Intel HD Graphics</span>
            </p>
          </div>
        </div>
        <div className='device-info-group'>
          <h4>Input and Output Ports</h4>
          <div className='flex justify-between items-center'>
            <p>
              <span>USB: </span>
              <span>True</span>
            </p>
            <p>
              <span>Ethernet LAN: </span>
              <span>True</span>
            </p>
            <p>
              <span>Microphone/Headphone: </span>
              <span>True</span>
            </p>
            <p>
              <span>HDMI: </span>
              <span>True</span>
            </p>
          </div>
        </div>
        <div className='device-info-group'>
          <h4>Built-in Devices</h4>
          <div className='flex justify-between items-center'>
            <p>
              <span>Touchscreen: </span>
              <span>True</span>
            </p>
            <p>
              <span>Touchpad: </span>
              <span>True</span>
            </p>
            <p>
              <span>Webcam: </span>
              <span>True</span>
            </p>
            <p>
              <span>Speakers: </span>
              <span>True</span>
            </p>
            <p>
              <span>Keyboard: </span>
              <span>True</span>
            </p>
            <p>
              <span>Display: </span>
              <span>13"</span>
            </p>
          </div>
        </div>
        <div className='device-info-group'>
          <h4>Connectivity</h4>
          <div className='flex justify-between items-center'>
            <p>
              <span>Bluetooth: </span>
              <span>True</span>
            </p>
            <p>
              <span>Wi-Fi: </span>
              <span>True</span>
            </p>
          </div>
        </div>
        <div className='device-info-group'>
          <h4>Additional Features</h4>
          <div className='flex justify-between items-center'>
            <p>
              <span>Battery life: </span>
              <span>5-9HRS</span>
            </p>
            <p>
              <span>Software: </span>
              <span>Microsoft Windows 11 Pro; McAfee Antivirus 12.0</span>
            </p>
            <p>
              <span>Warranty: </span>
              <span>12Months</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViewDevice
