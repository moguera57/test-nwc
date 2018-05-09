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
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
      <Route path={`${process.env.PUBLIC_URL}/targetedindustries`} component={TargetedIndustries}/>
      <Route path={`${process.env.PUBLIC_URL}/incentives`} component={Incentives}/>
      <Route path={`${process.env.PUBLIC_URL}/qualityoflife`} component={Quality}/>
      <Route path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
      <Route path={`${process.env.PUBLIC_URL}/sustainability`} component={Sustainability}/>
      <Route path={`${process.env.PUBLIC_URL}/workforce`} component={Workforce}/>
      <Route path={`${process.env.PUBLIC_URL}/education`} component={Education}/>
      <Route path={`${process.env.PUBLIC_URL}/infrastructure`} component={Infrastructure}/>
      <Route path={`${process.env.PUBLIC_URL}/partneragencies`} component={PartnerAgencies}/>
      <Route component={notfound} />
    </Switch>
  </main>
)

export default Main
