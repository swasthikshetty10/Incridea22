import React from "react";
import Navbar from "./Navbar";

function Rules() {
  return (
    <>
      <Navbar />
      <div className="text-white p-14">
        <h5 className="leading-[2.5rem]  text-5xl text-center md:text-6xl font-title pb-0 text-white sm:ml-4 p-4 sm:p-12 tracking-widest  ">
          Terms and Conditions
        </h5>
        <ul className="list-disc">
          <li>
            Incridea is a National level techno-cultural festival for the
            students of technical institutes across the country. However, some
            events like Battle of the Bands, Fashion Show, Vibe and Stomp That!
            (Termed as semi-pro events here onwards) are open to all the
            colleges in the country.
          </li>
          <li>Participants from only same colleges can form a team.</li>
          <li>
            The registrations for semi-pro events are done via invites. Please
            refer the event details provided under special/core events for more
            details.
          </li>
          <li>
            The points gained by the colleges attending the semi-pro events will
            not be considered for the overall championship.
          </li>
          <li>
            Participants must follow all the rules and regulations of the
            college. Display of any unruly behaviour shall lead to
            disqualification of the team and expulsion of the participant from
            the fest.
          </li>

          <li>
            {" "}
            Consumption of any alcoholic drinks, use of any hallucinogenic drugs
            and other illegal substances anywhere in the institute campus is
            strictly prohibited and any person who has consumed such substances
            and makes an attempt to enter the campus will not be allowed inside{" "}
          </li>

          <li>
            Organisers hold the right to change the rules of the event before
            the event begins without prior notice.
          </li>
          <li>
            NMAMIT is not responsible for any loss or damage of participant's
            personal belongings.
          </li>
          <li>
            The entry for the events and pro-nites will be through the digital
            PID present on the Incridea App. The participant must also present
            their college ID card (compulsory) and Valid government issued ID
            Proof (Any one) (Aadhaar, Driving license, Voter ID, etc.).
          </li>
        </ul>
        <p className="pt-10 text-xl text-igold">
          <b> IMPORTANT </b> <br />
          Any participant found violating the above rules may be immediately
          expelled from the campus. His/her registration from all the events may
          be cancelled and he/she will be penalised appropriately. NMAMIT
          reserves the right to take appropriate legal actions in such cases.
        </p>
        <h3 className="pt-20 text-3xl font-title">Refund Policy</h3>
        <p className="pt-10 text-xl">
          Refunds in any particular case can only be initiated upon request.
          Please reach out to the Technical Heads of Incridea for refunds.
          <li>Bharath M K +918861885124</li>
          <li>Vinay Samantri +917706610521</li>
          <li>Rahul Bhat +918951838121</li>
        </p>
      </div>
    </>
  );
}

export default Rules;
