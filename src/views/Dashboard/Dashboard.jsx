import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility,
  DoneAll,
  Today,
  Hotel,
  DirectionsWalk,
  DirectionsRun,
  DirectionsBike
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "variables/styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0,
    userSkill: [{
      name: "HTML", 
      juniorLeavel: { done: 29, all: 36 },
      middelLeavel: { done: 18, all: 21 }
    }, {
      name: "CSS", 
      juniorLeavel: { done: 26, all: 37 },
      middelLeavel: { done: 9, all: 15 }
    }, {
      name: "JS", 
      juniorLeavel: { done: 12, all: 32 },
      middelLeavel: { done: 6, all: 35 }
    }, {
      name: "GIT", 
      juniorLeavel: { done: 6, all: 21 },
      middelLeavel: { done: 9, all: 15 }
    }, {
      name: "HTTP", 
      juniorLeavel: { done: 6, all: 21 },
      middelLeavel: { done: 9, all: 15 }
    }, {
      name: "ES next", 
      juniorLeavel: { done: 6, all: 21 },
      middelLeavel: { done: 9, all: 15 }
    }, {
      name: "AngularJS", 
      juniorLeavel: { done: 0, all: 31 },
      middelLeavel: { done: 0, all: 20 }
    }, {
      name: "Angular", 
      juniorLeavel: { done: 6, all: 21 },
      middelLeavel: { done: 9, all: 15 }
    }, {
      name: "TypeScript", 
      juniorLeavel: { done: 6, all: 21 },
      middelLeavel: { done: 9, all: 15 }
    }, {
      name: "RxJS", 
      juniorLeavel: { done: 0, all: 12 },
      middelLeavel: { done: 1, all: 5 }
    }, {
      name: "jQuery", 
      juniorLeavel: { done: 6, all: 21 },
      middelLeavel: { done: 9, all: 15 }
    }, {
      name: "React", 
      juniorLeavel: { done: 0, all: 32 },
      middelLeavel: { done: 0, all: 35 }
    }, {
      name: "Bootstrap", 
      juniorLeavel: { done: 6, all: 21 },
      middelLeavel: { done: 9, all: 15 }
    }]
  };

  calculateProgress = (x, y) => {
    return ((x * 100) / y).toFixed(2) + '%';
  };

  getProgressIcon = (points) => {
    if(points > 30) {
      return DirectionsBike;
    } else if(points > 15) {
      return DirectionsRun;
    } else if(points > 0) {
      return DirectionsWalk;
    } else {
      return Hotel;
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const skillData = this.state.userSkill.map(skill => {
      const {name, juniorLeavel, middelLeavel} = skill;
      return [
        name,
        `${juniorLeavel.done}/${juniorLeavel.all}`,
        this.calculateProgress(juniorLeavel.done, juniorLeavel.all),
        `${middelLeavel.done}/${middelLeavel.all}`,
        this.calculateProgress(middelLeavel.done, middelLeavel.all),
      ];
    })

    return (
      <section>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={4}>
            <StatsCard
              icon={DoneAll}
              iconColor="green"
              title="Compleated"
              description="149/560"
              statIcon={AccessTime}
              statText="Last progress 2 days ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={4}>
            <StatsCard
              icon={this.getProgressIcon(4)}
              iconColor="blue"
              title="Month statistics"
              description="24"
              statIcon={Today}
              statText="Learned in March"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={4}>
            <StatsCard
              icon={Accessibility}
              iconColor="purple"
              title="Mentee count"
              description="6"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              headerColor="orange"
              cardTitle="My progress"
              cardSubtitle="New employees on 15th September, 2016"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Skill", "Junior", "", "Middel", ""]}
                  tableData={skillData}
                />
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              headerColor="purple"
              cardTitle="Mentees"
              cardSubtitle="New employees on 15th September, 2016"
              content={
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Leavel"]}
                  tableData={[
                    ["Jone Doy", "Junior"],
                    ["Bob Del", "Strong Junior"],
                    ["Jone Doy", "Junior"],
                    ["Jone Doy", "Junior"],
                    ["Jone Doy", "Middel"],
                    ["Jone Doy", "Trainee"]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </section>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
