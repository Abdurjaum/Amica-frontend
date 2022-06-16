import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import InterestAPI from '../../InterestAPI'
import Toast from '../../Toast'

class InterestsView {
  async init(){
    document.title = 'Interests'
    this.interests = null    
    this.render()    
    Utils.pageIntroAnim()
    await this.getInterests()
    //this.filterInterests('member', '10-30')
  }

  async filterInterests(field, match){
    // validate
    if(!field || !match) return

    this.interests = await InterestAPI.getInterests()

    let filteredInterests

    // name
    if(field == 'name'){
      filteredInterests = this.interests.filter(interest => interest.name == match)
      this.interests = filteredInterests
      this.render()
    }

    // member
    if(field == 'member'){
      const memberRangeStart = match.split('-')[0]
      const memberRangeEnd = match.split('-')[1]
      console.log(memberRangeStart, memberRangeEnd)
      filteredInterests = this.interests.filter(interest => interest.member >= memberRangeStart && interest.member <= memberRangeEnd )
      this.interests = filteredInterests
      this.render()
    }

  }

  clearFilterBtns(){
    const filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach(btn => btn.removeAttribute("type") )
  }

  handleFilterBtn(e){
    //clear all filter buttons
    this.clearFilterBtns()

    // set button active
    e.target.setAttribute("type", "primary")
    
    const filterBtns = document.querySelectorAll('.filter-btn')

    const field = e.target.getAttribute("data-field")
    const match = e.target.getAttribute("data-match")

    console.log("field = ", field)
    console.log("match = ", match)

    // filter interests
    this.filterInterests(field, match)


  }

  clearFilters(){
    this.getInterests()
    this.clearFilterBtns()
  }

  async getInterests(){
    try{
      this.interests = await InterestAPI.getInterests()
      console.log(this.interests)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`

      <style>
        .filter-menu {
          display: flex;
          align-items; center;
        }

        .filter-menu > div {
          margin-right: 1em;
        }
      </style>

      <va-app-header title="Interests" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">   
      
        <div class="filter-menu">
          <div>
            <h3>Filter by</h3>
          </div>
          <div>
            <strong>Interests</strong>
            <sl-button class="filter-btn" size="small" data-field="name" data-match="Football" @click=${this.handleFilterBtn.bind(this)}>Football</sl-button>
            <sl-button class="filter-btn" size="small" data-field="name" data-match="Basketball" @click=${this.handleFilterBtn.bind(this)}>Basketball</sl-button>
            <sl-button class="filter-btn" size="small" data-field="name" data-match="Swimming" @click=${this.handleFilterBtn.bind(this)}>Swimming</sl-button>
            <sl-button class="filter-btn" size="small" data-field="name" data-match="Hiking" @click=${this.handleFilterBtn.bind(this)}>Hiking</sl-button>
            <sl-button class="filter-btn" size="small" data-field="name" data-match="Weight-Lifting" @click=${this.handleFilterBtn.bind(this)}>Weight-Lifting</sl-button>
          </div>

          <div>
            <strong>Members</strong>
            <sl-button class="filter-btn" size="small" data-field="member" data-match="10-20 members" @click=${this.handleFilterBtn.bind(this)}>10-20 members</sl-button>
            <sl-button class="filter-btn" size="small" data-field="member" data-match="20-30 members" @click=${this.handleFilterBtn.bind(this)}>20-30 members</sl-button>
            <sl-button class="filter-btn" size="small" data-field="member" data-match="30-40 members" @click=${this.handleFilterBtn.bind(this)}>30-40 members</sl-button>
          </div>

          <div>
            <sl-button size="small" @click=${this.clearFilters.bind(this)}>Clear Filters</sl-button>
          </div>
        </div>
      

       <div class="interests-grid">
       ${this.interests == null ? html`
         <sl-card><sl-card>
       ` : html`
         ${this.interests.map(interest => html`
           <sl-card class="interest-card">
            <img src="${App.apiBase}/images/${interest.image}" alt="${interest.name}" slot="image" />
            <h2>${interest.name}</h2>
            <h4>${interest.member}</h4>
            <p></p>
            <h4>${interest.description}</h4>
            <p></p>
            <p>Group monitored by ${interest.user.firstName} ${interest.user.lastName}</p>

           </sl-card>
         `)}
      `}
       </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new InterestsView()