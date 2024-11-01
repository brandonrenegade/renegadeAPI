type JSONArray = Array<JSONValue>;

type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

export interface JwtPayload {
  email: string;
}

export interface RawBodyRequest extends Request {
  body: any;
  rawBody: Buffer;
}

export interface ContentTwitterLike {
  twitterId: string;
  twitterName: string;
}

export interface ContentTwitterReply {
  twitterId: string;
  twitterName: string;
}

export interface ContentTwitterRetweet {
  twitterId: string;
  twitterName: string;
}

export interface ContentTwitterFollow {
  twitterUsername: string;
  twitterName: string;
}

export interface GoogleUser {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
  referral?: string;
}

export const privacyPolicyHtmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              line-height: 1.6;
          }
          .container {
              width: 80%;
              margin: 0 auto;
              padding: 20px;
          }
          h1, h2, h3 {
              color: #333;
          }
          p {
              margin: 10px 0;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <p>Last updated: [Date]</p>
          
          <h2>Introduction</h2>
          <p>Welcome to [Your Company Name]. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at [Contact Information].</p>

          <h2>Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when registering at the [Website/Application], expressing an interest in obtaining information about us or our products and services, when participating in activities on the [Website/Application] or otherwise contacting us.</p>

          <h3>Personal Information Provided by You</h3>
          <p>The personal information that we collect depends on the context of your interactions with us and the [Website/Application], the choices you make and the products and features you use. The personal information we collect can include the following:</p>
          <ul>
              <li>Name and Contact Data. We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
              <li>Credentials. We collect passwords, password hints, and similar security information used for authentication and account access.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use personal information collected via our [Website/Application] for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below:</p>
          <ul>
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you for our business purposes, such as account, billing, technical notices, updates, and security alerts.</li>
          </ul>

          <h2>Sharing of Your Information</h2>
          <p>We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.</p>
          
          <h2>Data Security</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2>Contact Us</h2>
          <p>If you have questions or comments about this policy, you may email us at [Email Address] or by post to:</p>
          <p>[Your Company Name]<br>[Street Address]<br>[City, State, ZIP Code]<br>[Country]</p>
          <p>
          <a href="https://www.google.com" target="_blank" style="text-decoration: none; color: blue;">Click for more info</a>
          </p>
      </div>
  </body>
  </html>`;

export const termsAndConditionsHtmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              line-height: 1.6;
          }
          .container {
              width: 80%;
              margin: 0 auto;
              padding: 20px;
          }
          h1, h2, h3 {
              color: #333;
          }
          p {
              margin: 10px 0;
          }
          ul {
              margin: 10px 0;
              padding-left: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <p>Last updated: [Date]</p>

          <h2>Introduction</h2>
          <p>Welcome to [Your Company Name]! These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Website, located at [Website URL]. By accessing this website we assume you accept these terms and conditions. Do not continue to use [Website Name] if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2>License</h2>
          <p>Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all material on [Website Name]. All intellectual property rights are reserved. You may access this from [Website Name] for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
              <li>Republish material from [Website Name]</li>
              <li>Sell, rent or sub-license material from [Website Name]</li>
              <li>Reproduce, duplicate or copy material from [Website Name]</li>
              <li>Redistribute content from [Website Name]</li>
          </ul>

          <h2>User Comments</h2>
          <p>This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions and information in certain areas of the website. [Your Company Name] does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of [Your Company Name],its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>

          <h2>Content Liability</h2>
          <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

          <h2>Reservation of Rights</h2>
          <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

          <h2>Removal of links from our website</h2>
          <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

          <h2>Disclaimer</h2>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
          <ul>
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
          <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

          <h2>Governing Law & Jurisdiction</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

          <h2>Changes to These Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>[Your Company Name]<br>[Street Address]<br>[City, State, ZIP Code]<br>[Country]<br>[Email Address]</p>
          <p>
          <a href="https://www.google.com" target="_blank" style="text-decoration: none; color: blue;">Click for more info</a>
          </p>
      </div>
  </body>
  </html>`;
