import React from "react";
import { render } from "react-dom"
import MaterialUITextbox from './MaterialUITextbox'
import MaterialUIButton from './MaterialUIButton'
import Accordion  from "./Accordion";


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
            onChange={(event) => {}} //setName(event.target.value)
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
          </>
        );
      }
}


export default WebExplore;
