import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { 
  Home, 
  DriverLicense, 
  DMV_Redirect, 
  NYS_Resident, 
  Unable, 
  Prison, 
  Mental,
  OtherVote,
  USCitizen,
  Name,
  Phone,
  Gender,
  Email,
  ResiAddress,
  VotedBefore,
  LastVoteYear,
  VCName,
  VCAddress,
  VCCounty,
  Id_Type,
  DMV_Number,
  SSN_Number,
  MailAddress,
  DifferentMail,
  Party,
  Absentee,
  ElectionWorker,
  Birthday
  } from './components/index';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Start: DriverLicense,
    DriverLicenseYes: DMV_Redirect,
    DriverLicenseNo: NYS_Resident,
    Unable: Unable,
    Prison: Prison,
    Mental: Mental,
    OtherVote: OtherVote,
    USCitizen: USCitizen,
    Name: Name,
    Phone: Phone,
    Gender: Gender,
    Email: Email,
    ResiAddress: ResiAddress,
    VotedBefore: VotedBefore,
    LastVoteYear: LastVoteYear,
    VCName: VCName,
    VCAddress: VCAddress,
    VCCounty: VCCounty,
    Id_Type: Id_Type,
    DMV_Number: DMV_Number,
    SSN_Number: SSN_Number,
    MailAddress: MailAddress,
    DifferentMail: DifferentMail,
    Party: Party,
    Absentee: Absentee,
    ElectionWorker: ElectionWorker,
    Birthday: Birthday
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}