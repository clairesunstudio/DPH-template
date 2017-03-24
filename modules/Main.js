import React from 'react'
import SidebarNav from './SidebarNav'
import Section from './Section'
import SplitColumns from './SplitColumns'
import Figure from './Figure'
import Paragraph from './Paragraph'
import GraphTitle from './GraphTitle'
import {ResponsiveContainer,BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'

var Main = React.createClass({

  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    data_bar_unintent: React.PropTypes.array.isRequired,
    data_bar_all: React.PropTypes.array.isRequired,
    data_line_ma:     React.PropTypes.array.isRequired,
    data_line_drug:     React.PropTypes.array.isRequired,
  },
  render: function(){
    const getPercent = (value, total) => {
        const ratio = total > 0 ? value / total : 0;
        return toPercent(ratio, 2);
    };

    const toPercent = (decimal, fixed = 0) => {
        return `${(decimal * 100).toFixed(fixed)}%`;
    };

    const color = {
          green: "#43956f",
          grey: "#535353",
          blue: "#0071bc",
          red: "#b71c1c",
    };
    const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
    const isVert = axisType === 'yAxis';
    const cx = isVert ? x + 20 : x + (width/2);
    const cy = isVert ? (height / 2) + y : y + height +2 ;
    const rot = isVert ? `270 ${cx} ${cy}` : 0;
    return (
      <Text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" fontSize=".7em">
        {children}
      </Text>
    );
  };
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


               <GraphTitle>All Intent Opioid-Related Deaths of Massachusetts Residents 2015-2016</GraphTitle>
                <ResponsiveContainer minHeight={400}>
                  <BarChart data={this.props.data_bar_all} margin={{top: 20, right: 20, left: 10, bottom: 5}}>
                       <XAxis label={<AxisLabel >Month</AxisLabel>} dataKey="Month" fontSize = "0.71em"/>
                       <YAxis label={<AxisLabel axisType='yAxis'>Deaths</AxisLabel>} tickCount = {10} fontSize = "0.71em"/>
                       <CartesianGrid strokeDasharray="3 3"/>
                       <Tooltip/>
                       <Legend />
                       <Bar dataKey="Estimated" stackId="a" fill={color.grey}/>
                       <Bar dataKey="Confirmed" stackId="a" fill={color.green}/>
                  </BarChart>
                </ResponsiveContainer>

                <GraphTitle>Uninententional/Undetermined Opioid-Related Deaths in Massachusetts from 2000-2015</GraphTitle>
                 <ResponsiveContainer minHeight={400}>
                   <BarChart data={this.props.data_bar_unintent} margin={{top: 20, right: 20, left: 10, bottom: 5}}>
                        <XAxis label={<AxisLabel >Month</AxisLabel>} dataKey="Year" fontSize = "0.71em"/>
                        <YAxis label={<AxisLabel axisType='yAxis'>Deaths</AxisLabel>} tickCount = {10} fontSize = "0.71em"/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="Estimated" stackId="a" fill={color.grey}/>
                        <Bar dataKey="Confirmed" stackId="a" fill={color.blue}/>
                   </BarChart>
                 </ResponsiveContainer>

                <GraphTitle>Percent of Opioid Deaths with Specific Drugs Present MA: 2014-2016</GraphTitle>
                <ResponsiveContainer minHeight={400}>
                  <LineChart data={this.props.data_line_drug}>
                    <XAxis label={<AxisLabel >Quarter</AxisLabel>} dataKey="date" fontSize = "0.71em" />
                    <YAxis label={<AxisLabel axisType='yAxis' x={30} y={-50}>Percentage</AxisLabel>} tickCount = {5} tickFormatter={toPercent} fontSize = "0.71em" />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend/>
                    <Line dataKey="Both Fentanyl & Heroin" formatter={toPercent} stroke={color.grey} />
                    <Line dataKey="Only Fentanyl" formatter={toPercent} stroke={color.red} activeDot={{r: 8}}/>
                    <Line dataKey="Only Heroin" formatter={toPercent} stroke={color.blue}/>
                    <Line dataKey="Only Methadone" formatter={toPercent} stroke={color.grey} strokeDasharray="5 5"/>
                  </LineChart>
                </ResponsiveContainer>

                <GraphTitle>Rate of Unintentional/Undetermined Opioid-Related Deaths of Massachusetts Residents: 2000-2015</GraphTitle>
                <ResponsiveContainer minHeight={400}>
                  <LineChart data={this.props.data_line_ma}>
                    <XAxis label={<AxisLabel >Year</AxisLabel>} dataKey="year" fontSize = "0.71em"/>
                    <YAxis label={<AxisLabel axisType='yAxis' x={30} y={-50}>Death Rate per 100,000 People</AxisLabel>} tickCount = {5} fontSize = "0.71em"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line dataKey="Death Rate per 100,000 People" stroke={color.blue}/>
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
