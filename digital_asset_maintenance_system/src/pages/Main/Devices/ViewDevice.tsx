import { Link } from 'react-router-dom'

const ViewDevice = () => {
  return (
    <section className='main-section'>
      <div className='container'>
        <div className='heading'>
          <div>
            <h3>Dell XPS 13</h3>
            <p>
              <em>
                {/* Replace to with link to user detail page */}
                Assigned to:
                <Link to='' className='inline'>John Doe</Link>
              </em>
              <br />
            </p>
            <p>
              <em>
                Location: Greater Accra - Ayawaso West - Achimota Hospital
              </em>
            </p>
          </div>
          <div>
            <button type='button' className='btn btn-delete'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViewDevice
