const Filters = () => {
  return (
    <section>
      <div className='filters'>
        <div className='filter'>
          <label htmlFor='type'>Type</label>
          <select name='type' id='type'>
            <option value='all'>All</option>
          </select>
        </div>
        <div className='filter program'>
          <label htmlFor='program'>Program</label>
          <select name='program' id='program'>
            <option value='all'>All</option>
          </select>
        </div>
        <div className='filter'>
          <label htmlFor='region'>Region</label>
          <select name='region' id='region'>
            <option value='all'>All</option>
          </select>
        </div>
        <div className='filter'>
          <label htmlFor='district'>District</label>
          <select name='district' id='district'>
            <option value='all'>All</option>
          </select>
        </div>
        <div className='filter facility'>
          <label htmlFor='facility'>Facility</label>
          <select name='facility' id='facility'>
            <option value='all'>All</option>
          </select>
        </div>
        <div className='filter'>
          <label htmlFor='cadre'>Cadre</label>
          <select name='cadre' id='cadre'>
            <option value='all'>All</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default Filters
