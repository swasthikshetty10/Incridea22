import React from "react";
import Navbar from "./Navbar";

function Privacy() {
  return (
    <>
      <Navbar />

      <div className="text-white p-14">
        <h5 className="leading-[2.5rem]  text-5xl text-center md:text-6xl font-title pb-0 text-white sm:ml-4 p-4 sm:p-12 tracking-widest  ">
          Privacy Policy
        </h5>
        <p>
          This privacy notice discloses the privacy practices for
          https://www.incridea.in This privacy notice applies solely to
          information collected by this website. It will notify you of the
          following:
          <br />
          1. What personally identifiable information is collected from you
          through the website, how it is used and with whom it may be shared.
          <br />
          2. What choices are available to you regarding the use of your data.
          <br />
          3. The security procedures in place to protect the misuse of your
          information.
          <br />
          4. How you can correct any inaccuracies in the information.
          <br />
        </p>
        <h3>Information Collection, Use, and Sharing</h3>
        <p>
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email or other direct contact from you. We will not sell or rent
          this information to anyone.
          <br />
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfil
          your request, e.g: To issue your Participant ID or Accommodation
          Order.
          <br />
          The email address and phone number you give will be used to only to
          contact you regarding the service you have opted in while providing
          those details. The contact information given wont be used to contact
          you for anything else.
          <br />
        </p>
        <h3>Your Access to and Control Over Information</h3>
        <p>
          You may opt out of any future contacts from us at any time. You can do
          the following at any time by contacting us via the email address or
          phone number given on our website:
          <br />
          <ul>
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Have us delete any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ul>
        </p>
        <h3>Security</h3>
        <p>
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
          <br />
          Wherever we collect sensitive information (such as name and date of
          birth), that information is encrypted and transmitted to us in a
          secure way. You can verify this by looking for a lock icon in the
          address bar and looking for "https" at the beginning of the address of
          the Web page.
          <br />
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, billing
          or customer service) are granted access to personally identifiable
          information. The computers/servers in which we store personally
          identifiable information are kept in a secure environment.
        </p>

        <h3>Orders</h3>
        <p>
          We request information from you on our order form
          (https://registration.incridea.in). To buy from us, you must provide
          contact information (like name and date of birth) and financial
          information (like credit card number, expiration date). This
          information is used for billing purposes and to fullfil your orders.
          If we have trouble processing an order, we'll use this information to
          contact you. The contact information collected while ordering from us
          will be only used to send order related details and information and
          wont be used for anything else.
        </p>

        <h3>Links</h3>
        <p>
          This website contains links to other sites. Please be aware that we
          are not responsible for the content or privacy practices of such other
          sites. While we have read and verified the linked websites privacy
          policy to comply with our standards, we encourage our users to be
          aware when they leave our site and to read the privacy statements of
          any other site that collects personally identifiable information.
        </p>

        <b className="text-igold">
          If you feel that we are not abiding by this privacy policy, you should
          contact us immediately via telephone at +918861885124 or via
          technical.committee.incridea@gmail.com
        </b>
      </div>
    </>
  );
}

export default Privacy;
