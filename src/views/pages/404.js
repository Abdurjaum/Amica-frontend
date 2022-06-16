import App from './../../App.js'
import {html, render } from 'lit-html'

class FourOFourView{
  init(){
    console.log('FourOFourView.init')    
    document.title = '404 File not found'    
    this.render()
  }

  render(){
    const template = html`
    <va-app-header title="Page Not Found" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="d-flex align-items-center justify-content-center vh-100" >
        <div class="text-center row">
          <div class=" col-md-6">
            <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
              class="img-fluid">
          </div>
          <div class=" col-md-6 mt-5">
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
              The page you’re looking for doesn’t exist.
            </p>
            <a href="/" class="btn btn-primary" onlick="route()">Go Home</a>
          </div>

        </div>
      </div>`
    render(template, App.rootEl)
  }
}

export default new FourOFourView()