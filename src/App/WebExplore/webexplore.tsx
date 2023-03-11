import React from "react";
import { render } from "react-dom"
import MaterialUITextbox from './MaterialUITextbox'
import MaterialUIButton from './MaterialUIButton'
import Accordion  from "./Accordion";
import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
const data = [
    {
      name: 'Web page title - 1',
      children: [
        {
          name: 'Web page title -  1.1',
          children: [
            {
              name: 'Web page title - 1.1.1'
            },
            {
              name: 'Web page title -  1.1.2'
            }
          ]
        },
        {
          name: 'eb page title -  1.2'
        }
      ]
    },
    {
      name: 'Web page title -  2'
    },
    {
      name: 'Web page title -  3',
      children: [
        {
          name: 'Web page title -  3.1'
        }
      ]
    }
  ];


export class WebExplore extends React.Component {

    
    render() {
        return (
          <>
          <MaterialUITextbox
            label="Enter URL"
            fullWidth={true}
            onChange={(event:any) => {}} //setName(event.target.value)
          />
          <MaterialUIButton
            label="Add site"
            fullWidth={false}
            onClick={() => {}}
          />
          <Accordion data={data}></Accordion>
          <MaterialUIButton
            label="Save"
            fullWidth={false}
            onClick={() => {}}
          />
          <MaterialUIButton
            label="Save"
            fullWidth={false}
            onClick={signOut}
          />
          </>
        );
      }
}


export default WebExplore;
