import React from 'react'
import SidebarNav from './SidebarNav'
import Section from './Section'
import SplitColumns from './SplitColumns'
import Figure from './Figure'
import Paragraph from './Paragraph'
import {ResponsiveContainer,BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

var Main = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    bar:     React.PropTypes.array.isRequired,
    line:     React.PropTypes.array.isRequired
  },
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
                <ResponsiveContainer minHeight={600}>
                  <BarChart data={this.props.bar} margin={{top: 20, right: 20, left: 10, bottom: 5}}>
                       <XAxis dataKey="Month" style={{fontSize: "0.71em"}}/>
                       <YAxis tickCount = {10} />
                       <CartesianGrid strokeDasharray="3 3"/>
                       <Tooltip/>
                       <Legend />
                       <Bar dataKey="Estimated" stackId="a" fill="#535353" />
                       <Bar dataKey="Confirmed" stackId="a" fill="#43956f" />
                  </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer minHeight={600} height={400}>
                  <LineChart data={this.props.line}>
                    <XAxis dataKey="date" style={{fontSize: "0.71em"}}/>
                    <YAxis tickCount = {5} />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line dataKey="Both Fentanyl & Heroin" stroke="#5a707a" />
                    <Line dataKey="Only Fentanyl" stroke="#b71c1c" activeDot={{r: 8}}/>
                    <Line dataKey="Only Heroin" stroke="#0071bc"/>
                    <Line dataKey="Only Methadone" stroke="#5a707a" strokeDasharray="5 5"/>
                  </LineChart>
                </ResponsiveContainer>

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
