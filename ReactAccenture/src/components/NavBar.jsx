import React from 'react'
import "../Styles/navBar.css"

// This is the navBar of the page
export const NavBar = () => {

  

  const form = () =>{
    // Form dinamic whit sweetalert
    Swal.fire({
      title: 'Create Post',
      html: `
      <div className="container">
        <form onSubmit="{evento = () =>{
          console.log(evento.target)
        }}">
          <div class="mb-3">
          <label for="NameF" class="form-label">Name</label>
          <input type="text" class="form-control" id="NameF" placeholder=""/>
          </div>
          <div class="mb-3">
          <label for="DescriptionF" class="form-label">Description</label>
          <textarea class="form-control" id="DescriptionF" rows="3"></textarea>
          </div>
          <div class="dropdown mt-3">
              <button class="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
              </button>
                  <ul class="dropdown-menu w-100">
                      <li><a class="dropdown-item" href="#">Travel</a></li>
                      <li><a class="dropdown-item" href="#">LifeStyle</a></li>
                      <li><a class="dropdown-item" href="#">Bussines</a></li>
                      <li><a class="dropdown-item" href="#">Food</a></li>
                      <li><a class="dropdown-item" href="#">Work</a></li>
                  </ul>
          </div>
          <div class="mt-3">
            <label for="UrlF" class="form-label">Url</label>
            <input type="url" class="form-control" id="UrlF" placeholder=""/>
          </div>
        </form>
      </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } 
    })
  }

  return (
    // The navBar html 
    <div className='container'>
        <nav className="navbar navbar-expand-lg justify-content-center mt-5">
          <div className='d-flex top-nav mb-2'>
            <span className='brackets d-flex'>[</span>
            <h5 className='top-element justify-content-center mx-2'>Making your Life Easier</h5>
            <span className='brackets d-flex'>]</span>
          </div>
          <div className='title d-flex w-auto mb-5'>
            <h1 className='title-text'>Discovering the World</h1>
          </div>
          <div className='d-flex btn-new mb-2'>
            <button onClick={ form } className='btn-circle'>
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
          <div className="btn-group mb-2" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-secondary btn-text">All</button>
            <button type="button" className="btn btn-outline-secondary btn-text">Travel</button>
            <button type="button" className="btn btn-outline-secondary btn-text">Lifestyle</button>
            <button type="button" className="btn btn-outline-secondary btn-text">Bussines</button>
            <button type="button" className="btn btn-outline-secondary btn-text">Food</button>
            <button type="button" className="btn btn-outline-secondary btn-text">Work</button>
          </div>
        </nav>
    </div>


  )
}
