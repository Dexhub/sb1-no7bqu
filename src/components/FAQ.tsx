import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-pink-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-pink-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">{answer}</div>
      )}
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: "What is your cancellation & no-show policy?",
      answer: (
        <>
          <p>Due to the nature of our events, every turnout is critical to the success and experience for all participants. <strong>We do not provide refunds. Cancellations are non-refundable.</strong></p>
          <p>Only in emergencies will we refund your cancellation, and this does not include the $5 service fee. For example, a death in your immediate family or a sudden severe illness. This is ONLY if we are notified 72-hours or more in advance of the event. If you decide to cancel, you MUST let us know. Cancellations within 72-hours of the start of the event will NOT be refunded for any reason, no exception.</p>
          <p>No-shows are extremely detrimental to the quality of our events. <strong>If you do not show up without any notice or reasoning, you will be charged an additional $50 and may be permanently banned</strong> from participating in all future events. We take this extremely seriously as the quality of our events relies on healthy turnout.</p>
          <p>Leaving in the middle of an event is considered a no-show and incurs the $50 fee automatically. Cancelling within three hours of the start of the event is also considered a no-show and incurs the fee. Please register only for events that will not conflict with your schedule!</p>
        </>
      )
    },
    {
      question: "What are the ground rules? (safety, matching, and disclaimer)",
      answer: (
        <>
          <h4 className="font-semibold mt-2">Safety</h4>
          <p>The safety of our participants is our number one priority. As our events do not have any physical host present, we coordinate with the venue and their staff to help facilitate an environment that ensures safety and confidence among all participants. Please read below for what is expected of you (as the participant) during our event:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>You will NOT share, ask for, or provoke personally sensitive information (contact, address, etc)</strong>. You will NOT engage with other participants in a way that harms them or makes them feel uncomfortable in any way. If you are made to feel uncomfortable by any participant, you will have the ability to report them to us immediately.</li>
            <li>If the event is held at a venue that serves alcohol, you are expected to moderate your alcohol intake so that you can participate in our event without any complication to the other participants, staff, or anyone else at the venue.</li>
          </ol>
          <p>Failure to comply with these ground rules will result in a permanent ban from all future events, and both Jab We Met and the coordinating venue will take appropriate further action as necessary.</p>
          
          <h4 className="font-semibold mt-2">Matching</h4>
          <p>Your contact information will not be shared with any participants at our events UNLESS you have a successful match. In the case of a successful match (you and the other participant indicate "M" for each other), then we will share your phone number via email ONLY with each other after the event. <strong>Jab We Met is not responsible for any interactions beyond or outside of our events.</strong></p>
          
          <h4 className="font-semibold mt-2">DISCLAIMER OF RESPONSIBILITY</h4>
          <p>We view the risk profile of attending an event similar to that of going to a restaurant, bar, or cafe for a drink or a meal. We do not own or operate the venues where our events are located, and we do not have Jab We Met staff on site during events.</p>
          <p>While Jab We Met coordinates to maintain a safe environment to the best of our ability, the company cannot guarantee 100% safety when using its service. By using Jab We Met, you will interact with other participants face-to-face, interact with 3rd party venues and its staff, and potentially interact with non-participants. The company does not conduct a background check on its participants.</p>
          <p>Under no circumstances will Jab We Met or its affiliates be liable for any damages or harm that may occur to the participant through its services or by any associated activity, such as driving to the venue, etc. Jab We Met assumes no responsibilities whatsoever for any damages caused to Participants, Non-Participants, Staff, or any Affiliate, of or by any product or service provided by Jab We Met. You attend events and participate in conversations with others completely at your own risk, just as you would visit the venue without Jab We Met hosting an event there.</p>
        </>
      )
    },
    {
      question: "Do I need to keep my phone on the entire time?",
      answer: "We highly encourage you to do so because that's how we moderate the entire event. Your remote host will be in contact over text message, and our web link will display a timer and logistical information about your dates. Please leave the screen on and open, face-up, on the table in front of you with notifications, vibration, and even sound on. This will help you navigate the event and react to logistics accordingly in a timely manner. (If you keep your eyes focused on the face in front of you while having your conversations, it shouldn't be too distracting! Thanks for your understanding.)"
    },
    {
      question: "When should I show up? What happens if I'm late?",
      answer: (
        <>
          <p><strong>Please arrive 15 minutes early.</strong> This allows you time to buy a drink and get settled. During that time, our remote event host is sprinting to confirm everyone has arrived, and set up pairings for your dating rounds. Because venues sometimes close at the end of our 2-hour events, we need to start exactly at the scheduled time. Leave earlier than necessary, in case there is traffic or issues finding street parking!</p>
          <p>If you are late, we will not wait for you, and we cannot add folks into the event after it starts. <strong>If you do not tell us you are running behind, you will be considered a no-show, not allowed to participate, and charged the $50 fee.</strong> Again, please arrive early, and tell us as far in advance as possible if you cannot make it, or will be arriving late. We can work to coordinate, depending on the situation, but only if we know in advance what the situation is!</p>
        </>
      )
    },
    {
      question: "I want to register for another event. What if a person I have previously gone on a date with also signs up to the same event?",
      answer: (
        <>
          <p>We will try our best to email you in advance if someone you've already met with at Jab We Met is also attending. Typically we offer options to date as normal, skip that pairing, or cancel your participation with a refund. Cancellation will only be offered if we manage to detect a repeat pairing 4+ days in advance of the event.</p>
          <p>We currently run our events using lots of spreadsheets, so it's a bit manual and error-prone, especially as our user base grows. Apologies in advance if we fail to notify you of a repeat pairing. We are working to automate and perfect this system. If you haven't heard from us and are concerned, please reach out to us so we can double-check for you!</p>
        </>
      )
    },
    {
      question: "How long do rounds last for?",
      answer: "Unlike traditional speed-dating events with very short rounds, our rounds are a little longer (7-10 minutes) so you have enough time to engage in a real conversation. There is a 5-minute break between rounds so you can reflect, take notes, have a breather, and find your next date."
    },
    {
      question: "What happens if there is an uneven number of participants?",
      answer: (
        <>
          <p>Most events are fully booked, with 7 men & 7 women, or 8 queer participants. Maybe 1 person no-shows, but we typically expect full attendance and will try our best to tell you in advance if this is not the case.</p>
          <p>We text each participant asking for confirmation 1-hour prior to the start of the event. For example, if your event starts at 12pm, we text you at 10:45am asking for confirmation that you will arrive at 11:45am (see above, please arrive 15 minutes early). By 11:30am, we finalize the list of participants for that event. If there is an imbalance of participants, then we introduce "break-rounds" to substitute for the dating-round(s) with missing participants.</p>
          <p>If there are 3 or more missing dates from one side, we try our best to be fair, and give a partial refund to compensate for the missing dates. Usually our no-show policy is sufficient to ensure most people show up, so although it's possible to have 1-2 no-shows at times, it's quite unlikely to be missing 3+ dates for a given event.</p>
          <p>If there is a massive imbalance, e.g. 7 men and 2 women, we may cancel the event in advance. This rarely ever happens, and we make sure to give fair refunds and ample notice to the best of our ability if we are forced to cancel an event like this.</p>
        </>
      )
    },
    {
      question: "Does Jab We Met have a partnership with the venues they work with?",
      answer: "Yes! We are in close contact with all venues and get their permission to use their space for our events. We communicate regularly with the venues to schedule events and receive feedback."
    },
    {
      question: "I'm 30 years-old but would rather register for the 31-41 bracket. Am I allowed to?",
      answer: "Yes! If you are 2 or less years removed from the next age bracket, you are welcome to register for it. So for example, if you are 29 and wish to register for the 31-41 bracket, you are welcome to do so. Likewise, if you are 43 and wish to register for the 31-41 bracket, you may do so as well. If you are unsure if you are eligible for an event, please reach out to us and we will coordinate."
    },
    {
      question: "How long do events typically last?",
      answer: "Events typically last ~2 hours long. They start on the dot, so please arrive 15 minutes early. You don't want to show up a few minutes late due to parking or traffic and miss your first date!"
    },
    {
      question: "Are there breaks in-between dates?",
      answer: (
        <>
          <p>You get a few minutes in-between dates (to optionally take notes on your previous date, have a breather, and to find your next one), so you have time to go to the restroom or order a(nother) coffee/drink.</p>
          <p>With that said, we encourage you to show up to the venue early so you have ample time to settle in. We also typically have a longer intermission break of 10 minutes mid-event.</p>
          <p>If participants are not respecting the break time, please politely ask them to limit conversation to the given 10-minute date, and/or report them directly to us so we can take appropriate action.</p>
        </>
      )
    },
    {
      question: "I can't find my date. Did they leave? What should I do?",
      answer: "This rarely happens, but in the off-chance that it does, text us or call immediately so we can help coordinate. If nothing materializes, then your date will become a \"break\"-round. They might just be in the bathroom."
    },
    {
      question: "I wasn't able to get a match.",
      answer: (
        <>
          <p>Finding a successful match is a highly individual and selective process so please don't be discouraged! We have had some events where nobody matches at all, and other events where everyone leaves with at least one match. There's a lot of variance in the participant pool.</p>
          <p>That said, we believe in the value of face-to-face interactions so we hope you still had a fun time and gained valuable experience chatting with new people. We encourage you to attend more Jab We Met events if you found the process OK, regardless of the results for that single event.</p>
        </>
      )
    },
    {
      question: "So I give someone a Match! [M]. Now what?",
      answer: "Your dates will never see your responses. Instead, if you have successfully matched with a date (both indicated an [M]), we will share your numbers with each other by email within 24 hours after the event. You will also get an email notifying you if you did not get any matches."
    },
    {
      question: "Will my phone automatically subscribe to Jab We Met?",
      answer: "When you sign up to a Jab We Met event, we will ask for your permission to send you text notifications leading up to and throughout the event. However, once the event is over, you will no longer receive notifications from us."
    },
    {
      question: "How much does it cost?",
      answer: "We charge $24.99 per ticket, with all service fees ($5) and payment processing included. Prices are subject to change as we experiment for best results. You are also expected to purchase at least one beverage upon arrival, since the venue is providing their space. Thanks for generously supporting the venue and their staff!"
    },
    {
      question: "NOTICE OF PHOTOGRAPHIC AND MEDIA RECORDING",
      answer: "All Jab We Met events may be photographed and/or filmed. By attending this event, you consent to use of photography and video from the event in marketing and promotional materials. Images will not be identified using any personal identifying information."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">Questions? Contact us and we'll get back to you shortly!</p>
          <a href="mailto:info@jabwemet.com" className="text-pink-500 hover:text-pink-600 font-semibold">info@jabwemet.com</a>
        </div>
      </div>
    </section>
  )
}

export default FAQ