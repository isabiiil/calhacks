import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <>
    <Navbar />
      <div className="w-1/2 h-screen mx-auto my-24">
        <h1 className="text-5xl text-center my-12 dark:text-gray-100">Start your own business!</h1>
        
        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="text-2xl"
          >
            <h3>Who, me?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <b>YES</b>, you! You likely have an idea/venture that you've been thinking about for a while now. Now's your chance to bring that vision to reality!
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
            className="text-2xl"
          >
            <h3>Why should I?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This is not only a financial investment with a strong potential for growth, but an investment on yourself. Building a business is no easy feat, but you grow immensely and gain so much out of it. Small businesses are also really helpful to the economy because they support local communities and bring employment opportunities to those who can't go to large corporations.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
            className="text-2xl"
          >
            <h3>What should I start?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              If you have a novel idea, build a startup! Otherwise, you might be better off starting a small business. This can be a restaurant, a corner store, a deli, a laundromat, etc. They may not be as snazzy as a startup, but they're a bit easier and you have full autonomy on how to run it.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="text-2xl"
          >
            <h3>How should I do it?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              That's what we're here to help you with! We're going to walk you through the steps of starting a small business, from ideation to financial tracking. You are not alone in this exciting journey; we at BlackRock are here to support you!
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
