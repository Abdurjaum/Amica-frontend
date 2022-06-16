import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class DiscoverView {
  async init(){
    document.title = 'Discover' 
    this.discovers = null   
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Discover Friends" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content"> 

      <div class="p-2"></div>
      <h2 class="h2 text-center">Find someone to share your passion with !</h2>
      <div class="p-4"></div>


      <div class="container">
    <div class="row">
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Jim Blaze</h4>
                    <h5>Single, 22 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Inaya Lin</h4>
                    <h5>Engaged, 21 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">John Park</h4>
                    <h5>Single, 21 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Mary Jane</h4>
                    <h5>Single, 19 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Alex Chung</h4>
                    <h5>Single, 27 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="p-3"></div>
    
    <div class="row">
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Jane Smith</h4>
                    <h5>Engaged, 20 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1605949405965-d49ada3f9189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Yann Ritz</h4>
                    <h5>Single, 24 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1478465726282-ddb11650c80b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Amy Snit</h4>
                    <h5>Single, 22 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Mia Blaze</h4>
                    <h5>Single, 23 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div style="width:14vw; height:30vh"; class="card p-0">
                <div style="width:14vw; height:30vh"; class="card-image">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="">
                </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">Tim Hatt</h4>
                    <h5>Single, 24 Years</h5>

                    <ul class="social-icons d-flex justify-content-center">
                        <li style="--i:3">
                            <a href="#">
                                <i class='fa fa-user-plus'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new DiscoverView()