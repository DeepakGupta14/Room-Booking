import React from 'react'
import './Calendar.css'

const Calender = () => {
  return (

    <div className='container-fluid'>
      <p className='d-flex m-2' style={{ fontWeight: "bolder" }}>Calender & Pricing</p>
      <div className="d-flex ">
        <label htmlFor="" className='ml-2'>From<br/></label>
        <input type="date" className="form-control ml-2 mb-3 col-lg-2" id="result_from" placeholder="Check in" disabled="" />
        <label htmlFor="" className='ml-2'>Through<br/></label>
        <input type="date" className="form-control ml-2  mb-3 col-lg-2" id="result_to" placeholder="Check out" disabled="" />
        <button type="button" className="btn btn-primary btn-sm mb-3 ml-2">Primary</button>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end mr-2 pt-1">
          <select className="form-select" style={{ width: "20%" }}>
            <option selected>List View</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <li className="page-item px-2">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className='btn d-flex justify-content-end' style={{backgroundColor:"#d3d3d3"}}>
        <button type="button" className="btn btn-success btn-sm m-1" style={{borderRadius:"50%"}}></button><span> Booked</span>
        <button type="button" className="btn btn-danger btn-sm m-1" style={{borderRadius:"100%"}}></button><span> Closed</span>
        <button type="button" className="btn btn-warning btn-sm m-1" style={{borderRadius:"100%"}}></button><span> Sold</span>
        <button type="button" className="btn btn-info btn-sm m-1" style={{borderRadius:"100%"}}></button><span> No Room</span>
      </div>

      <div className="table-responsive d-flex justify-content-center">
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th scope="col">Month
              <input type="date" />
              </th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thu</th>
              <th scope="col">Fri</th>
              <th scope="col">Sat</th>
              <th scope="col">Sun</th>
              <th scope="col">Mon</th>
              <th scope="col">Tue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Room Status</th>
              <td><input type="date" id="number" value="0" /></td>
              <td>09</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr className="table-light">
              <th scope="row">Room to sell 
              <button type="button" className="btn btn-light ml-1 btn-sm">Edit</button>
              </th>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Net Booked</th>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">
              <select className='form-select-sm' style={{border:"none"}}>
              <option selected>Standard Rate</option>
                <option>Rate!</option>
                <option>Rate!</option>
              </select>
              </th>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
            </tr>
            <tr class="table-light">
              <th scope="row">Min len of stay
              <button type="button" className="btn btn-light ml-1 btn-sm">Edit</button>
              </th>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
            </tr>
            <tr className="table-light">
              <th scope="row">Room to sell
              <button type="button" className="btn btn-light ml-1 btn-sm">Edit</button>
              </th>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="1" /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Room to sell              </th>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="1" /></td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Min Advance Reserve
              <button type="button" className="btn btn-light ml-1 btn-sm">Edit</button>
              </th>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="0" /></td>
              <td><input type="number" id="number" value="1" /></td>
              <td><input type="number" id="number" value="1" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>

  )
}

export default Calender;
