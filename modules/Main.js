import React from 'react'
import SidebarNav from './SidebarNav'
import Section from './Section'
import SplitColumns from './SplitColumns'
import Figure from './Figure'
import Paragraph from './Paragraph'
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

var Main = React.createClass({

  render: function(){
      return(
        <main id="main-content" tabIndex={-1}>
          <div className="main-content main-content--two">
            <section className="ma__action-details">
              <div className="ma__action-details__content">
                <SidebarNav />

                <Section id="Overview"/>
                <Paragraph {...this.props} index={0} />
                <SplitColumns {...this.props} image="/assets/images/placeholder/400x300.png">
                  <Figure image="/assets/images/placeholder/400x300.png"/>
                  <Paragraph {...this.props} index={0} />
                </SplitColumns>
                <div id="death-all-month-chart"></div>
                <BarChart width={600} height={300} data={[
      {name: 'Page A', a: 4000, b: 2400, c: 2400},
      {name: 'Page B', a: 3000, b: 1398, c: 2210},
      {name: 'Page C', a: 2000, b: 9800, c: 2290},
      {name: 'Page D', a: 2780, b: 3908, c: 2000},
      {name: 'Page E', a: 1890, b: 4800, c: 2181},
      {name: 'Page F', a: 2390, b: 3800, c: 2500},
      {name: 'Page G', a: 3490, b: 4300, c: 2100}]}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="a" stackId="a" fill="#8884d8" />
       <Bar dataKey="b" stackId="a" fill="#82ca9d" />
      </BarChart>
                <LineChart width={400} height={400} data={[
      {name: 'Page A', a: 4000, b: 2400, c: 2400},
      {name: 'Page B', a: 3000, b: 1398, c: 2210},
      {name: 'Page C', a: 2000, b: 9800, c: 2290},
      {name: 'Page D', a: 2780, b: 3908, c: 2000},
      {name: 'Page E', a: 1890, b: 4800, c: 2181},
      {name: 'Page F', a: 2390, b: 3800, c: 2500},
      {name: 'Page G', a: 3490, b: 4300, c: 2100},]}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
                  <Line type="monotone" dataKey="a" />
                  <Line type="monotone" dataKey="b" />
                  <Line type="monotone" dataKey="c" />
                </LineChart>

                <Section id="Geographic Data"/>
                <Paragraph {...this.props} index={1} />
                <Figure image="/assets/images/placeholder/400x300.png" align="align-right"/>
                <Paragraph {...this.props} index={1} />

                <Section id="Demographics"/>
                <Paragraph {...this.props} index={2} />

                <Section id="Prescription Activity"/>
                <Paragraph {...this.props} index={3} />

                <Section id="Emergency Incidents"/>
                <Paragraph {...this.props} index={4} />
              </div>
            </section></div></main>
      )
  }
});

module.exports = Main;
