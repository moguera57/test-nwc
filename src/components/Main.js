import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import TargetedIndustries from './pages/TargetedIndustries'
import Incentives from './pages/Incentives'
import Quality from './pages/Quality'
import Projects from './pages/Projects'
import Sustainability from './pages/Sustainability'
import Workforce from './pages/Workforce'
import Education from './pages/Education'
import Infrastructure from './pages/Infrastructure'
import PartnerAgencies from './pages/PartnerAgencies'
import notfound from './pages/404'

// The Main component renders one of the provided
// Routes (provided that one matches).

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/targetedindustries' component={TargetedIndustries}/>
      <Route path='/incentives' component={Incentives}/>
      <Route path='/qualityoflife' component={Quality}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/sustainability' component={Sustainability}/>
      <Route path='/workforce' component={Workforce}/>
      <Route path='/education' component={Education}/>
      <Route path='/infrastructure' component={Infrastructure}/>
      <Route path='/partneragencies' component={PartnerAgencies}/>
      <Route component={notfound} />
    </Switch>
  </main>
)

export default Main
