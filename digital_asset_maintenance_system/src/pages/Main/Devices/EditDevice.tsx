import '../../../assets/css/AddEditDevice.css'

// TODO
// Replace all values with actual values from server response.
// Checkboxes should be checked if the value is true, otherwise unchecked.
// use useState hook to store the form values.
// use onChange event to update the form values.

const EditDevice = () => {
  return (
    <section className='main-section'>
      <div className='form-container'>
        <div className='form-header flex justify-between'>
          <h3>Edit Device</h3>
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
                <input type='text' name='brand' id='brand' value='Dell' />
              </div>
              <div className='form-group text'>
                <label htmlFor='model'>Model</label>
                <input type='text' name='model' id='model' value='XPS 13' />
              </div>
              <div className='form-group text'>
                <label htmlFor='serial-number'>Serial number</label>
                <input
                  type='text'
                  name='serial-number'
                  id='serial-number'
                  value='JHK1234LLY'
                />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Hardware Components</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group text'>
                <label htmlFor='processor'>Processor</label>
                <input
                  type='text'
                  name='processor'
                  id='processor'
                  value='Intel Core i7 8th Gen 2.40GHz'
                />
              </div>
              <div className='form-group text'>
                <label htmlFor='storage'>Storage</label>
                <input
                  type='text'
                  name='storage'
                  id='storage'
                  value='256GB SSD'
                />
              </div>
              <div className='form-group text'>
                <label htmlFor='memory'>Memory</label>
                <input type='text' name='memory' id='memory' value='32GB RAM' />
              </div>
              <div className='form-group text'>
                <label htmlFor='graphics'>Graphics</label>
                <input
                  type='text'
                  name='graphics'
                  id='graphics'
                  value='Intel HD Graphics'
                />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Input and Output Ports</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group check'>
                <label htmlFor='usb'>USB</label>
                <input type='checkbox' name='usb' id='usb' checked />
              </div>
              <div className='form-group check'>
                <label htmlFor='lan'>Ethernet LAN</label>
                <input type='checkbox' name='lan' id='lan' checked />
              </div>
              <div className='form-group check'>
                <label htmlFor='microphone-headphone'>
                  Microphone/Headphone
                </label>
                <input
                  type='checkbox'
                  name='microphone-headphone'
                  id='microphone-headphone'
                  checked
                />
              </div>
              <div className='form-group check'>
                <label htmlFor='hdmi'>HDMI</label>
                <input type='checkbox' name='hdmi' id='hdmi' checked />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Built-in Devices</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group check'>
                <label htmlFor='touchscreen'>Touchscreen</label>
                <input
                  type='checkbox'
                  name='touchscreen'
                  id='touchscreen'
                  checked
                />
              </div>
              <div className='form-group check'>
                <label htmlFor='touchpad'>Touchpad</label>
                <input type='checkbox' name='touchpad' id='touchpad' checked />
              </div>
              <div className='form-group check'>
                <label htmlFor='webcam'>Webcam</label>
                <input type='checkbox' name='webcam' id='webcam' checked />
              </div>
              <div className='form-group check'>
                <label htmlFor='speakers'>Speakers</label>
                <input type='checkbox' name='speakers' id='speakers' checked />
              </div>
              <div className='form-group check'>
                <label htmlFor='keyboard'>Keyboard</label>
                <input type='checkbox' name='keyboard' id='keyboard' checked />
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
                <input
                  type='checkbox'
                  name='bluetooth'
                  id='bluetooth'
                  checked
                />
              </div>
              <div className='form-group check'>
                <label htmlFor='wifi'>Wi-Fi</label>
                <input type='checkbox' name='wifi' id='wifi' checked />
              </div>
            </div>
          </section>
          <section className='add-device-form-section'>
            <h4>Additional Features</h4>
            <div className='flex justify-between gap-3 flex-wrap'>
              <div className='form-group text'>
                <label htmlFor='battery-life'>Battery Life</label>
                <input
                  type='text'
                  name='battery-life'
                  id='battery-life'
                  value='5-10HRS'
                />
              </div>
              <div className='form-group text'>
                <label htmlFor='software'>Software</label>
                <input
                  type='text'
                  name='software'
                  id='software'
                  value='Microsoft Windows 11 Pro; McAfee Antivirus 12.0'
                />
              </div>
              <div className='form-group text'>
                <label htmlFor='warranty'>Warranty</label>
                <input
                  type='text'
                  name='warranty'
                  id='warranty'
                  value='12months'
                />
              </div>
            </div>
          </section>
          <div className='form-btn'>
            <button className='btn btn-submit'>Save</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default EditDevice
