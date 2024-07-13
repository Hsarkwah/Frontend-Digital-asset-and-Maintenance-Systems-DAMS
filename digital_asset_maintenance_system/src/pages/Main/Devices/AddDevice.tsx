import '../../../assets/css/AddEditDevice.css'

const AddDevice = () => {
  return (
    <section className='main-section'>
      <div className='form-container'>
        <div className='form-header flex justify-between'>
          <h3>Add Device</h3>
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='type'>Type</label>
            <select name='type' id='type'>
              <option value='laptop'>Laptop</option>
              <option value='tablet'>Tablet</option>
              <option value='mobile-phone'>Mobile phone</option>
            </select>
          </div>
          <section className='add-device-form-section'>
            <h4>Identification</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group text'>
                <label htmlFor='brand'>Brand</label>
                <input type='text' name='brand' id='brand' />
              </div>
              <div className='form-group text'>
                <label htmlFor='model'>Model</label>
                <input type='text' name='model' id='model' />
              </div>
              <div className='form-group text'>
                <label htmlFor='serial-number'>Serial number</label>
                <input type='text' name='serial-number' id='serial-number' />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Hardware Components</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group text'>
                <label htmlFor='processor'>Processor</label>
                <input type='text' name='processor' id='processor' />
              </div>
              <div className='form-group text'>
                <label htmlFor='storage'>Storage</label>
                <input type='text' name='storage' id='storage' />
              </div>
              <div className='form-group text'>
                <label htmlFor='memory'>Memory</label>
                <input type='text' name='memory' id='memory' />
              </div>
              <div className='form-group text'>
                <label htmlFor='graphics'>Graphics</label>
                <input type='text' name='graphics' id='graphics' />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Input and Output Ports</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group check'>
                <label htmlFor='usb'>USB</label>
                <input type='checkbox' name='usb' id='usb' />
              </div>
              <div className='form-group check'>
                <label htmlFor='lan'>Ethernet LAN</label>
                <input type='checkbox' name='lan' id='lan' />
              </div>
              <div className='form-group check'>
                <label htmlFor='microphone-headphone'>
                  Microphone/Headphone
                </label>
                <input
                  type='checkbox'
                  name='microphone-headphone'
                  id='microphone-headphone'
                />
              </div>
              <div className='form-group check'>
                <label htmlFor='hdmi'>HDMI</label>
                <input type='checkbox' name='hdmi' id='hdmi' />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Built-in Devices</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group check'>
                <label htmlFor='touchscreen'>Touchscreen</label>
                <input type='checkbox' name='touchscreen' id='touchscreen' />
              </div>
              <div className='form-group check'>
                <label htmlFor='touchpad'>Touchpad</label>
                <input type='checkbox' name='touchpad' id='touchpad' />
              </div>
              <div className='form-group check'>
                <label htmlFor='webcam'>Webcam</label>
                <input type='checkbox' name='webcam' id='webcam' />
              </div>
              <div className='form-group check'>
                <label htmlFor='speakers'>Speakers</label>
                <input type='checkbox' name='speakers' id='speakers' />
              </div>
              <div className='form-group check'>
                <label htmlFor='keyboard'>Keyboard</label>
                <input type='checkbox' name='keyboard' id='keyboard' />
              </div>
              <div className='form-group text'>
                <label htmlFor='display'>Display</label>
                <select name='display' id='display'>
                  <option value='13"'>13"</option>
                  <option value='14"'>14"</option>
                </select>
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Connectivity</h4>
            <div className='flex gap-3 flex-wrap'>
              <div className='form-group check'>
                <label htmlFor='bluetooth'>Bluetooth</label>
                <input type='checkbox' name='bluetooth' id='bluetooth' />
              </div>
              <div className='form-group check'>
                <label htmlFor='wifi'>Wi-Fi</label>
                <input type='checkbox' name='wifi' id='wifi' />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Additional Features</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group text'>
                <label htmlFor='battery-life'>Battery Life</label>
                <input type='text' name='battery-life' id='battery-life' />
              </div>
              <div className='form-group text'>
                <label htmlFor='software'>Software</label>
                <input type='text' name='software' id='software' />
              </div>
              <div className='form-group text'>
                <label htmlFor='warranty'>Warranty</label>
                <input type='text' name='warranty' id='warranty' />
              </div>
            </div>
          </section>
          <div className='form-btn'>
            <button type='submit' className='btn btn-submit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddDevice
